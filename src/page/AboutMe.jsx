import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,

  CheckCircleIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CircleStackIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-3 md:px-12 py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* === Left Column (Sticky Profile Card) === */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl shadow-lg">
            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-gray-800"
            />

            {/* Name + Title */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">SADHASIVAM VM</h2>
              <p className="text-sm text-gray-400">Full-Stack Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              {[{
                  icon:"/github.svg",
                  links:"https://github.com/SADHASIVAM-VM"
                },
                {
                  icon:"/linked.svg",
                  links:"https://www.linkedin.com/in/sadhasivamvm/"
                },
                {
                  icon:"/web.svg",
                  links:"https://sadhasivam.vercel.app"
                },].map((src, i) => (
                <a
                  key={i}
                  href={src.links}
                  className="bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] p-3 rounded-full hover:scale-110 transition"
                >
                  <img src={src.icon} alt="social" className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* === Right Column (Content) === */}
        <section className="lg:col-span-2 space-y-8">
          {/* About Me */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-3 md:p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <UserIcon className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent  font-semibold">About Me</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              I’m a passionate Full-Stack Developer with experience building
              scalable web applications using MERN stack. I enjoy solving
              problems and designing user-friendly interfaces with a modern
              touch.
            </p>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-3 md:p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent  font-semibold">Education</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li>
                🎓 Bachelor’s in CSE — <span className="text-gray-200">Vinayaka Mission Research Foundation University</span>
              </li>
              <li className="text-sm md:text-md" >💡 CGPA : <span className="text-primary text-sm md:text-md">7.7 CGPA</span></li>
              <li>
                🎓 High School — <span className="text-gray-200">Sacred Heart Higher Secondary School</span>
              </li>
              <li className="text-sm md:text-md">💡 HSC & SSLC : <span className="text-primary text-sm md:text-md">82 & 73 %</span></li>
              
              
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-3 md:p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <BriefcaseIcon className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent  font-semibold">Experience</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between ">
                <p>Codtech IT Solution</p>
                <p className="text-xs">Aug - Sep 2024</p>
              </div>
                <p className="flex gap-2 items-center"><MapPinIcon className="size-5"/> remote</p>
            <h2 className="text-xl md:text-2xl text-primary">Backend development Intern</h2>

            <ul className="space-y-2">
                <li className="flex text-sm tracking-wide text-gray-300 md:text-[14px]"><span><CheckCircleIcon className="size-5  text-green-300 mr-3"/> </span>
                <span>
                    Engineered a full-stack blog platform implementing robust CRUD operations using MongoDB, Express.js, and Node.js.</span></li>
                     <li className="flex text-sm tracking-wide text-gray-300 md:text-[14px]"><span><CheckCircleIcon className="size-5  text-green-300 mr-3"/> </span>
                   <span> Worked in an Agile team to optimize backend performance and enhance application responsiveness.</span></li>
                     <li className="flex text-sm tracking-wide text-gray-300 md:text-[14px]"><span><CheckCircleIcon className="size-5  text-green-300 mr-3"/> </span><span> Integrated Clerk for secure user authentication and role-based authorization.
                </span></li>
              
                   <li className="flex text-sm tracking-wide text-gray-300 md:text-[14px]"><span><CheckCircleIcon className="size-5  text-green-300 mr-3"/> </span><span>Designed and connected scalable RESTful APIs, refining backend architecture for better maintainability.</span></li>
            </ul>
              

            </div>

          </div>

          {/* skills */}
          <Skills/>
        </section>
      </div>
    </div>
  );
};

export default About;



export const Skills = () => {
  const skills = [
    { name: "React", icon: CodeBracketIcon },
    { name: "Redux", icon: ArrowPathIcon },
    { name: "Next.js", icon: RocketLaunchIcon },
    { name: "Node.js", icon: ServerIcon },
    { name: "JavaScript", icon: BoltIcon },
    { name: "C++", icon: CommandLineIcon },
    { name: "Python", icon: CpuChipIcon },
    { name: "PostgreSQL", icon: CircleStackIcon },
    { name: "MongoDB", icon: CircleStackIcon },
    { name: "Supabase", icon: CloudIcon },
    { name: "Clerk Auth", icon: ShieldCheckIcon },
    { name: "Firebase", icon: CloudIcon },
    { name: "Git & GitHub", icon: ArrowPathIcon },
    { name: "REST APIs", icon: WrenchScrewdriverIcon },
    { name: "GraphQL", icon: CubeTransparentIcon },
    { name: "Tailwind CSS", icon: DevicePhoneMobileIcon },
    { name: "Framer Motion", icon: CubeTransparentIcon },
    { name: "VS Code", icon: CommandLineIcon },
    { name: "Microservices", icon: CpuChipIcon },
    { name: "Vercel", icon: RocketLaunchIcon },
  ];
  return (
    <section className=" text-gray-200">
     <h2 className="mb-8 text-2xl">⚡<span className="text-2xl  bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent  font-semibold"> Skills</span>
</h2> 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ name, icon: Icon }, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-md hover:shadow-lg transition"
          >
            {/* Icon */}
            <Icon className="w-6  text-gray-300 group-hover:text-primary" />

            {/* Label */}
            <p className="text-sm text-gray-400">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

