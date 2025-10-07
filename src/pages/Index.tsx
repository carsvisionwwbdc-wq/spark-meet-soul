import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/ProfileCard";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-dating.jpg";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";

const profiles = [
  {
    id: 1,
    name: "Sarah",
    age: 28,
    bio: "Amante del café, viajes y buenas conversaciones ☕✈️",
    image: profile1,
  },
  {
    id: 2,
    name: "Marco",
    age: 32,
    bio: "Desarrollador, fotógrafo amateur, aventurero urbano 📸",
    image: profile2,
  },
  {
    id: 3,
    name: "Elena",
    age: 26,
    bio: "Artista, yogui, siempre buscando nuevas experiencias 🎨",
    image: profile3,
  },
];

const Index = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showProfiles, setShowProfiles] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    toast({
      title: "¡Match! ❤️",
      description: `Te gustó ${profiles[currentProfileIndex].name}`,
    });
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      toast({
        title: "No hay más perfiles",
        description: "¡Vuelve pronto para ver más personas!",
      });
      setShowProfiles(false);
      setCurrentProfileIndex(0);
    }
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {!showProfiles && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Encuentra tu conexión perfecta
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Conoce Personas Increíbles
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Descubre conexiones auténticas con personas que comparten tus
              intereses y pasiones
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setShowProfiles(true)}
              >
                <Heart className="w-5 h-5" />
                Comenzar Ahora
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Usuarios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Matches Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Profile Cards Section */}
      {showProfiles && (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">
                Descubre Nuevas Personas
              </h2>
              <p className="text-muted-foreground">
                Desliza para encontrar tu próxima conexión
              </p>
            </div>

            <ProfileCard
              {...currentProfile}
              onLike={handleLike}
              onPass={handlePass}
            />

            <div className="text-center mt-8">
              <Button
                variant="ghost"
                onClick={() => {
                  setShowProfiles(false);
                  setCurrentProfileIndex(0);
                }}
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
