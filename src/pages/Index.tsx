
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      <div className="py-20 text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to International House of Sciences
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive solutions in business consulting and education
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/ishtgroup">Business Solutions</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/tutoring">Online Tutoring</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
