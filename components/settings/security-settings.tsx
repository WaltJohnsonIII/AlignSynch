"use client";

import { AlertTriangle, Loader2, LogOut, Shield } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SecuritySettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password updated successfully!");
    }, 500);
  };

  return (
    <div className="space-y-6" data-oid="g-bh.a5">
      <div data-oid="f84hi6r">
        <h3 className="font-medium text-lg" data-oid="edb4ks0">
          Security Settings
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="mgusr2o">
          Manage your account security and authentication methods.
        </p>
      </div>

      <Card data-oid="7qs2::c">
        <CardHeader data-oid="399qem0">
          <CardTitle data-oid="e:ngyd-">Change Password</CardTitle>
          <CardDescription data-oid="akj8xl8">
            Update your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="v-cs0bb">
          <form
            className="space-y-4"
            data-oid="x05451m"
            onSubmit={handlePasswordChange}
          >
            <div className="space-y-2" data-oid="4wepije">
              <Label data-oid="lxzh1g2" htmlFor="current-password">
                Current Password
              </Label>
              <Input
                data-oid="kobxpo."
                id="current-password"
                required
                type="password"
              />
            </div>

            <div className="space-y-2" data-oid="ws09rbe">
              <Label data-oid="q2ngibx" htmlFor="new-password">
                New Password
              </Label>
              <Input
                data-oid="qp-6k.2"
                id="new-password"
                required
                type="password"
              />
            </div>

            <div className="space-y-2" data-oid="1rpyh.h">
              <Label data-oid="1ecegxj" htmlFor="confirm-password">
                Confirm New Password
              </Label>
              <Input
                data-oid="i.4h0m6"
                id="confirm-password"
                required
                type="password"
              />
            </div>

            <Button data-oid="yqxbn1k" disabled={isLoading} type="submit">
              {isLoading && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="mx:o9f4"
                />
              )}
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card data-oid="x_y8w1s">
        <CardHeader data-oid="0nl9r66">
          <CardTitle data-oid="0tohfgq">Two-Factor Authentication</CardTitle>
          <CardDescription data-oid="dy2nhrb">
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="ol2nso6">
          <div className="flex items-center justify-between" data-oid="1ozt:vv">
            <div className="flex items-center space-x-4" data-oid=":p5ny3.">
              <Shield className="h-8 w-8 text-primary" data-oid="sfwti1o" />
              <div data-oid="v.jy:y:">
                <p className="font-medium" data-oid=".7g9pr3">
                  Two-Factor Authentication
                </p>
                <p className="text-muted-foreground text-sm" data-oid="l920inb">
                  {twoFactorEnabled
                    ? "Your account is protected with two-factor authentication."
                    : "Protect your account with two-factor authentication."}
                </p>
              </div>
            </div>
            <Switch
              checked={twoFactorEnabled}
              data-oid="kn7bl9i"
              onCheckedChange={setTwoFactorEnabled}
            />
          </div>

          {twoFactorEnabled && (
            <div className="mt-4 rounded-lg bg-muted p-4" data-oid="3:-m.c7">
              <p className="font-medium text-sm" data-oid="w:hm-:d">
                Setup Instructions
              </p>
              <ol
                className="mt-2 list-inside list-decimal space-y-2 text-sm"
                data-oid="hwo9c3c"
              >
                <li data-oid="wv.rpa0">
                  Download an authenticator app like Google Authenticator or
                  Authy
                </li>
                <li data-oid="q:sbie:">
                  Scan the QR code below with your authenticator app
                </li>
                <li data-oid="1.rh9j8">
                  Enter the verification code from your app
                </li>
              </ol>
              <div className="mt-4 flex justify-center" data-oid="fkscyqx">
                <div className="rounded-lg bg-white p-4" data-oid="ie4yvz1">
                  <Image
                    alt="QR Code"
                    className="h-32 w-32"
                    data-oid="scvc9n7"
                    src="/qr-code-generic.png"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2" data-oid="0f-axfc">
                <Label data-oid=":of_g5y" htmlFor="verification-code">
                  Verification Code
                </Label>
                <div className="flex space-x-2" data-oid=".otrind">
                  <Input
                    data-oid="0bzeeks"
                    id="verification-code"
                    placeholder="Enter 6-digit code"
                  />

                  <Button data-oid=":oasp41">Verify</Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card data-oid="ld8dym1">
        <CardHeader data-oid="5ha:20t">
          <CardTitle data-oid=":47fa7a">Active Sessions</CardTitle>
          <CardDescription data-oid="5f2re.2">
            Manage devices where you're currently logged in.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="9ppdbxa">
          <div className="space-y-4" data-oid="ryzr2kn">
            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid="3nh9_gk"
            >
              <div data-oid="znksb1i">
                <p className="font-medium" data-oid="om:k52b">
                  Current Device
                </p>
                <p className="text-muted-foreground text-sm" data-oid="0ssqb_v">
                  Chrome on Windows • New York, USA • Active now
                </p>
              </div>
              <Button data-oid="jkou_.4" disabled size="sm" variant="outline">
                Current
              </Button>
            </div>

            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid="75hvtcm"
            >
              <div data-oid="c:x.8m5">
                <p className="font-medium" data-oid="_78-7i9">
                  iPhone 13
                </p>
                <p className="text-muted-foreground text-sm" data-oid=":-3.ag4">
                  Safari on iOS • Boston, USA • 2 days ago
                </p>
              </div>
              <Button data-oid="tm1i:79" size="sm" variant="outline">
                <LogOut className="mr-2 h-4 w-4" data-oid="xepg5s2" />
                Log Out
              </Button>
            </div>

            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid="sie-mn8"
            >
              <div data-oid="jhkkr:n">
                <p className="font-medium" data-oid="rfl58z2">
                  MacBook Pro
                </p>
                <p className="text-muted-foreground text-sm" data-oid="nkljjlf">
                  Firefox on macOS • San Francisco, USA • 5 days ago
                </p>
              </div>
              <Button data-oid=".jstkrd" size="sm" variant="outline">
                <LogOut className="mr-2 h-4 w-4" data-oid="n8b0nqm" />
                Log Out
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter data-oid="22wh_o1">
          <Button className="w-full" data-oid="m5d8dps" variant="destructive">
            <LogOut className="mr-2 h-4 w-4" data-oid="5k-kbsd" />
            Log Out of All Devices
          </Button>
        </CardFooter>
      </Card>

      <Card data-oid="1g834u1">
        <CardHeader data-oid="_bnqhgn">
          <CardTitle className="text-destructive" data-oid="6.hjdw9">
            Danger Zone
          </CardTitle>
          <CardDescription data-oid="4b7xb94">
            Irreversible and destructive actions for your account.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="gh6okm4">
          <div
            className="flex items-center justify-between rounded-lg border border-destructive/20 bg-destructive/5 p-4"
            data-oid="q19wz1c"
          >
            <div className="flex items-center space-x-4" data-oid=".j5.el7">
              <AlertTriangle
                className="h-8 w-8 text-destructive"
                data-oid="m0c7xai"
              />

              <div data-oid="1jq7nna">
                <p className="font-medium" data-oid="mhri6yk">
                  Delete Account
                </p>
                <p className="text-muted-foreground text-sm" data-oid="smch.wz">
                  Permanently delete your account and all associated data.
                </p>
              </div>
            </div>
            <Button data-oid="bq4epk4" variant="destructive">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
