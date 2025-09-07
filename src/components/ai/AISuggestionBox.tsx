import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Sparkles, Loader2, X, Send, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/data/sampleData";
import ProductCard from "@/components/product/ProductCard";

interface SuggestedProduct {
  product: any;
  reason: string;
  matchScore: number;
}

const AISuggestionBox = () => {
  const { toast } = useToast();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [textQuery, setTextQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestedProduct[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  const analyzeImageAndSuggest = async () => {
    if (!uploadedImage && !textQuery.trim()) {
      toast({
        title: "Input Required",
        description: "Please upload an image or describe your space",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      // Simulate AI-based suggestions based on common room scenarios
      const colorPalettes = {
        warm: ["Madhubani", "Warli", "Terracotta", "Dokra"],
        cool: ["Blue Pottery", "Pattachitra", "Dhokra", "Marble"],
        neutral: ["Bamboo", "Jute", "Wood Carving", "Stone"],
        vibrant: ["Rajasthani", "Madhubani", "Kutch", "Phulkari"],
      };

      const spaceTypes = {
        living: ["Wall Art", "Decoratives", "Textiles", "Pottery"],
        bedroom: ["Textiles", "Wall Art", "Crafts", "Decoratives"],
        office: ["Wall Art", "Decoratives", "Desk Accessories"],
        dining: ["Pottery", "Serveware", "Table Decor"],
      };

      // Simulate color detection from image or text
      let detectedPalette = "warm";
      let detectedSpace = "living";
      
      if (textQuery.toLowerCase().includes("blue") || textQuery.toLowerCase().includes("cool")) {
        detectedPalette = "cool";
      } else if (textQuery.toLowerCase().includes("colorful") || textQuery.toLowerCase().includes("vibrant")) {
        detectedPalette = "vibrant";
      } else if (textQuery.toLowerCase().includes("minimal") || textQuery.toLowerCase().includes("neutral")) {
        detectedPalette = "neutral";
      }

      if (textQuery.toLowerCase().includes("bedroom")) {
        detectedSpace = "bedroom";
      } else if (textQuery.toLowerCase().includes("office") || textQuery.toLowerCase().includes("work")) {
        detectedSpace = "office";
      } else if (textQuery.toLowerCase().includes("dining") || textQuery.toLowerCase().includes("kitchen")) {
        detectedSpace = "dining";
      }

      // Get suggested products based on analysis
      const suggestedCategories = colorPalettes[detectedPalette as keyof typeof colorPalettes];
      const suggestedTypes = spaceTypes[detectedSpace as keyof typeof spaceTypes];

      const matchingProducts = allProducts
        .filter(product => {
          const categoryMatch = suggestedCategories.some(cat => 
            product.category.toLowerCase().includes(cat.toLowerCase()) ||
            product.name.toLowerCase().includes(cat.toLowerCase()) ||
            product.craftType?.toLowerCase().includes(cat.toLowerCase())
          );
          const typeMatch = suggestedTypes.some(type => 
            product.category.toLowerCase().includes(type.toLowerCase())
          );
          return categoryMatch || typeMatch;
        })
        .slice(0, 6)
        .map(product => ({
          product,
          reason: generateReason(product, detectedPalette, detectedSpace),
          matchScore: Math.random() * 30 + 70, // Random score between 70-100
        }))
        .sort((a, b) => b.matchScore - a.matchScore);

      setSuggestions(matchingProducts);
      setShowResults(true);
      setIsAnalyzing(false);

      toast({
        title: "Analysis Complete! ✨",
        description: `Found ${matchingProducts.length} perfect matches for your space`,
      });
    }, 2500);
  };

  const generateReason = (product: any, palette: string, space: string) => {
    const reasons = [
      `Perfect for ${palette} color schemes and ${space} spaces`,
      `This ${product.craftType || product.category} complements your ${palette} aesthetic beautifully`,
      `Ideal for adding cultural richness to your ${space}`,
      `The traditional patterns will enhance your ${palette} decor`,
      `A stunning centerpiece for ${space} rooms with ${palette} tones`,
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
  };

  const handleTextSuggestion = () => {
    if (!textQuery.trim()) {
      toast({
        title: "Please describe your space",
        description: "Tell us about your room's style, colors, or what you're looking for",
        variant: "destructive",
      });
      return;
    }
    analyzeImageAndSuggest();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo to-terracotta text-white p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            AI Cultural Design Assistant
          </CardTitle>
          <CardDescription className="text-white/90 text-sm sm:text-base">
            Get personalized product recommendations for your space
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6">
          <Tabs defaultValue="image" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="image" className="text-xs sm:text-sm">
                <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Upload Room Photo</span>
                <span className="sm:hidden">Upload</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="text-xs sm:text-sm">
                <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Describe Your Space</span>
                <span className="sm:hidden">Describe</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="image" className="space-y-4">
              <div>
                <Label htmlFor="image-upload">Upload a photo of your wall or room</Label>
                <p className="text-sm text-muted-foreground mb-4">
                  Our AI will analyze colors, style, and suggest matching cultural products
                </p>
                
                {!uploadedImage ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center hover:border-indigo transition-colors">
                    <Upload className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 sm:mb-4 text-gray-400" />
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Label
                      htmlFor="image-upload"
                      className="cursor-pointer text-indigo hover:text-indigo/80 text-sm sm:text-base"
                    >
                      Click to upload or drag and drop
                    </Label>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded room"
                      className="w-full h-48 sm:h-64 object-cover rounded-lg"
                    />
                    <Button
                      onClick={removeImage}
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              
              <Button
                onClick={analyzeImageAndSuggest}
                disabled={!uploadedImage || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing your space...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get AI Suggestions
                  </>
                )}
              </Button>
            </TabsContent>
            
            <TabsContent value="text" className="space-y-4">
              <div>
                <Label htmlFor="text-query">Describe your space and preferences</Label>
                <Textarea
                  id="text-query"
                  placeholder="E.g., I have a minimalist living room with white walls and wooden furniture. Looking for colorful wall art that adds warmth..."
                  value={textQuery}
                  onChange={(e) => setTextQuery(e.target.value)}
                  className="min-h-32 mt-2"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs sm:text-sm text-muted-foreground">Quick options:</span>
                {["Modern living room", "Traditional bedroom", "Minimalist office", "Colorful dining space"].map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    size="sm"
                    onClick={() => setTextQuery(option)}
                    className="text-xs sm:text-sm"
                  >
                    {option}
                  </Button>
                ))}
              </div>
              
              <Button
                onClick={handleTextSuggestion}
                disabled={!textQuery.trim() || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing preferences...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Personalized Suggestions
                  </>
                )}
              </Button>
            </TabsContent>
          </Tabs>
          
          {/* Results Section */}
          {showResults && suggestions.length > 0 && (
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                AI-Curated Recommendations for Your Space
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {suggestions.map(({ product, reason, matchScore }, index) => (
                  <div key={product.id} className="relative">
                    <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-indigo to-terracotta text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {Math.round(matchScore)}% Match
                    </div>
                    <ProductCard {...product} />
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AISuggestionBox;