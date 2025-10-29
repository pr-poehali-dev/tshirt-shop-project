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
    <section className="py-20 px-6" id="catalog">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-black mb-4">
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Эксклюзивные дизайны для настоящих ценителей уличной культуры
          </p>
          <div className="flex gap-3 justify-center flex-wrap items-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-bold ${
                  selectedCategory === category
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
            <div className="w-px h-8 bg-border mx-2" />
            <Button
              onClick={() => setSortBy('default')}
              variant={sortBy === 'default' ? 'default' : 'outline'}
              className={`font-bold ${
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
              className={`font-bold ${
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
              className={`font-bold ${
                sortBy === 'price-desc'
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Дороже
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default CatalogSection;
