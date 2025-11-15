import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, Trophy, TrendingUp } from 'lucide-react';
import { mockEmployeeProjects } from '@/data/mockData';

const ProjectLeaderboard = () => {
  const [projects, setProjects] = useState(mockEmployeeProjects);
  const [votedProjects, setVotedProjects] = useState<Set<string>>(new Set());

  const handleVote = (projectId: string) => {
    if (votedProjects.has(projectId)) return;

    setProjects(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, votes: project.votes + 1 }
          : project
      ).sort((a, b) => b.votes - a.votes)
    );
    setVotedProjects(prev => new Set(prev).add(projectId));
  };

  const topThree = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <div className="space-y-6">
      {/* Top 3 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topThree.map((project, index) => (
          <Card 
            key={project.id} 
            className={`p-6 ${index === 0 ? 'border-2 border-primary shadow-lg' : ''}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                {index === 0 && <Trophy className="w-6 h-6 text-primary" />}
                {index === 1 && <Trophy className="w-5 h-5 text-muted-foreground" />}
                {index === 2 && <Trophy className="w-5 h-5 text-muted-foreground" />}
                <span className="text-2xl font-bold text-foreground">#{index + 1}</span>
              </div>
              <Badge variant={project.status === 'live' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Developer</span>
                <span className="font-medium">{project.developer}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Category</span>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span>{project.impact}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
                <span className="text-xl font-bold">{project.votes}</span>
              </div>
              <Button
                size="sm"
                onClick={() => handleVote(project.id)}
                disabled={votedProjects.has(project.id)}
              >
                {votedProjects.has(project.id) ? 'Voted' : 'Vote'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Other Innovative Projects</h3>
          <div className="space-y-3">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-semibold text-muted-foreground">
                      #{index + 4}
                    </span>
                    <h4 className="font-semibold">{project.title}</h4>
                    <Badge variant="outline" className="ml-auto">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>By {project.developer}</span>
                    <span>•</span>
                    <span>{project.submittedAt}</span>
                    <span>•</span>
                    <span>{project.impact}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">{project.votes}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleVote(project.id)}
                    disabled={votedProjects.has(project.id)}
                  >
                    {votedProjects.has(project.id) ? 'Voted' : 'Vote'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProjectLeaderboard;
