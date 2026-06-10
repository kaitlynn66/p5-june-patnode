"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>
          Skyline Loop Trail&nbsp;
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          YOUR next best hike in Washington!
        </div>
      </div>

      <div className="flex gap-3">
        <ConfettiButton />

        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          alt="skyline loop"
          src="https://www.wta.org/site_images/hikes/skyline-trail-loop-photo-by-ivy-jin.jpg/@@images/632699fb-e012-453b-afea-88fc39005273.jpeg"
          width="50%"
        />
      </div>
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>Click through the pages to find out more</span>
        </Snippet>
      </div>
    </section>
  );
}
