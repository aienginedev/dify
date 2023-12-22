import logging

from core.model_runtime.entities.model_entities import ModelType
from core.model_runtime.errors.validate import CredentialsValidateFailedError
from core.model_runtime.model_providers.__base.model_provider import ModelProvider

logger = logging.getLogger(__name__)

class XinferenceAIProvider(ModelProvider):

    def validate_provider_credentials(self, credentials: dict) -> None:
        """
        Validate provider credentials
        if validate failed, raise exception

        :param credentials: provider credentials, credentials form defined in `provider_credential_schema`.
        """
        model_type = credentials['model_type']
        model_name = credentials['model_name']
        try:
            if model_type == 'text-generation':
                model_instance = self.get_model_instance(ModelType.LLM)

                # no matter what model you pass in, text completion model or chat model
                model_instance.validate_credentials(
                    model=model_name,
                    credentials=credentials
                )
            elif model_type == 'embeddings':
                model_instance = self.get_model_instance(ModelType.TEXT_EMBEDDING)

                model_instance.validate_credentials(
                    model=model_name,
                    credentials=credentials
                )
            elif model_type == 'reranking':
                model_instance = self.get_model_instance(ModelType.RERANK)

                model_instance.validate_credentials(
                    model=model_name,
                    credentials=credentials
                )
            else:
                raise CredentialsValidateFailedError(f'Invalid model type: {model_type}')
        except CredentialsValidateFailedError as ex:
            raise ex
        except Exception as ex:
            logger.exception(f'{self.get_provider_schema().provider} credentials validate failed')
            raise ex