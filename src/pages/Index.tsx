
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const businessFeatures = [
    {
      title: "Business Consulting",
      description: "Expert advice to optimize your business operations.",
      icon: Briefcase,
      features: [
        "Strategic Planning",
        "Process Optimization",
        "Market Analysis",
        "Growth Strategy"
      ]
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge tech to drive your business forward.",
      icon: LineChart,
      features: [
        "Digital Transformation",
        "Cloud Solutions",
        "Custom Software",
        "IT Infrastructure"
      ]
    }
  ];

  const educationFeatures = [
    {
      title: "Expert Tutoring",
      description: "Learn from experienced professionals in various fields.",
      icon: GraduationCap,
      features: [
        "Mathematics",
        "Sciences",
        "Languages",
        "Test Preparation"
      ]
    },
    {
      title: "Personalized Learning",
      description: "Tailored programs to meet your educational goals.",
      icon: Users,
      features: [
        "One-on-One Sessions",
        "Group Classes",
        "Online Learning",
        "Interactive Workshops"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          International House of Sciences
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your partner in business excellence and educational success. We provide comprehensive
          business consulting services and expert educational support.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/ishtgroup">Business Solutions</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tutoring">Online Tutoring</Link>
          </Button>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Business Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empowering businesses with innovative solutions and strategic guidance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Services Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Educational Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Personalized learning experiences for academic success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {educationFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions? We're here to help.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
