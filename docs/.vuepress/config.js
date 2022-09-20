module.exports = {
    title: 'Ruogu Little Universe',
    description: 'Ruogu Little Universe',
    themeConfig: {
      logo: 'img/WX20220322-163550@2x.png',
      nav: [
        { text: 'Notes',ariaLabel: "Notes", items:[
          {text: "Mathematics",link: '/Notes/Mathematics/',items: [/*  */],target:'_blank'},
          {text: "Programming",link: "Notes/Programming/",items: [/*  */],target:'_blank'}
        ]},
        { text: 'About me', link: '/About Me/', target:'_blank' },
        { text: 'External', link: 'https://google.com',target:'_self', rel:''},
        {text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/',items: [/*  */] },
          { text: 'Japanese', link: '/language/japanese/', items: [/*  */]}]
        }],
      sidebar: "auto",
      sidebarDepth:3,
      displayAllHeaders: true,
      lastUpdated: 'Last Updated',// string | boolean,
      smoothScroll: true
      }
    }
