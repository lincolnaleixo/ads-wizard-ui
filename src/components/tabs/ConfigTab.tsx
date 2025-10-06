import { FilterCard } from "@/components/FilterCard";
import { CampaignSettings } from "@/components/CampaignSettings";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

export const ConfigTab = () => {
  return (
    <div className="space-y-6">
      {/* Automation Explanation */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 shadow-[var(--shadow-card)]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Campaign Automation</h3>
            <p className="text-muted-foreground mb-4">
              Configure your product filters and campaign settings below. When you click "Generate Campaigns", 
              the system will automatically create optimized ad campaigns for all products matching your criteria, 
              using the bid settings you've configured for each campaign type.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium">
                Auto Product Selection
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary font-medium">
                Smart Bidding
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/10 text-accent font-medium">
                Multi-Campaign Types
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Filters and Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FilterCard />
        <CampaignSettings />
      </div>

      {/* Action Button */}
      <Card className="p-6 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">Ready to Generate Campaigns?</h3>
            <p className="text-muted-foreground">
              Based on your filters, approximately <span className="font-semibold text-foreground">47 products</span> will be included in the automated campaigns.
            </p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)] whitespace-nowrap">
            <Play className="h-5 w-5 mr-2" />
            Generate Campaigns
          </Button>
        </div>
      </Card>
    </div>
  );
};
