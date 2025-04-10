
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample data
import { allProducts } from "@/data/sampleData";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Apply filters
  useEffect(() => {
    let results = [...allProducts];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        product => 
          product.name.toLowerCase().includes(query) ||
          product.artisan.toLowerCase().includes(query) ||
          product.region.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(results);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just prevent form submission, filtering is done in useEffect
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore Indian Crafts</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search products, artisans, or regions..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10"
              />
            </div>
            <Button type="submit" className="bg-terracotta hover:bg-terracotta/90">
              Search
            </Button>
          </form>
        </div>
        
        {/* Product Grid */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search query</p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                }}
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{filteredProducts.length} products</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    artisan={product.artisan}
                    region={product.region}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
