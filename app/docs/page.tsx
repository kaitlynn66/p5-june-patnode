import ConfettiButton from "@/components/confettiButton";
import { title } from "@/components/primitives";

export default function LocationPage() {
  return (
    <div>
      <h1 className={title()}>Where is this hike located?</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">
          This hike is 2 and a half hours from Skyline High School!
        </span>{" "}
        <span className="text-xs">Sounds like a fun road trip.</span>
        <span className="text-2xl mr-6">🚗</span>{" "}
      </div>

      <div className="flex gap-4">
        <ConfettiButton />
      </div>
    </div>
  );
}
