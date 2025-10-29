import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-black mb-4">STREET WEAR</h3>
            <p className="text-sm opacity-70">
              Уличная мода для свободных людей
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Новинки</li>
              <li>Бестселлеры</li>
              <li>Лимитированные</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>О бренде</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>info@streetwear.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li className="flex gap-3 pt-2">
                <Icon name="Instagram" size={20} />
                <Icon name="Send" size={20} />
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-50">
          © 2024 STREET WEAR. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;