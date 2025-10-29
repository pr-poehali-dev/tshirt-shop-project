import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface HeaderProps {
  favorites: number[];
  cart: number[];
  products: Product[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  toggleFavorite: (id: number) => void;
  addToCart: (id: number) => void;
  removeFromCart: (index: number) => void;
}

const Header = ({
  favorites,
  cart,
  products,
  activeSection,
  setActiveSection,
  toggleFavorite,
  addToCart,
  removeFromCart,
}: HeaderProps) => {
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const cartProducts = cart.map((id) => products.find((p) => p.id === id)!);
  const totalPrice = cartProducts.reduce((sum, p) => sum + p.price, 0);

  return (
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
  );
};

export default Header;
