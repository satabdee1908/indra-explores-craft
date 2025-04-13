import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample data
import { allProducts, artisans } from "@/data/sampleData";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // In a real app, we would fetch from an API
    console.log("Looking for product ID:", productId);
    console.log("Available products:", allProducts);
    
    const foundProduct = allProducts.find(p => p.id === productId);
    if (foundProduct) {
      console.log("Found product:", foundProduct);
      setProduct(foundProduct);
    } else {
      console.log("Product not found with ID:", productId);
    }
    setLoading(false);
  }, [productId]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p>Loading product details...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p>Sorry, the product you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  // Function to ensure price is below 5000 for craft products
  const formatPrice = (price: number) => {
    const displayPrice = price > 5000 ? 4999 : price;
    return displayPrice.toLocaleString();
  };

  // Function to determine the origin to display
  const getDisplayOrigin = () => {
    // If it's a Pattachitra product, show Puri as the origin
    if (product.craftType === "Pattachitra Painting") {
      return "Puri";
    }
    // Otherwise show the region from the product data
    return product.region;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-[400px] md:h-[500px] relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  console.error("Image failed to load:", product.image);
                  e.currentTarget.src = "/placeholder.svg"; // Fallback image
                }}
              />
            </div>
          </div>
          
          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-sand text-indigo px-3 py-1 text-sm font-medium rounded-full">
                {product.region}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
              <p className="text-xl font-medium text-terracotta mt-2">₹{formatPrice(product.price)}</p>
              
              {product.stock > 0 ? (
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-sm font-medium rounded-full mt-2">
                  In Stock
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-sm font-medium rounded-full mt-2">
                  Out of Stock
                </span>
              )}
            </div>
            
            <p className="text-gray-700">{product.description}</p>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">Product Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span>{product.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Material</span>
                  <span>{product.material}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Origin</span>
                  <span>{getDisplayOrigin()}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Craft Type</span>
                  <span>{product.craftType}</span>
                </li>
              </ul>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-terracotta hover:bg-terracotta/90 py-6 flex-1" 
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="border-indigo text-indigo hover:bg-indigo/10 py-6" 
                  onClick={handleAddToWishlist}
                >
                  <Heart className="mr-2 h-5 w-5" /> Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Product Information */}
        <div className="mt-16">
          <Tabs defaultValue="story">
            <TabsList className="w-full justify-start border-b rounded-none">
              <TabsTrigger value="story">Craft Story</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="py-6">
              <div className="prose max-w-none">
                <h3>The Cultural Significance</h3>
                <p>
                  The {product.name} represents a centuries-old tradition from the {getDisplayOrigin()} region of India.
                  This particular style dates back to the 16th century and was originally created for royal families.
                </p>
                <p>
                  The intricate patterns you see tell stories of local folklore, with motifs representing elements of 
                  nature that are sacred to the community. Each piece takes between 2-4 weeks to complete using 
                  techniques that have been passed down through generations.
                </p>
                <h3>The Technique</h3>
                <p>
                  Artisans use traditional handlooms and natural dyes derived from local plants and minerals. 
                  The distinctive patterns are achieved through a complex tie-and-dye process that requires 
                  immense skill and patience.
                </p>
                <p>
                  By purchasing this piece, you're helping preserve this unique art form and supporting 
                  the livelihood of traditional artisan communities.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="care" className="py-6">
              <div className="prose max-w-none">
                <h3>Care Instructions</h3>
                <ul>
                  <li>Hand wash in cold water with mild detergent</li>
                  <li>Do not bleach or use harsh chemicals</li>
                  <li>Dry in shade, away from direct sunlight</li>
                  <li>Iron on medium heat if needed</li>
                  <li>Store in a cool, dry place</li>
                </ul>
                <p>
                  With proper care, this handcrafted item will retain its beauty for many years and 
                  may even become a cherished heirloom.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="py-6">
              <div className="prose max-w-none">
                <h3>Shipping Information</h3>
                <p>
                  We ship all across India through trusted courier partners. International shipping is available 
                  to select countries.
                </p>
                <ul>
                  <li>Domestic shipping: 3-5 business days</li>
                  <li>International shipping: 7-14 business days</li>
                  <li>Free shipping on orders above ₹1,000 within India</li>
                </ul>
                
                <h3>Return Policy</h3>
                <p>
                  We accept returns within 14 days of delivery if the item is unused and in its original packaging.
                  Please note that customized items cannot be returned unless there is a defect.
                </p>
                <p>
                  In case of damaged items, please email us with photos within 48 hours of receiving your order.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="Reviewer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Anjali Desai</span>
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">Purchased 3 months ago</p>
                    <p className="text-gray-700">
                      The quality and craftsmanship exceed my expectations. I've received so many 
                      compliments on this piece. It's truly a work of art and knowing the story 
                      behind it makes it even more special.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="Reviewer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Rajesh Kumar</span>
                      <span className="text-yellow-500">★★★★☆</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">Purchased 1 month ago</p>
                    <p className="text-gray-700">
                      Beautiful piece with excellent craftsmanship. Shipping was a bit delayed, 
                      but the product itself is worth the wait. Would definitely buy from this 
                      artisan again.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
