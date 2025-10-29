import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-heading font-black text-center mb-12">
          ДОСТАВКА И ОПЛАТА
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <Icon name="Truck" size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">
              Быстрая доставка
            </h3>
            <p className="text-muted-foreground">
              По России 2-5 дней
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Icon name="CreditCard" size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">
              Удобная оплата
            </h3>
            <p className="text-muted-foreground">
              Карты, СБП, наличные
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Icon name="ShieldCheck" size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">
              Гарантия качества
            </h3>
            <p className="text-muted-foreground">
              Возврат в течение 14 дней
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;