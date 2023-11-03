from abc import ABC, abstractmethod
from typing import Optional
from pydantic import BaseModel

from core.extension.extensible import Extensible, ExtensionModule


class ModerationOutputsResult(BaseModel):
    flagged: bool = False
    text: str = ""

class Moderation(Extensible, ABC):
    """
    The base class of moderation.
    """
    module: ExtensionModule = ExtensionModule.MODERATION

    def __init__(self, tenant_id: str, config: Optional[dict] = None) -> None:
        super().__init__(tenant_id, config)

    @classmethod
    @abstractmethod
    def validate_config(cls, tenant_id: str, config: dict) -> None:
        """
        Validate the incoming form config data.

        :param tenant_id: the id of workspace
        :param config: the form config data
        :return:
        """
        raise NotImplementedError

    @abstractmethod
    def moderation_for_inputs(self, inputs: dict, query: Optional[str] = None):
        """
        Moderation for inputs.
        After the user inputs, this method will be called to perform sensitive content review
        on the user inputs and return the processed results.

        :param inputs: user inputs
        :param query: query string (required in chat app)
        :return:
        """
        raise NotImplementedError

    @abstractmethod
    def moderation_for_outputs(self, text: str) -> ModerationOutputsResult:
        """
        Moderation for outputs.
        When LLM outputs content, the front end will pass the output content (may be segmented)
        to this method for sensitive content review, and the output content will be shielded if the review fails.

        :param text: LLM output content
        :return:
        """
        raise NotImplementedError

    @classmethod
    def _validate_inputs_and_outputs_config(self, config: dict, is_preset_response_required: bool) -> None:
        # inputs_config
        inputs_config = config.get("inputs_config")
        if not isinstance(inputs_config, dict):
            raise ValueError("inputs_config must be a dict")
        
        # outputs_config
        outputs_config = config.get("outputs_config")
        if not isinstance(outputs_config, dict):
            raise ValueError("outputs_config must be a dict")

        inputs_config_enabled = inputs_config.get("enabled")
        outputs_config_enabled = outputs_config.get("enabled")
        if not inputs_config_enabled and not outputs_config_enabled:
            raise ValueError("At least one of inputs_config or outputs_config must be enabled")

        # preset_response
        if not is_preset_response_required:
            return
        
        if inputs_config_enabled and not inputs_config.get("preset_response"):
            raise ValueError("inputs_config.preset_response is required")
        
        if outputs_config_enabled and not outputs_config.get("preset_response"):
            raise ValueError("outputs_config.preset_response is required")

class ModerationException(Exception):
    pass