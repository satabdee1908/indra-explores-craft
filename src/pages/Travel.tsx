
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PackageCard from "@/components/travel/PackageCard";
import TravelInquiryForm from "@/components/travel/TravelInquiryForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample data
import { allPackages } from "@/data/sampleData";

const Travel = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredPackages = activeTab === "all" 
    ? allPackages 
    : allPackages.filter(pkg => pkg.type === activeTab);

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative">
        <div className="w-full h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1470238660368-09c8261093ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80" 
            alt="Scenic view of Odisha" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo/40 flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto px-4">
              <Badge className="bg-terracotta mb-4">Authentic Experiences</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Discover the Hidden Gems of Odisha
              </h1>
              <p className="text-white text-lg mb-8">
                Immerse yourself in authentic cultural adventures with local guides and homestays
              </p>
              <Button className="bg-terracotta hover:bg-terracotta/90 text-white py-6 px-8 text-lg">
                Explore Packages
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Packages Section */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Experiences</h2>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All Packages</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
                <TabsTrigger value="nature">Nature</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPackages.map((pkg) => (
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
          
          {/* Inquiry Form */}
          <div className="lg:w-1/3">
            <TravelInquiryForm />
          </div>
        </div>

        {/* Why Travel With Us */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Travel With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Local Guides</h3>
              <p className="text-gray-600">
                Our guides are locals who offer authentic insights and access to places not found in guidebooks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Homestays</h3>
              <p className="text-gray-600">
                Experience genuine hospitality with our carefully selected homestays run by local families.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                Participate in local traditions, festivals, and cultural activities for a deeper connection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 20.25h-15a.75.75 0 010-1.5h15a.75.75 0 010 1.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-600">
                We tailor every journey to your preferences, creating a travel experience that's uniquely yours.
              </p>
            </div>
          </div>
        </div>

        {/* Destination Highlight - Sambalpur */}
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-indigo mb-4">Featured Destination</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Sambalpur</h2>
              <p className="text-gray-700 mb-6">
                Nestled in western Odisha, Sambalpur is a hidden gem waiting to be discovered. Known for its rich cultural heritage, Sambalpuri handlooms, and breathtaking natural landscapes, this region offers authentic experiences for travelers seeking something beyond the tourist trail.
              </p>
              <p className="text-gray-700 mb-6">
                Visit the historic Hirakud Dam, explore ancient temples with unique architecture, witness the intricate Sambalpuri tie-and-dye process, and immerse yourself in the vibrant local festivals that showcase the region's cultural diversity.
              </p>
              <p className="text-gray-700 mb-8">
                Our guided tours provide exclusive access to artisan workshops, peaceful countryside retreats, and meaningful interactions with local communities.
              </p>
              <Button className="bg-terracotta hover:bg-terracotta/90">
                View Sambalpur Packages
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                  alt="Sambalpur landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                  alt="Rural Sambalpur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1590177600463-127c218d84d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                  alt="Sambalpuri textile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
                  alt="Temple in Sambalpur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Travel;
