"use client";
import {
  Filter,
  Flag,
  MessageCircle,
  MoreHorizontal,
  PlusCircle,
  Search,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface TournamentDiscussionProps {
  tournamentId: string;
}

// Mock data for discussions
const mockDiscussions = [
  {
    id: "1",
    title: "Strategy for Round 1: Speed vs. Accuracy",
    author: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "/avatars/alex.png",
      role: "Tournament Finalist",
    },
    content:
      "I'm wondering what everyone's approach is for the first round. Are you focusing on answering quickly to maximize points, or taking your time to ensure accuracy?",
    createdAt: "2 hours ago",
    likes: 24,
    replies: 8,
    tags: ["strategy", "round-1"],
    pinned: true,
  },
  {
    id: "2",
    title: "History questions seem much harder than other categories",
    author: {
      id: "user2",
      name: "Sarah Williams",
      avatar: "/avatars/sarah.webp",
      role: "Participant",
    },
    content:
      "Did anyone else notice that the history questions in the practice round were significantly more difficult than other categories? I'm wondering if I should focus my preparation there.",
    createdAt: "5 hours ago",
    likes: 18,
    replies: 12,
    tags: ["difficulty", "history"],
    pinned: false,
  },
  {
    id: "3",
    title: "Looking for a study group for the science category",
    author: {
      id: "user3",
      name: "Michael Chen",
      avatar: "/avatars/wizard.webp",
      role: "Participant",
    },
    content:
      "I'm looking to form a small study group (3-4 people) to prepare for the science questions. Anyone interested? We could share resources and quiz each other.",
    createdAt: "1 day ago",
    likes: 15,
    replies: 20,
    tags: ["study-group", "science"],
    pinned: false,
  },
  {
    id: "4",
    title: "Technical issues during practice round",
    author: {
      id: "user4",
      name: "Emily Rodriguez",
      avatar: "/avatars/guru.png",
      role: "Participant",
    },
    content:
      "I experienced some lag during the practice round that caused me to miss a few questions. Has anyone else had similar issues? Any tips for preventing this during the actual tournament?",
    createdAt: "1 day ago",
    likes: 8,
    replies: 15,
    tags: ["technical", "issues"],
    pinned: false,
  },
  {
    id: "5",
    title: "Official rules clarification needed",
    author: {
      id: "user5",
      name: "David Kim",
      avatar: "/avatars/master.png",
      role: "Participant",
    },
    content:
      "The rules state that 'external resources are not permitted during the tournament.' Does this include personal notes made before the tournament starts?",
    createdAt: "2 days ago",
    likes: 32,
    replies: 7,
    tags: ["rules", "clarification"],
    pinned: false,
  },
];

// Mock data for comments on a discussion
const mockComments = [
  {
    id: "c1",
    author: {
      id: "user6",
      name: "Jessica Taylor",
      avatar: "/testimonials/jessica.png",
      role: "Tournament Moderator",
    },
    content:
      "Great question! I personally focus on accuracy first, especially in the early rounds. Speed becomes more important in the later rounds when the questions get harder and time pressure increases.",
    createdAt: "1 hour ago",
    likes: 12,
    isOfficial: true,
  },
  {
    id: "c2",
    author: {
      id: "user7",
      name: "Robert Chen",
      avatar: "/avatars/brain.png",
      role: "Previous Champion",
    },
    content:
      "I've found that a balanced approach works best. For questions you're confident about, answer quickly. For ones you're unsure of, take a bit more time but don't overthink. Remember that in Round 1, incorrect answers don't have a penalty, so it's better to guess than to skip.",
    createdAt: "1.5 hours ago",
    likes: 18,
    isOfficial: false,
  },
  {
    id: "c3",
    author: {
      id: "user8",
      name: "Sophia Martinez",
      avatar: "/avatars/genious.png",
      role: "Participant",
    },
    content:
      "I'm planning to go for speed in categories I'm strong in (science and literature) and take more time in my weaker areas (sports and geography). Has anyone tried this approach before?",
    createdAt: "1.8 hours ago",
    likes: 5,
    isOfficial: false,
  },
];

