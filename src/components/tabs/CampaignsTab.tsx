import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Sparkles } from "lucide-react";

const campaigns = [
  { name: "Summer Collection Auto", type: "Automatic", status: "Active", bid: "$0.75", spend: "$124.50", sales: "$1,847.20", auto: true },
  { name: "Top Sellers Manual", type: "Manual", status: "Active", bid: "$0.85", spend: "$98.30", sales: "$1,234.80", auto: true },
  { name: "High Review Products", type: "Automatic", status: "Paused", bid: "$0.65", spend: "$67.20", sales: "$892.40", auto: true },
  { name: "Holiday Special", type: "Manual", status: "Active", bid: "$0.90", spend: "$156.80", sales: "$2,103.50", auto: false },
  { name: "Best Sellers Auto", type: "Automatic", status: "Active", bid: "$0.70", spend: "$89.40", sales: "$1,456.30", auto: true },
  { name: "Brand Defense", type: "Manual", status: "Active", bid: "$1.20", spend: "$234.60", sales: "$3,420.80", auto: false },
];

export const CampaignsTab = () => {
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search campaigns..." className="pl-10" />
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Campaigns Table */}
      <Card className="p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">All Campaigns</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-primary">{campaigns.filter(c => c.auto).length}</span> auto-created campaigns
            </p>
          </div>
          <Button variant="outline" size="sm">Export</Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Campaign</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Bid</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Spend</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Sales</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{campaign.name}</span>
                      {campaign.auto && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Auto
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{campaign.type}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={campaign.status === "Active" ? "default" : "secondary"} 
                           className={campaign.status === "Active" ? "bg-green-500/10 text-green-600 border-green-500/20" : ""}>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{campaign.bid}</td>
                  <td className="py-3 px-4 text-muted-foreground">{campaign.spend}</td>
                  <td className="py-3 px-4 font-medium text-green-600">{campaign.sales}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
