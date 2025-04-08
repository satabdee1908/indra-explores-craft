
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TravelInquiryFormProps {
  packageId?: string;
  packageName?: string;
}

const TravelInquiryForm = ({ packageId, packageName }: TravelInquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    numTravelers: "",
    message: packageName ? `I'm interested in the ${packageName} package.` : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Inquiry Submitted",
      description: "We've received your inquiry and will contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      numTravelers: "",
      message: packageName ? `I'm interested in the ${packageName} package.` : "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Plan Your Journey</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your contact number"
            />
          </div>
          <div>
            <label htmlFor="numTravelers" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Travelers
            </label>
            <Select 
              onValueChange={(value) => handleSelectChange("numTravelers", value)} 
              value={formData.numTravelers}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 person</SelectItem>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3-4">3-4 people</SelectItem>
                <SelectItem value="5+">5+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Travel Dates
          </label>
          <Input
            id="travelDates"
            name="travelDates"
            value={formData.travelDates}
            onChange={handleChange}
            placeholder="When would you like to travel?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your travel plans and any specific requirements"
            rows={4}
          />
        </div>
        
        <Button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90">
          Submit Inquiry
        </Button>
        
        <p className="text-xs text-gray-500 mt-2">
          We respect your privacy and will only use your information to process your inquiry.
        </p>
      </form>
    </div>
  );
};

export default TravelInquiryForm;
