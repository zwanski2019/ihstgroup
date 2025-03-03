import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Globe, LineChart, Users } from "lucide-react";
export default function Home() {
  const services = [{
    title: "Strategic Consulting",
    description: "Empower your business with data-driven strategies for sustainable growth and market leadership in Tunisia's competitive landscape.",
    icon: LineChart
  }, {
    title: "Digital Transformation",
    description: "Transform your organization with cutting-edge digital solutions tailored to Tunisia's unique business environment and global standards.",
    icon: Globe
  }, {
    title: "Organizational Excellence",
    description: "Optimize your business operations and build high-performing teams using internationally recognized methodologies adapted for Tunisian companies.",
    icon: Building
  }, {
    title: "Market Expansion",
    description: "Expand your Tunisian business regionally and globally with our expert guidance and international network of partners.",
    icon: Users
  }];
  return <Layout section="ishtgroup">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">Welcome to Ishtgroup</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tunisia's premier business consultancy, empowering enterprises with innovative solutions and strategic expertise since 2021.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/ishtgroup/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/ishtgroup/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Comprehensive business solutions tailored to the Tunisian market and international standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/ishtgroup/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-muted/30 p-8 rounded-lg">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
            <blockquote className="text-lg italic text-muted-foreground">
              "Ishtgroup has transformed our business operations completely. Their strategic insights and tailored solutions have helped us become a market leader in Tunisia. We highly recommend their services to any company looking to grow."
            </blockquote>
            <p className="font-medium">- Ahmed Ben Salah, CEO of TunisianTech</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 p-8 rounded-lg glass-morphism">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the ranks of Tunisia's most successful companies that have partnered with Ishtgroup for sustainable growth and innovation.
          </p>
          <Button asChild size="lg">
            <Link to="/ishtgroup/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </Layout>;
}