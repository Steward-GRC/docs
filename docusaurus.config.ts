import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// The Steward-GRC guide. Content is adapted from steward-web's apps/docs prototype and each
// steward-* repo's own README/docs; see the comment at the top of each page for its source. The
// brand colours and fonts in src/css/custom.css mirror steward-web's
// packages/ui/src/styles/steward.css design tokens.
const config: Config = {
  title: 'Steward-GRC',
  tagline: 'Rules kept. Voices heard.',
  favicon: 'img/mark.svg',

  url: 'https://docs.steward-grc.com',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'Steward-GRC',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Steward-GRC/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Steward-GRC',
      logo: {
        alt: 'The Steward-GRC mark',
        src: 'img/mark.svg',
      },
      items: [
        {to: '/docs/install', label: 'Install', position: 'left'},
        {to: '/docs/using-steward/concepts', label: 'Using Steward', position: 'left'},
        {to: '/docs/administration/setup', label: 'Administration', position: 'left'},
        {to: '/docs/reference', label: 'Reference', position: 'left'},
        {
          href: 'https://github.com/Steward-GRC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Guide',
          items: [
            {to: '/docs/install', label: 'Install'},
            {to: '/docs/using-steward/concepts', label: 'Using Steward'},
            {to: '/docs/administration/setup', label: 'Administration'},
            {to: '/docs/reference', label: 'Reference'},
          ],
        },
        {
          title: 'Project',
          items: [
            {href: 'https://github.com/Steward-GRC', label: 'Steward-GRC on GitHub'},
          ],
        },
      ],
      // The holder wording and the trademark mark/tagline binding match
      // Steward-GRC/.github's TRADEMARKS.md and the website footer exactly.
      copyright:
        '<span class="tm-bind">Steward-GRC<sup>&trade;</sup></span>, Rules kept. Voices ' +
        '<span class="tm-bind">heard.<sup>&trade;</sup></span> and their logos are trademarks of ' +
        'the rabbit hole tech, llc.',
    },
    prism: {
      additionalLanguages: ['bash', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
