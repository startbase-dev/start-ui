"use client";
import { BentoGrid, BentoCard } from "@start-base/start-ui";
import "@start-base/start-ui/styles.css";

const LandingBento: React.FC = () => {
  return (
    <BentoGrid
      items={[
        {
          element: (
            <div style={{ backgroundColor: "lightblue", padding: "12px" }}>
              <BentoCard
                firstContent={
                  <div style={{ padding: "40px", fontSize: "32px" }}>
                    Two new ways to protect sensitive apps and the information
                    inside them when others are using your device.
                  </div>
                }
                secondContent={
                  <div style={{ padding: "40px" }}>
                    Customize how your controls are laid out, resize them, or
                    build your own groups of controls so they’re always just a
                    swipe away.
                  </div>
                }
              />
            </div>
          ),
          width: 2,
          height: 1,
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
  );
};

export default LandingBento;
