
import { CaseForm } from "@/components/CaseForm";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-5xl py-6 animate-fadeIn">
        <CaseForm />
      </main>
    </div>
  );
};

export default Index;
