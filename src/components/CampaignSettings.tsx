import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Settings, Target, Zap } from "lucide-react";

export const CampaignSettings = () => {
  return (
    <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-secondary/10 rounded-lg">
          <Settings className="h-5 w-5 text-secondary" />
        </div>
        <h2 className="text-xl font-semibold">Campaign Settings</h2>
      </div>
      
      <div className="space-y-6">
        {/* Automatic Campaign */}
        <div className="space-y-3 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <Label htmlFor="auto-enabled" className="font-semibold">Automatic Campaign</Label>
            </div>
            <Switch id="auto-enabled" defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="auto-bid" className="text-sm text-muted-foreground">Default Bid ($)</Label>
            <Input 
              id="auto-bid" 
              type="number" 
              placeholder="0.50" 
              step="0.01"
              defaultValue="0.75"
            />
          </div>
        </div>

        {/* Manual Campaign */}
        <div className="space-y-3 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-secondary" />
              <Label htmlFor="manual-enabled" className="font-semibold">Manual Campaign</Label>
            </div>
            <Switch id="manual-enabled" defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-bid" className="text-sm text-muted-foreground">Default Bid ($)</Label>
            <Input 
              id="manual-bid" 
              type="number" 
              placeholder="0.50" 
              step="0.01"
              defaultValue="0.85"
            />
          </div>
        </div>

        {/* Product Targeting */}
        <div className="space-y-3 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-accent" />
              <Label htmlFor="targeting-enabled" className="font-semibold">Product Targeting</Label>
            </div>
            <Switch id="targeting-enabled" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="targeting-bid" className="text-sm text-muted-foreground">Default Bid ($)</Label>
            <Input 
              id="targeting-bid" 
              type="number" 
              placeholder="0.50" 
              step="0.01"
              defaultValue="0.65"
            />
          </div>
        </div>

        {/* Daily Budget */}
        <div className="space-y-2 pt-2">
          <Label htmlFor="daily-budget">Daily Budget ($)</Label>
          <Input 
            id="daily-budget" 
            type="number" 
            placeholder="50.00" 
            step="1.00"
            defaultValue="100.00"
          />
        </div>
      </div>
    </Card>
  );
};

const Package = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);
