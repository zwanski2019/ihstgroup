
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

export function CaseForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    situation: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country || !formData.situation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
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
              <SelectItem value="syria">Syria</SelectItem>
              <SelectItem value="afghanistan">Afghanistan</SelectItem>
              <SelectItem value="ukraine">Ukraine</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="situation">Describe the Situation</Label>
          <Textarea
            id="situation"
            placeholder="Please describe the current situation and reasons for seeking refuge..."
            className="min-h-[150px]"
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
