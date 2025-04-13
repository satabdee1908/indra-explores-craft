
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ArtisanFeatureProps {
  id: string;
  name: string;
  image: string;
  location: string;
  craft: string;
  bio: string;
}

const ArtisanFeature = ({ id, name, image, location, craft, bio }: ArtisanFeatureProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white p-6 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4 flex justify-center">
        <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-sand">
          <Avatar className="h-full w-full">
            <AvatarImage 
              src={imageError ? "/placeholder.svg" : image} 
              alt={name} 
              className="object-cover"
              onError={() => {
                console.error("Image failed to load:", image);
                setImageError(true);
              }}
            />
            <AvatarFallback className="text-4xl bg-terracotta/20 text-terracotta">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{craft} Artisan from {location}</p>
          </div>
          <Link to={`/artisans/${id}`}>
            <Button variant="link" className="p-0 h-auto text-terracotta">
              View Full Profile
            </Button>
          </Link>
        </div>
        
        <p className="text-gray-700 mt-3 mb-4 line-clamp-3">
          {bio}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="bg-sand hover:bg-sand/80">
            See All Products
          </Button>
          <Button className="bg-terracotta hover:bg-terracotta/90">
            Support this Artisan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanFeature;
