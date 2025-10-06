import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Plus, Pause, Play, TrendingUp } from "lucide-react";

const historyEvents = [
  { 
    timestamp: "2024-01-15 14:32:00", 
    action: "Campaign Created", 
    details: "Created 3 new campaigns (2 Automatic, 1 Manual) for products with 4+ stars and 50+ reviews",
    campaigns: 3,
    products: 47,
    icon: Plus,
    color: "primary"
  },
  { 
    timestamp: "2024-01-15 10:15:00", 
    action: "Bid Adjusted", 
    details: "Increased bids for 12 high-performing keywords in 'Summer Collection Auto'",
    keywords: 12,
    avgIncrease: "+15%",
    icon: TrendingUp,
    color: "secondary"
  },
  { 
    timestamp: "2024-01-14 18:45:00", 
    action: "Campaign Paused", 
    details: "Paused 'High Review Products' campaign due to low conversion rate (< 2%)",
    campaigns: 1,
    reason: "Low conversion",
    icon: Pause,
    color: "accent"
  },
  { 
    timestamp: "2024-01-14 09:20:00", 
    action: "Campaign Created", 
    details: "Generated 2 campaigns for newly qualified products (rating improved to 4.5+)",
    campaigns: 2,
    products: 23,
    icon: Plus,
    color: "primary"
  },
  { 
    timestamp: "2024-01-13 16:30:00", 
    action: "Campaign Reactivated", 
    details: "Resumed 'Best Sellers Auto' after performance improvement",
    campaigns: 1,
    icon: Play,
    color: "secondary"
  },
  { 
    timestamp: "2024-01-13 11:10:00", 
    action: "Bid Adjusted", 
    details: "Decreased bids for 8 underperforming keywords",
    keywords: 8,
    avgDecrease: "-20%",
    icon: TrendingUp,
    color: "accent"
  },
];

const iconColorMap: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
  accent: "text-accent bg-accent/10",
};

export const HistoryTab = () => {
  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Automation Activity</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Actions</p>
            <p className="text-2xl font-bold text-primary">{historyEvents.length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Campaigns Created</p>
            <p className="text-2xl font-bold text-secondary">8</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Last Activity</p>
            <p className="text-2xl font-bold text-accent">Today</p>
          </div>
        </div>
      </Card>

      {/* History Timeline */}
      <Card className="p-6 shadow-[var(--shadow-card)]">
        <h3 className="text-lg font-semibold mb-6">Activity Log</h3>
        
        <div className="space-y-4">
          {historyEvents.map((event, i) => (
            <div 
              key={i} 
              className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              <div className={`p-3 rounded-lg h-fit ${iconColorMap[event.color]}`}>
                <event.icon className="h-5 w-5" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{event.action}</h4>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Auto
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.details}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {event.timestamp}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {event.campaigns && (
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {event.campaigns} campaign{event.campaigns > 1 ? 's' : ''}
                    </span>
                  )}
                  {event.products && (
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {event.products} products
                    </span>
                  )}
                  {event.keywords && (
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {event.keywords} keywords
                    </span>
                  )}
                  {event.avgIncrease && (
                    <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-600">
                      {event.avgIncrease} avg increase
                    </span>
                  )}
                  {event.avgDecrease && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-600">
                      {event.avgDecrease} avg decrease
                    </span>
                  )}
                  {event.reason && (
                    <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                      {event.reason}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
