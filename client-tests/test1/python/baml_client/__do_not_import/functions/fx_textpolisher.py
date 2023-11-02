# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.
#
# BAML version: 0.0.1
# Generated Date: __DATE__
# Generated by: vbv

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long

from ..types.classes.cls_conversation import Conversation
from ..types.classes.cls_message import Message
from ..types.classes.cls_proposedmessage import ProposedMessage
from baml_core._impl.functions import BaseBAMLFunction
from typing import Protocol, runtime_checkable


ITextPolisherOutput = str

@runtime_checkable
class ITextPolisher(Protocol):
    """
    This is the interface for a function.

    Args:
        arg: ProposedMessage

    Returns:
        str
    """

    async def __call__(self, arg: ProposedMessage, /) -> str:
        ...


class IBAMLTextPolisher(BaseBAMLFunction[str]):
    def __init__(self) -> None:
        super().__init__(
            "TextPolisher",
            ITextPolisher,
            [],
        )

BAMLTextPolisher = IBAMLTextPolisher()

__all__ = [ "BAMLTextPolisher" ]
