"use client";

import { CheckCircle2, Loader2, Upload } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { SupportCategory } from "./support-page";

interface ContactFormProps {
  selectedCategory: SupportCategory;
}
type categories =
  | "account"
  | "billing"
  | "quiz-creation"
  | "tournaments"
  | "privacy"
  | "technical"
  | "general";
export function ContactForm({ selectedCategory }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: selectedCategory === "all" ? "general" : selectedCategory,
    message: "",
    attachment: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: selectedCategory === "all" ? "general" : selectedCategory,
        message: "",
        attachment: null,
      });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0],
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-6" data-oid="j7pfahf">
        <div
          className="flex flex-col items-center justify-center py-12"
          data-oid="0bwximz"
        >
          <div
            className="mb-4 rounded-full bg-green-100 p-3"
            data-oid="65n_8vu"
          >
            <CheckCircle2
              className="h-8 w-8 text-green-600"
              data-oid="c70iol1"
            />
          </div>
          <h2 className="mb-2 font-bold text-2xl" data-oid="ytohtvf">
            Message Sent!
          </h2>
          <p
            className="mb-6 text-center text-muted-foreground"
            data-oid="-ppe5n1"
          >
            Thank you for contacting us. We'll get back to you as soon as
            possible.
          </p>
          <p className="text-muted-foreground text-sm" data-oid="nq3.3d7">
            Your reference number: #
            {Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6" data-oid="31f.4:e">
      <h2 className="mb-6 font-bold text-2xl" data-oid="de996j0">
        Contact Support
      </h2>
      <form className="space-y-6" data-oid="mf64q2j" onSubmit={handleSubmit}>
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="1t6_f2d"
        >
          <div className="space-y-2" data-oid="b8hwbg.">
            <Label data-oid="kp5hqcw" htmlFor="name">
              Name
            </Label>
            <Input
              data-oid="19ud2z."
              id="name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              required
              value={formData.name}
            />
          </div>
          <div className="space-y-2" data-oid="w:ot8la">
            <Label data-oid="em2z3ds" htmlFor="email">
              Email
            </Label>
            <Input
              data-oid="7nbkpne"
              id="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your.email@example.com"
              required
              type="email"
              value={formData.email}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="lksbxy_"
        >
          <div className="space-y-2" data-oid="2bs8ofn">
            <Label data-oid="eqje44t" htmlFor="subject">
              Subject
            </Label>
            <Input
              data-oid="3sm2e-s"
              id="subject"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Brief description of your issue"
              required
              value={formData.subject}
            />
          </div>
          <div className="space-y-2" data-oid="l5mok04">
            <Label data-oid="1cfe33h" htmlFor="category">
              Category
            </Label>
            <Select
              data-oid="sq4q8.f"
              onValueChange={(value) =>
                setFormData({ ...formData, category: value as categories })
              }
              value={formData.category}
            >
              <SelectTrigger data-oid="f5j77eo">
                <SelectValue
                  data-oid="ch.54xx"
                  placeholder="Select a category"
                />
              </SelectTrigger>
              <SelectContent data-oid="qa:rkge">
                <SelectItem data-oid="d.qbv7i" value="account">
                  Account
                </SelectItem>
                <SelectItem data-oid="zv-9g9a" value="billing">
                  Billing
                </SelectItem>
                <SelectItem data-oid="fq:uq_5" value="quiz-creation">
                  Quiz Creation
                </SelectItem>
                <SelectItem data-oid="ri2hhu_" value="tournaments">
                  Tournaments
                </SelectItem>
                <SelectItem data-oid="fpae9py" value="privacy">
                  Privacy
                </SelectItem>
                <SelectItem data-oid="_7oy0kh" value="technical">
                  Technical Issues
                </SelectItem>
                <SelectItem data-oid="qhsdq10" value="general">
                  General
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2" data-oid="vc5tos0">
          <Label data-oid="f7rjgjs" htmlFor="message">
            Message
          </Label>
          <Textarea
            data-oid="7ey_i0k"
            id="message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Please describe your issue in detail"
            required
            rows={6}
            value={formData.message}
          />
        </div>

        <div className="space-y-2" data-oid="9totqr8">
          <Label data-oid="xo8_7vj" htmlFor="attachment">
            Attachment (optional)
          </Label>
          <div className="flex items-center gap-4" data-oid="ce-ducg">
            <Button
              className="w-full md:w-auto"
              data-oid="h2b59pr"
              onClick={() => document.getElementById("file-upload")?.click()}
              type="button"
              variant="outline"
            >
              <Upload className="mr-2 h-4 w-4" data-oid="f:izwq8" />
              {formData.attachment ? "Change File" : "Upload File"}
            </Button>
            {formData.attachment && (
              <span
                className="text-muted-foreground text-sm"
                data-oid="i5lj8.w"
              >
                {formData.attachment.name}
              </span>
            )}
            <input
              accept="image/*,.pdf,.doc,.docx,.txt"
              className="hidden"
              data-oid="el-gepe"
              id="file-upload"
              onChange={handleFileChange}
              type="file"
            />
          </div>
          <p className="text-muted-foreground text-xs" data-oid=".ruak33">
            Accepted file types: Images, PDF, DOC, DOCX, TXT (Max 5MB)
          </p>
        </div>

        <Button
          className="w-full md:w-auto"
          data-oid="0fnv6kc"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="fmjq-e8"
              />
              Sending...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </Card>
  );
}
