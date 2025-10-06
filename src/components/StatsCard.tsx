import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  return (
    <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className={`text-sm flex items-center gap-1 ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}>
            <span>{trend === "up" ? "↑" : "↓"}</span>
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${
          trend === "up" ? "bg-green-500/10" : "bg-red-500/10"
        }`}>
          <Icon className={`h-6 w-6 ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`} />
        </div>
      </div>
    </Card>
  );
};
