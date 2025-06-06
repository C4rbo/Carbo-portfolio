interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hacktrophy',
    description: `It’s an app for cybersecurity enthusiasts and CTF players.`,
    imgSrc: '/static/images/hacktrophy.png',
    href: 'https://github.com/C4rbo/HackTrophy',
  },
]

export default projectsData
