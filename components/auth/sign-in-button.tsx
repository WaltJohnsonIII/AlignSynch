"use client";

import { handleSignOutAction } from "@/app/actions/signOut";
import { Button } from "@/components/ui/button";

export function SignInButton({ large }: { large?: boolean }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div className="flex gap-3">
        <form action={handleSignOutAction}>
          <Button size={large ? "lg" : "default"} type="submit">
            Sign Out
          </Button>
        </form>
      </div>
    );
  }

  return (
    <Button asChild size={large ? "lg" : "default"}>
      <a href="/login">Sign In</a>
    </Button>
  );
}
