import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { p } from "framer-motion/client";

const Projects = () => {
   const navigate = useNavigate()
  return (
    <section className="px-6 md:px-12 py-12">
      <h2 className="text-2xl font- mb-6 text-white">Projects</h2>

      <div className="grid md:grid-cols-3   gap-6">
        {projects.map((project) => (
            <div className="flex  flex-col" key={project.id} onClick={()=>navigate('/work/'+project.id)}>
            
            
          
          <div
            key={project.id}
            className="  bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]  rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className=" p-2 rounded-2xl  w-full object-contain  group-hover:opacity-40 transition"
            />

            {/* Overlay Content */}
            
          </div>
          <div className="   flex  flex-col space-y-3 justify-between ">
              <div>
                <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.slice(0,4).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#272727] px-2 py-1 rounded-lg text-gray-300"
                    >
                      {tag }
                    </span>
                  ))}
               </div>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-400 hover:underline mt-3"
              >
                <img src="/github.svg" alt="" className="w-6" />Github <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
              </div>
        ))}
        
      </div>
      
    </section>
  );
};

export default Projects;
