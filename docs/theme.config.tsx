import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Start UI</span>,
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
