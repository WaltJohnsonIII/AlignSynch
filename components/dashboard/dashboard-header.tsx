import { Download, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  activeTab: string;
}

export function DashboardHeader({ activeTab }: DashboardHeaderProps) {
  const getHeaderContent = () => {
    switch (activeTab) {
      case "overview":
        return {
          title: "Dashboard",
          description: "Welcome back! Here's an overview of your account.",
          actions: (
            <Button className="ml-auto" data-oid="pl5.hw6">
              <PlusCircle className="mr-2 h-4 w-4" data-oid="bw4.3g_" />
              Create Quiz
            </Button>
          ),
        };
      case "my-quizzes":
        return {
          title: "My Quizzes",
          description: "Manage your created quizzes and see their performance.",
          actions: (
            <Button className="ml-auto" data-oid="8xhiacg">
              <PlusCircle className="mr-2 h-4 w-4" data-oid="12yv69a" />
              Create Quiz
            </Button>
          ),
        };
      case "wallet":
        return {
          title: "Wallet",
          description: "Manage your earnings and withdraw funds.",
          actions: (
            <Button className="ml-auto" data-oid="80ijuwc">
              <Download className="mr-2 h-4 w-4" data-oid="i.o49ug" />
              Withdraw
            </Button>
          ),
        };
      case "affiliate":
        return {
          title: "Affiliate Program",
          description: "Track your referrals and commission earnings.",
          actions: (
            <Button className="ml-auto" data-oid="isa_l4:">
              <Download className="mr-2 h-4 w-4" data-oid="7pkv821" />
              Export Data
            </Button>
          ),
        };
      case "settings":
        return {
          title: "Dashboard Settings",
          description: "Customize your dashboard experience.",
          actions: null,
        };
      default:
        return {
          title: "Dashboard",
          description: "Welcome back! Here's an overview of your account.",
          actions: null,
        };
    }
  };

  const content = getHeaderContent();

  return (
    <div
      className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
      data-oid="m54prk:"
    >
      <div data-oid="69-mm4:">
        <h1 className="font-bold text-2xl tracking-tight" data-oid="p66vw4e">
          {content.title}
        </h1>
        <p className="text-muted-foreground" data-oid="dzdoma-">
          {content.description}
        </p>
      </div>
      {content.actions}
    </div>
  );
}
