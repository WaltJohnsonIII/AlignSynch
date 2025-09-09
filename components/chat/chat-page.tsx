"use client";

import { Bell, Lock, Plus, Search, Settings, Trash2, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockContacts, mockConversations } from "@/data/chat-data";
import { ChatConversation } from "./chat-conversation";
import { ChatSidebar } from "./chat-sidebar";
import {
  SimpleDropdown,
  SimpleDropdownItem,
  SimpleDropdownLabel,
  SimpleDropdownSeparator,
} from "./simple-dropdown";

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastSeen?: string;
};

export type Message = {
  id: string;
  senderId: string;
  text?: string;
  image?: string;
  timestamp: string;
  status: "sent" | "delivered" | "read";
};

export type Conversation = {
  id: string;
  contactId: string;
  messages: Message[];
  unread: number;
  lastMessage?: {
    text: string;
    timestamp: string;
  };
};

export function ChatPage() {
  const [contacts, setContacts] = useState(mockContacts);
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConversationId, setActiveConversationId] = useState<
    string | null
  >(conversations.length > 0 ? conversations[0].id : null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);
  const activeConversation =
    conversations.find((conv) => conv.id === activeConversationId) || null;
  const activeContact = activeConversation
    ? contacts.find((contact) => contact.id === activeConversation.contactId)
    : null;

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (text: string) => {
    if (!activeConversationId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: "current-user", // Assuming current user has this ID
      text,
      timestamp: new Date().toISOString(),
      status: "sent",
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === activeConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, newMessage],
            lastMessage: {
              text,
              timestamp: new Date().toISOString(),
            },
          };
        }
        return conv;
      })
    );

    // Simulate reply after 1-3 seconds
    setTimeout(
      () => {
        const replyMessage: Message = {
          id: `msg-${Date.now() + 1}`,
          senderId: activeConversation?.contactId || "",
          text: `This is an automated reply to: "${text}"`,
          timestamp: new Date().toISOString(),
          status: "read",
        };

        setConversations((prev) =>
          prev.map((conv) => {
            if (conv.id === activeConversationId) {
              return {
                ...conv,
                messages: [...conv.messages, replyMessage],
                lastMessage: {
                  text: replyMessage.text || "",
                  timestamp: replyMessage.timestamp,
                },
              };
            }
            return conv;
          })
        );
      },
      Math.random() * 2000 + 1000
    );
  };

  const handleSendImage = (imageUrl: string) => {
    if (!activeConversationId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: "current-user",
      image: imageUrl,
      timestamp: new Date().toISOString(),
      status: "sent",
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === activeConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, newMessage],
            lastMessage: {
              text: "Sent an image",
              timestamp: new Date().toISOString(),
            },
          };
        }
        return conv;
      })
    );
  };

  const handleConversationSelect = (conversationId: string) => {
    setActiveConversationId(conversationId);

    // Mark conversation as read
    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            unread: 0,
            messages: conv.messages.map((msg) => ({
              ...msg,
              status: msg.senderId !== "current-user" ? "read" : msg.status,
            })),
          };
        }
        return conv;
      })
    );
  };

  const handleNewConversation = (contactId: string) => {
    // Create a new conversation with the selected contact
    const newConversation: Conversation = {
      id: `conv-${Date.now()}`,
      contactId,
      messages: [],
      unread: 0,
    };

    // Add the new conversation to the list
    const updatedConversations = [...conversations, newConversation];
    setConversations(updatedConversations);

    // Set the new conversation as active
    setActiveConversationId(newConversation.id);
  };

  return (
    <div
      className="h-[calc(100vh-4rem)] overflow-y-auto bg-background md:flex"
      data-oid="50dvttb"
    >
      <button
        className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 md:hidden"
        data-oid="lb.2eid"
        onClick={() => setShowChat(!showChat)}
      >
        Open Chat
      </button>
      <div
        className={`max-md: left-0 flex w-72 flex-col border-r duration-300 max-md:absolute max-md:top-32 max-md:z-10 max-md:h-full max-md:border-t max-md:bg-background xl:w-80 ${showChat ? "max-md:translate-x-0" : "max-md:-translate-x-full"}`}
        data-oid="2xxilf0"
      >
        <div
          className="flex items-center justify-between border-b p-4"
          data-oid="pgexr7-"
        >
          <div className="relative flex-1" data-oid="ogpw2.-">
            <Search
              className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="l0eisrs"
            />

            <Input
              className="rounded-full pl-8"
              data-oid="mvtbp_p"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search contacts..."
              type="search"
              value={searchQuery}
            />
          </div>
          <div className="ml-2" data-oid="ajv7vae">
            <SimpleDropdown
              align="right"
              data-oid="8ga2:b3"
              trigger={
                <Button
                  className="h-9 w-9 rounded-full hover:bg-muted"
                  data-oid="nd45was"
                  size="icon"
                  variant="ghost"
                >
                  <Settings className="h-4 w-4" data-oid="8u22-ps" />
                </Button>
              }
            >
              <SimpleDropdownLabel data-oid="kq2cqv7">
                Chat Settings
              </SimpleDropdownLabel>
              <SimpleDropdownSeparator data-oid="jhaqwc6" />
              <SimpleDropdownItem data-oid="oo0dab8">
                <User className="mr-2 h-4 w-4" data-oid="n59-ezt" />
                <span data-oid="clfw7ok">Profile</span>
              </SimpleDropdownItem>
              <SimpleDropdownItem data-oid="c1-0b0e">
                <Bell className="mr-2 h-4 w-4" data-oid="1lihtvb" />
                <span data-oid="fh__9jv">Notifications</span>
              </SimpleDropdownItem>
              <SimpleDropdownItem data-oid="wni34-v">
                <Lock className="mr-2 h-4 w-4" data-oid="1amp57h" />
                <span data-oid="t1alb8f">Privacy</span>
              </SimpleDropdownItem>
              <SimpleDropdownSeparator data-oid="oy:vdes" />
              <SimpleDropdownItem data-oid="57zvz-q" destructive>
                <Trash2 className="mr-2 h-4 w-4" data-oid="d12vkhe" />
                <span data-oid="mt8m9l2">Clear History</span>
              </SimpleDropdownItem>
            </SimpleDropdown>
          </div>
        </div>
        <ChatSidebar
          activeConversationId={activeConversationId}
          contacts={filteredContacts}
          conversations={conversations}
          data-oid="2:ejkhm"
          onConversationSelect={handleConversationSelect}
          onNewConversation={handleNewConversation}
        />
      </div>

      <div className="flex flex-1 flex-col" data-oid="386fdex">
        {activeConversation && activeContact ? (
          <ChatConversation
            contact={activeContact}
            conversation={activeConversation}
            data-oid="ts9z3g3"
            onSendImage={handleSendImage}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-muted/20"
            data-oid="eup70cy"
          >
            <div
              className="max-w-md rounded-lg border bg-background p-6 text-center shadow-sm"
              data-oid="7-3qket"
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                data-oid="8slib67"
              >
                <Plus className="h-8 w-8 text-primary" data-oid="c.c1o-m" />
              </div>
              <h3 className="mb-2 font-medium text-xl" data-oid="9ecv81-">
                Start a conversation
              </h3>
              <p className="mb-4 text-muted-foreground" data-oid="on4gt2e">
                Select a contact from the sidebar or start a new chat to begin
                messaging
              </p>
              <Button
                data-oid="pu:at.-"
                onClick={() => {
                  const availableContact = contacts.find(
                    (contact) =>
                      !conversations.some(
                        (conv) => conv.contactId === contact.id
                      )
                  );
                  if (availableContact) {
                    handleNewConversation(availableContact.id);
                  } else {
                    toast.success(
                      "No available contacts to start a new conversation with."
                    );
                  }
                }}
              >
                <Plus className="mr-2 h-4 w-4" data-oid="65uli0c" />
                New conversation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
