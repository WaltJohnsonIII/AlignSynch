"use client";

import { ImageIcon, Mic, PaperclipIcon, Send, Smile, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  onSendImage: (imageUrl: string) => void;
}

export function ChatInput({ onSendMessage, onSendImage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLInputElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "40px";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server
      // For this demo, we'll use a placeholder image
      const imageUrl = "/placeholder.svg?height=300&width=400";
      onSendImage(imageUrl);

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop audio recording
  };

  // Emoji data - simplified for demo
  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "👍",
    "👎",
    "👏",
    "🙌",
    "👌",
    "✌️",
    "🤞",
    "🤟",
    "🤘",
    "👊",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "❣️",
    "💕",
    "💞",
  ];

  return (
    <div className="flex items-end gap-2" data-oid="3oyp8_l">
      <div className="flex space-x-1" data-oid="jl_._wd">
        <TooltipProvider data-oid="cwlv:xo">
          <Tooltip data-oid="h0q0h:x">
            <TooltipTrigger asChild data-oid="7.3g88m">
              <Button
                className="h-9 w-9 rounded-full"
                data-oid="5r5_w8x"
                onClick={() => fileInputRef.current?.click()}
                size="icon"
                type="button"
                variant="ghost"
              >
                <PaperclipIcon className="h-5 w-5" data-oid="zk4ppa4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent data-oid="oi3c2ct">Attach file</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider data-oid="prgxk5l">
          <Tooltip data-oid="o_it9.i">
            <TooltipTrigger asChild data-oid="0tf_bce">
              <Button
                className="h-9 w-9 rounded-full"
                data-oid=":_a55-c"
                onClick={() => fileInputRef.current?.click()}
                size="icon"
                type="button"
                variant="ghost"
              >
                <ImageIcon className="h-5 w-5" data-oid="xkuu5:1" />
              </Button>
            </TooltipTrigger>
            <TooltipContent data-oid="wdurhyi">Send image</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div
        className="relative flex flex-1 items-center gap-2"
        data-oid="osuai.5"
      >
        <Input
          className={cn(
            "!py-4 resize-none rounded-2xl px-5 pr-12 transition-all"
          )}
          data-oid="7y14wc8"
          onChange={(e) => {
            setMessage(e.target.value);
            setIsTyping(e.target.value.length > 0);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          ref={textareaRef}
          value={message}
        />

        <Button
          className={cn(
            "size-9 rounded-full transition-colors",
            message.trim() ? "" : "text-muted-foreground"
          )}
          data-oid="mvwh9f."
          disabled={!message.trim()}
          onClick={handleSend}
          size="icon"
          type="button"
        >
          <Send className="h-4 w-4 text-white" data-oid="m1-gav_" />
        </Button>
      </div>

      <div className="flex space-x-1" data-oid="vr-3.:6">
        <Popover data-oid="9rjm9ss">
          <PopoverTrigger asChild data-oid="f81uamv">
            <Button
              className="h-9 w-9 rounded-full"
              data-oid="k.26f57"
              size="icon"
              type="button"
              variant="ghost"
            >
              <Smile className="h-5 w-5" data-oid="j0vik3a" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-64 p-2" data-oid="uq479z3">
            <div className="grid grid-cols-8 gap-1" data-oid="veyg966">
              {emojis.map((emoji, index) => (
                <button
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-lg hover:bg-muted"
                  data-oid="4kbauv3"
                  key={index}
                  onClick={() => setMessage((prev) => prev + emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <TooltipProvider data-oid="8lzp6v_">
          <Tooltip data-oid="7f2igu.">
            <TooltipTrigger asChild data-oid="8nbtcnd">
              <Button
                className="h-9 w-9 rounded-full"
                data-oid="--a098k"
                onClick={toggleRecording}
                size="icon"
                type="button"
                variant={isRecording ? "destructive" : "ghost"}
              >
                {isRecording ? (
                  <X className="h-5 w-5" data-oid=":-w1u57" />
                ) : (
                  <Mic className="h-5 w-5" data-oid="dgpe15u" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent data-oid="j7s5lim">
              {isRecording ? "Cancel recording" : "Voice message"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <input
        accept="image/*"
        className="hidden"
        data-oid="l5a3rbl"
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
      />
    </div>
  );
}
