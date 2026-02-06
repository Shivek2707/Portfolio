import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'Projects',
      href: '#projects',
    },
    {
      text: 'Certifications',
      href: '#certifications',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [{ text: 'Download CV', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shivek2707' },
  ],
  footNote: `
    © 2026 Shivek. All rights reserved.
  `,
};
