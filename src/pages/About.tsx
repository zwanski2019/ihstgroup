
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground">
              International House of Sciences is a premier educational support center in Lac 1, Tunis,
              dedicated to providing comprehensive educational solutions and business consulting services.
              Established in 2021, we've quickly become a trusted name in educational excellence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Empowering students and educators through tailored learning solutions while providing
              innovative business consulting services to organizations seeking growth and excellence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="text-muted-foreground">
              We are located in Berges du Lac, Tunis, where we serve our local and international
              clients with dedication and professionalism.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
