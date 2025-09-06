
import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TravelInquiryForm from "@/components/travel/TravelInquiryForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, Star, CreditCard } from "lucide-react";
import { allPackages } from "@/data/sampleData";
import UPIPaymentModal from "@/components/payment/UPIPaymentModal";

const TravelDetail = () => {
  const { packageId } = useParams();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const pkg = allPackages.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <p className="text-gray-600">The travel package you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[400px] overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto px-4">
              <Badge className="bg-terracotta mb-4">{pkg.type}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-white text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {pkg.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">₹{pkg.price.toLocaleString()}</span>
                  <Button 
                    onClick={() => setShowPaymentModal(true)}
                    className="bg-white text-terracotta hover:bg-white/90"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Experience</h2>
              <p className="text-gray-700 mb-6">{pkg.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Professional local guide</li>
                <li>All transportation during the tour</li>
                <li>Accommodation as per itinerary</li>
                <li>Traditional meals and refreshments</li>
                <li>Cultural activities and workshops</li>
                <li>Entry fees to monuments and attractions</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Authentic cultural immersion with local communities</li>
                <li>Visit to traditional artisan workshops</li>
                <li>Scenic landscapes and historic sites</li>
                <li>Traditional cuisine experiences</li>
                <li>Photography opportunities</li>
              </ul>
            </div>
          </div>

          {/* Inquiry Form */}
          <div id="inquiry">
            <TravelInquiryForm packageId={pkg.id} packageName={pkg.title} />
          </div>
        </div>
      </div>
      
      <UPIPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={pkg.price}
        productName={pkg.title}
        type="travel"
      />
    </Layout>
  );
};

export default TravelDetail;
