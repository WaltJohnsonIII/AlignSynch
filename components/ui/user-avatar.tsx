"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getDeterministicGradient, getInitials } from "@/lib/utils";

interface UserAvatarProps {
  name?: string;
  src?: string | null;
  size?: number;
  className?: string;
}

export function UserAvatar({ name, src, size = 40, className }: UserAvatarProps) {
  const initials = getInitials(name);
  const [c1, c2] = getDeterministicGradient(name || initials || "avatar");

  return (
    <Avatar className={cn(className)} style={{ width: size, height: size }}>
      {src ? (
        <AvatarImage alt={name || "Avatar"} className="object-cover object-center" src={src} />
      ) : null}
      <AvatarFallback
        className="font-medium text-white"
        style={{
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
        }}
      >
        {initials || "?"}
      </AvatarFallback>
    </Avatar>
  );
}

