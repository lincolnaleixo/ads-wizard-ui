import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConfigTab } from "@/components/tabs/ConfigTab";
import { CampaignsTab } from "@/components/tabs/CampaignsTab";
import { AdGroupsTab } from "@/components/tabs/AdGroupsTab";
import { KeywordsTab } from "@/components/tabs/KeywordsTab";
import { HistoryTab } from "@/components/tabs/HistoryTab";
import { DollarSign, TrendingUp, Target, Users } from "lucide-react";

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

        {/* Tabs Navigation */}
        <Tabs defaultValue="config" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="config">Config</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="adgroups">Ad Groups</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="config" className="mt-6">
            <ConfigTab />
          </TabsContent>
          
          <TabsContent value="campaigns" className="mt-6">
            <CampaignsTab />
          </TabsContent>
          
          <TabsContent value="adgroups" className="mt-6">
            <AdGroupsTab />
          </TabsContent>
          
          <TabsContent value="keywords" className="mt-6">
            <KeywordsTab />
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <HistoryTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
