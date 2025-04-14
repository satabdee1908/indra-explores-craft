import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import PackageCard from "@/components/travel/PackageCard";

// Sample data
import { featuredProducts, featuredPackages, artisans } from "@/data/sampleData";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo mb-6">
              Discover India's <span className="text-terracotta">Craft</span> & <span className="text-terracotta">Culture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Connect with authentic artisans, explore their stories, and experience the soul of India through crafts and travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-6 text-lg w-full sm:w-auto">
                  Shop Handcrafted Products
                </Button>
              </Link>
              <Link to="/travel">
                <Button variant="outline" className="border-indigo text-indigo hover:bg-indigo/10 px-6 py-6 text-lg w-full sm:w-auto">
                  Explore Travel Experiences
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Crafts</h2>
              <p className="mt-2 text-gray-600">Handcrafted treasures from India's finest artisans</p>
            </div>
            <Link to="/products" className="text-terracotta hover:text-terracotta/80 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
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
        </div>
      </section>

      {/* Artisan Story Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <img
                  src="/lovable-uploads/28283080-99b2-42a4-b534-be2fdf3a4cc7.png"
                  alt="Jagannath Temple"
                  className="rounded-xl shadow-xl animate-float w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-turmeric rounded-lg shadow-lg hidden md:block"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img
                  src="/lovable-uploads/cdab7710-1100-47f2-9034-c8b7578fcd43.png"
                  alt="Traditional masks"
                  className="rounded-lg shadow-md h-24 w-full object-cover"
                />
                <img
                  src="/lovable-uploads/9f8211c5-af16-4c53-8fcb-722aa3a60047.png"
                  alt="Temple stone carvings"
                  className="rounded-lg shadow-md h-24 w-full object-cover"
                />
                <img
                  src="/lovable-uploads/a40a9e59-eb5f-4910-8689-ad53a7191089.png"
                  alt="Traditional artwork"
                  className="rounded-lg shadow-md h-24 w-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Stories Behind Our Crafts</h2>
              <p className="text-gray-700 mb-6">
                Rooted in the sacred land of Lord Jagannath, our artisans carry forward centuries-old traditions that have flourished in the temple town of Puri and across Odisha. From the intricate Pattachitra paintings to the timeless Dhokra brass work, each piece embodies the spiritual and cultural heritage of this blessed region.
              </p>
              <p className="text-gray-700 mb-8">
                Our collection showcases the diverse artistic expressions that have evolved around the Jagannath Temple - from traditional masks that tell stories of deities to stone carvings that mirror ancient temple architecture, and vibrant crafts that celebrate the region's festive spirit.
              </p>
              <Link to="/artisans">
                <Button className="bg-terracotta hover:bg-terracotta/90">
                  Meet Our Artisans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Experiences Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Travel Experiences</h2>
              <p className="mt-2 text-gray-600">Immerse yourself in authentic cultural adventures</p>
            </div>
            <Link to="/travel" className="text-terracotta hover:text-terracotta/80 flex items-center">
              Explore All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.slice(0, 3).map((pkg) => (
              <PackageCard
                key={pkg.id}
                id={pkg.id}
                title={pkg.title}
                image={pkg.image}
                price={pkg.price}
                duration={pkg.duration}
                location={pkg.location}
                description={pkg.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Cultural Journey Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for unique handcrafted treasures or planning an authentic travel experience, we're here to connect you with the heart of India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-terracotta hover:bg-terracotta/90 px-6 py-6 text-lg w-full sm:w-auto">
                Shop Now
              </Button>
            </Link>
            <Link to="/travel">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg w-full sm:w-auto">
                Explore Travel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/lovable-uploads/e185eab1-654b-4737-b846-2cbf0d383eab.png"
                    alt="Customer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Neha Sharma</h4>
                  <p className="text-sm text-gray-500">Bhubaneswar</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was amazed by the intricate Pattachitra painting I purchased. The attention to detail and the vibrant colors truly capture the essence of Odisha's artistic heritage."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/lovable-uploads/7598f3c9-80d5-4a4d-b63c-71de2d859f68.png"
                    alt="Customer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Rohan Patel</h4>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The Dhokra brass elephant I bought is not just a decor piece, but a work of art. It's incredible how these artisans create such detailed pieces using traditional techniques."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Customer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Wilson</h4>
                  <p className="text-sm text-gray-500">London</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The brass decor pieces I ordered are now the centerpiece of my living room. The quality is remarkable, and I love that I'm supporting traditional artisans directly."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
