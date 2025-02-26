
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Management Consulting",
      description: "Strategic guidance for business growth and optimization",
      features: [
        "Business Strategy",
        "Operations Management",
        "Change Management",
        "Performance Improvement"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology",
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Implementation Support",
        "Training & Support"
      ]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance and planning services",
      features: [
        "Financial Planning",
        "Risk Assessment",
        "Investment Strategy",
        "Cost Optimization"
      ]
    }
  ];

  return (
    <Layout section="ishtgroup">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
