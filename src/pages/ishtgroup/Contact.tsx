
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your interest. We'll be in touch shortly.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout section="ishtgroup">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact Ishtgroup</h1>
        
        <div className="grid gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Let's discuss how we can help your business grow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">Send Message</Button>
          </form>

          <div className="space-y-4 pt-4">
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">contact@ishtgroup.com</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-muted-foreground">+216 24 225 975</p>
            </div>
            <div>
              <h3 className="font-medium">Office</h3>
              <p className="text-muted-foreground">Berges du Lac, Tunis</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
