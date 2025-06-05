import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { socialLinks } from "./data";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-8 items-center justify-center">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-500 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href={socialLinks.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-indigo-600 transition-colors"
        aria-label="Discord"
      >
        <FaDiscord />
      </a>
    </footer>
  );
}
