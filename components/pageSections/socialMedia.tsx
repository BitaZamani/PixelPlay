import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialMedia = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex gap-5">
      <Tooltip>
        <TooltipContent>GitHub</TooltipContent>
        <TooltipTrigger
          onClick={() => openLink("https://github.com/BitaZamani")}
          className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
        >
          <Github />
        </TooltipTrigger>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          onClick={() => openLink("https://www.linkedin.com/in/bita-zamani")}
          className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
        >
          <Linkedin />
        </TooltipTrigger>
        <TooltipContent>Linkedin</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          onClick={() => openLink("mailto:bita.zamany@gmail.com")}
          className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
        >
          <Mail />
        </TooltipTrigger>
        <TooltipContent>Email</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
