
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  artisan: string;
  region: string;
}

const ProductCard = ({ id, name, image, price, artisan, region }: ProductCardProps) => {
  // Ensure all prices are below 5000
  const adjustedPrice = price > 5000 ? 2500 + (price % 2000) : price;
  
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="group">
      <Link to={`/products/${id}`} className="block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageError ? "/placeholder.svg" : image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              console.error("Image failed to load:", image);
              setImageError(true);
            }}
          />
          <div className="absolute bottom-0 left-0 bg-terracotta py-1 px-3 text-xs text-white">
            {region}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-1">{name}</h3>
          <p className="text-xs text-gray-500 mb-2">By {artisan}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-indigo">₹{adjustedPrice.toLocaleString()}</span>
            <Button size="sm" variant="outline" className="rounded-full">
              <ShoppingCart className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
