import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Index = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  const products: Product[] = [
    {
      id: 1,
      name: 'URBAN VIBES',
      price: 2990,
      image: '/placeholder.svg',
      category: 'Новинки',
    },
    {
      id: 2,
      name: 'STREET KING',
      price: 3290,
      image: '/placeholder.svg',
      category: 'Бестселлеры',
    },
    {
      id: 3,
      name: 'CITY JUNGLE',
      price: 2790,
      image: '/placeholder.svg',
      category: 'Новинки',
    },
    {
      id: 4,
      name: 'NEON NIGHTS',
      price: 3490,
      image: '/placeholder.svg',
      category: 'Лимитка',
    },
    {
      id: 5,
      name: 'CONCRETE WAVE',
      price: 2890,
      image: '/placeholder.svg',
      category: 'Новинки',
    },
    {
      id: 6,
      name: 'REBEL SOUL',
      price: 3190,
      image: '/placeholder.svg',
      category: 'Бестселлеры',
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const cartProducts = cart.map((id) => products.find((p) => p.id === id)!);
  const totalPrice = cartProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-black text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-heading font-black tracking-tight">
            STREET WEAR
          </h1>
          <nav className="hidden md:flex gap-8">
            {['Главная', 'Каталог', 'О бренде', 'Доставка', 'Контакты'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </nav>
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                  <Icon name="Heart" size={24} />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent text-white">
                      {favorites.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-2xl font-heading">Избранное</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {favoriteProducts.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Пока ничего не добавлено
                    </p>
                  ) : (
                    favoriteProducts.map((product) => (
                      <Card key={product.id} className="p-4 flex gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover bg-gray-100"
                        />
                        <div className="flex-1">
                          <h3 className="font-heading font-bold">{product.name}</h3>
                          <p className="text-lg font-bold mt-1">{product.price} ₽</p>
                          <Button
                            onClick={() => addToCart(product.id)}
                            size="sm"
                            className="mt-2 bg-black text-white"
                          >
                            В корзину
                          </Button>
                        </div>
                        <Button
                          onClick={() => toggleFavorite(product.id)}
                          variant="ghost"
                          size="icon"
                        >
                          <Icon name="X" size={20} />
                        </Button>
                      </Card>
                    ))
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                  <Icon name="ShoppingCart" size={24} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent text-white">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-2xl font-heading">Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4 flex-1">
                  {cartProducts.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Корзина пуста
                    </p>
                  ) : (
                    <>
                      {cartProducts.map((product, index) => (
                        <Card key={index} className="p-4 flex gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover bg-gray-100"
                          />
                          <div className="flex-1">
                            <h3 className="font-heading font-bold">{product.name}</h3>
                            <p className="text-lg font-bold mt-1">{product.price} ₽</p>
                          </div>
                          <Button
                            onClick={() => removeFromCart(index)}
                            variant="ghost"
                            size="icon"
                          >
                            <Icon name="Trash2" size={20} />
                          </Button>
                        </Card>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-heading font-bold">Итого:</span>
                          <span className="text-2xl font-heading font-black">
                            {totalPrice} ₽
                          </span>
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-lg font-bold">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

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

      <section className="py-20 px-6" id="catalog">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-black mb-4">
              НОВАЯ КОЛЛЕКЦИЯ
            </h2>
            <p className="text-lg text-muted-foreground">
              Эксклюзивные дизайны для настоящих ценителей уличной культуры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-2 hover:border-black transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white">
                    {product.category}
                  </Badge>
                  <Button
                    onClick={() => toggleFavorite(product.id)}
                    variant="secondary"
                    size="icon"
                    className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                      favorites.includes(product.id) ? 'bg-accent text-white' : ''
                    }`}
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold mb-4">{product.price} ₽</p>
                  <Button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-black text-white hover:bg-accent h-12 font-bold text-lg"
                  >
                    Добавить в корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
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

      <section className="py-20 px-6 bg-gray-50">
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

      <footer className="bg-black text-white py-12 px-6">
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
    </div>
  );
};

export default Index;
