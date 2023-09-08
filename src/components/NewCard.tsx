import React from "react";

interface Props {
  title: string;
  body: string;
  href?: string;
  image?: string;
}

const NewCard: React.FC<Props> = ({ title, body, href }) => {
  return (
    <li className="group cursor-pointer flex bg-[#23262d] bg-none bg-[100%] transition-[background-position] duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[7px] hover:bg-[0] hover:bg-[image:var(--accent-gradient)]">
      <a
        href={href}
        className="w-full no-underline leading-[1.4]  text-[white] bg-[#23262d] opacity-80 pt-[calc(1.5rem] pb-[1px)] rounded-lg"
      >
        <div className="p-4">
          <h2 className="text-3xl font-bold  transition-[color] duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] m-0 group-hover:text-violet-300">
            {title}
          </h2>
          <p className="whitespace-pre-line">{body}</p>
        </div>
      </a>
    </li>
  );
};

export default NewCard;
