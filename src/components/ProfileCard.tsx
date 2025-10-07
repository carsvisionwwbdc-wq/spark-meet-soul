import { useState } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
  image: string;
  onLike: () => void;
  onPass: () => void;
}

export const ProfileCard = ({ name, age, bio, image, onLike, onPass }: ProfileCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const handleAction = (action: "like" | "pass") => {
    setIsAnimating(true);
    setDirection(action === "like" ? "right" : "left");
    
    setTimeout(() => {
      if (action === "like") {
        onLike();
      } else {
        onPass();
      }
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  return (
    <div className="w-full max-w-sm mx-auto perspective-1000">
      <Card
        className={`overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 ${
          isAnimating
            ? direction === "right"
              ? "translate-x-[150%] rotate-12 opacity-0"
              : "-translate-x-[150%] -rotate-12 opacity-0"
            : "translate-x-0 rotate-0 opacity-100"
        }`}
      >
        <div className="relative h-[500px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-1">
              {name}, {age}
            </h2>
            <p className="text-lg opacity-90">{bio}</p>
          </div>
        </div>
      </Card>

      <div className="flex justify-center gap-6 mt-8">
        <Button
          variant="action"
          size="icon"
          className="w-16 h-16 bg-background border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          onClick={() => handleAction("pass")}
        >
          <X className="w-8 h-8" />
        </Button>

        <Button
          variant="action"
          size="icon"
          className="w-20 h-20 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => handleAction("like")}
        >
          <Heart className="w-10 h-10" />
        </Button>
      </div>
    </div>
  );
};
