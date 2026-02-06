import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'Education',
      href: '#education',
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
  actions: [{ text: 'Download CV', href: '/shivek-cv.pdf', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/shivek-singh2707' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shivek2707' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:shiveksingh43@gmail.com' },
  ],
  footNote: `
    © 2026 Shivek Singh. All rights reserved.
  `,
};
