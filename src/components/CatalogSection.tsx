import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CatalogSectionProps {
  filteredProducts: Product[];
  favorites: number[];
  categories: string[];
  selectedCategory: string;
  sortBy: string;
  setSelectedCategory: (category: string) => void;
  setSortBy: (sort: string) => void;
  toggleFavorite: (id: number) => void;
  addToCart: (id: number) => void;
}

const CatalogSection = ({
  filteredProducts,
  favorites,
  categories,
  selectedCategory,
  sortBy,
  setSelectedCategory,
  setSortBy,
  toggleFavorite,
  addToCart,
}: CatalogSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="catalog">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black mb-3 sm:mb-4">
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Эксклюзивные дизайны для настоящих ценителей уличной культуры
          </p>
          <div className="flex gap-2 sm:gap-3 justify-center flex-wrap items-center px-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-bold text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10 ${
                  selectedCategory === category
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
            <div className="w-px h-6 sm:h-8 bg-border mx-1 sm:mx-2 hidden sm:block" />
            <Button
              onClick={() => setSortBy('default')}
              variant={sortBy === 'default' ? 'default' : 'outline'}
              className={`font-bold text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10 ${
                sortBy === 'default'
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              По умолчанию
            </Button>
            <Button
              onClick={() => setSortBy('price-asc')}
              variant={sortBy === 'price-asc' ? 'default' : 'outline'}
              className={`font-bold text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10 ${
                sortBy === 'price-asc'
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Дешевле
            </Button>
            <Button
              onClick={() => setSortBy('price-desc')}
              variant={sortBy === 'price-desc' ? 'default' : 'outline'}
              className={`font-bold text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10 ${
                sortBy === 'price-desc'
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Дороже
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
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
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-heading font-black mb-2">
                  {product.name}
                </h3>
                <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{product.price} ₽</p>
                <Button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-black text-white hover:bg-accent h-10 sm:h-12 font-bold text-sm sm:text-base lg:text-lg"
                >
                  Добавить в корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;