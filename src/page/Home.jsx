import React from "react";
import Right from "../assets/right";
import p2 from "../assets/samepleImage/buz.png"
import {
  CodeBracketIcon,
  LightBulbIcon,
  CircleStackIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="bg-body text-white">
   
      <main className="px-4 md:px-8 py-10 space-y-8">
        {/* === 1. Profile + Intro Section === */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-5 relative">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-72 h-52 object-cover object-top rounded-lg"
            />
            <div>
              <p className="text-xs tracking-wider text-white/50 uppercase">
                MERN stack developer
              </p>
              <h2 className="text-2xl font-semibold">SADHASIVAM VM</h2>
              <p className="text-white/50 text-sm mt-2">
                I am a Full-stack Web Developer
              </p>
            </div>
          
          </div>

          {/* Scrolling Text + Credentials + Projects */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Scrolling Text */}
            <div className="col-span-2 bg-card p-3 text-sm rounded-2xl">
              <marquee behavior="smooth">
                <p class="relative whitespace-nowrap bg-transparent py-2 text-base font-medium">
                <span class="inline-block animate-marquee  text-white/70">
                  I'm a full-stack developer • MERN stack • Web developer —
                  <span class=" text-primary px-2 py-0.5 rounded-full font-semibold ml-2">
                    I'm available for full-time roles
                  </span>
                  &nbsp; • &nbsp; I'm a full-stack developer • MERN stack • Web developer —
                  <span class=" text-primary px-2 py-0.5 rounded-full font-semibold ml-2">
                    I'm available for full-time roles
                  </span>
                </span>
              </p>
              </marquee>
            </div>

            {/* Credentials */}
            <div className="bg-card p-6 col-span-2 md:col-span-1  rounded-2xl flex flex-col justify-between relative">
              <img src="/sign.png" className="w-46 m-3" alt="signature" />
              <div>
                <p className="text-xs tracking-wider text-white/50 uppercase">
                  More About Me
                </p>
                <h1 className="text-xl md:text-2xl font-light">Credentials</h1>
                <Right link={'/about'}/>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-card p-6 rounded-2xl col-span-2 md:col-span-1  flex flex-col justify-between relative">
              <div className="relative flex justify-center items-center h-46 w-full">
                <img
                  src={p2}
                  alt="project 1"
                  className="rounded-xl border-2  h-[80%] border-[#454545] rotate-6"
                />
                <img
                  src={"/pro.png"}
                  alt="project 2"
                  className="absolute  h-[80%] rounded-xl border-2 border-white/60 -rotate-6"
                />
              </div>

              <div>
                <p className="text-xs tracking-wider text-white/50 uppercase">
                  Showcase
                </p>
                <h1 className="text-xl md:text-2xl font-light">My Works</h1>
                <Right link={'/works'}/>
              </div>
            </div>
          </div>
        </div>

        {/* === 2. Resume + Skills + Social === */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Resume */}
          <div className="bg-card p-6 rounded-2xl flex flex-col justify-between items-center relative">
            <img src="/icons/pdf.png" className="w-20 mb-6" alt="resume" />
            <div className="self-start">
              <p className="text-xs tracking-wider text-white/50 uppercase">
                Download PDF
              </p>
              <h1 className="text-xl md:text-2xl font-light">Resume</h1>
              <a href="/sadha_res_resume.pdf" download={"sadha_sde_resume.pdf"}>
      <Right/>              </a> 
            </div>
          </div>

          {/* Skills */}
          <div className="bg-card p-6 rounded-2xl flex flex-col justify-between lg:col-span-2 relative">
            <div className="flex justify-around items-center h-24">
              <CodeBracketIcon className="size-6" />
              <CircleStackIcon className="size-6" />
              <CommandLineIcon className="size-6" />
              <CpuChipIcon className="size-6" />
              <LightBulbIcon className="size-6" />
            </div>
            <div>
              <p className="text-xs tracking-wider text-white/50 uppercase">
                Sharpening
              </p>
              <h1 className="text-xl md:text-2xl font-light">Skills</h1>
              <Right link={'/about'}/>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-card p-6 rounded-2xl flex flex-col justify-between relative">
            <div className="flex justify-around items-center h-24">
              {["/linked.svg", "/github.svg", "/web.svg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="social"
                  className="bg-gradient-to-r from-[#3c3c3c] to-[#3c3c3c5d] shadow-md p-2 w-12 rounded-full hover:scale-110 transition cursor-pointer"
                />
              ))}
            </div>
            <div>
              <p className="text-xs tracking-wider text-white/50 uppercase">
                Connect with me
              </p>
              <h1 className="text-xl md:text-2xl font-light">Connect</h1>
              <Right link={'/contact'} />
            </div>
          </div>
        </div>

        {/* === 3. Stats + Work Together === */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Stats */}
          <div className="bg-card p-6 rounded-2xl flex items-center lg:col-span-2">
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {[
                ["1yr", "Relevant Experience"],
                ["5+", "Projects"],
                ["5000+", "Lines of Code"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#252525] to-transpraent p-4 rounded-xl text-center shadow-md"
                >
                  <h3 className="text-3xl font-light">{value}</h3>
                  <p className="text-white/40 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Together */}
          <div className="bg-card p-6 rounded-2xl flex flex-col items-center justify-center lg:col-span-2 relative">
            <h2 className="text-2xl md:text-3xl ">
              Let’s work <span className="text-primary">together.</span>
            </h2>
            <Right link={'/contact'}/>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
