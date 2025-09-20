import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserAvatar } from "@/components/ui/user-avatar";
import type React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { recentMessages } from "@/data/chat-data";
import { Button } from "../ui/button";

type Props = {
  isMessagesDrawerOpen: boolean;
  setIsMessagesDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMessageClick: (conversationId: string) => void;
};

const ChatDrawer = ({
  setIsMessagesDrawerOpen,
  isMessagesDrawerOpen,
  handleMessageClick,
}: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full bg-background shadow-xl transition-transform duration-300 ease-in-out sm:w-96 ${isMessagesDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      data-oid="faexarn"
    >
      <div
        className="flex items-center justify-between border-b p-4"
        data-oid="_8j.x-w"
      >
        <h2 className="font-semibold text-lg" data-oid="3zr4cov">
          Recent Messages
        </h2>
        <div className="flex items-center gap-2" data-oid="q1705c6">
          <Button asChild data-oid="noryuj0" size="sm" variant="outline">
            <Link
              data-oid="xu:y3q5"
              href="/chat"
              onClick={() => setIsMessagesDrawerOpen(false)}
            >
              View All
            </Link>
          </Button>
          <Button
            aria-label="Close messages"
            data-oid="xf9nn:v"
            onClick={() => setIsMessagesDrawerOpen(false)}
            size="icon"
            variant="ghost"
          >
            <X className="h-5 w-5" data-oid="zn6mmuv" />
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto p-2" data-oid="9rjrwa3">
        {recentMessages.map((message) => (
          <div
            className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
            data-oid="w-jfx7u"
            key={message.id}
            onClick={() => handleMessageClick(message.conversationId)}
          >
            <div className="relative" data-oid="v25e9cd">
              <Avatar className="size-10" data-oid="qh.d4vr">
                <UserAvatar name={message.sender} size={40} src={message.avatar || null} />
                <AvatarFallback data-oid="p5w-npv">
                  {message.sender.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {message.unread && (
                <span
                  className="-top-1 -right-1 absolute h-3 w-3 rounded-full border-2 border-background bg-primary"
                  data-oid="pc:-b.v"
                />
              )}
            </div>
            <div
              className="flex-1 space-y-1 overflow-hidden"
              data-oid="59uh3qx"
            >
              <div
                className="flex items-center justify-between"
                data-oid="mmc7-3v"
              >
                <p
                  className={`font-medium ${message.unread ? "text-foreground" : "text-muted-foreground"}`}
                  data-oid="woexf-9"
                >
                  {message.sender}
                </p>
                <span
                  className="text-muted-foreground text-xs"
                  data-oid="7i7oe3y"
                >
                  {message.time}
                </span>
              </div>
              <p
                className={`truncate text-sm ${message.unread ? "text-foreground" : "text-muted-foreground"}`}
                data-oid=".s9mh8b"
              >
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDrawer;
