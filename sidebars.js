/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'get-started',
    {
      type: 'category',
      label: 'Roles',
      items: ['spo', 'drep','cc','dev'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/start-a-node',
        'tutorials/keys-and-address',
        'tutorials/faucet'
      ],
    }
  ]
};

module.exports = sidebars;
