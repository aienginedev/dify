import os
from typing import Optional

from pydantic import BaseModel

from core.entities.provider_entities import QuotaUnit
from models.provider import ProviderQuotaType


class HostingQuota(BaseModel):
    quota_type: ProviderQuotaType


class TrialHostingQuota(HostingQuota):
    quota_limit: int = 0
    """Quota limit for the hosting provider models. -1 means unlimited."""


class PaidHostingQuota(HostingQuota):
    stripe_price_id: str = None
    increase_quota: int = 1
    min_quantity: int = 20
    max_quantity: int = 100


class FreeHostingQuota(HostingQuota):
    pass


class HostingProvider(BaseModel):
    enabled: bool = False
    credentials: Optional[dict] = None
    quota_unit: Optional[QuotaUnit] = None
    quotas: list[HostingQuota] = []


class HostedModerationConfig(BaseModel):
    enabled: bool = False
    providers: list[str] = []


class HostingConfiguration:
    provider_map: dict[str, HostingProvider] = []
    moderation_config: HostedModerationConfig = None

    def init_app(self):
        self.provider_map["openai"] = self.init_openai()
        self.provider_map["anthropic"] = self.init_anthropic()
        self.provider_map["minimax"] = self.init_minimax()
        self.provider_map["spark"] = self.init_spark()
        self.provider_map["zhipuai"] = self.init_zhipuai()

        self.moderation_config = self.init_moderation_config()

    def init_openai(self) -> HostingProvider:
        quota_unit = QuotaUnit.TIMES
        if bool(os.environ.get("HOSTED_OPENAI_ENABLED")):
            credentials = {
                "openai_api_key": os.environ.get("HOSTED_OPENAI_API_KEY"),
            }

            if os.environ.get("HOSTED_OPENAI_API_BASE"):
                credentials["openai_api_base"] = os.environ.get("HOSTED_OPENAI_API_BASE")

            if os.environ.get("HOSTED_OPENAI_API_ORGANIZATION"):
                credentials["openai_organization"] = os.environ.get("HOSTED_OPENAI_API_ORGANIZATION")

            quotas = []
            hosted_quota_limit = int(os.environ.get("HOSTED_OPENAI_QUOTA_LIMIT", "200"))
            if hosted_quota_limit != -1 or hosted_quota_limit > 0:
                trial_quota = TrialHostingQuota(
                    quota_limit=hosted_quota_limit
                )
                quotas.append(trial_quota)

            if bool(os.environ.get("HOSTED_OPENAI_PAID_ENABLED")):
                paid_quota = PaidHostingQuota(
                    stripe_price_id=os.environ.get("HOSTED_OPENAI_PAID_STRIPE_PRICE_ID"),
                    increase_quota=int(os.environ.get("HOSTED_OPENAI_PAID_INCREASE_QUOTA", "1")),
                    min_quantity=int(os.environ.get("HOSTED_OPENAI_PAID_MIN_QUANTITY")),
                    max_quantity=int(os.environ.get("HOSTED_OPENAI_PAID_MAX_QUANTITY"))
                )
                quotas.append(paid_quota)

            return HostingProvider(
                enabled=True,
                credentials=credentials,
                quota_unit=quota_unit,
                quotas=quotas
            )

        return HostingProvider(
            enabled=False,
            quota_unit=quota_unit,
        )

    def init_anthropic(self) -> HostingProvider:
        quota_unit = QuotaUnit.TOKENS
        if bool(os.environ.get("HOSTED_ANTHROPIC_ENABLED")):
            credentials = {
                "anthropic_api_key": os.environ.get("HOSTED_ANTHROPIC_API_KEY"),
            }

            if os.environ.get("HOSTED_ANTHROPIC_API_BASE"):
                credentials["anthropic_api_url"] = os.environ.get("HOSTED_ANTHROPIC_API_BASE")

            quotas = []
            hosted_quota_limit = int(os.environ.get("HOSTED_ANTHROPIC_QUOTA_LIMIT", "0"))
            if hosted_quota_limit != -1 or hosted_quota_limit > 0:
                trial_quota = TrialHostingQuota(
                    quota_limit=hosted_quota_limit
                )
                quotas.append(trial_quota)

            if bool(os.environ.get("HOSTED_ANTHROPIC_PAID_ENABLED")):
                paid_quota = PaidHostingQuota(
                    stripe_price_id=os.environ.get("HOSTED_ANTHROPIC_PAID_STRIPE_PRICE_ID"),
                    increase_quota=int(os.environ.get("HOSTED_ANTHROPIC_PAID_INCREASE_QUOTA", "1000000")),
                    min_quantity=int(os.environ.get("HOSTED_ANTHROPIC_PAID_MIN_QUANTITY", "20")),
                    max_quantity=int(os.environ.get("HOSTED_ANTHROPIC_PAID_MAX_QUANTITY", "100"))
                )
                quotas.append(paid_quota)

            return HostingProvider(
                enabled=True,
                credentials=credentials,
                quota_unit=quota_unit,
                quotas=quotas
            )

        return HostingProvider(
            enabled=False,
            quota_unit=quota_unit,
        )

    def init_minimax(self) -> HostingProvider:
        quota_unit = QuotaUnit.TOKENS
        if os.environ.get("HOSTED_MINIMAX_ENABLED"):
            quotas = [FreeHostingQuota()]

            return HostingProvider(
                enabled=True,
                credentials=None,  # use credentials from the provider
                quota_unit=quota_unit,
                quotas=quotas
            )

        return HostingProvider(
            enabled=False,
            quota_unit=quota_unit,
        )

    def init_spark(self) -> HostingProvider:
        quota_unit = QuotaUnit.TOKENS
        if os.environ.get("HOSTED_SPARK_ENABLED"):
            quotas = [FreeHostingQuota()]

            return HostingProvider(
                enabled=True,
                credentials=None,  # use credentials from the provider
                quota_unit=quota_unit,
                quotas=quotas
            )

        return HostingProvider(
            enabled=False,
            quota_unit=quota_unit,
        )

    def init_zhipuai(self) -> HostingProvider:
        quota_unit = QuotaUnit.TOKENS
        if os.environ.get("HOSTED_ZHIPUAI_ENABLED"):
            quotas = [FreeHostingQuota()]

            return HostingProvider(
                enabled=True,
                credentials=None,  # use credentials from the provider
                quota_unit=quota_unit,
                quotas=quotas
            )

        return HostingProvider(
            enabled=False,
            quota_unit=quota_unit,
        )

    def init_moderation_config(self) -> HostedModerationConfig:
        if os.environ.get("HOSTED_MODERATION_ENABLED") and os.environ.get("HOSTED_MODERATION_PROVIDERS"):
            return HostedModerationConfig(
                enabled=os.environ.get("HOSTED_MODERATION_ENABLED"),
                providers=os.environ.get("HOSTED_MODERATION_PROVIDERS").split(',')
            )

        return HostedModerationConfig(
            enabled=False
        )