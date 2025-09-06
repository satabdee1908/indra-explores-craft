import Layout from "@/components/layout/Layout";
import AISuggestionBox from "@/components/ai/AISuggestionBox";
import { Sparkles, Palette, Home, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AIDesignAssistant = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo to-terracotta py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Design Assistant
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get personalized cultural product recommendations for your space using our intelligent design assistant
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-indigo/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-indigo" />
                </div>
                <h3 className="font-semibold mb-2">1. Share Your Space</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a photo of your room or describe your style preferences
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes colors, patterns, and style to understand your aesthetic
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-indigo/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-indigo" />
                </div>
                <h3 className="font-semibold mb-2">3. Get Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Receive curated cultural products that perfectly match your space
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Suggestion Box */}
      <section className="py-12 bg-white">
        <AISuggestionBox />
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Tips for Best Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-indigo font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Good Lighting</h3>
                <p className="text-sm text-muted-foreground">
                  Upload well-lit photos that clearly show your wall colors and existing decor
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <span className="text-terracotta font-semibold">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Include Context</h3>
                <p className="text-sm text-muted-foreground">
                  Show the full wall or area where you plan to place the products
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-indigo font-semibold">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Be Specific</h3>
                <p className="text-sm text-muted-foreground">
                  When describing your space, mention colors, style preferences, and room type
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <span className="text-terracotta font-semibold">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Consider Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Mention the size of your space to get appropriately sized recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIDesignAssistant;