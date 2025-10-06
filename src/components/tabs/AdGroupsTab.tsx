import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Sparkles } from "lucide-react";

const adGroups = [
  { name: "Electronics - High Performers", campaign: "Summer Collection Auto", products: 12, status: "Active", defaultBid: "$0.75", auto: true },
  { name: "Home & Kitchen Best", campaign: "Top Sellers Manual", products: 8, status: "Active", defaultBid: "$0.85", auto: true },
  { name: "Sports Outdoor Premium", campaign: "High Review Products", products: 15, status: "Paused", defaultBid: "$0.65", auto: true },
  { name: "Holiday Electronics", campaign: "Holiday Special", products: 10, status: "Active", defaultBid: "$0.90", auto: false },
  { name: "Top Rated Products", campaign: "Best Sellers Auto", products: 20, status: "Active", defaultBid: "$0.70", auto: true },
  { name: "Brand Keywords", campaign: "Brand Defense", products: 5, status: "Active", defaultBid: "$1.20", auto: false },
];

export const AdGroupsTab = () => {
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search ad groups..." className="pl-10" />
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Ad Groups Table */}
      <Card className="p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">All Ad Groups</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-primary">{adGroups.filter(g => g.auto).length}</span> auto-created ad groups
            </p>
          </div>
          <Button variant="outline" size="sm">Export</Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Ad Group</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Campaign</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Products</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Default Bid</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adGroups.map((group, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{group.name}</span>
                      {group.auto && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Auto
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{group.campaign}</td>
                  <td className="py-3 px-4 text-muted-foreground">{group.products}</td>
                  <td className="py-3 px-4">
                    <Badge variant={group.status === "Active" ? "default" : "secondary"} 
                           className={group.status === "Active" ? "bg-green-500/10 text-green-600 border-green-500/20" : ""}>
                      {group.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{group.defaultBid}</td>
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
