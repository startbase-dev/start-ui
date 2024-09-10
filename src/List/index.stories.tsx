import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSubtitle,
  ListDivider,
  ListSubheader,
} from "./index";

import Storybook from "../Storybook";

export default {
  title: "UI/List",
  component: List,
} as Meta<typeof List>;

const Template: StoryFn = () => (
  <List>
    <ListSubheader>Mailbox</ListSubheader>
    <ListItem>
      <ListItemButton>
        <ListItemIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#808080"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
            </svg>
          }
        />
        Inbox
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#808080"
            viewBox="0 0 256 256"
          >
            <path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path>
          </svg>
        }
      />

      <ListItemButton>Drafts</ListItemButton>
    </ListItem>
    <ListDivider />
    <ListItem>
      <ListItemIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#808080"
            viewBox="0 0 256 256"
          >
            <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
          </svg>
        }
      />
      <ListItemButton>Trash</ListItemButton>
    </ListItem>
  </List>
);

export const DefaultList = Template.bind({});
DefaultList.args = {};

const SubtitleOnlyTemplate: StoryFn = () => (
  <List>
    <ListSubheader>Emails</ListSubheader>
    <ListItem>
      <ListItemSubtitle subtitle="Authorized" />
      <ListItemButton>Dorothy Gale</ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemSubtitle subtitle="Pending" />
      <ListItemButton>Scarecrow</ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemSubtitle subtitle="Inactive" />
      <ListItemButton>Tin Man</ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemSubtitle subtitle="Active" />
      <ListItemButton>Cowardly Lion</ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemSubtitle subtitle="Active" />
      <ListItemButton>Glinda</ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemSubtitle subtitle="Inactive" />
      <ListItemButton>Wicked Witch of the West</ListItemButton>
    </ListItem>
  </List>
);

export const SubtitleOnlyList = SubtitleOnlyTemplate.bind({});
SubtitleOnlyList.args = {};

const IconsAndSubtitlesTemplate: StoryFn = () => (
  <List>
    <ListSubheader>Team Members</ListSubheader>
    <ListItem>
      <ListItemButton>
        <ListItemIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#808080"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
            </svg>
          }
        />
        Tin Man
      </ListItemButton>
      <ListItemSubtitle subtitle="Authorized" />
    </ListItem>
    <ListItem>
      <ListItemButton>
        <ListItemIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#808080"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
            </svg>
          }
        />
        Cowardly Lion
      </ListItemButton>
      <ListItemSubtitle subtitle="Pending" />
    </ListItem>
    <ListDivider />
    <ListItem>
      <ListItemButton>
        <ListItemIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#808080"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
            </svg>
          }
        />
        Wicked Witch of the West
      </ListItemButton>
      <ListItemSubtitle subtitle="Inactive" />
    </ListItem>
  </List>
);

export const IconsAndSubtitlesList = IconsAndSubtitlesTemplate.bind({});
IconsAndSubtitlesList.args = {};

const FullShowcaseTemplate: StoryFn = () => {
  return (
    <Storybook title="List Showcase">
      <List>
        <ListSubheader>Mailbox</ListSubheader>
        <ListItem>
          <ListItemButton>
            <ListItemIcon
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#808080"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
              }
            />
            Inbox
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#808080"
                viewBox="0 0 256 256"
              >
                <path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path>
              </svg>
            }
          />
          Drafts
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#808080"
                viewBox="0 0 256 256"
              >
                <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
              </svg>
            }
          />
          Trash
        </ListItem>
      </List>
      <List>
        <ListSubheader>Emails</ListSubheader>
        <ListItem>
          <ListItemSubtitle subtitle="Authorized" />
          <ListItemButton>Dorothy Gale</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemSubtitle subtitle="Pending" />
          <ListItemButton>Scarecrow</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemSubtitle subtitle="Inactive" />
          <ListItemButton>Tin Man</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemSubtitle subtitle="Active" />
          <ListItemButton>Cowardly Lion</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemSubtitle subtitle="Active" />
          <ListItemButton>Glinda</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemSubtitle subtitle="Inactive" />
          <ListItemButton>Wicked Witch of the West</ListItemButton>
        </ListItem>
      </List>
    </Storybook>
  );
};

export const ListShowcase = FullShowcaseTemplate.bind({});
