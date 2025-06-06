const siteMetadata = {
  title: 'Carbo Blog',
  author: 'Carbo',
  headerTitle: 'Carbo',
  description: 'I’m Carbo, Italian Software Developer and Cybersecurity enthusiast',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://c4rbo.vercel.app/',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'https://discord.com/users/315450580342538251',
  github: 'https://github.com/C4rbo',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
}

export default siteMetadata
