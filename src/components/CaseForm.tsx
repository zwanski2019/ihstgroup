
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

export function CaseForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    cardNumber: "",
    situation: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country || !formData.situation || !formData.cardNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Validate refugee card number format (UNHCR-YYYY-XXXXXX)
    const cardNumberRegex = /^UNHCR-\d{4}-\d{6}$/;
    if (!cardNumberRegex.test(formData.cardNumber)) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid refugee card number (format: UNHCR-YYYY-XXXXXX)",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Response Generated",
        description: "Your case has been processed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the case. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="country">Country of Origin</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger id="country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {/* Middle East */}
              <SelectItem value="syria">Syria</SelectItem>
              <SelectItem value="iraq">Iraq</SelectItem>
              <SelectItem value="yemen">Yemen</SelectItem>
              <SelectItem value="palestine">Palestine</SelectItem>
              <SelectItem value="lebanon">Lebanon</SelectItem>
              <SelectItem value="jordan">Jordan</SelectItem>

              {/* Africa */}
              <SelectItem value="sudan">Sudan</SelectItem>
              <SelectItem value="south_sudan">South Sudan</SelectItem>
              <SelectItem value="somalia">Somalia</SelectItem>
              <SelectItem value="ethiopia">Ethiopia</SelectItem>
              <SelectItem value="eritrea">Eritrea</SelectItem>
              <SelectItem value="congo">Democratic Republic of the Congo</SelectItem>

              {/* Asia */}
              <SelectItem value="afghanistan">Afghanistan</SelectItem>
              <SelectItem value="myanmar">Myanmar</SelectItem>
              <SelectItem value="bangladesh">Bangladesh</SelectItem>
              <SelectItem value="pakistan">Pakistan</SelectItem>

              {/* Europe */}
              <SelectItem value="ukraine">Ukraine</SelectItem>
              <SelectItem value="russia">Russia</SelectItem>
              <SelectItem value="belarus">Belarus</SelectItem>

              {/* Americas */}
              <SelectItem value="venezuela">Venezuela</SelectItem>
              <SelectItem value="colombia">Colombia</SelectItem>
              <SelectItem value="haiti">Haiti</SelectItem>

              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Refugee Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="UNHCR-YYYY-XXXXXX"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.toUpperCase() })}
            className="font-mono"
          />
          <p className="text-xs text-muted-foreground">
            Format: UNHCR-YYYY-XXXXXX (e.g., UNHCR-2024-123456)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="situation">Describe the Situation</Label>
          <Textarea
            id="situation"
            placeholder="Please provide detailed information about your current situation, including:
- Reasons for leaving your country
- Current circumstances
- Any immediate risks or threats
- Family members affected
- Previous asylum applications (if any)"
            className="min-h-[200px]"
            value={formData.situation}
            onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Response...
            </>
          ) : (
            "Generate Response"
          )}
        </Button>
      </form>
    </Card>
  );
}
