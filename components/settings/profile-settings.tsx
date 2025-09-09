"use client";

import { Camera, Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProfileSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Alex Johnson",
    username: "quizmaster",
    email: "alex@example.com",
    bio: "Quiz enthusiast and creator. I love making educational content!",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6" data-oid="e19ym6t">
      <div data-oid="0e..vw8">
        <h3 className="font-medium text-lg" data-oid="r5uzdig">
          Profile Information
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="mps60at">
          Update your profile information and how others see you on the
          platform.
        </p>
      </div>

      <div className="flex items-center gap-4" data-oid="gugv9r9">
        <Avatar className="h-24 w-24" data-oid="td3c_fr">
          <AvatarImage
            alt="Profile"
            className="object-cover object-center"
            data-oid="38qw7wn"
            src="/avatars/alex.png"
          />

          <AvatarFallback data-oid="yu93zge">AJ</AvatarFallback>
        </Avatar>

        <div className="space-y-2" data-oid="-779365">
          <Button
            className="relative"
            data-oid="pw6-7cg"
            size="sm"
            variant="outline"
          >
            <input
              accept="image/*"
              className="absolute inset-0 cursor-pointer opacity-0"
              data-oid="bpg0u43"
              type="file"
            />
            <Camera className="mr-2 h-4 w-4" data-oid="u.1vfgn" />
            Change Avatar
          </Button>
          <p className="text-muted-foreground text-xs" data-oid="60yxf4u">
            JPG, PNG or GIF. 1MB max.
          </p>
        </div>
      </div>

      <form className="space-y-4" data-oid="g1zue9s" onSubmit={handleSubmit}>
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          data-oid="q6sp623"
        >
          <div className="space-y-2" data-oid="ag98937">
            <Label data-oid="4mb_iu6" htmlFor="name">
              Full Name
            </Label>
            <Input
              data-oid="xjy8:.e"
              id="name"
              name="name"
              onChange={handleChange}
              required
              value={formData.name}
            />
          </div>

          <div className="space-y-2" data-oid="4b79z9b">
            <Label data-oid="r3xv:jy" htmlFor="username">
              Username
            </Label>
            <Input
              data-oid="8nl7jyj"
              id="username"
              name="username"
              onChange={handleChange}
              required
              value={formData.username}
            />
          </div>
        </div>

        <div className="space-y-2" data-oid="9bapbrb">
          <Label data-oid="8hsp7vw" htmlFor="email">
            Email Address
          </Label>
          <Input
            data-oid="k_v_7h_"
            id="email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={formData.email}
          />
        </div>

        <div className="space-y-2" data-oid="tys-cdo">
          <Label data-oid="r.lh7wr" htmlFor="bio">
            Bio
          </Label>
          <Textarea
            data-oid="vvxc0bj"
            id="bio"
            name="bio"
            onChange={handleChange}
            placeholder="Tell us about yourself"
            rows={4}
            value={formData.bio}
          />

          <p className="text-muted-foreground text-xs" data-oid="n4fi:cx">
            Brief description for your profile. URLs are hyperlinked.
          </p>
        </div>

        <Button data-oid="lbr5_.0" disabled={isLoading} type="submit">
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" data-oid="6xei8tz" />
          )}
          Save Changes
        </Button>
      </form>
    </div>
  );
}
