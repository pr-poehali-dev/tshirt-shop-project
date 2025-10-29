import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-center mb-8 sm:mb-10 lg:mb-12">
          ДОСТАВКА И ОПЛАТА
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="p-5 sm:p-6 text-center">
            <Icon name="Truck" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
              Быстрая доставка
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              По России 2-5 дней
            </p>
          </Card>
          <Card className="p-5 sm:p-6 text-center">
            <Icon name="CreditCard" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
              Удобная оплата
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Карты, СБП, наличные
            </p>
          </Card>
          <Card className="p-5 sm:p-6 text-center">
            <Icon name="ShieldCheck" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
              Гарантия качества
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Возврат в течение 14 дней
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;