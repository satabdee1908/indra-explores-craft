
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = [
    { id: "handicrafts", label: "Handicrafts" },
    { id: "textiles", label: "Textiles" },
    { id: "home-decor", label: "Home Decor" }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const updated = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      onFilterChange({
        categories: updated,
        priceRange
      });
      
      return updated;
    });
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onFilterChange({
      categories: selectedCategories,
      priceRange: value
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 5000]);
    onFilterChange({
      categories: [],
      priceRange: [0, 5000]
    });
  };

  return (
    <>
      {/* Mobile filter dialog */}
      <div className="md:hidden">
        <Button 
          onClick={() => setMobileFiltersOpen(true)}
          variant="outline"
          className="w-full mb-4"
        >
          Filters
        </Button>
        
        {mobileFiltersOpen && (
          <div className="fixed inset-0 flex z-40 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)} />
            
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-4 border-t border-gray-200 px-4 py-6">
                {/* Mobile filter content */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="categories">
                    <AccordionTrigger className="text-left">Categories</AccordionTrigger>
                    <AccordionContent>
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2 py-1">
                          <Checkbox 
                            id={`mobile-category-${category.id}`} 
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => handleCategoryChange(category.id)}
                          />
                          <label 
                            htmlFor={`mobile-category-${category.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.label}
                          </label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-left">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-6 px-2">
                        <Slider
                          defaultValue={[0, 5000]}
                          max={5000}
                          step={500}
                          value={priceRange}
                          onValueChange={handlePriceChange}
                          className="mb-6"
                        />
                        <div className="flex items-center justify-between">
                          <span>₹{priceRange[0]}</span>
                          <span>₹{priceRange[1]}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Button 
                  onClick={clearAllFilters} 
                  variant="outline"
                  className="mt-6 w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop filters */}
      <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          <Button 
            onClick={clearAllFilters} 
            variant="link" 
            className="text-sm text-indigo"
            size="sm"
          >
            Clear All
          </Button>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category.id}`} 
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <label 
                  htmlFor={`category-${category.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Price Range</h4>
          <Slider
            defaultValue={[0, 5000]}
            max={5000}
            step={500}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">₹{priceRange[0]}</span>
            <span className="text-sm text-gray-500">₹{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
