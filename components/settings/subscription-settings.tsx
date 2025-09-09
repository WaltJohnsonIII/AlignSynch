"use client";

import { Check, CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function SubscriptionSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("pro");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleUpgrade = (plan: string) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setCurrentPlan(plan);
      setIsLoading(false);
      toast.success(`Successfully upgraded to ${plan} plan!`);
    }, 1000);
  };

  const handleCancel = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully canceled your subscription!");
    }, 1000);
  };

  const handleBillingCycleChange = (cycle: string) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="space-y-6" data-oid="449usjx">
      <div data-oid="m:z9kv1">
        <h3 className="font-medium text-lg" data-oid="71gbk:n">
          Subscription Settings
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="fl5q-js">
          Manage your subscription plan and billing information.
        </p>
      </div>

      <Card data-oid="uyb9mef">
        <CardHeader data-oid="05eg9:c">
          <CardTitle data-oid="a:tznm-">Current Plan</CardTitle>
          <CardDescription data-oid="i0p7e:m">
            You are currently on the{" "}
            {currentPlan === "free"
              ? "Free"
              : currentPlan === "pro"
                ? "Pro"
                : "Premium"}{" "}
            plan.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="7lvl.sc">
          <div className="flex items-center justify-between" data-oid="3gfwr5-">
            <div data-oid="7jmuxow">
              <h4 className="font-semibold text-lg" data-oid="zmfxvbe">
                {currentPlan === "free"
                  ? "Free Plan"
                  : currentPlan === "pro"
                    ? "Pro Plan"
                    : "Premium Plan"}
                {currentPlan !== "free" && (
                  <Badge className="ml-2" data-oid="nixdp94" variant="outline">
                    {billingCycle === "monthly" ? "Monthly" : "Annual"}
                  </Badge>
                )}
              </h4>
              <p
                className="mt-1 text-muted-foreground text-sm"
                data-oid="dke1-g3"
              >
                {currentPlan === "free"
                  ? "Basic features with limited access"
                  : currentPlan === "pro"
                    ? "Advanced features for quiz creators"
                    : "All features with priority support"}
              </p>
            </div>
            <div className="text-right" data-oid="b1i8wsb">
              <p className="font-bold text-2xl" data-oid="p:vpywb">
                {currentPlan === "free"
                  ? "Free"
                  : currentPlan === "pro"
                    ? billingCycle === "monthly"
                      ? "$9.99"
                      : "$99.99"
                    : billingCycle === "monthly"
                      ? "$19.99"
                      : "$199.99"}
              </p>
              {currentPlan !== "free" && (
                <p className="text-muted-foreground text-sm" data-oid="46z:uyc">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </p>
              )}
            </div>
          </div>

          {currentPlan !== "free" && (
            <div className="mt-6" data-oid="f33cx:5">
              <p className="mb-2 font-medium text-sm" data-oid=":rekbi9">
                Billing Cycle
              </p>
              <RadioGroup
                className="flex space-x-4"
                data-oid="4xi7eop"
                onValueChange={handleBillingCycleChange}
                value={billingCycle}
              >
                <div className="flex items-center space-x-2" data-oid="athgusa">
                  <RadioGroupItem
                    data-oid="xpqra3q"
                    id="monthly"
                    value="monthly"
                  />

                  <Label data-oid="_9ofbk6" htmlFor="monthly">
                    Monthly
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="r-lk0l.">
                  <RadioGroupItem
                    data-oid="64t4jch"
                    id="annual"
                    value="annual"
                  />

                  <Label data-oid="2.du46n" htmlFor="annual">
                    Annual (Save 16%)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          <div className="mt-6 space-y-4" data-oid="1.:wcyn">
            <p className="font-medium text-sm" data-oid="h10dfzg">
              Plan Features:
            </p>
            <ul className="space-y-2" data-oid="ugm9jb9">
              {currentPlan === "free" ? (
                <>
                  <li className="flex items-center text-sm" data-oid="sxb.-qt">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="k6e-.pr"
                    />
                    Create up to 5 quizzes
                  </li>
                  <li className="flex items-center text-sm" data-oid="9r5ktf1">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="ufoa3f4"
                    />
                    Basic quiz templates
                  </li>
                  <li className="flex items-center text-sm" data-oid="fxjtlvq">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="vxxiqku"
                    />
                    Standard support
                  </li>
                </>
              ) : currentPlan === "pro" ? (
                <>
                  <li className="flex items-center text-sm" data-oid="b-dxwoa">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="v9dxtfy"
                    />
                    Create unlimited quizzes
                  </li>
                  <li className="flex items-center text-sm" data-oid="p6hj.ze">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="ety48ok"
                    />
                    Advanced quiz templates
                  </li>
                  <li className="flex items-center text-sm" data-oid=".mbhvwn">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="3_6rwpg"
                    />
                    Detailed analytics
                  </li>
                  <li className="flex items-center text-sm" data-oid="wqz9mk5">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="nvqs8zb"
                    />
                    Priority support
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center text-sm" data-oid="rh_a541">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="kz_:9gs"
                    />
                    All Pro features
                  </li>
                  <li className="flex items-center text-sm" data-oid="84f07mm">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="_.cr_a0"
                    />
                    Custom branding
                  </li>
                  <li className="flex items-center text-sm" data-oid="e_._ko5">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="nym77c7"
                    />
                    API access
                  </li>
                  <li className="flex items-center text-sm" data-oid="e5..oc6">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="a35-vpo"
                    />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-sm" data-oid=".ch02p_">
                    <Check
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="xs7y2ta"
                    />
                    Early access to new features
                  </li>
                </>
              )}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4" data-oid="hcae-gk">
          {currentPlan === "free" ? (
            <Button
              className="w-full"
              data-oid="ty6pn8p"
              disabled={isLoading}
              onClick={() => handleUpgrade("pro")}
            >
              {isLoading && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="z52vnrl"
                />
              )}
              Upgrade to Pro
            </Button>
          ) : currentPlan === "pro" ? (
            <div className="w-full space-y-2" data-oid="r.tsbx3">
              <Button
                className="w-full"
                data-oid="_a-d3xz"
                disabled={isLoading}
                onClick={() => handleUpgrade("premium")}
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="-jycl-l"
                  />
                )}
                Upgrade to Premium
              </Button>
              <Button
                className="w-full"
                data-oid="0snfw6j"
                disabled={isLoading}
                onClick={handleCancel}
                variant="outline"
              >
                {isLoading && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="ava7hxy"
                  />
                )}
                Cancel Subscription
              </Button>
            </div>
          ) : (
            <Button
              className="w-full"
              data-oid="jqdv7y2"
              disabled={isLoading}
              onClick={handleCancel}
              variant="outline"
            >
              {isLoading && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="i3d.j9."
                />
              )}
              Cancel Subscription
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card data-oid="8nxznv_">
        <CardHeader data-oid="xbg657b">
          <CardTitle data-oid="uf_y8oc">Payment Method</CardTitle>
          <CardDescription data-oid="94m2uc9">
            Manage your payment methods and billing information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="rg0t10i">
          <div
            className="flex items-center justify-between rounded-lg border p-4"
            data-oid="-du5cd1"
          >
            <div className="flex items-center space-x-4" data-oid="s56pto5">
              <CreditCard className="h-6 w-6 text-primary" data-oid="1fuweq2" />
              <div data-oid="kyb4daj">
                <p className="font-medium" data-oid="l4ft45e">
                  Visa ending in 4242
                </p>
                <p className="text-muted-foreground text-sm" data-oid="zqysptn">
                  Expires 12/2025
                </p>
              </div>
            </div>
            <Badge data-oid="jvp02z_">Default</Badge>
          </div>

          <Button className="w-full" data-oid="85z0io8" variant="outline">
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      <Card data-oid="nw:ai9h">
        <CardHeader data-oid="2_zf85y">
          <CardTitle data-oid="3v.hlrw">Billing History</CardTitle>
          <CardDescription data-oid="d285nza">
            View your past invoices and payment history.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid=".qdze:n">
          <div className="space-y-4" data-oid="wu.jk6o">
            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid="3c.721e"
            >
              <div data-oid="nc0:38d">
                <p className="font-medium" data-oid="y4t-wgm">
                  Pro Plan - Monthly
                </p>
                <p className="text-muted-foreground text-sm" data-oid="1azk7-g">
                  April 1, 2023
                </p>
              </div>
              <div className="text-right" data-oid=".9:eufg">
                <p className="font-medium" data-oid="drjvszr">
                  $9.99
                </p>
                <Badge className="ml-2" data-oid="5phrcp_" variant="outline">
                  Paid
                </Badge>
              </div>
            </div>

            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid=".kmxib-"
            >
              <div data-oid="6945fw8">
                <p className="font-medium" data-oid="jen1fjo">
                  Pro Plan - Monthly
                </p>
                <p className="text-muted-foreground text-sm" data-oid="r:1trc_">
                  March 1, 2023
                </p>
              </div>
              <div className="text-right" data-oid="a2rp.ef">
                <p className="font-medium" data-oid="zr08v01">
                  $9.99
                </p>
                <Badge className="ml-2" data-oid="iufdf2v" variant="outline">
                  Paid
                </Badge>
              </div>
            </div>

            <div
              className="flex items-center justify-between rounded-lg border p-4"
              data-oid="pcyx_n:"
            >
              <div data-oid="7of064y">
                <p className="font-medium" data-oid="6pjjr4j">
                  Pro Plan - Monthly
                </p>
                <p className="text-muted-foreground text-sm" data-oid="cuw9ibm">
                  February 1, 2023
                </p>
              </div>
              <div className="text-right" data-oid="st-5i44">
                <p className="font-medium" data-oid="unuz.01">
                  $9.99
                </p>
                <Badge className="ml-2" data-oid="5csn3c9" variant="outline">
                  Paid
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter data-oid="3ekg646">
          <Button className="w-full" data-oid="t88m_uj" variant="outline">
            View All Invoices
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
