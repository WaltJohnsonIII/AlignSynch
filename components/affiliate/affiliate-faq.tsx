"use client";

import { Link } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AffiliateFAQ() {
  const faqs = [
    {
      question: "How does the affiliate program work?",
      answer:
        "Our affiliate program is simple: you refer users to QuizHub  using your unique link, and you earn a 30% commission on all their subscription payments for as long as they remain a customer. We track all referrals automatically and pay out monthly.",
    },
    {
      question: "Who can join the affiliate program?",
      answer:
        "Anyone can join our affiliate program! Whether you're a content creator, educator, influencer, or just someone with an audience interested in educational content, you're welcome to join. There are no minimum requirements to get started.",
    },
    {
      question: "How much can I earn?",
      answer:
        "Earnings vary based on your audience and promotion efforts. With our 30% commission rate on all plans, affiliates earn between $5.99 and $14.99 per month for each referred user. Some of our top affiliates earn over $5,000 monthly with consistent promotion.",
    },
    {
      question: "When and how do I get paid?",
      answer:
        "We process payments on the 1st of each month for the previous month's earnings. You can choose to be paid via PayPal, bank transfer, or cryptocurrency. The minimum payout threshold is $50, and payments typically arrive within 3-5 business days.",
    },
    {
      question: "How long does the referral cookie last?",
      answer:
        "Our referral cookie lasts for 90 days. This means if someone clicks your affiliate link and signs up within 90 days, you'll receive credit for the referral and earn commission on their subscription.",
    },
    {
      question: "Do you provide promotional materials?",
      answer:
        "Yes! We provide a variety of promotional materials including banners, email templates, social media posts, and product screenshots. You can access all these materials in your affiliate dashboard once you sign up.",
    },
    {
      question: "Can I promote the affiliate program on social media?",
      answer:
        "Social media is one of the best ways to promote QuizHub . You can share your affiliate link on platforms like Twitter, Facebook, Instagram, TikTok, and LinkedIn. We even provide platform-specific content templates in your dashboard.",
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer:
        "There is no limit to the number of people you can refer or how much you can earn. The more people you refer who become paying customers, the more commission you'll earn.",
    },
  ];

  return (
    <section
      className="bg-slate-50 py-16 dark:bg-slate-800/50"
      data-oid="of43m6w"
    >
      <div className="container mx-auto px-4" data-oid="c.hq54h">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-oid="c52c.cc">
          <h2 className="mb-4 font-bold text-3xl" data-oid="7jerbri">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400" data-oid="kjlw39-">
            Everything you need to know about our affiliate program. Can't find
            the answer you're looking for? Contact our affiliate support team.
          </p>
        </div>

        <div className="mx-auto max-w-3xl" data-oid="8bqhwp_">
          <Accordion
            className="w-full"
            collapsible
            data-oid=".uv0ywb"
            type="single"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                className="border-slate-200 border-b dark:border-slate-700"
                data-oid="xj19kgh"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger
                  className="py-4 text-left font-medium hover:no-underline"
                  data-oid="3ooyp1j"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-4 text-slate-600 dark:text-slate-400"
                  data-oid="3503a.7"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center" data-oid=".zwa8vw">
          <p
            className="mb-4 text-slate-600 dark:text-slate-400"
            data-oid="7ycx-oh"
          >
            Still have questions?
          </p>
          <Link
            className="inline-flex items-center font-medium text-primary hover:underline"
            data-oid="otw4006"
            href="#"
          >
            Contact our affiliate support team
            <svg
              className="ml-1 h-4 w-4"
              data-oid="fuj53ez"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                data-oid="h55w2ti"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
