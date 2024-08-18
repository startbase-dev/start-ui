import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./pages/docs/components/Logo";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Logo />
    </span>
  ),
  project: {
    link: "https://github.com/startbase-dev/start-ui",
  },
  chat: {
    link: "https://discord.com/invite/4D5cpwvedq",
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  banner: {
    key: "startbase 1.0",
    text: (
      <a href="https://startbase.dev" target="_blank" rel="noreferrer">
        🎉 Startbase is launched. Vist →
      </a>
    ),
    dismissible: false,
  },
  gitTimestamp: null,
  docsRepositoryBase: "https://github.com/startbase-dev/start-ui",
  footer: {
    text: (
      <span>
        Built by Startbase. {new Date().getFullYear()} © The source code is
        available on
        <a
          href="https://github.com/startbase-dev/start-ui"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </span>
    ),
  },
};

export default config;
