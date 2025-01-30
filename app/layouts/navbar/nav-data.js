import config from '~/config.json';

export const navLinks = [
  {
    label: 'Features',
    pathname: '/#project-1',
  },
  {
    label: 'Pricing',
    pathname: '/#details',
  },
  {
    label: 'FAQ',
    pathname: '/articles',
  },
  // {
  //   label: 'Pricing',
  //   pathname: '/articles',
  // },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
