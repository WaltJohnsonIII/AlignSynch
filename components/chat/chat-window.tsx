"use client";

import {
  Check,
  CheckCheck,
  ImageIcon,
  MoreVertical,
  Phone,
  Search,
  Send,
  Smile,
  Video,
  X,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for contacts and messages
const contacts = [
  {
    id: 1,
    name: "Emma Wilson",
    avatar: "/avatars/chat-avatar-1.png",
    status: "online",
    lastMessage: "Are you ready for the science quiz?",
    unread: 2,
    lastSeen: "Just now",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/avatars/chat-avatar-2.png",
    status: "online",
    lastMessage: "I scored 95% on the history quiz!",
    unread: 0,
    lastSeen: "5m ago",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    avatar: "/avatars/chat-avatar-3.png",
    status: "offline",
    lastMessage: "Can you help me with the math questions?",
    unread: 0,
    lastSeen: "1h ago",
  },
  {
    id: 4,
    name: "James Johnson",
    avatar: "/avatars/chat-avatar-4.png",
    status: "online",
    lastMessage: "Let's create a quiz together",
    unread: 0,
    lastSeen: "30m ago",
  },
  {
    id: 5,
    name: "Olivia Parker",
    avatar: "/avatars/chat-avatar-5.png",
    status: "offline",
    lastMessage: "Thanks for the quiz tips!",
    unread: 0,
    lastSeen: "2h ago",
  },
];

const initialMessages = [
  {
    id: 1,
    contactId: 1,
    content: "Hey there! How's your quiz preparation going?",
    timestamp: "10:30 AM",
    isMe: false,
    status: "read",
  },
  {
    id: 2,
    contactId: 1,
    content: "I'm doing well! Just finished creating a new science quiz.",
    timestamp: "10:32 AM",
    isMe: true,
    status: "read",
  },
  {
    id: 3,
    contactId: 1,
    content: "That's awesome! Can I try it out?",
    timestamp: "10:33 AM",
    isMe: false,
    status: "read",
  },
  {
    id: 4,
    contactId: 1,
    content: "Of course! I'll share it with you once it's published.",
    timestamp: "10:35 AM",
    isMe: true,
    status: "read",
  },
  {
    id: 5,
    contactId: 1,
    content: "Are you ready for the science quiz?",
    timestamp: "10:40 AM",
    isMe: false,
    status: "delivered",
  },
];

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      contactId: activeContact.id,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
      status: "sent" as const,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Simulate reply after 1-2 seconds
    setTimeout(
      () => {
        const reply = {
          id: messages.length + 2,
          contactId: activeContact.id,
          content: `Thanks for your message! This is an automated reply from ${activeContact.name}.`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isMe: false,
          status: "delivered" as const,
        };
        setMessages((prev) => [...prev, reply]);
      },
      1000 + Math.random() * 1000
    );
  };

  return (
    <div
      className="fixed top-16 right-4 z-50 flex h-[600px] w-[350px] flex-col rounded-lg border bg-background shadow-lg md:w-[400px]"
      data-oid="9gb46o."
    >
      {/* Chat Header */}
      <div
        className="flex items-center justify-between border-b p-3"
        data-oid="f196_uv"
      >
        <h2 className="font-semibold text-lg" data-oid="id3u2h0">
          Messages
        </h2>
        <Button
          data-oid="gd-i:iv"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <X className="h-5 w-5" data-oid="ybxy3t5" />
        </Button>
      </div>

      {/* Chat Tabs */}
      <Tabs className="flex-1" data-oid="r9sovuf" defaultValue="chats">
        <TabsList className="grid w-full grid-cols-3" data-oid="tmt5rrr">
          <TabsTrigger data-oid="27--d:x" value="chats">
            Chats
          </TabsTrigger>
          <TabsTrigger data-oid="03wbedh" value="contacts">
            Contacts
          </TabsTrigger>
          <TabsTrigger data-oid="jxn.y6x" value="groups">
            Groups
          </TabsTrigger>
        </TabsList>

        {/* Chats Tab */}
        <TabsContent
          className="flex h-[calc(100%-40px)] flex-col"
          data-oid="gox8czz"
          value="chats"
        >
          {/* Search */}
          <div className="border-b p-2" data-oid="ol-g0v_">
            <div className="relative" data-oid="4taxwho">
              <Search
                className="-translate-y-1/2 absolute top-1/2 left-2 h-4 w-4 text-muted-foreground"
                data-oid="7gqoztr"
              />

              <Input
                className="pl-8"
                data-oid="ms90rk_"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search conversations..."
                value={searchTerm}
              />
            </div>
          </div>

          {/* Split view: Contacts list and active chat */}
          <div className="flex flex-1 overflow-hidden" data-oid="vp.vwyg">
            {/* Contacts list */}
            <div className="w-1/3 border-r" data-oid="qg7mf.y">
              <ScrollArea className="h-[460px]" data-oid="s-iahws">
                {filteredContacts.map((contact) => (
                  <div
                    className={`cursor-pointer p-2 hover:bg-muted ${activeContact.id === contact.id ? "bg-muted" : ""}`}
                    data-oid="2tjfc8t"
                    key={contact.id}
                    onClick={() => setActiveContact(contact)}
                  >
                    <div className="relative" data-oid="9814uos">
                      <Avatar className="h-10 w-10" data-oid="n74b9da">
                        <AvatarImage
                          alt={contact.name}
                          data-oid="c-9j4v."
                          src={contact.avatar || "/placeholder.svg"}
                        />

                        <AvatarFallback data-oid=".6n9m-z">
                          {contact.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background ${
                          contact.status === "online"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                        data-oid="yh6zxsb"
                      />
                    </div>
                    {contact.unread > 0 && (
                      <Badge
                        className="absolute top-2 right-2"
                        data-oid="ksij7bq"
                        variant="destructive"
                      >
                        {contact.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </ScrollArea>
            </div>

            {/* Active chat */}
            <div className="flex w-2/3 flex-col" data-oid="59mbytw">
              {/* Chat header */}
              <div
                className="flex items-center justify-between border-b p-2"
                data-oid="78_a2iv"
              >
                <div className="flex items-center gap-2" data-oid="ls3kwce">
                  <Avatar className="h-8 w-8" data-oid="4x-ofma">
                    <AvatarImage
                      alt={activeContact.name}
                      data-oid="nv0lwrk"
                      src={activeContact.avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="bh4z6rw">
                      {activeContact.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid=".a9ss.5">
                    <div className="font-medium" data-oid="4zmw1n7">
                      {activeContact.name}
                    </div>
                    <div
                      className="text-muted-foreground text-xs"
                      data-oid="cuutf2x"
                    >
                      {activeContact.status === "online"
                        ? "Online"
                        : activeContact.lastSeen}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1" data-oid="h-mio3m">
                  <Button data-oid="o9l3br6" size="icon" variant="ghost">
                    <Phone className="h-4 w-4" data-oid="s5o9-wh" />
                  </Button>
                  <Button data-oid="jrr3wq5" size="icon" variant="ghost">
                    <Video className="h-4 w-4" data-oid="rbc:jnz" />
                  </Button>
                  <Button data-oid="fl1-u-c" size="icon" variant="ghost">
                    <MoreVertical className="h-4 w-4" data-oid="f9553b-" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-3" data-oid="t-7yy9g">
                {messages
                  .filter((msg) => msg.contactId === activeContact.id)
                  .map((message) => (
                    <div
                      className={`mb-2 flex ${message.isMe ? "justify-end" : "justify-start"}`}
                      data-oid="r65fop4"
                      key={message.id}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-2 ${
                          message.isMe
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                        data-oid="le12ocj"
                      >
                        <div data-oid="i247m._">{message.content}</div>
                        <div
                          className="mt-1 flex items-center justify-end gap-1 text-xs opacity-70"
                          data-oid="8_l-g4-"
                        >
                          <span data-oid=".af_0gq">{message.timestamp}</span>
                          {message.isMe && (
                            <>
                              {message.status === "sent" && (
                                <Check className="h-3 w-3" data-oid="d_17mei" />
                              )}
                              {message.status === "delivered" && (
                                <Check className="h-3 w-3" data-oid="pyuafr8" />
                              )}
                              {message.status === "read" && (
                                <CheckCheck
                                  className="h-3 w-3"
                                  data-oid="86pf.u3"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                <div data-oid="7phh91w" ref={messagesEndRef} />
              </ScrollArea>

              {/* Message input */}
              <div className="border-t p-2" data-oid="2d6v79y">
                <div className="flex items-center gap-2" data-oid="4.mtp.a">
                  <Button data-oid="srdzrs3" size="icon" variant="ghost">
                    <Smile className="h-5 w-5" data-oid="8.l9ic2" />
                  </Button>
                  <Button data-oid="ro3jy2y" size="icon" variant="ghost">
                    <ImageIcon className="h-5 w-5" data-oid="np:usnw" />
                  </Button>
                  <Input
                    data-oid="i_e9u5q"
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type a message..."
                    value={newMessage}
                  />

                  <Button
                    data-oid="30s3uih"
                    onClick={handleSendMessage}
                    size="icon"
                  >
                    <Send className="h-4 w-4" data-oid="c.kycao" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Contacts Tab */}
        <TabsContent
          className="h-[calc(100%-40px)]"
          data-oid="cpvgtzu"
          value="contacts"
        >
          <div className="border-b p-2" data-oid=":f0bjvy">
            <div className="relative" data-oid="wo0p_ii">
              <Search
                className="-translate-y-1/2 absolute top-1/2 left-2 h-4 w-4 text-muted-foreground"
                data-oid="a.jx3f3"
              />

              <Input
                className="pl-8"
                data-oid="sr5zrtt"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search contacts..."
                value={searchTerm}
              />
            </div>
          </div>
          <ScrollArea className="h-[460px]" data-oid="77wc6dp">
            {filteredContacts.map((contact) => (
              <div
                className="flex items-center justify-between p-3 hover:bg-muted"
                data-oid=":vic9mg"
                key={contact.id}
                onClick={() => {
                  setActiveContact(contact);
                  document
                    .querySelector('[data-value="chats"]')
                    ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                }}
              >
                <div className="flex items-center gap-3" data-oid="-p19t71">
                  <div className="relative" data-oid="j58c-f1">
                    <Avatar data-oid="4xvn9to">
                      <AvatarImage
                        alt={contact.name}
                        data-oid="jg8en4a"
                        src={contact.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="3jquc5h">
                        {contact.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background ${
                        contact.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                      data-oid="sg36v49"
                    />
                  </div>
                  <div data-oid="c3rvf2v">
                    <div className="font-medium" data-oid="y0nl48r">
                      {contact.name}
                    </div>
                    <div
                      className="text-muted-foreground text-sm"
                      data-oid="3ytg_ii"
                    >
                      {contact.status === "online"
                        ? "Online"
                        : contact.lastSeen}
                    </div>
                  </div>
                </div>
                <Button data-oid="en27l2j" size="sm" variant="ghost">
                  Message
                </Button>
              </div>
            ))}
          </ScrollArea>
        </TabsContent>

        {/* Groups Tab */}
        <TabsContent
          className="h-[calc(100%-40px)] p-4"
          data-oid="0--xe01"
          value="groups"
        >
          <div
            className="flex h-full flex-col items-center justify-center text-center"
            data-oid="zd14mx3"
          >
            <div className="mb-4 rounded-full bg-muted p-6" data-oid="-44qtyt">
              <Users
                className="h-10 w-10 text-muted-foreground"
                data-oid="jrlkkic"
              />
            </div>
            <h3 className="mb-2 font-semibold text-xl" data-oid="w2yl3v0">
              Create a Group
            </h3>
            <p className="mb-4 text-muted-foreground" data-oid="drdfcp6">
              Start a group chat with your friends and quiz together
            </p>
            <Button data-oid="9.t1tag">Create New Group</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Users icon component for the Groups tab
function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      data-oid="72bev97"
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-oid="9wks:c-" />
      <circle cx="9" cy="7" data-oid="vylxpex" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" data-oid="f5u0jco" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" data-oid="pfwki-m" />
    </svg>
  );
}
