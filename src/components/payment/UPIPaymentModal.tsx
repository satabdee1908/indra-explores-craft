import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Smartphone, CreditCard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UPIPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  productName: string;
  type: "product" | "travel";
}

const UPIPaymentModal = ({ isOpen, onClose, amount, productName, type }: UPIPaymentModalProps) => {
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState<"upi" | "card" | null>(null);
  const [upiId, setUpiId] = useState("");
  const [processing, setProcessing] = useState(false);

  const upiApps = [
    { name: "Google Pay", icon: "📱", id: "gpay" },
    { name: "PhonePe", icon: "💜", id: "phonepe" },
    { name: "Paytm", icon: "💙", id: "paytm" },
    { name: "BHIM", icon: "🏦", id: "bhim" },
  ];

  const handleUPIPayment = async () => {
    if (!upiId && selectedMethod === "upi") {
      toast({
        title: "UPI ID Required",
        description: "Please enter your UPI ID to proceed",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful! ✅",
        description: `Your payment of ₹${amount} for ${productName} has been received.`,
      });
      setProcessing(false);
      onClose();
    }, 2000);
  };

  const handleUPIAppClick = (appId: string) => {
    setProcessing(true);
    
    // Generate UPI deep link
    const upiLink = `upi://pay?pa=suryodayaa@upi&pn=Suryodayaa&am=${amount}&cu=INR&tn=${encodeURIComponent(productName)}`;
    
    // Try to open UPI app
    window.open(upiLink, "_blank");
    
    setTimeout(() => {
      toast({
        title: "Payment Initiated",
        description: "Complete the payment in your UPI app",
      });
      setProcessing(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            Pay ₹{amount.toLocaleString()} for {productName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Payment Method Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Card
              className={`p-4 cursor-pointer transition-all ${
                selectedMethod === "upi" ? "border-primary bg-primary/5" : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedMethod("upi")}
            >
              <div className="text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">UPI</p>
              </div>
            </Card>
            
            <Card
              className={`p-4 cursor-pointer transition-all ${
                selectedMethod === "card" ? "border-primary bg-primary/5" : "hover:border-gray-400"
              }`}
              onClick={() => setSelectedMethod("card")}
            >
              <div className="text-center">
                <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Card</p>
              </div>
            </Card>
          </div>

          {/* UPI Payment Options */}
          {selectedMethod === "upi" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="upi-id">Enter UPI ID</Label>
                <Input
                  id="upi-id"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or pay using</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {upiApps.map((app) => (
                  <Button
                    key={app.id}
                    variant="outline"
                    className="h-14"
                    onClick={() => handleUPIAppClick(app.id)}
                    disabled={processing}
                  >
                    <span className="mr-2 text-xl">{app.icon}</span>
                    <span className="text-xs">{app.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Card Payment */}
          {selectedMethod === "card" && (
            <div className="text-center py-8 text-muted-foreground">
              <CreditCard className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Card payment integration coming soon!</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1" disabled={processing}>
              Cancel
            </Button>
            {selectedMethod === "upi" && (
              <Button
                onClick={handleUPIPayment}
                className="flex-1"
                disabled={processing || (!upiId && selectedMethod === "upi")}
              >
                {processing ? "Processing..." : "Pay Now"}
              </Button>
            )}
          </div>

          {/* QR Code Section */}
          {selectedMethod === "upi" && (
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground mb-2">Scan QR to pay</p>
              <div className="bg-gray-100 p-4 rounded-lg inline-block">
                <div className="w-32 h-32 bg-white rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400">QR Code</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UPIPaymentModal;