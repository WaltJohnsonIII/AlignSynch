"use client";

import { Facebook, Github, Loader2, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ConnectedAccounts() {
  const [isLoading, setIsLoading] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: true,
    facebook: false,
    twitter: true,
    github: false,
  });

  const handleConnect = (account: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setConnectedAccounts((prev) => ({
        ...prev,
        [account]: true,
      }));
      setIsLoading(false);
      toast.success("Account connected successfully!");
    }, 1000);
  };

  const handleDisconnect = (account: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setConnectedAccounts((prev) => ({
        ...prev,
        [account]: false,
      }));
      setIsLoading(false);
      toast.success("Account disconnected successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6" data-oid="ev8heze">
      <div data-oid="2etc7w0">
        <h3 className="font-medium text-lg" data-oid="bwupz03">
          Connected Accounts
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="0:a9e_a">
          Connect your accounts for easier login and sharing.
        </p>
      </div>

      <Card data-oid="y7v2p2s">
        <CardHeader data-oid="vu:egot">
          <CardTitle data-oid="-tva6mh">Social Accounts</CardTitle>
          <CardDescription data-oid="_o6fam3">
            Connect your social media accounts to QuizHub .
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid=":mdxll8">
          <div className="flex items-center justify-between" data-oid="v25ogpv">
            <div className="flex items-center space-x-4" data-oid="6s38nnf">
              <div
                className="rounded-full bg-[#4285F4] p-2 text-white"
                data-oid="aslk7jg"
              >
                <svg
                  data-oid="dkdvm60"
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    data-oid="jrxbcex"
                  />

                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    data-oid="rxcj8ir"
                  />

                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    data-oid="56lj-.v"
                  />

                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    data-oid="xewhtu-"
                  />

                  <path d="M1 1h22v22H1z" data-oid="dtn._1y" fill="none" />
                </svg>
              </div>
              <div data-oid="2frbbvc">
                <p className="font-medium" data-oid="bq9h_3_">
                  Google
                </p>
                <p className="text-muted-foreground text-sm" data-oid=".vl0y4x">
                  {connectedAccounts.google
                    ? "Connected as alex@example.com"
                    : "Not connected"}
                </p>
              </div>
            </div>
            {connectedAccounts.google ? (
              <Button
                data-oid="dy0beaw"
                disabled={isLoading}
                onClick={() => handleDisconnect("google")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="hd1dhmv"
                  />
                )}
                Disconnect
              </Button>
            ) : (
              <Button
                data-oid="0rwpq9r"
                disabled={isLoading}
                onClick={() => handleConnect("google")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="aqp1_vh"
                  />
                )}
                Connect
              </Button>
            )}
          </div>

          <Separator data-oid="-t-cwgy" />

          <div className="flex items-center justify-between" data-oid="g8up0_o">
            <div className="flex items-center space-x-4" data-oid=":65w.cu">
              <div
                className="rounded-full bg-[#1877F2] p-2 text-white"
                data-oid="73b2jo2"
              >
                <Facebook className="h-5 w-5" data-oid="uum7pa0" />
              </div>
              <div data-oid="ru54zzd">
                <p className="font-medium" data-oid="0l_c1c9">
                  Facebook
                </p>
                <p className="text-muted-foreground text-sm" data-oid="jiobgot">
                  {connectedAccounts.facebook
                    ? "Connected as Alex Johnson"
                    : "Not connected"}
                </p>
              </div>
            </div>
            {connectedAccounts.facebook ? (
              <Button
                data-oid="z76jd9m"
                disabled={isLoading}
                onClick={() => handleDisconnect("facebook")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="mck0fd0"
                  />
                )}
                Disconnect
              </Button>
            ) : (
              <Button
                data-oid="oqd.1.4"
                disabled={isLoading}
                onClick={() => handleConnect("facebook")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="xr1h3js"
                  />
                )}
                Connect
              </Button>
            )}
          </div>

          <Separator data-oid="3b7mt-f" />

          <div className="flex items-center justify-between" data-oid="ltwfg2p">
            <div className="flex items-center space-x-4" data-oid="ha.:uzt">
              <div
                className="rounded-full bg-[#1DA1F2] p-2 text-white"
                data-oid="kh9_l5h"
              >
                <Twitter className="h-5 w-5" data-oid="xbzybsn" />
              </div>
              <div data-oid="v_pk8ga">
                <p className="font-medium" data-oid="5tuwfdq">
                  Twitter
                </p>
                <p className="text-muted-foreground text-sm" data-oid="cnf3_jx">
                  {connectedAccounts.twitter
                    ? "Connected as @quizmaster"
                    : "Not connected"}
                </p>
              </div>
            </div>
            {connectedAccounts.twitter ? (
              <Button
                data-oid=":i9jzy1"
                disabled={isLoading}
                onClick={() => handleDisconnect("twitter")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="j9tksq8"
                  />
                )}
                Disconnect
              </Button>
            ) : (
              <Button
                data-oid="w61vssr"
                disabled={isLoading}
                onClick={() => handleConnect("twitter")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="jlc.zz5"
                  />
                )}
                Connect
              </Button>
            )}
          </div>

          <Separator data-oid="8.39-ex" />

          <div className="flex items-center justify-between" data-oid="h:nv9lp">
            <div className="flex items-center space-x-4" data-oid="4.n1ya0">
              <div
                className="rounded-full bg-[#333] p-2 text-white"
                data-oid="5xoh2by"
              >
                <Github className="h-5 w-5" data-oid="h8tked3" />
              </div>
              <div data-oid="jplh_.0">
                <p className="font-medium" data-oid="k_h_de8">
                  GitHub
                </p>
                <p className="text-muted-foreground text-sm" data-oid="6a41pke">
                  {connectedAccounts.github
                    ? "Connected as alexjohnson"
                    : "Not connected"}
                </p>
              </div>
            </div>
            {connectedAccounts.github ? (
              <Button
                data-oid="mcc9vc6"
                disabled={isLoading}
                onClick={() => handleDisconnect("github")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="yby_y0i"
                  />
                )}
                Disconnect
              </Button>
            ) : (
              <Button
                data-oid="m0.-xnt"
                disabled={isLoading}
                onClick={() => handleConnect("github")}
                size="sm"
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="j5wu:y3"
                  />
                )}
                Connect
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
