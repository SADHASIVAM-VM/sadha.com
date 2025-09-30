import { useLocation } from "react-router-dom";
import { projects } from "../data/projectsData"
import {
  CalendarIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const ProjectDetail = () => {


const currentId = useLocation().pathname.split('/')[2]
const project = projects?.filter((e)=> e.id == currentId)

console.log(project)

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Project Image */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-[#454545]">
          <img
            src={project[0].image}
            alt={project[0].title}
            className="w-full h-full object-cover object-top"
          />
        </div>


        {/* Title + Meta */}
        <div>
          <h1 className="text-3xl font-bold">{project[0].title}</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm my-4">
            <CalendarIcon className="w-5 h-5 text-gray-500" />
            <span>{project[0].date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {project[0]?.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg- border text-gray-300 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project[0].live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-gray-700  gap-2 px-4 py-2 rounded-lg transition"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
          <a
            href={project[0].github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  bg-primary hover:bg-primary/80 text-black px-4 py-2 rounded-lg transition"
          >
            GitHub
            <CodeBracketIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-3 flex gap-2"><CubeTransparentIcon className="size-7 text-white"/> Project Details</h2>
          <p className="text-white/60 leading-relaxed whitespace-pre-line ">
            {project[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
