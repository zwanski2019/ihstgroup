
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout section="ishtgroup">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">About Ishtgroup</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2010, Ishtgroup has been at the forefront of business innovation, 
              helping organizations transform and grow through strategic consulting and 
              technological solutions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower businesses through innovative solutions and strategic guidance, 
              enabling them to thrive in an ever-evolving global marketplace.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {["Excellence in Service", "Innovation", "Integrity", "Client Success"].map((value, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
