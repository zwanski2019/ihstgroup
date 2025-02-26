
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout section="ishtgroup">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Ishtgroup</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with innovative solutions
          </p>
        </div>
        {/* Placeholder for more content */}
      </div>
    </Layout>
  );
}
