import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionId);
  };

  return (
    <section id="home" className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      <img
        src="/placeholder.svg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
        <Badge className="bg-accent text-white w-fit mb-3 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1">
          Новая коллекция 2024
        </Badge>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-3 sm:mb-4 animate-fade-in leading-tight">
          URBAN
          <br />
          CULTURE
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-md font-medium animate-slide-up">
          Выражай себя через стиль. Оригинальные дизайны для тех, кто знает цену свободе.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up">
          <Button
            onClick={() => scrollToSection('catalog')}
            className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto font-bold"
          >
            Смотреть коллекцию
          </Button>
          <Button
            onClick={() => scrollToSection('about')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto font-bold"
          >
            О бренде
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;