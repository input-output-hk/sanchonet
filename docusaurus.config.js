// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SanchoNet",
  tagline:
    "Govern your own fictitious island of Barataria on this CIP-1694 Cardano Playground",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sancho.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "input-output-hk", // Usually your GitHub org/user name.
  projectName: "sanchonet", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  customFields: {
    recaptchaSiteKey: "6LeyQzUnAAAAAG6qu-UkP4BiPJSPUWIBGlQ1Iyin"
  },

  scripts: [
    {
      // GDPR
      src: "https://cmp.osano.com/AzZXI3TYiFWNB5yus/09f536e2-8feb-4b15-8f96-249e7ae491a3/osano.js",
      async: false
    }
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/input-output-hk/sanchonet/tree/master/"
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/osano.css")
          ]
        }
      })
    ]
  ],

  plugins: [
    require.resolve(path.join(__dirname, "/plugins/symlink-resolver")),
    require.resolve(path.join(__dirname, "/plugins/postcss"))
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      // announcementBar: {
      //   id: 'announce',
      //   content: 'Phase 1 has begun!',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      navbar: {
        title: "SanchoNet",
        logo: {
          alt: "SanchoNet Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "right",
            label: "Content"
          },
          {
            to: "about",
            position: "right",
            label: "About"
          },
          {
            href: "https://github.com/input-output-hk/sanchonet",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        logo: {
          alt: "SanchoNet Logo",
          src: "img/logo.svg"
        },
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/get-started"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Exchange",
                href: "https://cardano.stackexchange.com"
              },
              {
                label: "Discord",
                href: "https://discord.gg/inputoutput"
              },
              {
                label: "X",
                href: "https://x.com/InputOutputHK"
              }
            ]
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://static.iohk.io/gdpr/IOHK-Data-Protection-GDPR-Policy.pdf"
              },
              {
                label: "Terms and Conditions",
                href: "https://static.iohk.io/terms/iohktermsandconditions.pdf"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/input-output-hk/sanchonet"
              },
              {
                label: "Disclaimer",
                to: "/disclaimer"
              }
            ]
          }
        ],
        copyright: `© ${new Date().getFullYear()} Input Output Global, Inc. All Rights Reserved.`
      },
      prism: {
        defaultLanguage: "nix",
        additionalLanguages: ["haskell", "nix"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
