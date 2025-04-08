
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock } from "lucide-react";

interface PackageCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  description: string;
}

const PackageCard = ({ id, title, image, price, duration, location, description }: PackageCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-terracotta text-white py-1 px-3 rounded-full text-sm font-medium">
          ₹{price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-terracotta" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-terracotta" />
            <span>{duration}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <Link to={`/travel/${id}`}>
            <Button className="bg-indigo hover:bg-indigo/90">View Details</Button>
          </Link>
          <Link to={`/travel/${id}#inquiry`}>
            <Button variant="outline" className="border-indigo text-indigo hover:bg-indigo/10">
              Inquire Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
