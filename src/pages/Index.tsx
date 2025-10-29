import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import AboutSection from '@/components/AboutSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [sortBy, setSortBy] = useState<string>('default');

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

  const categories = ['Все', ...Array.from(new Set(products.map((p) => p.category)))];
  
  let filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        favorites={favorites}
        cart={cart}
        products={products}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <HeroSection setActiveSection={setActiveSection} />
      <CatalogSection
        filteredProducts={filteredProducts}
        favorites={favorites}
        categories={categories}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        setSelectedCategory={setSelectedCategory}
        setSortBy={setSortBy}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
      />
      <AboutSection />
      <DeliverySection />
      <Footer />
    </div>
  );
};

export default Index;
