
export function Header() {
  return (
    <header className="py-6 mb-8 border-b">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="animate-spin-slow">
            <svg
              width="32"
              height="32"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M200 0C89.7 0 0 89.7 0 200s89.7 200 200 200 200-89.7 200-200S310.3 0 200 0zm0 380c-99.4 0-180-80.6-180-180S100.6 20 200 20s180 80.6 180 180-80.6 180-180 180z"
                fill="currentColor"
              />
              <path
                d="M200 60c-77.3 0-140 62.7-140 140s62.7 140 140 140 140-62.7 140-140S277.3 60 200 60zm0 260c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120-53.7 120-120 120z"
                fill="currentColor"
              />
              <path
                d="M200 140c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60zm0 100c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                fill="currentColor"
              />
            </svg>
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
