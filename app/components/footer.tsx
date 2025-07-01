//https://react-icons.github.io/react-icons/
import { FaGithub, FaDiscord, FaLinkedin  } from "react-icons/fa";
import Index from "./index"
export default function Footer(){
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={Index.github}
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaGithub size={32}/>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaLinkedin size={32}/>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaDiscord size={32}/>
        </a>
      </footer>
    )
}