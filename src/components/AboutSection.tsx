import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black mb-4 sm:mb-6">О БРЕНДЕ</h2>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              Street Wear — это больше, чем просто одежда. Это движение, которое
              объединяет творческих людей со всего мира.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-80">
              Мы создаём уникальные дизайны, вдохновлённые уличной культурой,
              музыкой и искусством. Каждая футболка — это произведение, которое
              рассказывает свою историю.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Card className="bg-white text-black p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black mb-1 sm:mb-2">5K+</div>
              <p className="text-xs sm:text-sm">Довольных клиентов</p>
            </Card>
            <Card className="bg-white text-black p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black mb-1 sm:mb-2">100%</div>
              <p className="text-xs sm:text-sm">Качество</p>
            </Card>
            <Card className="bg-white text-black p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black mb-1 sm:mb-2">50+</div>
              <p className="text-xs sm:text-sm">Дизайнов</p>
            </Card>
            <Card className="bg-white text-black p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black mb-1 sm:mb-2">24/7</div>
              <p className="text-xs sm:text-sm">Поддержка</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;