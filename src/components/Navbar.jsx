import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 text-white">
      {/* Logo */}
      {/* <h1 className="text-xl font-bold text-primary">SADHA</h1> */}
      <img src="/sign.png" className="w-24" alt="" />
      {/* Nav Links */}
      <nav className="hidden sm:flex space-x-6">
        <a href="/" className="hover:text-gray-400">
          Home
        </a>
        <a href="/about" className="hover:text-gray-400">
          About
        </a>
        <a href="/works" className="hover:text-gray-400">
          Works
        </a>
        <a href="/contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>

      {/* Icon Nav for Small Screens */}
      <nav className="flex sm:hidden space-x-4">
        <a href="/" className="hover:text-gray-400">
          <HomeIcon className="w-5 " />
        </a>
        <a href="/about" className="hover:text-gray-400">
          <UserCircleIcon className="w-5" />
        </a>
        <a href="/works" className="hover:text-gray-400">
          <BriefcaseIcon className="w-5" />
        </a>
        <a href="/contact" className="hover:text-gray-400">
          <ChatBubbleBottomCenterTextIcon className="w-5" />
        </a>
      </nav>

      {/* Call to Action */}
      <button className="hidden sm:block bg-[#1a1a1a] px-4 py-2 rounded-md hover:bg-gray-800">
        Let’s talk
      </button>
    </header>
  );
};

export default Navbar;
