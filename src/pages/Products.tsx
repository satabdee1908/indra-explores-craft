
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample data
import { allProducts } from "@/data/sampleData";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeFilters, setActiveFilters] = useState({
    categories: [] as string[],
    regions: [] as string[],
    priceRange: [0, 15000] as number[],
  });

  // Initialize from URL params if available
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveFilters(prev => ({
        ...prev,
        categories: [category]
      }));
    }
  }, [searchParams]);

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
    
    // Apply category filter
    if (activeFilters.categories.length > 0) {
      results = results.filter(product => 
        activeFilters.categories.includes(product.categoryId)
      );
    }
    
    // Apply region filter
    if (activeFilters.regions.length > 0) {
      results = results.filter(product => 
        activeFilters.regions.includes(product.regionId)
      );
    }
    
    // Apply price filter
    results = results.filter(product => 
      product.price >= activeFilters.priceRange[0] && 
      product.price <= activeFilters.priceRange[1]
    );
    
    setFilteredProducts(results);
  }, [searchQuery, activeFilters]);

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
  };

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
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>
          
          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilters({
                      categories: [],
                      regions: [],
                      priceRange: [0, 15000],
                    });
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">{filteredProducts.length} products</p>
                  {/* We could add sorting options here in the future */}
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
      </div>
    </Layout>
  );
};

export default Products;
