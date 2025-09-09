"use client";

import { Plus, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Contact, Conversation } from "./chat-page";

interface ChatSidebarProps {
  contacts: Contact[];
  conversations: Conversation[];
  activeConversationId: string | null;
  onConversationSelect: (conversationId: string) => void;
  onNewConversation?: (contactId: string) => void;
}
type Filter = "all" | "online" | "unread";
export function ChatSidebar({
  contacts,
  conversations,
  activeConversationId,
  onConversationSelect,
  onNewConversation,
}: ChatSidebarProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isNewConversationDialogOpen, setIsNewConversationDialogOpen] =
    useState(false);
  const [searchContactQuery, setSearchContactQuery] = useState("");

  const getFilteredConversations = () => {
    let filtered = [...conversations];

    if (filter === "online") {
      filtered = filtered.filter((conv) => {
        const contact = contacts.find((c) => c.id === conv.contactId);
        return contact && contact.status === "online";
      });
    } else if (filter === "unread") {
      filtered = filtered.filter((conv) => conv.unread > 0);
    }

    return filtered;
  };

  const filteredConversations = getFilteredConversations();

  // Get contacts that don't have an existing conversation
  const availableContacts = contacts
    .filter(
      (contact) => !conversations.some((conv) => conv.contactId === contact.id)
    )
    .filter((contact) =>
      contact.name.toLowerCase().includes(searchContactQuery.toLowerCase())
    );

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

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    if (diffInDays === 1) {
      return "Yesterday";
    }
    if (diffInDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" });
    }
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  const handleNewConversation = (contactId: string) => {
    if (onNewConversation) {
      onNewConversation(contactId);
      setIsNewConversationDialogOpen(false);
      setSearchContactQuery("");
    }
  };

  return (
    <div className="flex h-full flex-col" data-oid="adwachy">
      <div className="border-b p-2" data-oid="us3jbi.">
        <Tabs
          className="w-full"
          data-oid="fccy8as"
          defaultValue="all"
          onValueChange={(value) => setFilter(value as Filter)}
        >
          <TabsList className="grid w-full grid-cols-3" data-oid="zyu2ko-">
            <TabsTrigger
              className="rounded-full"
              data-oid="8:ti0-t"
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="rounded-full"
              data-oid="ljgm-mp"
              value="online"
            >
              Online
            </TabsTrigger>
            <TabsTrigger
              className="rounded-full"
              data-oid="0f_oi8d"
              value="unread"
            >
              Unread
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div
        className="flex items-center justify-between border-b p-3"
        data-oid="dh9wm3-"
      >
        <h3 className="font-medium text-sm" data-oid="forvlig">
          Conversations
        </h3>
        <div className="flex space-x-1" data-oid="8.1e0.-">
          <Button
            aria-label="New conversation"
            className="h-8 w-8 rounded-full hover:bg-muted"
            data-oid=".z2ryyw"
            onClick={() => setIsNewConversationDialogOpen(true)}
            size="icon"
            variant="ghost"
          >
            <Plus className="h-4 w-4" data-oid="laam9kd" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" data-oid="wrbjzm9">
        {filteredConversations.length > 0 ? (
          <div data-oid="7tm6f3z">
            {filteredConversations.map((conversation) => {
              const contact = contacts.find(
                (c) => c.id === conversation.contactId
              );
              if (!contact) return null;

              return (
                <div
                  className={cn(
                    "flex cursor-pointer items-center p-3 transition-colors",
                    activeConversationId === conversation.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted/50",
                    conversation.unread > 0 &&
                      activeConversationId !== conversation.id
                      ? "bg-muted/30"
                      : ""
                  )}
                  data-oid="q79ue2v"
                  key={conversation.id}
                  onClick={() => onConversationSelect(conversation.id)}
                >
                  <div className="relative flex-shrink-0" data-oid="r2pz_2u">
                    <Image
                      alt={contact.name}
                      className="rounded-full border border-border object-cover"
                      data-oid="6ck:u7j"
                      height={48}
                      onError={() =>
                        setImageErrors((prev) => ({
                          ...prev,
                          [contact.id]: true,
                        }))
                      }
                      src={
                        imageErrors[contact.id]
                          ? "/placeholder.svg?height=48&width=48"
                          : contact.avatar
                      }
                      width={48}
                    />

                    <span
                      className={cn(
                        "absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background",
                        getStatusColor(contact.status)
                      )}
                      data-oid="fym2_sq"
                    />
                  </div>
                  <div
                    className="ml-3 flex-1 overflow-hidden"
                    data-oid="47k45m4"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="jdstfav"
                    >
                      <h4
                        className={cn(
                          "truncate font-medium",
                          conversation.unread > 0 &&
                            activeConversationId !== conversation.id
                            ? "font-semibold"
                            : ""
                        )}
                        data-oid="6fi:yo7"
                      >
                        {contact.name}
                      </h4>
                      {conversation.lastMessage && (
                        <span
                          className="text-muted-foreground text-xs"
                          data-oid="gbv87tp"
                        >
                          {formatTime(conversation.lastMessage.timestamp)}
                        </span>
                      )}
                    </div>
                    <div
                      className="mt-0.5 flex items-center justify-between"
                      data-oid=".v2.qo0"
                    >
                      {conversation.lastMessage && (
                        <p
                          className={cn(
                            "max-w-[160px] truncate text-sm",
                            activeConversationId === conversation.id
                              ? "text-accent-foreground/80"
                              : "text-muted-foreground",
                            conversation.unread > 0 &&
                              activeConversationId !== conversation.id
                              ? "font-medium text-foreground"
                              : ""
                          )}
                          data-oid="vqr6ojj"
                        >
                          {conversation.lastMessage.text}
                        </p>
                      )}
                      {conversation.unread > 0 && (
                        <Badge
                          className="ml-2 h-5 min-w-[20px] rounded-full px-1.5"
                          data-oid=".sw-hs8"
                          variant="default"
                        >
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="p-4 text-center text-muted-foreground"
            data-oid="7m.-zcn"
          >
            <p data-oid="4vpq_z2">No conversations found</p>
            <Button
              className="mt-2"
              data-oid="3bit-wb"
              onClick={() => setIsNewConversationDialogOpen(true)}
              size="sm"
              variant="outline"
            >
              <Plus className="mr-2 h-4 w-4" data-oid="s._5:h7" />
              Start new chat
            </Button>
          </div>
        )}
      </div>

      {/* New Conversation Dialog */}
      <Dialog
        data-oid="3_:..q8"
        onOpenChange={setIsNewConversationDialogOpen}
        open={isNewConversationDialogOpen}
      >
        <DialogContent className="sm:max-w-md" data-oid="_31kmk9">
          <DialogHeader data-oid="_m9eyy7">
            <DialogTitle data-oid="5uuz756">New Conversation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2" data-oid="eu5z06x">
            <div className="relative" data-oid="pvxguxg">
              <Search
                className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
                data-oid="gfnuu4y"
              />

              <Input
                className="pl-8"
                data-oid="bh7618q"
                onChange={(e) => setSearchContactQuery(e.target.value)}
                placeholder="Search contacts..."
                type="search"
                value={searchContactQuery}
              />
            </div>
            <div
              className="max-h-[300px] space-y-1 overflow-y-auto"
              data-oid="6.n0__d"
            >
              {availableContacts.length > 0 ? (
                availableContacts.map((contact) => (
                  <div
                    className="flex cursor-pointer items-center rounded-md p-2 hover:bg-muted"
                    data-oid=".4zp4qt"
                    key={contact.id}
                    onClick={() => handleNewConversation(contact.id)}
                  >
                    <div className="relative" data-oid="-rq9mpa">
                      <Image
                        alt={contact.name}
                        className="rounded-full object-cover"
                        data-oid="5uma07n"
                        height={40}
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [contact.id]: true,
                          }))
                        }
                        src={
                          imageErrors[contact.id]
                            ? "/placeholder.svg?height=40&width=40"
                            : contact.avatar
                        }
                        width={40}
                      />

                      <span
                        className={cn(
                          "absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-background",
                          getStatusColor(contact.status)
                        )}
                        data-oid="r4yip8_"
                      />
                    </div>
                    <div className="ml-3" data-oid="i78ejk2">
                      <p className="font-medium" data-oid="mhbbrj2">
                        {contact.name}
                      </p>
                      <p
                        className="text-muted-foreground text-xs"
                        data-oid="xnnpq11"
                      >
                        {contact.status === "online"
                          ? "Online"
                          : contact.lastSeen
                            ? `Last seen ${contact.lastSeen}`
                            : "Offline"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p
                  className="py-4 text-center text-muted-foreground"
                  data-oid="fatraj5"
                >
                  No contacts available
                </p>
              )}
            </div>
          </div>
          <DialogFooter data-oid="vw7gvvv">
            <Button
              data-oid="udkn812"
              onClick={() => setIsNewConversationDialogOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
