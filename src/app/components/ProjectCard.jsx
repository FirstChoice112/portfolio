import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden group relative">
      <div
        className="h-52 md:h-72 relative"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] grpup-hover/link:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] grpup-hover/link:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="bg-[#181818] rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
