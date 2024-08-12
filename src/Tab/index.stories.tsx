import React from "react";
import Tab from "./index";
import StoryBook from "../Storybook/index";
import type { TemplateProps, TabType } from "./types";

const Template: React.FC<TemplateProps> = (props) => {
  const { title, ...rest } = props;

  const tabs: TabType[] = [
    {
      button: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra felis sem, faucibus consectetur nunc ultrices id. Quisque sit amet elementum eros. Donec vestibulum, ligula quis aliquam porttitor, orci massa feugiat lacus, quis sagittis nisi libero id felis. Suspendisse consectetur sem eu faucibus aliquam. Proin consequat, purus a lobortis volutpat, nulla nisi tempor dui, ut placerat mi nisl at felis. Nulla dapibus commodo velit, nec consequat lorem tristique nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tincidunt bibendum placerat. Maecenas in massa in nisi blandit lacinia ut congue ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      button: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget neque vestibulum, varius lorem at, luctus quam. Donec interdum molestie risus, nec iaculis nisi. Donec fermentum felis sit amet urna convallis, ut finibus lectus elementum. In dignissim turpis varius libero dapibus, sed ultricies ante suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim vestibulum justo, vel cursus purus luctus non. Vivamus lectus enim, venenatis vel nibh eget, pharetra gravida mi. Donec dignissim auctor risus, ac tempus sem tristique ac. Fusce nisl dolor, ornare a massa non, mollis accumsan velit. Vivamus at maximus dolor, vel posuere nulla. Proin eget ipsum libero. Nunc nec mauris eu lorem tristique tristique. Sed scelerisque massa nec odio pretium pulvinar. Pellentesque id ligula efficitur erat ullamcorper suscipit at eu nisi. Integer rhoncus bibendum libero. ",
    },
    {
      button: "Tab 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio nisi, consequat sit amet erat eget, fringilla placerat augue. Integer venenatis facilisis leo nec pulvinar. Quisque bibendum risus vitae diam tristique facilisis. Nunc nec purus in tortor tempus placerat. Aliquam ante diam, ornare et consectetur ac, condimentum non felis. Aenean egestas dignissim tincidunt. Nam tristique, purus vitae tempor tincidunt, felis lorem sagittis urna, ac pharetra ex metus vitae dolor. Sed augue elit, hendrerit eget auctor eget, egestas ut orci. Aliquam malesuada placerat nibh quis fermentum. Duis sit amet volutpat tellus.",
    },
  ];

  const disabledTabs: TabType[] = [
    {
      button: "Tab 1",
      disabled: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra felis sem, faucibus consectetur nunc ultrices id. Quisque sit amet elementum eros. Donec vestibulum, ligula quis aliquam porttitor, orci massa feugiat lacus, quis sagittis nisi libero id felis. Suspendisse consectetur sem eu faucibus aliquam. Proin consequat, purus a lobortis volutpat, nulla nisi tempor dui, ut placerat mi nisl at felis. Nulla dapibus commodo velit, nec consequat lorem tristique nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tincidunt bibendum placerat. Maecenas in massa in nisi blandit lacinia ut congue ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      button: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget neque vestibulum, varius lorem at, luctus quam. Donec interdum molestie risus, nec iaculis nisi. Donec fermentum felis sit amet urna convallis, ut finibus lectus elementum. In dignissim turpis varius libero dapibus, sed ultricies ante suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim vestibulum justo, vel cursus purus luctus non. Vivamus lectus enim, venenatis vel nibh eget, pharetra gravida mi. Donec dignissim auctor risus, ac tempus sem tristique ac. Fusce nisl dolor, ornare a massa non, mollis accumsan velit. Vivamus at maximus dolor, vel posuere nulla. Proin eget ipsum libero. Nunc nec mauris eu lorem tristique tristique. Sed scelerisque massa nec odio pretium pulvinar. Pellentesque id ligula efficitur erat ullamcorper suscipit at eu nisi. Integer rhoncus bibendum libero. ",
    },
    {
      button: "Tab 3",
      disabled: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio nisi, consequat sit amet erat eget, fringilla placerat augue. Integer venenatis facilisis leo nec pulvinar. Quisque bibendum risus vitae diam tristique facilisis. Nunc nec purus in tortor tempus placerat. Aliquam ante diam, ornare et consectetur ac, condimentum non felis. Aenean egestas dignissim tincidunt. Nam tristique, purus vitae tempor tincidunt, felis lorem sagittis urna, ac pharetra ex metus vitae dolor. Sed augue elit, hendrerit eget auctor eget, egestas ut orci. Aliquam malesuada placerat nibh quis fermentum. Duis sit amet volutpat tellus.",
    },
  ];

  const defaultOpenTabs: TabType[] = [
    {
      button: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra felis sem, faucibus consectetur nunc ultrices id. Quisque sit amet elementum eros. Donec vestibulum, ligula quis aliquam porttitor, orci massa feugiat lacus, quis sagittis nisi libero id felis. Suspendisse consectetur sem eu faucibus aliquam. Proin consequat, purus a lobortis volutpat, nulla nisi tempor dui, ut placerat mi nisl at felis. Nulla dapibus commodo velit, nec consequat lorem tristique nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tincidunt bibendum placerat. Maecenas in massa in nisi blandit lacinia ut congue ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      button: "Tab 2",
      defaultOpen: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget neque vestibulum, varius lorem at, luctus quam. Donec interdum molestie risus, nec iaculis nisi. Donec fermentum felis sit amet urna convallis, ut finibus lectus elementum. In dignissim turpis varius libero dapibus, sed ultricies ante suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim vestibulum justo, vel cursus purus luctus non. Vivamus lectus enim, venenatis vel nibh eget, pharetra gravida mi. Donec dignissim auctor risus, ac tempus sem tristique ac. Fusce nisl dolor, ornare a massa non, mollis accumsan velit. Vivamus at maximus dolor, vel posuere nulla. Proin eget ipsum libero. Nunc nec mauris eu lorem tristique tristique. Sed scelerisque massa nec odio pretium pulvinar. Pellentesque id ligula efficitur erat ullamcorper suscipit at eu nisi. Integer rhoncus bibendum libero. ",
    },
    {
      button: "Tab 3",
      defaultOpen: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio nisi, consequat sit amet erat eget, fringilla placerat augue. Integer venenatis facilisis leo nec pulvinar. Quisque bibendum risus vitae diam tristique facilisis. Nunc nec purus in tortor tempus placerat. Aliquam ante diam, ornare et consectetur ac, condimentum non felis. Aenean egestas dignissim tincidunt. Nam tristique, purus vitae tempor tincidunt, felis lorem sagittis urna, ac pharetra ex metus vitae dolor. Sed augue elit, hendrerit eget auctor eget, egestas ut orci. Aliquam malesuada placerat nibh quis fermentum. Duis sit amet volutpat tellus.",
    },
  ];

  return (
    <StoryBook title={title}>
      <span>Tab allows you to display a set of content one at a time.</span>
      <Tab {...rest} tabs={tabs} />
      <span>
        {`Tabs with 'defaultOpen' set true will be open on page load. Only the first 'defaultOpen' tab will be open if multiple tabs have 'defaultOpen'.`}
      </span>
      <Tab {...rest} tabs={defaultOpenTabs} />
      <span>
        {`Disabled buttons won't display their content even if it is 'defaultOpen'.`}
      </span>
      <Tab {...rest} tabs={disabledTabs} />
    </StoryBook>
  );
};

export const TabComponent = Template.bind({});
TabComponent.args = { title: "Tab" };

const Component = {
  title: "UI/Tab",
  component: TabComponent,
};

export default Component;
