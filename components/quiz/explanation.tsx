"use client";

import { Flag, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ExplanationProps {
  explanation: {
    id: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    text: string;
    timestamp: string;
    upvotes: number;
    downvotes: number;
  };
}

export function Explanation({ explanation }: ExplanationProps) {
  const [upvotes, setUpvotes] = useState(explanation.upvotes || 0);
  const [downvotes, setDownvotes] = useState(explanation.downvotes || 0);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleUpvote = () => {
    if (userVote === "up") {
      setUpvotes(upvotes - 1);
      setUserVote(null);
    } else {
      if (userVote === "down") {
        setDownvotes(downvotes - 1);
      }
      setUpvotes(upvotes + 1);
      setUserVote("up");
    }
  };

  const handleDownvote = () => {
    if (userVote === "down") {
      setDownvotes(downvotes - 1);
      setUserVote(null);
    } else {
      if (userVote === "up") {
        setUpvotes(upvotes - 1);
      }
      setDownvotes(downvotes + 1);
      setUserVote("down");
    }
  };

  return (
    <Card className="border-l-4 border-l-blue-500" data-oid="y3dsl:o">
      <CardContent className="p-4" data-oid="6:w7bnv">
        <div className="flex items-start gap-3" data-oid="m-vxjgo">
          <Avatar data-oid="gt4g3oo">
            <AvatarImage
              alt={explanation.user.name}
              data-oid="ie-rrei"
              src={explanation.user.avatar || "/placeholder.svg"}
            />

            <AvatarFallback data-oid="w1b9ofr">
              {explanation.user.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1" data-oid="_u2nbi.">
            <div
              className="flex items-center justify-between"
              data-oid="-puad0o"
            >
              <div data-oid="hplhuki">
                <h3 className="font-medium" data-oid="9kdss_p">
                  {explanation.user.name}
                </h3>
                <p className="text-muted-foreground text-xs" data-oid="9_y:prp">
                  {new Date(explanation.timestamp).toLocaleString()}
                </p>
              </div>
              <Button
                className="h-8 w-8"
                data-oid="g.njs-g"
                size="icon"
                variant="ghost"
              >
                <Flag className="h-4 w-4" data-oid="q.2u_qw" />
              </Button>
            </div>
            <p className="mt-2 text-sm" data-oid="ba-to1v">
              {explanation.text}
            </p>
            <div className="mt-3 flex items-center gap-4" data-oid="cwyi1m6">
              <Button
                className={`flex h-8 items-center gap-1 ${userVote === "up" ? "text-green-600" : ""}`}
                data-oid="x4k1s0w"
                onClick={handleUpvote}
                size="sm"
                variant="ghost"
              >
                <ThumbsUp className="h-4 w-4" data-oid="4zsd28f" />
                <span data-oid="zu0vz-a">{upvotes}</span>
              </Button>
              <Button
                className={`flex h-8 items-center gap-1 ${userVote === "down" ? "text-red-600" : ""}`}
                data-oid="y8s7z0s"
                onClick={handleDownvote}
                size="sm"
                variant="ghost"
              >
                <ThumbsDown className="h-4 w-4" data-oid="zkidtn7" />
                <span data-oid="ivfnkp9">{downvotes}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
