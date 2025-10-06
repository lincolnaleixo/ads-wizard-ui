import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AdAutomate
            </h1>
            <p className="text-xs text-muted-foreground">Amazon Advertising Suite</p>
          </div>
        </div>
        
        <Button variant="default" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <Sparkles className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>
    </header>
  );
};
