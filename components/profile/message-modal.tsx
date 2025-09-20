"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import type { User } from "@/lib/data/users";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: User;
}

export function MessageModal({
  isOpen,
  onClose,
  recipient,
}: MessageModalProps) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setSending(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSending(false);
    setSent(true);

    // Reset after showing success message
    setTimeout(() => {
      setMessage("");
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog data-oid="6eninmy" onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-md" data-oid="g78chdw">
        <DialogHeader data-oid="fswxve9">
          <DialogTitle className="flex items-center gap-2" data-oid="doy7_bz">
            <Avatar className="h-6 w-6" data-oid="4rejsgq">
              <AvatarImage
                alt={recipient.name}
                data-oid="idk6ki4"
                src={recipient.avatar || undefined}
              />
              <AvatarFallback data-oid="byl3hpp" name={recipient.name}>
                {recipient.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            Message {recipient.name}
          </DialogTitle>
        </DialogHeader>

        {sent ? (
          <div
            className="flex flex-col items-center justify-center py-6 text-center"
            data-oid="mtmlht_"
          >
            <div
              className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30"
              data-oid="duo042e"
            >
              <svg
                className="h-6 w-6"
                data-oid="g_k_2mf"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline data-oid="6oh:eb5" points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-medium text-lg" data-oid="mm.5lp1">
              Message Sent!
            </h3>
            <p className="text-muted-foreground text-sm" data-oid="n8k-rux">
              Your message has been sent to {recipient.name}
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4" data-oid="_.q:az5">
              <div className="flex items-start gap-3" data-oid="12udthi">
                <Avatar data-oid="oq.g97t">
                  <AvatarImage
                    alt={recipient.name}
                    data-oid=":zpmqk1"
                    src={recipient.avatar || undefined}
                  />
                  <AvatarFallback data-oid="j_a7k2n" name={recipient.name}>
                    {recipient.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3" data-oid="6izq5u.">
                  <p className="text-sm" data-oid="_z_bsbg">
                    Hi there! Feel free to send me a message about quizzes or
                    anything else.
                  </p>
                </div>
              </div>

              <Textarea
                className="min-h-[120px] resize-none"
                data-oid="hiy53g-"
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Write a message to ${recipient.name}...`}
                value={message}
              />
            </div>

            <DialogFooter data-oid="9qp6xie">
              <Button data-oid="ow5cs4p" onClick={onClose} variant="outline">
                Cancel
              </Button>
              <Button
                data-oid="2_3qh0x"
                disabled={!message.trim() || sending}
                onClick={handleSend}
              >
                {sending ? (
                  <>
                    <div
                      className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"
                      data-oid="itgt:j:"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" data-oid="uvel4x8" />
                    Send Message
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
