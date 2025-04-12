
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ArtisanFeature from "@/components/product/ArtisanFeature";

// Sample data
import { artisans } from "@/data/sampleData";

const Artisans = () => {
  const [loading, setLoading] = useState(true);
  const [artisansList, setArtisansList] = useState<any[]>([]);

  useEffect(() => {
    // Simulate loading data
    setArtisansList(artisans);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p>Loading artisans...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Artisans</h1>
        
        <div className="space-y-6">
          {artisansList.map((artisan) => (
            <ArtisanFeature
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              image={artisan.image}
              location={artisan.location}
              craft={artisan.craft}
              bio={artisan.bio}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Artisans;
