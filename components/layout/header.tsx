"use client";
import {
  Bell,
  FileQuestion,
  FileText,
  LogOut,
  Mail,
  MessageCircleQuestion,
  MessageSquare,
  Moon,
  PanelLeftClose,
  PanelRightClose,
  Search,
  Settings,
  Tag,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { recentMessages } from "@/data/chat-data";
import { notifications } from "@/data/notifications";
import { mockSearchData } from "@/data/searchdata";
import ChatDrawer from "../header/ChatDrawer";
import NotificationDrawer from "../header/NotificationDrawer";
import { ThemeToggle } from "../header/ThemeToggle";
import { Badge } from "../ui/badge";
import { useSidebar } from "./sidebar-context";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { toggleCollapsed, collapsed } = useSidebar();
  const [isMessagesDrawerOpen, setIsMessagesDrawerOpen] = useState(false);
  const [isNotificationsDrawerOpen, setIsNotificationsDrawerOpen] =
    useState(false);

  // Add useState for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchResultsRef = React.useRef<HTMLDivElement>(null);

  // Add search filter function
  const getFilteredResults = () => {
    if (!searchQuery.trim())
      return { quizzes: [], categories: [], creators: [], pages: [] };

    const query = searchQuery.toLowerCase().trim();

    return {
      quizzes: mockSearchData.quizzes
        .filter(
          (quiz) =>
            quiz.title.toLowerCase().includes(query) ||
            quiz.category.toLowerCase().includes(query)
        )
        .slice(0, 4),
      categories: mockSearchData.categories
        .filter((category) => category.name.toLowerCase().includes(query))
        .slice(0, 3),
      creators: mockSearchData.creators
        .filter(
          (creator) =>
            creator.name.toLowerCase().includes(query) ||
            creator.username.toLowerCase().includes(query)
        )
        .slice(0, 3),
      pages: mockSearchData.pages
        .filter((page) => page.title.toLowerCase().includes(query))
        .slice(0, 3),
    };
  };

  // Add click outside handler to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close drawers when navigating to a new page
  useEffect(() => {
    setIsMessagesDrawerOpen(false);
    setIsNotificationsDrawerOpen(false);
  }, [pathname]);

  // Ensure only one drawer can be open at a time
  useEffect(() => {
    if (isMessagesDrawerOpen) {
      setIsNotificationsDrawerOpen(false);
    }
  }, [isMessagesDrawerOpen]);

  useEffect(() => {
    if (isNotificationsDrawerOpen) {
      setIsMessagesDrawerOpen(false);
    }
  }, [isNotificationsDrawerOpen]);

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;
  const unreadMessagesCount = recentMessages.filter((m) => m.unread).length;

  const handleMessageClick = (conversationId: string) => {
    router.push(`/chat?conversation=${conversationId}`);
    setIsMessagesDrawerOpen(false);
  };

  const handleNotificationClick = () => {
    setIsNotificationsDrawerOpen(false);
    // In a real app, you would mark the notification as read here
  };

  const markAllNotificationsAsRead = () => {
    // In a real app, you would call an API to mark all notifications as read
    // For now, we'll just close the drawer
    setIsNotificationsDrawerOpen(false);
  };

  return (
    <>
      <header
        className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6"
        data-oid="x:o:26l"
      >
        <div className="flex items-center gap-4" data-oid="9gyomsf">
          <Button
            data-oid="2ax-dq5"
            onClick={toggleCollapsed}
            size="icon"
            variant="ghost"
          >
            {collapsed ? (
              <PanelRightClose className="!text-3xl" data-oid="46d:osh" />
            ) : (
              <PanelLeftClose className="!text-3xl" data-oid="c8c4d.2" />
            )}
          </Button>

          <div
            className="relative w-full max-md:hidden md:w-64 lg:w-80 xl:w-96"
            data-oid="k.yw2ep"
          >
            <Search
              className="-translate-y-1/2 absolute top-1/2 left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="yjph-c4"
            />

            <Input
              className="w-full rounded-md border-0 bg-muted pl-8 focus-visible:ring-0 focus-visible:ring-offset-0"
              data-oid="yma_b75"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search quizzes, categories, creators..."
              ref={searchInputRef}
              type="search"
              value={searchQuery}
            />

            {/* Search Results Dropdown */}
            {isSearchFocused && (
              <div
                className="absolute top-full left-0 z-50 mt-1 max-h-[80vh] w-full overflow-auto rounded-md border bg-background p-2 shadow-lg"
                data-oid="2j60dha"
                ref={searchResultsRef}
              >
                {searchQuery.trim() ? (
                  <>
                    {Object.entries(getFilteredResults()).every(
                      ([_, items]) => items.length === 0
                    ) ? (
                      <div
                        className="p-4 text-center text-muted-foreground"
                        data-oid="ckswryr"
                      >
                        <Search
                          className="mx-auto mb-2 h-8 w-8 opacity-50"
                          data-oid="c9qpvld"
                        />

                        <p data-oid="gv3hnpn">
                          No results found for "{searchQuery}"
                        </p>
                        <p className="mt-1 text-sm" data-oid="cyf-vrq">
                          Try different keywords or check spelling
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Quizzes */}
                        {getFilteredResults().quizzes.length > 0 && (
                          <div className="mb-4" data-oid="pp.wrou">
                            <div
                              className="flex items-center gap-2 px-3 py-1.5 font-medium text-muted-foreground text-sm"
                              data-oid="8n:kgbn"
                            >
                              <FileQuestion
                                className="h-4 w-4"
                                data-oid="4o70ilu"
                              />

                              <span data-oid=":8yt8sh">Quizzes</span>
                            </div>
                            <div className="mt-1" data-oid="s4i73:j">
                              {getFilteredResults().quizzes.map((quiz) => (
                                <Link
                                  className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                                  data-oid="eijvxl-"
                                  href={`/quiz/${quiz.id}`}
                                  key={quiz.id}
                                  onClick={() => {
                                    setIsSearchFocused(false);
                                    setSearchQuery("");
                                  }}
                                >
                                  <div
                                    className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10"
                                    data-oid="bsta_ll"
                                  >
                                    <FileQuestion
                                      className="h-4 w-4 text-primary"
                                      data-oid="314bhc."
                                    />
                                  </div>
                                  <div data-oid="q8d6xvz">
                                    <p
                                      className="line-clamp-1 font-medium"
                                      data-oid="ksqsd5."
                                    >
                                      {quiz.title}
                                    </p>
                                    <div
                                      className="mt-1 flex items-center gap-2"
                                      data-oid="u_c5kja"
                                    >
                                      <Badge
                                        className="font-normal text-xs"
                                        data-oid="5053dja"
                                        variant="outline"
                                      >
                                        {quiz.category}
                                      </Badge>
                                      <Badge
                                        className="font-normal text-xs"
                                        data-oid="m.6b:cb"
                                        variant="outline"
                                      >
                                        {quiz.difficulty}
                                      </Badge>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Categories */}
                        {getFilteredResults().categories.length > 0 && (
                          <div className="mb-4" data-oid="0wldyb.">
                            <div
                              className="flex items-center gap-2 px-3 py-1.5 font-medium text-muted-foreground text-sm"
                              data-oid="cznqck3"
                            >
                              <Tag className="h-4 w-4" data-oid="f3ujldz" />
                              <span data-oid="y8wczdc">Categories</span>
                            </div>
                            <div className="mt-1" data-oid="8j9fvi4">
                              {getFilteredResults().categories.map(
                                (category) => (
                                  <Link
                                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                                    data-oid=".6l2pjn"
                                    href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                                    key={category.id}
                                    onClick={() => {
                                      setIsSearchFocused(false);
                                      setSearchQuery("");
                                    }}
                                  >
                                    <div
                                      className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100"
                                      data-oid="onkzmx4"
                                    >
                                      <Tag
                                        className="h-4 w-4 text-blue-600"
                                        data-oid="m71nxpo"
                                      />
                                    </div>
                                    <div className="flex-1" data-oid="63p6wkr">
                                      <p
                                        className="font-medium"
                                        data-oid="-hzqemc"
                                      >
                                        {category.name}
                                      </p>
                                    </div>
                                    <Badge
                                      className="font-normal text-xs"
                                      data-oid="me.adhm"
                                      variant="outline"
                                    >
                                      {category.quizCount} quizzes
                                    </Badge>
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Creators */}
                        {getFilteredResults().creators.length > 0 && (
                          <div className="mb-4" data-oid="zxb:6jf">
                            <div
                              className="flex items-center gap-2 px-3 py-1.5 font-medium text-muted-foreground text-sm"
                              data-oid="2uqpq56"
                            >
                              <Users className="h-4 w-4" data-oid="e840tdv" />
                              <span data-oid="4e:xsc_">Creators</span>
                            </div>
                            <div className="mt-1" data-oid="zfqfg0d">
                              {getFilteredResults().creators.map((creator) => (
                                <Link
                                  className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                                  data-oid="eqzb:h2"
                                  href={`/profile/${creator.username}`}
                                  key={creator.id}
                                  onClick={() => {
                                    setIsSearchFocused(false);
                                    setSearchQuery("");
                                  }}
                                >
                                  <div
                                    className="flex h-8 w-8 items-center justify-center rounded-md bg-green-100"
                                    data-oid=":idyhei"
                                  >
                                    <User
                                      className="h-4 w-4 text-green-600"
                                      data-oid="j9wt0vj"
                                    />
                                  </div>
                                  <div className="flex-1" data-oid="muej_t9">
                                    <p
                                      className="font-medium"
                                      data-oid="t_6tz.o"
                                    >
                                      {creator.name}
                                    </p>
                                    <p
                                      className="text-muted-foreground text-xs"
                                      data-oid="m9bnkm0"
                                    >
                                      @{creator.username}
                                    </p>
                                  </div>
                                  <Badge
                                    className="font-normal text-xs"
                                    data-oid="ro34rz7"
                                    variant="outline"
                                  >
                                    {creator.quizCount} quizzes
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Pages */}
                        {getFilteredResults().pages.length > 0 && (
                          <div className="mb-2" data-oid="8_4_whq">
                            <div
                              className="flex items-center gap-2 px-3 py-1.5 font-medium text-muted-foreground text-sm"
                              data-oid="ig9uf:0"
                            >
                              <FileText
                                className="h-4 w-4"
                                data-oid="m-d0sw9"
                              />

                              <span data-oid="xyoescj">Pages</span>
                            </div>
                            <div className="mt-1" data-oid="sc8cgme">
                              {getFilteredResults().pages.map((page) => (
                                <Link
                                  className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                                  data-oid="xxqoptq"
                                  href={page.path}
                                  key={page.id}
                                  onClick={() => {
                                    setIsSearchFocused(false);
                                    setSearchQuery("");
                                  }}
                                >
                                  <div
                                    className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-100"
                                    data-oid="jbh3g6v"
                                  >
                                    <FileText
                                      className="h-4 w-4 text-purple-600"
                                      data-oid="9a1qnbo"
                                    />
                                  </div>
                                  <p className="font-medium" data-oid="ervacka">
                                    {page.title}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* View All Results Button */}
                        <div className="mt-2 border-t pt-2" data-oid="89o1od7">
                          <Button
                            className="w-full justify-center"
                            data-oid="u360yef"
                            onClick={() => {
                              router.push(
                                `/search?q=${encodeURIComponent(searchQuery)}`
                              );
                              setIsSearchFocused(false);
                              setSearchQuery("");
                            }}
                            variant="outline"
                          >
                            <Search
                              className="mr-2 h-4 w-4"
                              data-oid="uq6xip1"
                            />
                            View all results for "{searchQuery}"
                          </Button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div
                    className="p-4 text-center text-muted-foreground"
                    data-oid="a_5ni6t"
                  >
                    <Search
                      className="mx-auto mb-2 h-8 w-8 opacity-50"
                      data-oid="jb.3nfg"
                    />

                    <p data-oid="801x_jp">
                      Type to search for quizzes, categories, creators, and
                      more...
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4" data-oid="v5lua2o">
          <Button
            className="relative"
            data-oid="196lfh0"
            onClick={() => setIsMessagesDrawerOpen(true)}
            size="icon"
            variant="outline"
          >
            <MessageSquare className="h-5 w-5" data-oid="l0l8oyt" />
            {unreadMessagesCount > 0 && (
              <span
                className="-right-1 -top-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground"
                data-oid="4zaoyw3"
              >
                {unreadMessagesCount}
              </span>
            )}
          </Button>

          <Button
            className="relative"
            data-oid="..z:c7p"
            onClick={() => setIsNotificationsDrawerOpen(true)}
            size="icon"
            variant="outline"
          >
            <Bell className="h-5 w-5" data-oid="x76bona" />
            {unreadNotificationsCount > 0 && (
              <span
                className="-right-1 -top-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground"
                data-oid="wrmt.sn"
              >
                {unreadNotificationsCount}
              </span>
            )}
          </Button>

          <ThemeToggle data-oid="0a-7qf6" />

          <Link
            className="flex items-center gap-2 rounded-full border px-3 py-1.5 max-sm:hidden"
            data-oid=".rmnan7"
            href="/dashboard/user?tab=wallet"
          >
            <span className="font-medium text-sm" data-oid="emq4.__">
              $124.50
            </span>
            <span className="text-green-500" data-oid="6ka4w3q">
              💰
            </span>
          </Link>

          <DropdownMenu data-oid="6lxrn2e">
            <DropdownMenuTrigger asChild data-oid="hsnj5wx">
              <Button
                className="rounded-full"
                data-oid="ivqu3ww"
                size="icon"
                variant="ghost"
              >
                <Avatar className="h-8 w-8" data-oid="vtf6q52">
                  <AvatarImage
                    alt="User"
                    data-oid="33r:bym"
                    src="/avatars/brain.png"
                  />

                  <AvatarFallback data-oid="o.-tqbw">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 p-0"
              data-oid="dieau4a"
            >
              <div className="flex flex-col space-y-2 p-4" data-oid="ls8n6m0">
                <div className="flex items-center gap-3" data-oid="tya:16p">
                  <Avatar className="h-16 w-16" data-oid="qw9bhe9">
                    <AvatarImage
                      alt="User"
                      data-oid="sy3_l61"
                      src="/avatars/brain.png"
                    />

                    <AvatarFallback data-oid="oiw0wtj">JD</AvatarFallback>
                  </Avatar>
                  <div data-oid="sxec445">
                    <h3 className="font-semibold text-lg" data-oid="air6_zz">
                      Jonathan Doe
                    </h3>
                    <p
                      className="text-muted-foreground text-sm"
                      data-oid="w2axyy4"
                    >
                      @johndoe
                    </p>
                    <div
                      className="flex items-center gap-1 text-muted-foreground text-sm"
                      data-oid="_7.594d"
                    >
                      <Mail className="h-3 w-3" data-oid="ogbc_xu" />
                      <span data-oid="ppoufek">info@quizhub.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator data-oid="fogdk4j" />

              <div className="p-2" data-oid="o.5w1za">
                <DropdownMenuItem
                  asChild
                  className="flex gap-3 px-3 py-1.5"
                  data-oid="w3r-ut6"
                >
                  <Link data-oid=".j6fsw8" href="/profile/alexjohnson">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100"
                      data-oid="25i.g8t"
                    >
                      <User
                        className="h-4 w-4 text-blue-600"
                        data-oid="_qnppp4"
                      />
                    </div>
                    <div className="flex flex-col" data-oid="uwbco2z">
                      <span data-oid="clx_vx1">My Profile</span>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="x_a5u.g"
                      >
                        Account settings
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="flex gap-3 px-3 py-1.5"
                  data-oid="frkvvav"
                >
                  <Link data-oid="xp1_d1:" href="/dashboard/user">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-100"
                      data-oid="gpvt.5."
                    >
                      <TrendingUp
                        className="h-4 w-4 text-purple-600"
                        data-oid=".idh.n0"
                      />
                    </div>
                    <div className="flex flex-col" data-oid="im.tcjt">
                      <span data-oid="j:62y91">Dashboard</span>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="dfaj8sl"
                      >
                        Your activity and stats
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="flex gap-3 px-3 py-1.5"
                  data-oid="0wucb2u"
                >
                  <Link data-oid="ldh19f3" href="/my-quizzes">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100"
                      data-oid="c83o.pm"
                    >
                      <MessageCircleQuestion
                        className="h-4 w-4 text-blue-600"
                        data-oid="hz3ulln"
                      />
                    </div>
                    <div className="flex flex-col" data-oid="3jxn.b5">
                      <span data-oid="pv913vr">My Quizes</span>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="gldl35q"
                      >
                        Your created quizes
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  asChild
                  className="flex gap-3 px-3 py-1.5"
                  data-oid="1.6rj1."
                >
                  <Link data-oid="8vz1r7f" href="/settings">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100"
                      data-oid="b3xzbch"
                    >
                      <Settings
                        className="h-4 w-4 text-gray-600"
                        data-oid="6e27rlz"
                      />
                    </div>
                    <div className="flex flex-col" data-oid="zx2vzml">
                      <span data-oid="8vvhblu">Settings</span>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="kz39ow1"
                      >
                        Preferences
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center justify-between p-3"
                  data-oid="my71zbe"
                >
                  <div className="flex gap-3" data-oid="tb3yzte">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-100"
                      data-oid="1n:t0ub"
                    >
                      <Moon
                        className="h-4 w-4 text-purple-600"
                        data-oid="5o4sd-v"
                      />
                    </div>
                    <div className="flex flex-col" data-oid="pwkm98:">
                      <span data-oid="nh:itrc">Dark Mode</span>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="bedi9ov"
                      >
                        Toggle theme
                      </span>
                    </div>
                  </div>
                  <Switch
                    checked={theme === "dark"}
                    data-oid="w-t4_x-"
                    onCheckedChange={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                </DropdownMenuItem>
              </div>

              <div className="p-4 pt-0" data-oid="jtn9:a-">
                <Button
                  asChild
                  className="w-full justify-center"
                  data-oid="z99-v-0"
                  variant="destructive"
                >
                  <Link
                    className="flex items-center gap-2"
                    data-oid="govy.3e"
                    href="/login"
                  >
                    <LogOut className="h-4 w-4" data-oid="x9wrf7g" />
                    <span data-oid="uf.vb7g">Log out</span>
                  </Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Overlay for both drawers */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 transition-opacity ${isMessagesDrawerOpen || isNotificationsDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        data-oid="1-ocy8x"
        onClick={() => {
          setIsMessagesDrawerOpen(false);
          setIsNotificationsDrawerOpen(false);
        }}
      />

      {/* Messages Drawer */}
      <ChatDrawer
        data-oid="cpg9qi4"
        handleMessageClick={handleMessageClick}
        isMessagesDrawerOpen={isMessagesDrawerOpen}
        setIsMessagesDrawerOpen={setIsMessagesDrawerOpen}
      />

      {/* Notifications Drawer */}
      <NotificationDrawer
        data-oid="wfh:n8n"
        handleNotificationClick={handleNotificationClick}
        isNotificationsDrawerOpen={isNotificationsDrawerOpen}
        markAllNotificationsAsRead={markAllNotificationsAsRead}
        setIsNotificationsDrawerOpen={setIsNotificationsDrawerOpen}
      />
    </>
  );
}
