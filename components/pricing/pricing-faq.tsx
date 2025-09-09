"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export function PricingFaq() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      name: "General",
      questions: [
        {
          question: "What is QuizHub ?",
          answer:
            "QuizHub is a comprehensive platform that allows users to create, share, and take quizzes on various topics. It's designed for educators, content creators, businesses, and quiz enthusiasts who want to create engaging learning experiences.",
        },
        {
          question: "How do I get started with QuizHub ?",
          answer:
            "Getting started is easy! Simply sign up for a free account, explore the dashboard, and create your first quiz using our intuitive editor. You can also take existing quizzes to get familiar with the platform.",
        },
        {
          question: "Can I try QuizHub  before purchasing?",
          answer:
            "Yes! We offer a free plan with limited features that you can use indefinitely. Additionally, our paid plans come with a 14-day free trial, no credit card required, so you can explore all features before making a decision.",
        },
      ],
    },
    {
      name: "Billing",
      questions: [
        {
          question: "How does billing work?",
          answer:
            "We offer both monthly and annual billing cycles. You'll be charged at the beginning of each billing period. Annual plans offer a 20% discount compared to monthly billing.",
        },
        {
          question: "Can I change my plan later?",
          answer:
            "You can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades or cancellations take effect at the end of your current billing cycle.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and in some regions, we support bank transfers for annual enterprise plans.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund.",
        },
      ],
    },
    {
      name: "Features",
      questions: [
        {
          question: "What types of quizzes can I create?",
          answer:
            "QuizHub supports multiple quiz formats including multiple choice, true/false, fill-in-the-blank, matching, ranking, and open-ended questions. You can also add images, videos, and audio to your quizzes.",
        },
        {
          question: "How does the AI quiz generation work?",
          answer:
            "Our AI quiz generation feature uses advanced natural language processing to create high-quality quiz questions based on topics you provide. Simply enter a subject, select the difficulty level and number of questions, and our AI will generate a complete quiz for you to review and customize.",
        },
        {
          question: "Can I brand my quizzes with my logo and colors?",
          answer:
            "Yes, custom branding is available on our Pro and Enterprise plans. You can add your logo, customize colors, fonts, and even use your own domain for a seamless branded experience.",
        },
        {
          question: "What analytics and reporting features are available?",
          answer:
            "Depending on your plan, you can access various analytics including completion rates, average scores, question-level performance, time spent, and user progress over time. Enterprise plans offer custom reporting capabilities.",
        },
      ],
    },
    {
      name: "Account & Security",
      questions: [
        {
          question: "How secure is my data on QuizHub ?",
          answer:
            "We take security seriously. All data is encrypted in transit and at rest. We implement industry-standard security practices, regular security audits, and comply with GDPR, CCPA, and other privacy regulations.",
        },
        {
          question: "Can I delete my account and data?",
          answer:
            "Yes, you can delete your account and associated data at any time from your account settings. We also offer data export options if you'd like to backup your information before deletion.",
        },
        {
          question: "Do you offer Single Sign-On (SSO)?",
          answer:
            "Yes, SSO integration is available on our Enterprise plan. We support SAML, OAuth, and can integrate with popular identity providers like Okta, Auth0, Google Workspace, and Microsoft Azure AD.",
        },
      ],
    },
  ];

  // Filter questions based on search query
  const filteredFaqs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories;

  return (
    <section
      className="bg-slate-50 py-20 dark:bg-slate-900/50"
      data-oid="fk.feop"
    >
      <div className="container mx-auto px-4" data-oid="d5zy2iq">
        <div className="mb-12 text-center" data-oid="hdjjpfw">
          <h2
            className="mb-4 font-bold text-3xl md:text-4xl"
            data-oid="qp3l6b_"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
            data-oid="_o.u5w8"
          >
            Find answers to common questions about our platform, pricing, and
            features
          </p>

          <div className="mx-auto mt-8 max-w-md" data-oid="e88zy.r">
            <div className="relative" data-oid="6w2w18t">
              <Search
                className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-slate-400"
                data-oid="su15--t"
              />

              <Input
                className="pl-10"
                data-oid="z3rxz0m"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                type="search"
                value={searchQuery}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl" data-oid="1o9-7zc">
          {filteredFaqs.map((category) => (
            <div className="mb-8" data-oid=":28veiy" key={category.name}>
              <h3 className="mb-4 font-semibold text-xl" data-oid=".ah9ozu">
                {category.name}
              </h3>
              <Accordion
                className="space-y-4"
                collapsible
                data-oid="2f91dqq"
                type="single"
              >
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-800"
                    data-oid="jrfa3fl"
                    key={index}
                    value={`${category.name}-${index}`}
                  >
                    <AccordionTrigger
                      className="px-4 py-4 text-left font-medium hover:bg-slate-50 hover:no-underline dark:hover:bg-slate-700/50"
                      data-oid="0:rrt8_"
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="px-4 pt-2 pb-4 text-slate-600 dark:text-slate-300"
                      data-oid="v-6ccbh"
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="py-8 text-center" data-oid="k4xkglw">
              <p
                className="text-slate-500 dark:text-slate-400"
                data-oid="ecvpx:a"
              >
                No results found for &quot;{searchQuery}&quot;
              </p>
              <p className="mt-2" data-oid="x0c:0k0">
                Try a different search term or{" "}
                <button
                  className="text-purple-600 hover:text-purple-700"
                  data-oid="5d2fq3f"
                  onClick={() => setSearchQuery("")}
                >
                  clear your search
                </button>
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center" data-oid="vtige3f">
          <p className="text-slate-600 dark:text-slate-400" data-oid="7f3vcdl">
            Still have questions? Contact our support team at{" "}
            <a
              className="font-medium text-purple-600 hover:text-purple-700"
              data-oid="g-hl1k2"
              href="mailto:support@quizhub.com"
            >
              support@quizhub.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
