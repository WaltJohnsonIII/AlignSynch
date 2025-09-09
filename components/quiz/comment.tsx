"use client";

import {
  ChevronDown,
  ChevronUp,
  Flag,
  MessageSquare,
  Send,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Reply = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
};
interface CommentProps {
  comment: {
    id: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    text: string;
    timestamp: string;
    likes: number;
    replies: Reply[];
  };
}

export function Comment({ comment }: CommentProps) {
  const [likes, setLikes] = useState(comment.likes);
  const [userLiked, setUserLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(comment.replies);

  const handleLike = () => {
    if (userLiked) {
      setLikes(likes - 1);
      setUserLiked(false);
    } else {
      setLikes(likes + 1);
      setUserLiked(true);
    }
  };

  const handleAddReply = () => {
    if (!replyText.trim()) return;

    const newReply = {
      id: `r${Date.now()}`,
      user: {
        id: "current-user",
        name: "You",
        avatar: "/avatars/master.png",
      },
      text: replyText,
      timestamp: new Date().toISOString(),
      likes: 0,
    };

    setReplies([...replies, newReply]);
    setReplyText("");
    setShowReplyForm(false);
    setShowReplies(true);
  };

  return (
    <div className="rounded-md border p-4" data-oid="9-g:si_">
      <div className="flex items-start gap-3" data-oid="ktd6ejh">
        <Avatar data-oid="lcv9a2v">
          <AvatarImage
            alt={comment.user.name}
            data-oid="ee--o0c"
            src={comment.user.avatar || "/placeholder.svg"}
          />

          <AvatarFallback data-oid="f0bly7-">
            {comment.user.name.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1" data-oid="7csy5k2">
          <div className="flex items-center justify-between" data-oid="jxmlt0v">
            <div data-oid="auny65e">
              <h3 className="font-medium" data-oid="4k3:p63">
                {comment.user.name}
              </h3>
              <p className="text-muted-foreground text-xs" data-oid="63d4_63">
                {new Date(comment.timestamp).toLocaleString()}
              </p>
            </div>
            <Button
              className="h-8 w-8"
              data-oid="t-xe4.f"
              size="icon"
              variant="ghost"
            >
              <Flag className="h-4 w-4" data-oid="9rtjksa" />
            </Button>
          </div>
          <p className="mt-2 text-sm" data-oid="3p1n20-">
            {comment.text}
          </p>
          <div className="mt-3 flex items-center gap-4" data-oid="8pbyy37">
            <Button
              className={`flex h-8 items-center gap-1 ${userLiked ? "text-blue-600" : ""}`}
              data-oid="0h_9mcx"
              onClick={handleLike}
              size="sm"
              variant="ghost"
            >
              <ThumbsUp className="h-4 w-4" data-oid="ek8lffx" />
              <span data-oid="ume4pt.">{likes}</span>
            </Button>
            <Button
              className="flex h-8 items-center gap-1"
              data-oid="iwo-qnj"
              onClick={() => setShowReplyForm(!showReplyForm)}
              size="sm"
              variant="ghost"
            >
              <MessageSquare className="h-4 w-4" data-oid="umh5d49" />
              <span data-oid="ls7fg95">Reply</span>
            </Button>

            {replies.length > 0 && (
              <Button
                className="flex h-8 items-center gap-1"
                data-oid="d-ctfai"
                onClick={() => setShowReplies(!showReplies)}
                size="sm"
                variant="ghost"
              >
                {showReplies ? (
                  <>
                    <ChevronUp className="h-4 w-4" data-oid="zpv4ak6" />
                    <span data-oid="qz97mix">Hide Replies</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" data-oid="7ynrn:l" />
                    <span data-oid="ykl1xm9">
                      Show Replies ({replies.length})
                    </span>
                  </>
                )}
              </Button>
            )}
          </div>

          {showReplyForm && (
            <div className="mt-3 space-y-3" data-oid="cep6f0_">
              <Textarea
                className="min-h-[80px]"
                data-oid="gnrqmvc"
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                value={replyText}
              />

              <div className="flex justify-end gap-2" data-oid="5.wqh_j">
                <Button
                  data-oid="d7mtx:2"
                  onClick={() => setShowReplyForm(false)}
                  size="sm"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="flex items-center gap-1"
                  data-oid="uu4m1tf"
                  disabled={!replyText.trim()}
                  onClick={handleAddReply}
                  size="sm"
                >
                  <Send className="h-4 w-4" data-oid="hclxl1e" />
                  <span data-oid="0-d2vn2">Reply</span>
                </Button>
              </div>
            </div>
          )}

          {showReplies && replies.length > 0 && (
            <div
              className="mt-4 space-y-3 border-gray-200 border-l-2 pl-6 dark:border-gray-700"
              data-oid="9n1x.e-"
            >
              {replies.map((reply) => (
                <div
                  className="flex items-start gap-3"
                  data-oid="2ulet22"
                  key={reply.id}
                >
                  <Avatar className="h-7 w-7" data-oid="vbvc:_f">
                    <AvatarImage
                      alt={reply.user.name}
                      data-oid="s7li3:y"
                      src={reply.user.avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="hx:zv1-">
                      {reply.user.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1" data-oid="amg9w2q">
                    <div
                      className="flex items-center justify-between"
                      data-oid="qrub71-"
                    >
                      <div data-oid=".gn26s.">
                        <h4 className="font-medium text-sm" data-oid="ck6__qj">
                          {reply.user.name}
                        </h4>
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="sl7dktc"
                        >
                          {new Date(reply.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 text-sm" data-oid="bslxjdr">
                      {reply.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
