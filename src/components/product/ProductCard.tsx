
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  artisan: string;
  region: string;
}

const ProductCard = ({ id, name, image, price, artisan, region }: ProductCardProps) => {
  const { toast } = useToast();
  const adjustedPrice = price > 5000 ? 4999 : price;
  const [imageError, setImageError] = useState(false);
  
  const handleBuyNow = () => {
    toast({
      title: "Coming Soon",
      description: "Direct payment option will be available soon!",
    });
  };
  
  return (
    <div className="group">
      <Link to={`/products/${id}`} className="block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageError ? "/placeholder.svg" : image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
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
          <div className="flex justify-between items-center gap-2">
            <span className="font-semibold text-indigo">₹{adjustedPrice.toLocaleString()}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="rounded-full">
                <ShoppingCart className="h-4 w-4 mr-1" /> Add
              </Button>
              <Button 
                size="sm" 
                className="rounded-full bg-terracotta hover:bg-terracotta/90"
                onClick={(e) => {
                  e.preventDefault();
                  handleBuyNow();
                }}
              >
                <CreditCard className="h-4 w-4 mr-1" /> Buy
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
