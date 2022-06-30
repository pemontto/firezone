// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Firezone",
  tagline: "Open Source VPN",
  url: "https://docs.firezone.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "firezone", // Usually your GitHub org/user name.
  projectName: "firezone", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

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
          editUrl: "https://github.com/firezone/firezone",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Firezone",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://old-docs.firezone.dev/",
            label: "Old Documentation",
            position: "left",
            "aria-label": "Old Documentation",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "Ask a Question",
            position: "right",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "Join the Business Beta",
            position: "right",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://github.com/firezone/firezone",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Support Forums",
                href: "https://discourse.firez.one/",
              },
              {
                label: "Slack",
                href: "https://join.slack.com/t/firezone-users/shared_invite/zt-19jd956j4-rWcCqiKMh~ikPGsUFbvZiA",
              },
              {
                label: "Github",
                href: "https://github.com/firezone/firezone",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/firezonehq",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Firezone, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "XXPZ9QVGFB",

        // Public API key: it is safe to commit it
        apiKey: "8b06d6aa4f48c60daeacf9eaf79373f6",

        indexName: "firezone",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;
