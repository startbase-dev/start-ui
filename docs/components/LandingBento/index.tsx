"use client";
import React from "react";
import { BentoGrid, BentoCard } from "@start-base/start-ui";
import "@start-base/start-ui/styles.css";
import style from "./style.module.css";

const LandingBento: React.FC = () => {
  return (
    <div className={style.root}>
      <BentoGrid
        items={[
          {
            element: (
              <div>
                <BentoCard
                  firstContent={
                    <>
                      <div style={{ padding: "40px", fontSize: "32px" }}>
                        Unleash Creativity with 50+ components
                      </div>
                      <img src="https://nextra.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-1.dark.efd5c446.png&w=3840&q=75" />
                    </>
                  }
                  secondContent={
                    <div style={{ padding: "40px" }}>
                      Unleash Your Creative Power Description: Unlock a universe
                      of possibilities with over 50 components designed to
                      empower your web projects. From minimalistic designs to
                      bold statements, Start UI is your toolkit for crafting
                      digital experiences that stand out
                    </div>
                  }
                  rootClassName={style.cardRoot}
                />
              </div>
            ),
            width: 2,
            height: 10,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightgreen", padding: "12px" }}>
                Item 2
              </div>
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightcoral", padding: "12px" }}>
                Item 3
              </div>
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <div
                style={{
                  backgroundColor: "lightgoldenrodyellow",
                  padding: "12px",
                }}
              >
                Item 4
              </div>
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightcoral", padding: "12px" }}>
                Item 5
              </div>
            ),
            width: 3,
            height: 1,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightblue", padding: "12px" }}>
                Item 6
              </div>
            ),
            width: 1,
            height: 1,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightgreen", padding: "12px" }}>
                Item 7
              </div>
            ),
            width: 2,
            height: 1,
          },
          {
            element: (
              <div style={{ backgroundColor: "lightcoral", padding: "12px" }}>
                Item 8
              </div>
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
