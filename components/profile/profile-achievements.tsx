import {
  Award,
  Book,
  FlaskRoundIcon as Flask,
  Pencil,
  Search,
  Star,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Achievement } from "@/lib/data/users";

interface ProfileAchievementsProps {
  achievements: Achievement[];
}

export function ProfileAchievements({
  achievements,
}: ProfileAchievementsProps) {
  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case "trophy":
        return <Trophy className="h-4 w-4" data-oid="jep_9gz" />;
      case "star":
        return <Star className="h-4 w-4" data-oid="3x4cx08" />;
      case "search":
        return <Search className="h-4 w-4" data-oid="pn-47yp" />;
      case "pencil":
        return <Pencil className="h-4 w-4" data-oid=":_q_lf_" />;
      case "flask":
        return <Flask className="h-4 w-4" data-oid="h4qls8j" />;
      case "book":
        return <Book className="h-4 w-4" data-oid="ojkfhdp" />;
      default:
        return <Award className="h-4 w-4" data-oid="nxna8nl" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "uncommon":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "rare":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "epic":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "legendary":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Card data-oid="l6wnld2">
      <CardHeader className="pb-2" data-oid="anrvhl9">
        <CardTitle className="text-lg" data-oid="1pgfi9n">
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent data-oid="82kz7fj">
        <div className="space-y-3" data-oid="kh:2:xf">
          {achievements.map((achievement) => (
            <div
              className="flex items-start gap-3"
              data-oid="15qpaaj"
              key={achievement.id}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${getRarityColor(achievement.rarity)}`}
                data-oid="5rkztie"
              >
                {getAchievementIcon(achievement.icon)}
              </div>
              <div className="flex-1" data-oid="q-4wxzs">
                <div className="flex items-center gap-1.5" data-oid="7wahdmw">
                  <h4 className="font-medium" data-oid="esgkq13">
                    {achievement.name}
                  </h4>
                  <Badge
                    className="text-xs capitalize"
                    data-oid="c50doa1"
                    variant="outline"
                  >
                    {achievement.rarity}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm" data-oid="e6s7hla">
                  {achievement.description}
                </p>
                <p
                  className="mt-1 text-muted-foreground text-xs"
                  data-oid="41xf.o-"
                >
                  Earned on{" "}
                  {new Date(achievement.earnedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}

          {achievements.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-6 text-center text-muted-foreground"
              data-oid="479l7u4"
            >
              <Award className="mb-2 h-10 w-10 opacity-20" data-oid="17rapm." />
              <p data-oid=":c_1.b:">No achievements yet</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
