import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Four sections: Install, Using Steward, Administration, Reference. Using
// Steward and Administration each hold two pages; Install and Reference are
// single pages. See each page's source comment for where its text comes from.
const sidebars: SidebarsConfig = {
  guideSidebar: [
    'install',
    {
      type: 'category',
      label: 'Using Steward',
      items: ['using-steward/concepts', 'using-steward/everyday-tasks'],
    },
    {
      type: 'category',
      label: 'Administration',
      items: ['administration/setup', 'administration/day-to-day'],
    },
    'reference',
  ],
};

export default sidebars;
