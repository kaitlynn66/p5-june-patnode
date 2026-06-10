"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

export default function ReviewsPage() {
  const Post = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: Date;
    description: string;
  }) => {
    return (
      <Card
        isHoverable
        isPressable
        className="p-4 w-full"
        onPress={() => {
          addToast({
            title: "Sources-",
            description:
              "Review 1 was from Harry Nguyen; Review 2 was from Em.",
            color: "danger",
          });
        }}
      >
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
            {date.toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h1 className={title()}>2 reviews about this hike &#8595;</h1>
      <div className="mt-20 flex flex-col gap-6">
        <Post
          date={new Date("2026-06-8")}
          description="I can see why this trail is so popular! Absolutely stunning trail, but be prepared for the conditions right now! There is thick, slushy snow for the most part, making the trek a lot more challenging than a standard summer hike. I came equipped with microspikes and gaiters, and they definitely came in handy. "
          title="Review 1"
        />
        <Post
          date={new Date("2026-06-7")}
          description="Very early when I started, had a lucky break in the clouds for Rainier views at the top around 11ish, then 20 minutes later it was full white out and sounds of avalanches in the distance. Glad I did it, go but be careful and turn back when you need to! And being sunglasses, hat and sunscreen too!"
          title="Review 2"
        />
      </div>
    </div>
  );
}
