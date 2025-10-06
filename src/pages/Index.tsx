import { Header } from "@/components/Header";
import { FilterCard } from "@/components/FilterCard";
import { CampaignSettings } from "@/components/CampaignSettings";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Target, Users, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Spend"
            value="$12,450"
            change="12% vs last month"
            icon={DollarSign}
            trend="up"
          />
          <StatsCard
            title="Active Campaigns"
            value="24"
            change="8% vs last month"
            icon={Target}
            trend="up"
          />
          <StatsCard
            title="Conversions"
            value="1,847"
            change="23% vs last month"
            icon={TrendingUp}
            trend="up"
          />
          <StatsCard
            title="Impressions"
            value="284K"
            change="5% vs last month"
            icon={Users}
            trend="down"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FilterCard />
          <CampaignSettings />
        </div>

        {/* Action Card */}
        <Card className="p-8 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Ready to Launch Your Campaigns?</h3>
              <p className="text-muted-foreground">
                Configure your filters and settings above, then click to automatically create optimized ad campaigns.
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[var(--shadow-elegant)] whitespace-nowrap">
              <Play className="h-5 w-5 mr-2" />
              Generate Campaigns
            </Button>
          </div>
        </Card>

        {/* Preview Table */}
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Campaigns</h3>
            <Button variant="outline" size="sm">View All</Button>
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
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Summer Collection Auto", type: "Automatic", status: "Active", bid: "$0.75", spend: "$124.50", sales: "$1,847.20" },
                  { name: "Top Sellers Manual", type: "Manual", status: "Active", bid: "$0.85", spend: "$98.30", sales: "$1,234.80" },
                  { name: "High Review Products", type: "Automatic", status: "Paused", bid: "$0.65", spend: "$67.20", sales: "$892.40" },
                ].map((campaign, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{campaign.name}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {campaign.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        campaign.status === "Active" 
                          ? "bg-green-500/10 text-green-600" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{campaign.bid}</td>
                    <td className="py-3 px-4 text-muted-foreground">{campaign.spend}</td>
                    <td className="py-3 px-4 font-medium text-green-600">{campaign.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
