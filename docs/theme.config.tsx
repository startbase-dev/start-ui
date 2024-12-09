import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './pages/docs/components/Logo';
import { Chip } from '@start-base/start-ui';
import StorybookIcon from 'icons/StorybookIcon';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    };
  },
  head: (
    <>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  logo: (
    <span>
      <Logo />
    </span>
  ),
  project: {
    link: 'https://github.com/startbase-dev/start-ui',
  },
  chat: {
    link: 'https://discord.com/invite/4D5cpwvedq',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  banner: {
    key: 'startbase 1.0',
    text: (
      <a href="https://startbase.dev" target="_blank" rel="noreferrer">
        🎉 Startbase is launched. Vist →
      </a>
    ),
    dismissible: false,
  },
  gitTimestamp: null,
  docsRepositoryBase: 'https://github.com/startbase-dev/start-ui',
  navbar: {
    extraContent: (
      <a
        className="nx-p-2 nx-text-current"
        target="_blank"
        href="https://start-ui-storybook.vercel.app"
      >
        <StorybookIcon size={24} />
      </a>
    ),
  },
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
  sidebar: {
    titleComponent({ title }: { title: string }) {
      if (title.includes('--soon')) {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
              width: '100%',
            }}
          >
            {title.replace('--soon', '')}
            <Chip color="warning">Soon</Chip>
          </div>
        );
      } else if (title.includes('--new')) {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
              width: '100%',
            }}
          >
            {title.replace('--new', '')}
            <Chip color="success">New</Chip>
          </div>
        );
      } else {
        return <>{title}</>;
      }
    },
  },
};

export default config;
