"use client";
import SocialMedia from "@/components/pageSections/socialMedia";
import { Gamepad2, MessageCircleHeart, Send } from "lucide-react";
import { VT323 } from "next/font/google";

const vt323 = VT323({ subsets: ["latin"], weight: "400" });

const AboutMe = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`bg-black py-5 px-2 text-purple-100 text-lg leading-normal ${vt323.className}`}
    >
      <section>
        <div className="text-xl md:text-3xl flex gap-2 items-center my-2">
          <MessageCircleHeart className="text-purple-950" size={"30px"} />
          <span>About Me</span>
        </div>
        <span>
          Hi! I’m Bita, a frontend developer who loves building interactive and
          meaningful experiences for the web. What started as a curiosity about
          how websites work quickly turned into a passion for bringing ideas to
          life with code. I enjoy crafting user interfaces that are both
          functional and beautiful, where design meets logic. I’m always
          learning new tools, exploring best practices, and building projects
          that challenge me to level up my skills.
        </span>
      </section>
      <section>
        <div className="text-xl md:text-3xl flex gap-2 items-center my-2">
          <Gamepad2 className="text-purple-950" size={"30px"} />
          <span>About This Project</span>
        </div>
        <div>
          <p>
            This project started as a personal challenge and was both a learning
            playground and a passion project.
          </p>
          <p>
            It was my first time working with ShadCN UI and Redux Toolkit, both
            of which pushed me to better understand component composition,
            styling systems, and state management in a more scalable,
            professional way.
          </p>
          <p>
            My main goal with this project was to get more comfortable with
            Next.js (App Router) and TypeScript, and to apply them in a
            structured, feature-rich web app.
          </p>
          Throughout the process, I focused on improving how I work with:
          <ul className="list-disc pl-10">
            <li>
              NextJS Client-side and server-side rendering (CSR, SSR, ISR, and
              SSG)
            </li>
            <li>
              Redux Toolkit for async data fetching and global state handling
            </li>
            <li>ShadCN UI components for clean, accessible interface design</li>
            <li>
              Type safety with TypeScript for more maintainable, scalable code
            </li>
          </ul>
          The app uses the{" "}
          <span
            className="text-purple-900 cursor-pointer"
            onClick={() => openLink("https://rawg.io/")}
          >
            RAWG Video Games API
          </span>
          , allowing users to explore games, platforms, and genres through a
          clean and intuitive UI.
          <p>
            Finally, This project taught me a lot, not just technically, but in
            how to think through UX, performance, and scalable structure. And
            I’m excited to keep building from here.
          </p>
          <p>
            I am always open to feedback, collaborations, or new ideas. feel
            free to reach out!
          </p>
        </div>
      </section>
      <section>
        <div className="text-xl md:text-3xl flex gap-2 items-center my-2">
          <Send size={"30px"} className="text-purple-950" />
          <span>Find me here</span>
        </div>
        <SocialMedia />
      </section>
    </div>
  );
};

export default AboutMe;
