import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showGitPopup, setShowGitPopup] = useState(false);

  const handleGitClick = (e) => {
    if (!gitUrl) {
      e.preventDefault();
      setShowGitPopup(true);
    }
  };

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
            href={gitUrl || "#"}
            onClick={handleGitClick}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] grpup-hover/link:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl || "#"}
            target="_blank"
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

      {showGitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-sm text-center">
            <p className="mb-4 font-medium">
              Repository is private — owned by VisesAB.
            </p>
            <button
              onClick={() => setShowGitPopup(false)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
