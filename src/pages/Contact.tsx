
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">Get in Touch</h1>
        <p className="text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          Have questions about our products or travel experiences? Interested in collaborating with us? 
          We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="Enter your name"
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
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is your message about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90 py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-terracotta mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Our Address</p>
                    <p className="text-gray-700">
                      123 Craft Lane, Sambalpur<br />
                      Odisha, 768001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-terracotta mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-700">info@indracrafts.com</p>
                    <p className="text-gray-700">support@indracrafts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-terracotta mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-sand rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <p className="text-gray-700 mb-4">
                Follow us on social media for updates on new products, travel experiences, and artisan stories.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full hover:bg-terracotta hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-terracotta hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-terracotta hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-terracotta hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-indigo text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Looking to Partner?</h3>
              <p className="mb-4">
                We're always open to collaborations with artisan groups, travel experts, homestays, 
                and organizations working in sustainable development and heritage preservation.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn About Partnerships
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section - To be replaced with an actual map in a real implementation */}
        <div className="mt-16 h-96 bg-gray-300 rounded-lg shadow-md overflow-hidden relative">
          {/* Placeholder for a map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600">Interactive map will be displayed here</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I track my order?</h3>
              <p className="text-gray-700">
                Once your order is shipped, you'll receive a tracking number via email. You can use this to 
                track your package on our website under "My Orders" or through the courier's website.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
              <p className="text-gray-700">
                Yes, we ship to select countries internationally. Shipping times and costs vary by location. 
                You can see estimated delivery times at checkout before confirming your order.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I book a travel experience?</h3>
              <p className="text-gray-700">
                You can inquire about our travel packages through the form on our Travel page. 
                One of our travel experts will contact you to discuss details and customize your experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you support artisans?</h3>
              <p className="text-gray-700">
                We work directly with artisans and pay fair prices for their crafts. We also provide 
                training, market access, and digital storytelling support to help them reach a wider audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
