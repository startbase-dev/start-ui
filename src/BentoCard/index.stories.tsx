import React from "react";
import BentoCard from "./index";
import s from "./stories.module.scss";
import VideoPlayer from "./demoContent/Video/VideoPlayer";
import Image from "./demoContent/Image/Image";

interface TemplateProps {
  title: string;
}

const Template: React.FC<TemplateProps> = (args) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <h2>{args.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          height: "600px",
          width: "100%",
          gap: "32px",
        }}
      >
        <BentoCard
          title="Rearrange and resize your controls"
          firstContent={<VideoPlayer />}
          rootClassName={s.firstCardRoot}
          secondContent={
            <div style={{ padding: "40px" }}>
              Customize how your controls are laid out, resize them, or build
              your own groups of controls so they’re always just a swipe away.
            </div>
          }
        />
        <BentoCard
          title="Title"
          rootClassName={s.secondCardRoot}
          firstContent={
            <div style={{ padding: "40px", fontSize: "32px" }}>
              Two new ways to protect sensitive apps and the information inside
              them when others are using your device.
            </div>
          }
          secondContent={
            <div style={{ padding: "40px" }}>
              Lock an app to require Face ID, Touch ID, or your passcode for
              access. Information from the app won’t appear in other places
              across the system, including search and notifications, so others
              don’t inadvertently see sensitive information. And just as easily
              hide an app to move it into a hidden apps folder that’s locked.
            </div>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          height: "600px",
          width: "100%",
          gap: "32px",
        }}
      >
        <BentoCard
          title="Messages via alian ships"
          rootClassName={s.thirdCardRoot}
          firstContent={<Image />}
          secondContent={
            <div style={{ padding: "40px" }}>
              With the satellite capabilities on iPhone 14 or later, you can
              stay connected with friends and family over iMessage or SMS even
              without cellular or Wi-Fi service. When texting people on
              iMessage, you’ll also be able to use key features like sending and
              receiving messages, emoji, and Tapbacks. And all your iMessages
              sent over satellite are end-to-end encrypted.
            </div>
          }
        />
      </div>
    </div>
  );
};

export const BentoCardComponent = Template.bind({});
BentoCardComponent.args = { title: "BentoCard" };

const Component = {
  title: "UI/BentoCard",
  component: BentoCardComponent,
};

export default Component;
