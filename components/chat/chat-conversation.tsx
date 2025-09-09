"use client";
import {
  Archive,
  Info,
  MoreVertical,
  Phone,
  Search,
  Trash2,
  UserPlus,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// Import cn function
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import type { Contact, Conversation, Message } from "./chat-page";

interface ChatConversationProps {
  conversation: Conversation;
  contact: Contact;
  onSendMessage: (text: string) => void;
  onSendImage: (imageUrl: string) => void;
}

export function ChatConversation({
  conversation,
  contact,
  onSendMessage,
  onSendImage,
}: ChatConversationProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [conversation.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "away":
        return "Away";
      default:
        return contact.lastSeen ? `Last seen ${contact.lastSeen}` : "Offline";
    }
  };

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { date: string; messages: Message[] }[] = [];

    messages.forEach((message) => {
      const messageDate = new Date(message.timestamp).toLocaleDateString();
      const existingGroup = groups.find((group) => group.date === messageDate);

      if (existingGroup) {
        existingGroup.messages.push(message);
      } else {
        groups.push({ date: messageDate, messages: [message] });
      }
    });

    return groups;
  };

  const messageGroups = groupMessagesByDate(conversation.messages);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }
    return date.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex h-full flex-col" data-oid="iz063m6">
      <div
        className="flex items-center justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        data-oid="qo90tw4"
      >
        <div className="flex items-center" data-oid="0knipm1">
          <div className="relative" data-oid="nt86u-2">
            <Image
              alt={contact.name}
              className="rounded-full object-cover"
              data-oid="4xk80.6"
              height={40}
              onError={() => setAvatarError(true)}
              src={
                avatarError
                  ? "/placeholder.svg?height=40&width=40"
                  : contact.avatar
              }
              width={40}
            />

            <span
              className={cn(
                "absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background",
                getStatusColor(contact.status)
              )}
              data-oid="wb27fwj"
            />
          </div>
          <div className="ml-3" data-oid="90kkqdq">
            <h3 className="font-medium" data-oid="3oune38">
              {contact.name}
            </h3>
            <p className="text-muted-foreground text-xs" data-oid="b94:.ob">
              {getStatusText(contact.status)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1" data-oid="k2mvrd9">
          <TooltipProvider data-oid="9u_egyy">
            <Tooltip data-oid=".s8xmq7">
              <TooltipTrigger asChild data-oid="u:aibqv">
                <Button
                  className="h-9 w-9 rounded-full"
                  data-oid="o0af3kf"
                  size="icon"
                  variant="ghost"
                >
                  <Phone className="h-5 w-5" data-oid="cw.tyc8" />
                </Button>
              </TooltipTrigger>
              <TooltipContent data-oid="95m121h">Voice call</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="fy8hva:">
            <Tooltip data-oid="op5l35k">
              <TooltipTrigger asChild data-oid="sheeq79">
                <Button
                  className="h-9 w-9 rounded-full"
                  data-oid="0oz1o17"
                  size="icon"
                  variant="ghost"
                >
                  <Video className="h-5 w-5" data-oid="-pzz-dw" />
                </Button>
              </TooltipTrigger>
              <TooltipContent data-oid=":ablrkx">Video call</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="equ1fjm">
            <Tooltip data-oid="p.40mss">
              <TooltipTrigger asChild data-oid="rexsjhj">
                <Button
                  className="h-9 w-9 rounded-full"
                  data-oid="7ogsm8n"
                  size="icon"
                  variant="ghost"
                >
                  <Search className="h-5 w-5" data-oid="tv6e1sl" />
                </Button>
              </TooltipTrigger>
              <TooltipContent data-oid="342vt15">
                Search in conversation
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu data-oid="ajnagq7">
            <DropdownMenuTrigger data-oid="mcjrjms">
              <MoreVertical className="h-5 w-5" data-oid="b438sxt" />
            </DropdownMenuTrigger>
            <DropdownMenuContent data-oid="7.no1.i">
              <DropdownMenuItem
                className="flex items-center gap-2"
                data-oid="_8unlgv"
              >
                <UserPlus className="size-4" data-oid="yh9qi43" />
                <span data-oid="5yk8vz1">Add to group</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2"
                data-oid="7mriopq"
              >
                <Info className="size-4" data-oid="ick4qw9" />
                <span data-oid="og0jipy">View profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2"
                data-oid="ngvgx3w"
              >
                <Archive className="size-4" data-oid="uyvdl1w" />
                <span data-oid="dch11s3">Archive chat</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2"
                data-oid="l-6:-8s"
              >
                <Trash2 className="size-4" data-oid="_:ghefv" />
                <span data-oid="ctrm6l9">Delete chat</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <ScrollArea
        className="flex-1 bg-gradient-to-b from-muted/30 to-background p-4"
        data-oid="yy_pty4"
      >
        <div className="space-y-6" data-oid="9f5t-k4">
          {messageGroups.map((group, index) => (
            <div className="space-y-4" data-oid="zqdxv.d" key={index}>
              <div className="flex justify-center" data-oid="u2eeup5">
                <span
                  className="rounded-full bg-muted/80 px-3 py-1 font-medium text-muted-foreground text-xs shadow-sm"
                  data-oid="ck7ym7e"
                >
                  {formatDate(group.date)}
                </span>
              </div>
              {group.messages.map((message) => (
                <ChatMessage
                  contactAvatar={contact.avatar}
                  contactName={contact.name}
                  data-oid="buarzlj"
                  isOwn={message.senderId === "current-user"}
                  key={message.id}
                  message={message}
                />
              ))}
            </div>
          ))}
          <div data-oid="t.4i2ph" ref={messagesEndRef} />
        </div>
      </ScrollArea>
      <div
        className="border-t bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        data-oid="mm4aia5"
      >
        <ChatInput
          data-oid="26-aahu"
          onSendImage={onSendImage}
          onSendMessage={onSendMessage}
        />
      </div>
    </div>
  );
}
