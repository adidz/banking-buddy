import MetricCard from '@/components/dashboard/MetricCard';
import TaskList from '@/components/dashboard/TaskList';
import { mockMetrics, mockTasks } from '@/data/mockData';
import { 
  CheckSquare, 
  Target, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

const AnalystDashboard = () => {
  const metrics = mockMetrics.analyst;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Operations Analyst Dashboard</h1>
        <p className="text-muted-foreground">
          Your tasks, performance metrics, and productivity insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Tasks Today"
          value={metrics.tasksToday}
          icon={CheckSquare}
          trend="neutral"
          subtitle={`${metrics.completed} completed`}
        />
        <MetricCard
          title="Accuracy Score"
          value={`${metrics.accuracy}%`}
          change={2}
          icon={Target}
          trend="up"
          subtitle="Above target"
        />
        <MetricCard
          title="Avg Task Time"
          value={`${metrics.avgTime}m`}
          change={-8}
          icon={Clock}
          trend="up"
          subtitle="Faster completion"
        />
        <MetricCard
          title="Deep Work Today"
          value={`${metrics.deepWorkToday}h`}
          icon={TrendingUp}
          trend="up"
          subtitle="Focused time"
        />
      </div>

      <TaskList tasks={mockTasks.filter(t => t.assignee === 'Priya Sharma')} />
    </div>
  );
};

export default AnalystDashboard;
