"use client";

import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { type JSX, memo, useCallback, useMemo, useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Type definitions
type BillingCycle = "monthly" | "yearly";

interface PlanPrice {
  monthly: number;
  yearly: number;
}

interface Plan {
  name: string;
  description: string;
  price: PlanPrice;
  features: string[];
  limitations: string[];
  cta: string;
  popular: boolean;
}

interface FeatureListProps {
  features: string[];
}

interface LimitationsListProps {
  limitations: string[];
}

interface PricingCardProps {
  plan: Plan;
  billingCycle: BillingCycle;
}

interface CardContentData {
  cardClassName: string;
  buttonClassName: string;
  priceDisplay: string;
}

interface LabelClasses {
  monthly: string;
  yearly: string;
}

// Memoized plans data - doesn't change between renders
const PLANS_DATA: readonly Plan[] = [
  {
    name: "Free",
    description: "Perfect for beginners and casual quiz takers",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "Create up to 5 quizzes",
      "Take unlimited quizzes",
      "Basic analytics",
      "Community support",
      "Ad-supported experience",
    ],

    limitations: [
      "Limited quiz templates",
      "No AI quiz generation",
      "No custom branding",
      "Basic reporting only",
    ],

    cta: "Get Started",
    popular: false,
  },
  {
    name: "Basic",
    description: "Great for educators and content creators",
    price: {
      monthly: 9.99,
      yearly: 7.99,
    },
    features: [
      "Create up to 50 quizzes",
      "Ad-free experience",
      "10 AI-generated quizzes/month",
      "Basic quiz customization",
      "Email support",
      "Download results as CSV",
      "Basic integrations",
    ],

    limitations: [],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For professionals and growing businesses",
    price: {
      monthly: 19.99,
      yearly: 16.99,
    },
    features: [
      "Unlimited quiz creation",
      "Advanced quiz customization",
      "50 AI-generated quizzes/month",
      "Custom branding",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (up to 5)",
      "API access",
      "Embed quizzes anywhere",
    ],

    limitations: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: {
      monthly: 49.99,
      yearly: 39.99,
    },
    features: [
      "Everything in Pro",
      "Unlimited AI quiz generation",
      "Dedicated account manager",
      "Custom integrations",
      "SSO authentication",
      "Advanced security features",
      "Unlimited team members",
      "Custom reporting",
      "SLA guarantees",
      "Onboarding & training",
    ],

    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
] as const;

// Memoized feature list component
const FeatureList = memo<FeatureListProps>(({ features }) => {
  return useMemo(
    () => (
      <ul className="space-y-3" data-oid="hho8pca">
        {features.map((feature: string) => (
          <li className="flex items-start" data-oid="ncmgcoc" key={feature}>
            <Check
              className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500"
              data-oid="i0r1kpa"
            />

            <span className="text-sm" data-oid="hbpgaao">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    ),

    [features]
  );
});

FeatureList.displayName = "FeatureList";

// Memoized limitations list component
const LimitationsList = memo<LimitationsListProps>(({ limitations }) => {
  if (limitations.length === 0) return null;

  return useMemo(
    () => (
      <div className="mt-6" data-oid="vfewwru">
        <h4
          className="mb-3 font-medium text-slate-500 text-sm dark:text-slate-400"
          data-oid="fuun:w2"
        >
          LIMITATIONS:
        </h4>
        <ul className="space-y-3" data-oid="bqfzv5_">
          {limitations.map((limitation: string) => (
            <li
              className="flex items-start"
              data-oid=":ae52v3"
              key={limitation}
            >
              <span
                className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-slate-400"
                data-oid="rqj7i_g"
              >
                •
              </span>
              <span
                className="text-slate-600 text-sm dark:text-slate-400"
                data-oid="ixcb5-e"
              >
                {limitation}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ),

    [limitations]
  );
});

LimitationsList.displayName = "LimitationsList";

// Memoized pricing card component
const PricingCard = memo<PricingCardProps>(({ plan, billingCycle }) => {
  const cardContent: CardContentData = useMemo(() => {
    const cardClassName: string = `relative flex flex-col border-2 ${plan.popular ? "border-purple-400 dark:border-purple-500 shadow-lg" : "border-slate-200 dark:border-slate-800"}`;

    const buttonClassName: string = `w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0" : ""}`;

    const priceDisplay: string =
      billingCycle === "monthly" ? "mo" : "mo, billed yearly";

    return {
      cardClassName,
      buttonClassName,
      priceDisplay,
    };
  }, [plan.popular, billingCycle]);

  return (
    <Card
      className={cardContent.cardClassName}
      data-oid="4mfa_id"
      key={plan.name}
    >
      {plan.popular && (
        <div
          className="-top-4 absolute right-0 left-0 flex justify-center"
          data-oid="m2pugb:"
        >
          <Badge
            className="border-0 bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-white hover:from-purple-700 hover:to-indigo-700"
            data-oid="l48ks6f"
          >
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader data-oid="2:1vrfa">
        <CardTitle className="text-2xl" data-oid="8yul1xp">
          {plan.name}
        </CardTitle>
        <CardDescription data-oid=":9jixzy">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" data-oid="qq5tc53">
        <div className="mb-6" data-oid="ze22yes">
          <div className="flex items-baseline" data-oid="2ij.yxb">
            <span className="font-bold text-3xl" data-oid="mq3wmod">
              $
            </span>
            <span className="font-bold text-5xl" data-oid="ta:3cwk">
              {plan.price[billingCycle]}
            </span>
            <span
              className="ml-2 text-slate-500 dark:text-slate-400"
              data-oid="obh9j-4"
            >
              /{cardContent.priceDisplay}
            </span>
          </div>
        </div>

        <div className="space-y-4" data-oid="2tnje._">
          <h4
            className="font-medium text-slate-500 text-sm dark:text-slate-400"
            data-oid="_n1q3d."
          >
            WHAT&apos;S INCLUDED:
          </h4>
          <FeatureList data-oid="fdpoke:" features={plan.features} />
          <LimitationsList data-oid="vxf:38q" limitations={plan.limitations} />
        </div>
      </CardContent>
      <CardFooter data-oid="89pgkfd">
        <Button
          className={cardContent.buttonClassName}
          data-oid="w36v.qj"
          variant={plan.popular ? "default" : "outline"}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
});

PricingCard.displayName = "PricingCard";

export function PricingPlans(): JSX.Element {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  // Memoized billing toggle handler
  const handleBillingToggle = useCallback((checked: boolean): void => {
    setBillingCycle(checked ? "yearly" : "monthly");
  }, []);

  // Memoized pricing cards
  const pricingCards = useMemo((): JSX.Element[] => {
    return PLANS_DATA.map((plan: Plan) => (
      <PricingCard
        billingCycle={billingCycle}
        data-oid="0o85s:1"
        key={plan.name}
        plan={plan}
      />
    ));
  }, [billingCycle]);

  // Memoized label classes
  const labelClasses: LabelClasses = useMemo(
    () => ({
      monthly: billingCycle === "monthly" ? "font-medium" : "text-slate-500",
      yearly: billingCycle === "yearly" ? "font-medium" : "text-slate-500",
    }),
    [billingCycle]
  );

  return (
    <section className="py-10 xl:py-20" data-oid="iuahk7u">
      <div className="container mx-auto px-4" data-oid="15-o8e0">
        <div className="mb-16 text-center" data-oid="0hou0wr">
          <h1
            className="mb-4 font-bold text-4xl md:text-5xl"
            data-oid="8rt0ggn"
          >
            Simple, Transparent Pricing
          </h1>
          <p
            className="mx-auto max-w-2xl text-slate-600 text-xl dark:text-slate-400"
            data-oid="-bj18yo"
          >
            Choose the perfect plan for your quiz creation and learning needs
          </p>

          <div
            className="mt-8 flex items-center justify-center gap-3"
            data-oid="xl7xqjh"
          >
            <Label
              className={labelClasses.monthly}
              data-oid="5kyfwgo"
              htmlFor="billing-toggle"
            >
              Monthly
            </Label>
            <Switch
              checked={billingCycle === "yearly"}
              data-oid="p2zqgt6"
              id="billing-toggle"
              onCheckedChange={handleBillingToggle}
            />

            <div className="flex items-center gap-1.5" data-oid="ml3h-qq">
              <Label
                className={labelClasses.yearly}
                data-oid="d9w2.ar"
                htmlFor="billing-toggle"
              >
                Yearly
              </Label>
              <Badge
                className="border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400"
                data-oid="v.3n:.r"
                variant="outline"
              >
                Save 20%
              </Badge>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          data-oid="h:q-k96"
        >
          {pricingCards}
        </div>

        <div className="mt-16 text-center" data-oid="tgbcku9">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800"
            data-oid="l-b8fqx"
          >
            <TooltipProvider data-oid="7hxi1ec">
              <Tooltip data-oid="su9my9-">
                <TooltipTrigger data-oid="mm7i5sj">
                  <HelpCircle
                    className="h-5 w-5 text-slate-500"
                    data-oid="k4g1zqn"
                  />
                </TooltipTrigger>
                <TooltipContent data-oid="d5itvxq">
                  <p className="max-w-xs" data-oid="ain2xq0">
                    Contact our sales team for custom pricing options tailored
                    to your organization&apos;s specific needs.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-sm" data-oid="5fazke4">
              Need a custom plan?{" "}
              <Link
                className="font-medium text-purple-600 hover:text-purple-700"
                data-oid="dy-gecl"
                href="#"
              >
                Contact us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
