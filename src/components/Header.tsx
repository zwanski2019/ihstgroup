
import { Unfold } from "lucide-react";

export function Header() {
  return (
    <header className="py-6 mb-8 border-b">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="animate-spin-slow">
            <Unfold className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Refugee Response Generator</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          Generate appropriate responses for refugee cases based on international guidelines
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Created with ♥ by Zwanski
        </p>
      </div>
    </header>
  );
}
