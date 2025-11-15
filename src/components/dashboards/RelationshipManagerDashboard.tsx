import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockMetrics, mockLeads } from '@/data/mockData';
import { 
  Users, 
  Phone, 
  Target, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const RelationshipManagerDashboard = () => {
  const metrics = mockMetrics.rm;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'hot': return 'destructive';
      case 'warm': return 'warning';
      case 'cold': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Relationship Manager Dashboard</h1>
        <p className="text-muted-foreground">
          Lead management, sales tracking, and performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Leads Today"
          value={metrics.leadsToday}
          icon={Users}
          trend="neutral"
          subtitle="Active pipeline"
        />
        <MetricCard
          title="Calls Made"
          value={metrics.callsMade}
          icon={Phone}
          trend="neutral"
          subtitle={`${metrics.followUpsDue} follow-ups due`}
        />
        <MetricCard
          title="Conversion Rate"
          value={`${metrics.conversionRate}%`}
          change={5}
          icon={Target}
          trend="up"
          subtitle="Above target"
        />
        <MetricCard
          title="Revenue"
          value={`$${(metrics.revenue / 1000).toFixed(0)}K`}
          change={15}
          icon={TrendingUp}
          trend="up"
          subtitle="This month"
        />
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Today's Leads</h2>
          <Badge variant="secondary">{mockLeads.length} active</Badge>
        </div>

        <div className="space-y-4">
          {mockLeads.map((lead) => (
            <div
              key={lead.id}
              className="p-5 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{lead.name}</h3>
                    <Badge variant={getPriorityColor(lead.priority)}>
                      {lead.priority}
                    </Badge>
                    <Badge variant="outline">{lead.stage}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Deal Value</p>
                      <p className="text-lg font-bold text-foreground">
                        ${(lead.value / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Last Contact</p>
                      <p className="text-sm text-foreground">{lead.lastContact}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4" />
                    <span>{lead.nextAction}</span>
                  </div>
                </div>

                <Button size="sm">
                  Take Action
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RelationshipManagerDashboard;
