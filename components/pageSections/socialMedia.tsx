import { Github, Linkedin, Mail } from "lucide-react";
import FullTooltip from "../ui/fullTooltip";

const SocialMedia = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex gap-5">
      <FullTooltip
        content="GitHub"
        onClick={() => openLink("https://github.com/BitaZamani")}
        trigger={<Github />}
        className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
      />
      <FullTooltip
        content="Linkedin"
        onClick={() => openLink("https://www.linkedin.com/in/bita-zamani")}
        trigger={<Linkedin />}
        className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
      />
      <FullTooltip
        onClick={() => openLink("mailto:bita.zamany@gmail.com")}
        trigger={<Mail />}
        content="Email"
        className="size-10 rounded-full bg-black flex items-center justify-center cursor-pointer"
      />
    </div>
  );
};

export default SocialMedia;
