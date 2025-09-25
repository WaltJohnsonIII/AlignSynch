"use client";

import { Check, CheckCheck, Clock } from "lucide-react";
import Image from "next/image";
import { SmartImage } from "@/components/ui/smart-image";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Message } from "./chat-page";

interface ChatMessageProps {
  message: Message;
  isOwn: boolean;
  contactName: string;
  contactAvatar: string;
}

export function ChatMessage({
  message,
  isOwn,
  contactName,
  contactAvatar,
}: ChatMessageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFullTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "sent":
        return (
          <Clock
            className="h-3.5 w-3.5 text-muted-foreground"
            data-oid="rok7q1w"
          />
        );

      case "delivered":
        return (
          <Check
            className="h-3.5 w-3.5 text-muted-foreground"
            data-oid="t.ri9-t"
          />
        );

      case "read":
        return (
          <CheckCheck className="h-3.5 w-3.5 text-primary" data-oid="cc2s6ws" />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "group flex items-end gap-2",
        isOwn ? "flex-row-reverse" : "flex-row"
      )}
      data-oid="jhugpue"
    >
      {!isOwn && (
        <div className="flex-shrink-0" data-oid="byxb23p">
          <div className="relative h-7 w-7" data-oid=".i3vx77">
            <SmartImage
              alt={contactName}
              className="mb-1 rounded-full border border-border object-cover"
              height={28}
              name={contactName}
              placeholderType="svg"
              src={contactAvatar || null}
              type="avatar"
              width={28}
            />
          </div>
        </div>
      )}
      <div className="max-w-[75%]" data-oid="1zah383">
        <TooltipProvider data-oid="kx_pn-2">
          <Tooltip data-oid="evwmdrn">
            <TooltipTrigger asChild data-oid="nqmoqoe">
              <div
                className={cn(
                  "rounded-2xl px-4 py-2.5 shadow-sm",
                  isOwn
                    ? "rounded-tr-none bg-primary text-primary-foreground"
                    : "rounded-tl-none bg-muted text-foreground"
                )}
                data-oid="v2ghygl"
              >
                {message.text && (
                  <p
                    className="whitespace-pre-wrap break-words text-sm"
                    data-oid="067edy0"
                  >
                    {message.text}
                  </p>
                )}
                {message.image && (
                  <div
                    className="relative mt-1 overflow-hidden rounded-lg"
                    data-oid="vacgwx-"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 z-10 flex items-center justify-center bg-muted/50",
                        imageLoaded ? "hidden" : "block"
                      )}
                      data-oid="x0oq90p"
                    >
                      <span className="text-xs" data-oid="b-qfv9l">
                        Loading image...
                      </span>
                    </div>
                    <SmartImage
                      alt="Shared image"
                      className="max-w-full rounded-lg object-contain"
                      height={200}
                      onLoad={() => setImageLoaded(true)}
                      placeholderType="svg"
                      src={message.image || null}
                      type="generic"
                      width={300}
                    />
                  </div>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent
              className="max-w-xs"
              data-oid="2hzsev_"
              side={isOwn ? "left" : "right"}
            >
              <p data-oid="pxtwjsr">{formatFullTime(message.timestamp)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div
          className={cn(
            "mt-1 flex items-center gap-1 text-[10px]",
            isOwn ? "justify-end pr-1" : "justify-start pl-1",
            isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
          data-oid="runmxbj"
        >
          <span data-oid="i_8r3-h">{formatTime(message.timestamp)}</span>
          {isOwn && renderStatus(message.status)}
        </div>
      </div>
    </div>
  );
}
