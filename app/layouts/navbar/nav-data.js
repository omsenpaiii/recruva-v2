import config from '~/config.json';

export const navLinks = [
  {
    label: 'Features',
    pathname: '/#project-1',
  },
  {
    label: 'Steps',
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
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
