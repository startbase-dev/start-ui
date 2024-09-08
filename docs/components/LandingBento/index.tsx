"use client";
import React from "react";
import { BentoGrid, BentoCard } from "@start-base/start-ui";
import "@start-base/start-ui/styles.css";
import style from "./style.module.css";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion } from "framer-motion";
import Link from "next/link";

const LandingBento: React.FC = () => {
  return (
    <div>
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
                  <div className={style.firstContentLibrary}>
                    <DotLottiePlayer src="lotties/ui.lottie" autoplay loop />
                  </div>
                }
                secondContent={
                  <div className={style.secondContentLibrary}>
                    Unlock a universe of possibilities with over 50+ components
                    designed to empower your web projects. From minimalistic
                    designs to bold statements, Start UI is your toolkit for
                    crafting digital experiences that stand out
                  </div>
                }
                rootClassName={style.cardRootLibrary}
                rootActiveClassName={style.cardRootActiveLibrary}
                titleClassName={style.titleClassName}
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 3,
            height: 2,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContentDarkMode}>
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 0%", "50% 40%"],
                        backgroundImage: [
                          `radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)`,
                          "radial-gradient(farthest-corner, #3168a0, #e2e5ea)",
                          "radial-gradient(farthest-corner, #3168a0, #e2e5ea)",
                          "radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)",
                        ],
                      }}
                      transition={{
                        backgroundPosition: {
                          times: [0, 0.5, 0.5, 1],
                          type: "inertia",
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                        backgroundImage: {
                          times: [0, 0.2, 0.8, 1],
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `radial-gradient(farthest-corner, #3168a0, #e2e5ea)`,
                        backgroundSize: "400% 400%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <motion.h3
                      animate={{
                        color: ["#dae5ff", "#fff"],
                      }}
                      transition={{
                        color: {
                          times: [0.25, 0.35, 0.7, 0.8],
                          type: "spring",
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                      }}
                      style={{
                        position: "relative",
                        mixBlendMode: "difference",
                      }}
                    >
                      Well <br />
                      Documented
                    </motion.h3>
                  </div>
                }
                rootClassName={style.cardRootFoundation}
                redirectTo="/docs/docs/gettingStarted/installation"
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                firstContent={
                  <div className={style.cardContentDarkMode}>
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 0%", "50% 40%"],
                        backgroundImage: [
                          `radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)`,
                          "radial-gradient(farthest-corner, #06080a, #e2e5ea)",
                          "radial-gradient(farthest-corner, #06080a, #e2e5ea)",
                          "radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)",
                        ],
                      }}
                      transition={{
                        backgroundPosition: {
                          times: [0, 0.5, 0.5, 1],
                          type: "spring",
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                        backgroundImage: {
                          times: [0, 0.2, 0.8, 1],
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `radial-gradient(farthest-corner, #06080a, #e2e5ea)`,
                        backgroundSize: "400% 400%",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <motion.h3
                      animate={{
                        color: ["#dae5ff", "#fff"],
                      }}
                      transition={{
                        color: {
                          times: [0.25, 0.35, 0.7, 0.8],
                          type: "spring",
                          repeat: Infinity,
                          duration: 10,
                          delay: 1,
                        },
                      }}
                      style={{
                        position: "relative",
                        mixBlendMode: "difference",
                      }}
                    >
                      Dark <br />
                      Mode <br />
                      Support
                    </motion.h3>
                  </div>
                }
                rootClassName={style.cardRootFoundation}
                redirectTo="/docs/gettingStarted/darkMode"
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <BentoCard
                title="Unleash Creativity with basic components"
                isTitleVisibleInSecond={false}
                secondContent={
                  <div className={style.secondContent}>
                    Start with the essentials. Our basic components are designed
                    for simplicity and reliability, forming the backbone of your
                    projects. Whether you`&apos;`re laying out a page or
                    creating responsive designs, these components ensure a solid
                    foundation.
                    <br />
                    <br />
                    <Link target="_blank" href="/docs/components/accordion">
                      Explore More <span>→</span>
                    </Link>
                  </div>
                }
                rootClassName={style.cardRootUnleash}
                titleClassName={style.titleClassNameUnleash}
                rootActiveClassName={style.cardRootUnleash}
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 2,
            height: 1,
          },
          {
            element: (
              <BentoCard
                title="Form Components"
                isTitleVisibleInSecond={false}
                firstContent={
                  <div className={style.formContent}>
                    Seamless form experiences for any application.
                    <img
                      src="images/dateRangePicker.png"
                      className={style.formImage}
                    />
                  </div>
                }
                secondContent={
                  <div className={style.secondContent}>
                    Transform user interactions with our intuitive form
                    components. Designed to be user-friendly and highly
                    customizable, they help you create forms that are both
                    functional and aesthetically pleasing. Make every input
                    count with effortless form flows.
                    <br />
                    <br />
                    <Link
                      target="_blank"
                      href="/docs/formComponents/amountInput"
                    >
                      Explore More <span>→</span>
                    </Link>
                  </div>
                }
                rootClassName={style.cardRootForm}
                titleClassName={style.titleClassName}
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 2,
            height: 2,
          },
          {
            element: (
              <BentoCard
                title="Marketing Components"
                isTitleVisibleInSecond={false}
                secondContent={
                  <div className={style.secondContentMarketing}>
                    Your brand deserves to shine. With our marketing components,
                    you can craft eye-catching visuals that engage and convert.
                    <br />
                    <br />
                    <Link
                      target="_blank"
                      href="/docs/marketingComponents/bentoGrid"
                    >
                      Explore More <span>→</span>
                    </Link>
                  </div>
                }
                rootClassName={style.cardRootMarketing}
                titleClassName={style.titleClassNameMarketing}
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 2,
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
                buttonClassName={style.buttonClassName}
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
                buttonClassName={style.buttonClassName}
              />
            ),
            width: 2,
            height: 2,
          },
        ]}
      />
    </div>
  );
};

export default LandingBento;
