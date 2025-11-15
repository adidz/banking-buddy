import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Trophy, Award, Star, TrendingUp } from 'lucide-react';
import { mockEmployeeRewards } from '@/data/mockData';

const RewardsGamification = () => {
  return (
    <div className="space-y-6">
      {/* Top Performer Highlight */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 bg-primary rounded-full">
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Top Performer of the Month</h2>
            <p className="text-muted-foreground">Congratulations to our innovation leader!</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-6 bg-background rounded-lg border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {mockEmployeeRewards[0].name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold">{mockEmployeeRewards[0].name}</h3>
              <div className="flex gap-2 mt-1">
                {mockEmployeeRewards[0].badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-3xl font-bold text-primary mb-1">
              <Coins className="w-8 h-8" />
              {mockEmployeeRewards[0].coins}
            </div>
            <p className="text-sm text-muted-foreground">Total Coins Earned</p>
          </div>
        </div>
      </Card>

      {/* Leaderboard */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Coin Leaderboard</h3>
          <Badge variant="outline" className="text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            This Month
          </Badge>
        </div>

        <div className="space-y-3">
          {mockEmployeeRewards.map((employee) => (
            <div 
              key={employee.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                employee.rank <= 3 ? 'bg-primary/5 border-primary/20' : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  employee.rank === 1 ? 'bg-primary text-primary-foreground' :
                  employee.rank === 2 ? 'bg-muted text-foreground' :
                  employee.rank === 3 ? 'bg-muted text-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {employee.rank === 1 && <Trophy className="w-6 h-6" />}
                  {employee.rank === 2 && <Award className="w-5 h-5" />}
                  {employee.rank === 3 && <Award className="w-5 h-5" />}
                  {employee.rank > 3 && `#${employee.rank}`}
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{employee.name}</h4>
                  <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{employee.projects} projects</span>
                    <span>•</span>
                    <span>{employee.commitsThisMonth} commits</span>
                    <span>•</span>
                    <span>{employee.bugsFixed} bugs fixed</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {employee.badges.slice(0, 2).map((badge) => (
                      <Badge key={badge} variant="outline" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xl font-bold text-primary">
                  <Coins className="w-6 h-6" />
                  {employee.coins}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Coin Earning Rules */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">How to Earn Coins</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">10 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per merged pull request</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">5 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per bug fixed</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">50 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per successful deployment</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">100 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per innovative project shipped</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">2 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per code review completed</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-semibold">5 coins</span>
            </div>
            <p className="text-sm text-muted-foreground">Per vote received on project</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RewardsGamification;
