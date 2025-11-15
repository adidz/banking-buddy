import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Play, CheckCircle2 } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  dueTime: string;
  timeSpent: number;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-progress': return <Play className="w-4 h-4" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Today's Tasks</h2>
        <Badge variant="secondary">{tasks.length} tasks</Badge>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    {getStatusIcon(task.status)}
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-1">{task.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Due: {task.dueTime}
                  </span>
                  {task.timeSpent > 0 && (
                    <span>Time spent: {task.timeSpent}m</span>
                  )}
                </div>
              </div>
              <Button size="sm" variant={task.status === 'in-progress' ? 'default' : 'outline'}>
                {task.status === 'in-progress' ? 'Continue' : 'Start'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TaskList;
