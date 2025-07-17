"use client";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { ToolTipProps } from "@/lib/types";

const FullTooltip = ({
  onClick,
  trigger,
  content,
  className,
}: ToolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick} className={`${className}`}>
        {trigger}
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};

export default FullTooltip;