export function TournamentDiscussion({
  tournamentId,
}: TournamentDiscussionProps) {
  const [activeDiscussion, setActiveDiscussion] = useState<string | null>(null);
  const [filter, setFilter] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

  // Filter and sort discussions based on current filter and search
  const filteredDiscussions = mockDiscussions
    .filter(
      (discussion) =>
        discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (filter === "recent") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (filter === "popular") {
        return a.likes < b.likes ? 1 : -1;
      }
      if (filter === "most-replies") {
        return a.replies < b.replies ? 1 : -1;
      }
      return 0;
    });

  // If a discussion is selected, show its details and comments
  if (activeDiscussion) {
    const discussion = mockDiscussions.find((d) => d.id === activeDiscussion);
    if (!discussion) return null;

    return (
      <div className="space-y-6" data-oid=":2itfex">
        <div className="flex items-center justify-between" data-oid=":iepv_j">
          <Button
            className="flex items-center gap-2"
            data-oid="v0baut9"
            onClick={() => setActiveDiscussion(null)}
            variant="ghost"
          >
            ← Back to discussions
          </Button>
          <div className="flex items-center gap-2" data-oid="om3k5iz">
            <Button
              className="flex items-center gap-1"
              data-oid="-xlqgpu"
              size="sm"
              variant="outline"
            >
              <Flag className="h-4 w-4" data-oid="q0mwea2" />
              Report
            </Button>
            <DropdownMenu data-oid="pm7j98b">
              <DropdownMenuTrigger asChild data-oid="o0fkezx">
                <Button data-oid="bpbf9w6" size="icon" variant="ghost">
                  <MoreHorizontal className="h-5 w-5" data-oid="2iw14a2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" data-oid="t3dcc-n">
                <DropdownMenuItem data-oid="9j5umj7">Bookmark</DropdownMenuItem>
                <DropdownMenuItem data-oid="1fs8u39">Share</DropdownMenuItem>
                <DropdownMenuItem data-oid="0tb9y0a">
                  Subscribe to updates
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm" data-oid="zaw8g10">
          <div
            className="mb-4 flex items-start justify-between"
            data-oid="c36i60f"
          >
            <div className="flex items-center gap-3" data-oid=":.hvyv3">
              <Avatar
                className="h-10 w-10 border-2 border-primary/20"
                data-oid="66upsa4"
              >
                <AvatarImage
                  alt={discussion.author.name}
                  data-oid="1-itilp"
                  src={discussion.author.avatar || "/placeholder.svg"}
                />

                <AvatarFallback data-oid="w2gwqk_">
                  {discussion.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div data-oid="l1sup:w">
                <div className="flex items-center gap-2" data-oid=".eyog:o">
                  <span className="font-medium" data-oid="9gl0aq4">
                    {discussion.author.name}
                  </span>
                  <Badge
                    className="text-xs"
                    data-oid="5y1a5z4"
                    variant="outline"
                  >
                    {discussion.author.role}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm" data-oid="kvbj15m">
                  {discussion.createdAt}
                </p>
              </div>
            </div>
            {discussion.pinned && (
              <Badge
                className="flex items-center gap-1"
                data-oid="1kmu.hz"
                variant="secondary"
              >
                <svg
                  data-oid="m9.2v4y"
                  fill="none"
                  height="12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v10" data-oid="-09_z2r" />
                  <path d="M12 22v-3" data-oid="d16r139" />
                  <path d="M4.93 10.93l1.41 1.41" data-oid="48lvj:i" />
                  <path d="M17.66 11.7l1.41 1.41" data-oid="c4izjzo" />
                  <path d="M2 18h2" data-oid="zucf82q" />
                  <path d="M20 18h2" data-oid="ekf7cu9" />
                  <path d="M4.93 19.07l1.41-1.41" data-oid="3qn2ze." />
                  <path d="M17.66 17.3l1.41-1.41" data-oid="97557ve" />
                </svg>
                Pinned
              </Badge>
            )}
          </div>

          <h2 className="mb-3 font-semibold text-2xl" data-oid="09hxeba">
            {discussion.title}
          </h2>
          <p className="mb-4" data-oid="ej8dyx9">
            {discussion.content}
          </p>

          <div className="mb-4 flex flex-wrap gap-2" data-oid=".2jr_q3">
            {discussion.tags.map((tag) => (
              <Badge
                className="bg-muted/50"
                data-oid="3qoz1ys"
                key={tag}
                variant="outline"
              >
                #{tag}
              </Badge>
            ))}
          </div>

          <div
            className="flex items-center gap-4 text-muted-foreground"
            data-oid="r_192.a"
          >
            <Button
              className="flex items-center gap-1"
              data-oid="jsy6ouu"
              size="sm"
              variant="ghost"
            >
              <ThumbsUp className="h-4 w-4" data-oid="2g_0_16" />
              <span data-oid="-:nm94z">{discussion.likes}</span>
            </Button>
            <Button
              className="flex items-center gap-1"
              data-oid="jt.zt2f"
              size="sm"
              variant="ghost"
            >
              <ThumbsDown className="h-4 w-4" data-oid="p:52bn8" />
            </Button>
            <Button
              className="flex items-center gap-1"
              data-oid="g2cjyn0"
              size="sm"
              variant="ghost"
            >
              <MessageCircle className="h-4 w-4" data-oid=".iqyha_" />
              <span data-oid="g6zekgb">{discussion.replies} replies</span>
            </Button>
          </div>
        </div>

        <div className="space-y-6" data-oid="ingoq:p">
          <h3 className="font-semibold text-xl" data-oid="mbi7lq8">
            Replies
          </h3>

          {mockComments.map((comment) => (
            <div
              className="rounded-lg bg-card p-5 shadow-sm"
              data-oid="t-wga.."
              key={comment.id}
            >
              <div
                className="mb-3 flex items-start justify-between"
                data-oid="u47kwxu"
              >
                <div className="flex items-center gap-3" data-oid="b8b8sa9">
                  <Avatar
                    className={`h-9 w-9 ${comment.isOfficial ? "border-2 border-primary" : ""}`}
                    data-oid="8yjznla"
                  >
                    <AvatarImage
                      alt={comment.author.name}
                      data-oid="7b85bm2"
                      src={comment.author.avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="h8qphur">
                      {comment.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid="6q7_nw_">
                    <div className="flex items-center gap-2" data-oid=":1qyq_y">
                      <span className="font-medium" data-oid="plb7s.r">
                        {comment.author.name}
                      </span>
                      <Badge
                        className="text-xs"
                        data-oid="67n3cam"
                        variant={comment.isOfficial ? "default" : "outline"}
                      >
                        {comment.author.role}
                      </Badge>
                    </div>
                    <p
                      className="text-muted-foreground text-sm"
                      data-oid="jd0gexx"
                    >
                      {comment.createdAt}
                    </p>
                  </div>
                </div>
                <Button data-oid="9udrrud" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" data-oid="1wdi6s9" />
                </Button>
              </div>

              <p className="mb-3" data-oid="o:cwkq-">
                {comment.content}
              </p>

              <div
                className="flex items-center gap-4 text-muted-foreground"
                data-oid="x:29.3f"
              >
                <Button
                  className="flex items-center gap-1"
                  data-oid="k.x9m_d"
                  size="sm"
                  variant="ghost"
                >
                  <ThumbsUp className="h-4 w-4" data-oid="h0fh8nh" />
                  <span data-oid="yetdttc">{comment.likes}</span>
                </Button>
                <Button
                  className="flex items-center gap-1"
                  data-oid="jphdwrk"
                  size="sm"
                  variant="ghost"
                >
                  <ThumbsDown className="h-4 w-4" data-oid="-5v6o7n" />
                </Button>
                <Button
                  className="flex items-center gap-1"
                  data-oid="8lj8hr7"
                  size="sm"
                  variant="ghost"
                >
                  Reply
                </Button>
              </div>
            </div>
          ))}

          <div className="rounded-lg bg-muted/30 p-5" data-oid="xtj7wz8">
            <h4 className="mb-3 font-medium" data-oid="lu57vm0">
              Add your reply
            </h4>
            <Textarea
              className="mb-3 min-h-[100px]"
              data-oid="hq5u7yz"
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Share your thoughts or questions..."
              value={newCommentText}
            />

            <div className="flex justify-end gap-2" data-oid="rvne688">
              <Button
                data-oid="a2cczfp"
                onClick={() => setNewCommentText("")}
                variant="outline"
              >
                Cancel
              </Button>
              <Button data-oid="h5qu1sn">Post Reply</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main discussion list view
  return (
    <div className="space-y-6" data-oid="f.1vjrx">
      <div
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        data-oid=".6v9fzc"
      >
        <h2 className="font-semibold text-2xl" data-oid="9789:qz">
          Tournament Discussion
        </h2>
        <Dialog
          data-oid="b5suk2t"
          onOpenChange={setNewPostOpen}
          open={newPostOpen}
        >
          <DialogTrigger asChild data-oid="dp8:w9-">
            <Button className="flex items-center gap-2" data-oid="w2a276.">
              <PlusCircle className="h-4 w-4" data-oid="5j:fawj" />
              New Discussion
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]" data-oid="hq49iqv">
            <DialogHeader data-oid="c.bjtpj">
              <DialogTitle data-oid="f_klnm-">
                Create New Discussion
              </DialogTitle>
              <DialogDescription data-oid="2mpyv2i">
                Start a new discussion topic related to the Global Knowledge
                Championship.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4" data-oid="-d5mai8">
              <div className="space-y-2" data-oid="1n1y2ke">
                <label
                  className="font-medium text-sm"
                  data-oid="2q6q_er"
                  htmlFor="title"
                >
                  Title
                </label>
                <Input
                  data-oid="4x7mhyc"
                  id="title"
                  placeholder="Enter a clear, specific title for your discussion"
                />
              </div>
              <div className="space-y-2" data-oid="lyy9no-">
                <label
                  className="font-medium text-sm"
                  data-oid="v61456a"
                  htmlFor="content"
                >
                  Content
                </label>
                <Textarea
                  className="min-h-[150px]"
                  data-oid="i_4mo0p"
                  id="content"
                  placeholder="Share your thoughts, questions, or insights..."
                />
              </div>
              <div className="space-y-2" data-oid=":3h.d9z">
                <label
                  className="font-medium text-sm"
                  data-oid="nguyalt"
                  htmlFor="tags"
                >
                  Tags (optional)
                </label>
                <Input
                  data-oid="d1daq20"
                  id="tags"
                  placeholder="Add tags separated by commas (e.g., strategy, rules, round-1)"
                />
              </div>
            </div>
            <DialogFooter data-oid="atireki">
              <Button
                data-oid="p7jh8a3"
                onClick={() => setNewPostOpen(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button data-oid="7g4z5jp" onClick={() => setNewPostOpen(false)}>
                Post Discussion
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        data-oid="h4zu29."
      >
        <div className="relative w-full sm:w-[300px]" data-oid="u_hljvc">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="o.3pq5d"
          />

          <Input
            className="pl-10"
            data-oid="d0z_eba"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search discussions..."
            value={searchQuery}
          />
        </div>
        <div
          className="flex w-full items-center gap-2 sm:w-auto"
          data-oid="7tvm5f0"
        >
          <DropdownMenu data-oid="efx3xfa">
            <DropdownMenuTrigger asChild data-oid="8kmbmk-">
              <Button
                className="flex items-center gap-2"
                data-oid="61:zhpa"
                variant="outline"
              >
                <Filter className="h-4 w-4" data-oid="m4kwujc" />
                {filter === "recent"
                  ? "Most Recent"
                  : filter === "popular"
                    ? "Most Popular"
                    : "Most Replies"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="4tjplr3">
              <DropdownMenuItem
                data-oid="lclog4-"
                onClick={() => setFilter("recent")}
              >
                Most Recent
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="naez2t9"
                onClick={() => setFilter("popular")}
              >
                Most Popular
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="6cb43en"
                onClick={() => setFilter("most-replies")}
              >
                Most Replies
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs className="w-full" data-oid="ksb2g6g" defaultValue="all">
        <TabsList
          className="grid w-full grid-cols-4 sm:inline-flex sm:w-auto"
          data-oid="-m926tt"
        >
          <TabsTrigger data-oid="4vqhgvf" value="all">
            All
          </TabsTrigger>
          <TabsTrigger data-oid="y4_755x" value="strategy">
            Strategy
          </TabsTrigger>
          <TabsTrigger data-oid="y9r80ff" value="questions">
            Questions
          </TabsTrigger>
          <TabsTrigger data-oid="6:y1:y0" value="technical">
            Technical
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4" data-oid="v5q0vkl">
        {filteredDiscussions.length > 0 ? (
          filteredDiscussions.map((discussion) => (
            <div
              className="cursor-pointer rounded-lg bg-card p-5 shadow-sm transition-colors hover:bg-card/80"
              data-oid="xbavxmy"
              key={discussion.id}
              onClick={() => setActiveDiscussion(discussion.id)}
            >
              <div
                className="mb-2 flex items-start justify-between"
                data-oid="4tjfib7"
              >
                <div className="flex items-center gap-3" data-oid=".j0o19j">
                  <Avatar className="h-8 w-8" data-oid="hj54f.g">
                    <AvatarImage
                      alt={discussion.author.name}
                      data-oid="i2iuc0b"
                      src={discussion.author.avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="n2qtct5">
                      {discussion.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid="hmjvgle">
                    <span className="font-medium text-sm" data-oid="eu1y-aw">
                      {discussion.author.name}
                    </span>
                    <p
                      className="text-muted-foreground text-xs"
                      data-oid="optul1v"
                    >
                      {discussion.createdAt}
                    </p>
                  </div>
                </div>
                {discussion.pinned && (
                  <Badge
                    className="flex items-center gap-1"
                    data-oid="s1v8clz"
                    variant="secondary"
                  >
                    <svg
                      data-oid="7:fdqfn"
                      fill="none"
                      height="12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2v10" data-oid="bvl3gk0" />
                      <path d="M12 22v-3" data-oid="5f54vse" />
                      <path d="M4.93 10.93l1.41 1.41" data-oid="i_xf4uv" />
                      <path d="M17.66 11.7l1.41 1.41" data-oid="wqq7--f" />
                      <path d="M2 18h2" data-oid="-buu9-:" />
                      <path d="M20 18h2" data-oid="qunhc_4" />
                      <path d="M4.93 19.07l1.41-1.41" data-oid="q5btt38" />
                      <path d="M17.66 17.3l1.41-1.41" data-oid="0:z5:d2" />
                    </svg>
                    Pinned
                  </Badge>
                )}
              </div>

              <h3 className="mb-2 font-medium text-lg" data-oid="y90lz_l">
                {discussion.title}
              </h3>
              <p
                className="mb-3 line-clamp-2 text-muted-foreground text-sm"
                data-oid="cujber3"
              >
                {discussion.content}
              </p>

              <div className="mb-3 flex flex-wrap gap-2" data-oid="ay-08fz">
                {discussion.tags.map((tag) => (
                  <Badge
                    className="bg-muted/50 text-xs"
                    data-oid="kj-5na5"
                    key={tag}
                    variant="outline"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div
                className="flex items-center gap-4 text-muted-foreground text-sm"
                data-oid="tecd:l2"
              >
                <div className="flex items-center gap-1" data-oid="qnle01r">
                  <ThumbsUp className="h-3.5 w-3.5" data-oid="s-3_ff9" />
                  <span data-oid="y69u6sg">{discussion.likes}</span>
                </div>
                <div className="flex items-center gap-1" data-oid="mubn:v3">
                  <MessageCircle className="h-3.5 w-3.5" data-oid="bgo-rgh" />
                  <span data-oid=".-m.6ff">{discussion.replies} replies</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="rounded-lg bg-muted/50 p-8 text-center"
            data-oid="frmm.3p"
          >
            <h3 className="mb-2 font-medium text-xl" data-oid=".co1hfj">
              No discussions found
            </h3>
            <p className="mb-4 text-muted-foreground" data-oid="ny5x6us">
              {searchQuery
                ? `No discussions match "${searchQuery}"`
                : "Be the first to start a discussion about this tournament!"}
            </p>
            <Button
              data-oid="7ypw32e"
              onClick={() => {
                setSearchQuery("");
                setNewPostOpen(true);
              }}
            >
              Start a New Discussion
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-center" data-oid="32jsbra">
        <Button
          className="w-full sm:w-auto"
          data-oid="flil4-g"
          variant="outline"
        >
          Load More Discussions
        </Button>
      </div>
    </div>
  );
}
