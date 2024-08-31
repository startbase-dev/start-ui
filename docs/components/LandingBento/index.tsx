"use client";
import React from "react";
import { BentoGrid, BentoCard } from "@start-base/start-ui";
import "@start-base/start-ui/styles.css";
import style from "./style.module.css";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import { DotLottiePlayer } from "@dotlottie/react-player";

const LandingBento: React.FC = () => {
  return (
    <div className={style.root}>
      <BentoGrid
        rowHeight={300}
        gridCols={4}
        items={[
          {
            element: (
              <BentoCard
                title="React UI Library"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 3,
            height: 2,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContent}>
                    <div style={{ padding: "40px", fontSize: "32px" }}>
                      Build Your Foundation
                    </div>
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Start with the essentials. Our basic components are the
                    backbone of your next big idea—engineered for simplicity,
                    designed for impact.
                  </div>
                }
                rootClassName={style.cardRoot}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <div style={{ padding: "40px", fontSize: "32px" }}>
                      Transform Your Workflow
                    </div>
                  </div>
                }
                secondContent={
                  <div style={{ padding: "40px" }}>
                    Comprehensive, clear, and always here for you. Our
                    documentation and support ensure you’re never alone on your
                    journey to greatness
                  </div>
                }
                rootClassName={style.cardRoot}
              />
            ),
            width: 1,
            height: 1,
          },

          {
            element: (
              <BentoCard
                title="Unleash Creativity with 50+ components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                title="Unleash Creativity with 50+ components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                title="Unleash Creativity with 50+ components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 2,
            height: 2,
          },
          {
            element: (
              <BentoCard
                title="Unleash Creativity with 50+ components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                title="Unleash Creativity with 50+ components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.cardContent}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRoot}
                titleClassName={style.titleClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContent}>
                    <div style={{ padding: "40px", fontSize: "32px" }}>
                      Startbase Studio is where ideas come to life, effortlessly
                      bridging the gap between creativity and execution.Design,
                      develop, and deploy all in one place.
                    </div>
                    <DotLottiePlayer
                      src="lotties/studio1.lottie"
                      autoplay
                      loop
                    />
                  </div>
                }
                redirectTo="https://www.startbase.dev/studio"
                rootClassName={style.cardRoot}
              />
            ),
            width: 2,
            height: 2,
          },
          {
            element: (
              <BentoCard
                title="Discover Boilerplates"
                firstContent={
                  <div className={style.cardContent}>
                    <VideoPlayer
                      isLoopActive
                      autoPlay
                      muted
                      url="https://ficzfphhbhoykqsfygfq.supabase.co/storage/v1/object/public/files/6ec44b5d-7e04-462f-80d5-984e7543bdfb.mp4"
                    />
                  </div>
                }
                redirectTo="https://www.startbase.dev/boilerplates"
                rootClassName={style.cardRoot}
              />
            ),
            width: 2,
            height: 2,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContent}>
                    <div style={{ padding: "40px", fontSize: "32px" }}>
                      Capture Attention, Drive Action
                    </div>
                  </div>
                }
                secondContent={
                  <div style={{ padding: "40px" }}>
                    Your brand deserves to shine. With our marketing components,
                    you can craft eye-catching visuals that engage and convert.
                    From banners to pop-ups, these elements are designed to
                    capture attention and inspire action, helping you achieve
                    your marketing goals.
                  </div>
                }
                rootClassName={style.cardRoot}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContent}>
                    <div style={{ padding: "40px", fontSize: "32px" }}>
                      Build Your Foundation
                    </div>
                  </div>
                }
                secondContent={
                  <div style={{ padding: "40px" }}>
                    Start with the essentials. Our basic components are the
                    backbone of your next big idea—engineered for simplicity,
                    designed for impact.
                  </div>
                }
                rootClassName={style.cardRoot}
              />
            ),
            width: 1,
            height: 1,
          },
        ]}
      />
    </div>
  );
};

export default LandingBento;
