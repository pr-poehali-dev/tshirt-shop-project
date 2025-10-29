import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      <img
        src="/placeholder.svg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-6">
        <Badge className="bg-accent text-white w-fit mb-4 text-sm px-4 py-1">
          Новая коллекция 2024
        </Badge>
        <h2 className="text-7xl md:text-8xl font-heading font-black mb-4 animate-fade-in">
          URBAN
          <br />
          CULTURE
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-md font-medium animate-slide-up">
          Выражай себя через стиль. Оригинальные дизайны для тех, кто знает цену свободе.
        </p>
        <div className="flex gap-4 animate-slide-up">
          <Button
            onClick={() => setActiveSection('каталог')}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto font-bold"
          >
            Смотреть коллекцию
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto font-bold"
          >
            О бренде
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
