import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
}

const MetricCard = ({ title, value, change, icon: Icon, trend = 'neutral', subtitle }: MetricCardProps) => {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-success';
    if (trend === 'down') return 'text-destructive';
    return 'text-muted-foreground';
  };

  const getTrendBg = () => {
    if (trend === 'up') return 'bg-success/10';
    if (trend === 'down') return 'bg-destructive/10';
    return 'bg-muted';
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${getTrendBg()}`}>
          <Icon className={`w-6 h-6 ${getTrendColor()}`} />
        </div>
        {change !== undefined && (
          <span className={`text-sm font-semibold ${getTrendColor()}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      )}
    </Card>
  );
};

export default MetricCard;
