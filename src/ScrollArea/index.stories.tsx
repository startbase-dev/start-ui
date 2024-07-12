import React from "react";
import ScrollArea from "./index";
import { TemplateProps } from "./types";

const TEXT =
  "In a distant galaxy, far beyond the reaches of the known universe, the remnants of the fallen Jedi Order were gathering in secret. Led by the last surviving Jedi Knight, Jor-El, they sought refuge on the forgotten planet of Thar&apos;os. Hidden beneath the planet&apos;s crimson sands lay ancient temples imbued with the Force, offering a glimmer of hope to the exiled warriors. As the Empire&apos;s shadow grew ever darker, whispers of a new hope began to spread among the remaining rebels, kindling the flame of resistance once more. Amidst the whispers, a young and untested Jedi named Lyria discovered a forgotten holocron that contained secrets of the Force long thought lost. This relic revealed the existence of a powerful artifact capable of restoring balance to the Force and weakening the Sith&apos;s grasp on the galaxy. Determined to find the artifact, Lyria embarked on a perilous journey across the stars, guided by visions of ancient Jedi Masters. Along the way, she encountered allies and enemies, each with their own motivations and ties to the Force. As Lyria&apos;s quest unfolded, the Emperor sensed a disturbance and dispatched his most formidable enforcer, Darth Malak, to hunt her down. The final confrontation took place on the storm-ravaged moon of Veltros, where Lyria, armed with the ancient artifact, faced Darth Malak in a battle that would decide the fate of the galaxy. With the strength of her ancestors flowing through her, Lyria defeated Malak and shattered the Sith&apos;s hold on the Force, igniting a new era of hope and unity for the galaxy. With Darth Malak vanquished, Lyria returned to Thar&apos;os with the ancient artifact, greeted by a renewed sense of hope among the surviving Jedi and rebels. The once-hidden temples of Thar&apos;os now thrummed with vibrant energy, as the Force began to heal from the Sith&apos;s corruption. Under Jor-El&apos;s wise leadership, the Jedi Order started to rebuild, training a new generation of Jedi who would safeguard peace and justice in the galaxy. The rebels, inspired by Lyria&apos;s courage and victory, rallied more systems to their cause, slowly but surely eroding the Empire&apos;s power. However, the Emperor was far from defeated. In the dark recesses of his throne room on Coruscant, he plotted his revenge. Summoning the most sinister dark lords and ruthless bounty hunters, he launched a relentless campaign to crush the rebellion and reclaim control. Despite their growing strength, the rebels faced overwhelming odds, with skirmishes breaking out across the galaxy. Lyria, now a symbol of hope, took on a crucial role in unifying the scattered rebel factions, using her connection to the Force to foresee and counter the Empire&apos;s attacks. In a climactic showdown, the rebels laid siege to the Emperor&apos;s stronghold on Coruscant. The battle raged in the streets and skies, with the fate of the galaxy hanging in the balance. Lyria, accompanied by Jor-El and her closest allies, infiltrated the Emperor&apos;s citadel. The final confrontation was intense, as the Emperor unleashed his full dark powers. But Lyria, drawing strength from the ancient artifact and the unity of the Force, stood firm. In a moment of sheer willpower, she and Jor-El combined their abilities, creating a wave of pure Force energy that obliterated the Emperor and his dark influence. Peace was finally restored, and the galaxy, now free from tyranny, began to heal and flourish under the guidance of the reborn Jedi Order.";

const Template: React.FC<TemplateProps> = (args) => {
  const { orientation, className, style } = args;
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          marginBottom: "16px",
        }}
      >
        <ScrollArea
          orientation={orientation}
          className={className}
          style={style}
        >
          <div
            style={{
              height: orientation === "vertical" ? "500px" : "auto",
              width: orientation === "horizontal" ? "1000px" : "auto",
              backgroundColor: "var(--gray-100)",
              padding: "16px",
            }}
          >
            {TEXT}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export const ScrollAreaComponent = Template.bind({});
ScrollAreaComponent.args = { title: "Scroll Area", orientation: "vertical" };

export const VerticalScrollArea = Template.bind({});
VerticalScrollArea.args = {
  ...ScrollAreaComponent.args,
  title: "Vertical ScrollArea",
  orientation: "vertical",
  style: { height: "200px" },
};

export const HorizontalScrollArea = Template.bind({});
HorizontalScrollArea.args = {
  ...ScrollAreaComponent.args,
  title: "Horizontal ScrollArea",
  orientation: "horizontal",
  style: { width: "600px" },
};

const Component = {
  title: "UI/ScrollArea",
  component: ScrollAreaComponent,
};

export default Component;
