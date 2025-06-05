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
  email: 'address@yoursite.com',
  github: 'https://github.com/C4rbo',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, 
    },
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', 
      reactions: '1', 
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
}

module.exports = siteMetadata