import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Sparkles } from "lucide-react";

const keywords = [
  { keyword: "wireless headphones", matchType: "Broad", campaign: "Summer Collection Auto", bid: "$0.75", impressions: "12.4K", clicks: 342, conversions: 28, auto: true },
  { keyword: "bluetooth speaker", matchType: "Phrase", campaign: "Top Sellers Manual", bid: "$0.85", impressions: "8.9K", clicks: 278, conversions: 34, auto: true },
  { keyword: "running shoes men", matchType: "Exact", campaign: "High Review Products", bid: "$0.65", impressions: "15.2K", clicks: 412, conversions: 45, auto: true },
  { keyword: "kitchen mixer", matchType: "Broad", campaign: "Holiday Special", bid: "$0.90", impressions: "10.1K", clicks: 298, conversions: 38, auto: false },
  { keyword: "yoga mat", matchType: "Phrase", campaign: "Best Sellers Auto", bid: "$0.70", impressions: "20.3K", clicks: 567, conversions: 52, auto: true },
  { keyword: "coffee maker", matchType: "Exact", campaign: "Brand Defense", bid: "$1.20", impressions: "5.8K", clicks: 189, conversions: 41, auto: false },
];

export const KeywordsTab = () => {
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search keywords..." className="pl-10" />
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Keywords Table */}
      <Card className="p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">All Keywords</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-primary">{keywords.filter(k => k.auto).length}</span> auto-created keywords
            </p>
          </div>
          <Button variant="outline" size="sm">Export</Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Keyword</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Match Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Campaign</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Bid</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Impressions</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Clicks</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Conv.</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((keyword, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{keyword.keyword}</span>
                      {keyword.auto && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Auto
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{keyword.matchType}</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{keyword.campaign}</td>
                  <td className="py-3 px-4 text-muted-foreground">{keyword.bid}</td>
                  <td className="py-3 px-4 text-muted-foreground">{keyword.impressions}</td>
                  <td className="py-3 px-4 text-muted-foreground">{keyword.clicks}</td>
                  <td className="py-3 px-4 font-medium text-green-600">{keyword.conversions}</td>
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
