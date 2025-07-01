import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import Index from "./index";

export default function Footer() {
    return (
        <footer className="row-start-3 py-6 border-t border-zinc-800">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                <div className="flex gap-6 items-center">
                    <a
                        href={Index.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href={Index.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href={Index.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        aria-label="Discord"
                    >
                        <FaDiscord size={24} />
                    </a>
                </div>

                <p className="text-sm text-zinc-400">
                    © 2025 All rights reserved to Carbo
                </p>
            </div>
        </footer>
    );
}