import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-black text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-black mb-3 sm:mb-4">STREET WEAR</h3>
            <p className="text-xs sm:text-sm opacity-70">
              Уличная мода для свободных людей
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">Каталог</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-70">
              <li>Новинки</li>
              <li>Бестселлеры</li>
              <li>Лимитированные</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">Информация</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-70">
              <li>О бренде</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">Контакты</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-70">
              <li>info@streetwear.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li className="flex gap-3 pt-2">
                <Icon name="Instagram" className="w-5 h-5" />
                <Icon name="Send" className="w-5 h-5" />
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm opacity-50">
          © 2024 STREET WEAR. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;