import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-heading font-black mb-6">О БРЕНДЕ</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Street Wear — это больше, чем просто одежда. Это движение, которое
              объединяет творческих людей со всего мира.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Мы создаём уникальные дизайны, вдохновлённые уличной культурой,
              музыкой и искусством. Каждая футболка — это произведение, которое
              рассказывает свою историю.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white text-black p-6 text-center">
              <div className="text-4xl font-heading font-black mb-2">5K+</div>
              <p className="text-sm">Довольных клиентов</p>
            </Card>
            <Card className="bg-white text-black p-6 text-center">
              <div className="text-4xl font-heading font-black mb-2">100%</div>
              <p className="text-sm">Качество</p>
            </Card>
            <Card className="bg-white text-black p-6 text-center">
              <div className="text-4xl font-heading font-black mb-2">50+</div>
              <p className="text-sm">Дизайнов</p>
            </Card>
            <Card className="bg-white text-black p-6 text-center">
              <div className="text-4xl font-heading font-black mb-2">24/7</div>
              <p className="text-sm">Поддержка</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;