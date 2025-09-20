"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Eye,
  EyeOff,
  Gamepad2,
  Globe,
  Link,
  Trophy,
  Users,
} from "lucide-react";
import { APP_NAME } from "@/lib/app-config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AuthPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Quiz Interests
    interests: [] as string[],
    skillLevel: "",
    preferredTopics: [] as string[],

    // Step 2: Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    country: "",

    // Step 3: Account Setup
    password: "",
    confirmPassword: "",
    newsletter: false,
    terms: false,
  });

  const quizCategories = [
    { id: "general", label: "General Knowledge", icon: Brain },
    { id: "science", label: "Science & Technology", icon: BookOpen },
    { id: "history", label: "History & Geography", icon: Globe },
    { id: "sports", label: "Sports & Entertainment", icon: Trophy },
    { id: "gaming", label: "Gaming & Pop Culture", icon: Gamepad2 },
    { id: "social", label: "Social & Current Events", icon: Users },
  ];

  const steps = [
    {
      number: 1,
      title: "Quiz Interests",
      description: "Tell us what you love",
    },
    {
      number: 2,
      title: "Personal Details",
      description: "Your basic information",
    },
    { number: 3, title: "Account Setup", description: "Secure your account" },
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.interests.length > 0 && formData.skillLevel;
      case 2:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone
        );

      case 3:
        return (
          formData.password &&
          formData.confirmPassword &&
          formData.terms &&
          formData.password === formData.confirmPassword
        );

      default:
        return false;
    }
  };

  const router = useRouter();

  return (
    <div className="flex min-h-screen" data-oid="ldj9cq:">
      {/* Left Side - Image/Illustration */}
      <div
        className="relative hidden overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 lg:flex lg:w-1/2"
        data-oid="je-leyi"
      >
        <div className="absolute inset-0 bg-black/20" data-oid="_cufan3" />
        <div
          className="relative z-10 mx-auto flex flex-col items-center justify-center p-12 text-white"
          data-oid="rmdj498"
        >
          <div className="mb-8 text-center" data-oid="eelglh:">
            <div
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm"
              data-oid="whsbeb9"
            >
              <BookOpen className="h-12 w-12 text-white" data-oid="i:cly8e" />
            </div>
            <h1 className="mb-4 font-bold text-4xl" data-oid="o.:er7r">
              Join the Quiz Revolution
            </h1>
            <p
              className="mb-8 text-white/90 text-xl leading-relaxed"
              data-oid="6ooa-6x"
            >
              Discover your potential, challenge your friends, and become a quiz
              champion
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 flex items-center space-x-4" data-oid="8p-zwm9">
            {steps.map((step, index) => (
              <div
                className="flex items-center"
                data-oid="qh1.fc_"
                key={step.number}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all ${currentStep >= step.number ? "border-white bg-white text-indigo-600" : "border-white/50 text-white/70"}`}
                  data-oid="3:sxuuq"
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 w-12 ${currentStep > step.number ? "bg-white" : "bg-white/30"}`}
                    data-oid="f44kgyq"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center" data-oid="c98snov">
            <div className="mb-2 font-semibold text-lg" data-oid="dm0u10g">
              {steps[currentStep - 1].title}
            </div>
            <div className="text-white/80" data-oid="4klkk3c">
              {steps[currentStep - 1].description}
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute top-20 right-20 h-32 w-32 animate-pulse rounded-full bg-white/10 blur-xl"
            data-oid="hllva3z"
          />
          <div
            className="absolute bottom-20 left-20 h-24 w-24 animate-pulse rounded-full bg-white/10 blur-xl delay-1000"
            data-oid="-b3osdu"
          />
          <div
            className="absolute top-1/2 left-10 h-16 w-16 animate-pulse rounded-full bg-white/10 blur-lg delay-500"
            data-oid="ex2im-o"
          />
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div
        className="flex w-full items-center justify-center p-8 lg:w-1/2"
        data-oid="1mt2ex3"
      >
        <div className="w-full max-w-lg" data-oid="pjr2av6">
          {/* Mobile Header */}
          <div className="mb-8 text-center lg:hidden" data-oid="gpsigrr">
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-600"
              data-oid="e0m4kpa"
            >
              <BookOpen className="h-8 w-8 text-white" data-oid="ldw6pne" />
            </div>
            <h1 className="mb-2 font-bold text-3xl" data-oid="9.r-uv9">
              {`Join ${APP_NAME}`}
            </h1>
            <p data-oid="i-7hqmj">
              Create your account and start your quiz adventure
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-xl" data-oid="0l9ug_b">
            <CardHeader className="pb-6" data-oid="-onyfm-">
              <CardTitle className="font-bold text-2xl" data-oid="958vru3">
                Step {currentStep} of 3
              </CardTitle>
              <CardDescription data-oid="dpuz6oz">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="-d_1l5r">
              {/* Step 1: Quiz Interests */}
              {currentStep === 1 && (
                <div className="space-y-6" data-oid="7hvt5k3">
                  <div data-oid="54hhfqp">
                    <Label
                      className="mb-4 block font-semibold text-base"
                      data-oid="y8nan_4"
                    >
                      What types of quizzes interest you? *
                    </Label>
                    <div className="grid grid-cols-1 gap-3" data-oid="lr372xw">
                      {quizCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${formData.interests.includes(category.id) ? "border-indigo-600 bg-indigo-500/20" : "border-gray-200 hover:border-gray-300 dark:border-neutral-500"}`}
                            data-oid=":y2o84w"
                            key={category.id}
                            onClick={() => handleInterestToggle(category.id)}
                          >
                            <div
                              className="flex items-center space-x-3"
                              data-oid="k:ogmob"
                            >
                              <Icon
                                className={`h-5 w-5 ${formData.interests.includes(category.id) ? "text-indigo-600" : "text-gray-400"}`}
                                data-oid="83rkwwf"
                              />

                              <span className="font-medium" data-oid="86y83yn">
                                {category.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div data-oid="xj_::ed">
                    <Label
                      className="font-semibold text-base"
                      data-oid="4dfh83e"
                      htmlFor="skillLevel"
                    >
                      What's your quiz skill level? *
                    </Label>
                    <Select
                      data-oid="p6ee4d8"
                      onValueChange={(value) =>
                        handleInputChange("skillLevel", value)
                      }
                      value={formData.skillLevel}
                    >
                      <SelectTrigger className="mt-2 h-12" data-oid="9xh-v3k">
                        <SelectValue
                          data-oid="22-amd:"
                          placeholder="Select your skill level"
                        />
                      </SelectTrigger>
                      <SelectContent data-oid="8t65di1">
                        <SelectItem data-oid="gs5_e2j" value="beginner">
                          Beginner - Just getting started
                        </SelectItem>
                        <SelectItem data-oid="fjo6c6y" value="intermediate">
                          Intermediate - I know my way around
                        </SelectItem>
                        <SelectItem data-oid="dsuwh.i" value="advanced">
                          Advanced - Bring on the challenge!
                        </SelectItem>
                        <SelectItem data-oid="bj4s62p" value="expert">
                          Expert - Quiz master level
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div className="space-y-4" data-oid="21clx1.">
                  <div className="grid grid-cols-2 gap-4" data-oid="xjgn8ut">
                    <div data-oid="v2gt::h">
                      <Label
                        className="font-medium text-sm"
                        data-oid="qcvqpoo"
                        htmlFor="firstName"
                      >
                        First Name *
                      </Label>
                      <Input
                        className="mt-1 h-12"
                        data-oid="pzgxw-6"
                        id="firstName"
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="John"
                        value={formData.firstName}
                      />
                    </div>
                    <div data-oid="nw3d5m4">
                      <Label
                        className="font-medium text-sm"
                        data-oid="xj0faw_"
                        htmlFor="lastName"
                      >
                        Last Name *
                      </Label>
                      <Input
                        className="mt-1 h-12"
                        data-oid="bn.oqh_"
                        id="lastName"
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Smith"
                        value={formData.lastName}
                      />
                    </div>
                  </div>

                  <div data-oid="yn8yuqk">
                    <Label
                      className="font-medium text-sm"
                      data-oid="bsmj7yv"
                      htmlFor="email"
                    >
                      Email *
                    </Label>
                    <Input
                      className="mt-1 h-12"
                      data-oid="qpi7swt"
                      id="email"
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                    />
                  </div>

                  <div data-oid="0rdmbsm">
                    <Label
                      className="font-medium text-sm"
                      data-oid="eya_f1j"
                      htmlFor="phone"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      className="mt-1 h-12"
                      data-oid="17i-_n7"
                      id="phone"
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                      value={formData.phone}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4" data-oid="_ut-c33">
                    <div data-oid="mqewztm">
                      <Label
                        className="font-medium text-sm"
                        data-oid="8izoa_k"
                        htmlFor="dateOfBirth"
                      >
                        Date of Birth
                      </Label>
                      <Input
                        className="mt-1 h-12"
                        data-oid="x:2y:12"
                        id="dateOfBirth"
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                        type="date"
                        value={formData.dateOfBirth}
                      />
                    </div>
                    <div data-oid="m2y16i1">
                      <Label
                        className="font-medium text-sm"
                        data-oid="p1vyyt6"
                        htmlFor="country"
                      >
                        Country
                      </Label>
                      <Select
                        data-oid="_ndu47k"
                        onValueChange={(value) =>
                          handleInputChange("country", value)
                        }
                        value={formData.country}
                      >
                        <SelectTrigger className="mt-1 h-12" data-oid="eox_k.v">
                          <SelectValue
                            data-oid="0c15mlu"
                            placeholder="Select country"
                          />
                        </SelectTrigger>
                        <SelectContent data-oid="7gmdrfi">
                          <SelectItem data-oid="fth2p6d" value="us">
                            United States
                          </SelectItem>
                          <SelectItem data-oid="4c.5-dl" value="uk">
                            United Kingdom
                          </SelectItem>
                          <SelectItem data-oid="e8a3sh1" value="ca">
                            Canada
                          </SelectItem>
                          <SelectItem data-oid="l6v9hs:" value="au">
                            Australia
                          </SelectItem>
                          <SelectItem data-oid="8q48dt8" value="de">
                            Germany
                          </SelectItem>
                          <SelectItem data-oid="7h.8:pj" value="fr">
                            France
                          </SelectItem>
                          <SelectItem data-oid="2k-tkwb" value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Account Setup */}
              {currentStep === 3 && (
                <div className="space-y-4" data-oid="dzhgbqe">
                  <div data-oid="h:qzwey">
                    <Label
                      className="font-medium text-sm"
                      data-oid="2taj9x_"
                      htmlFor="password"
                    >
                      Password *
                    </Label>
                    <div className="relative mt-1" data-oid="xmp_45m">
                      <Input
                        className="h-12 pr-10"
                        data-oid=".gsvdi5"
                        id="password"
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        placeholder="Create a strong password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                      />

                      <button
                        className="-translate-y-1/2 absolute top-1/2 right-3 transform text-gray-400 hover:text-gray-600"
                        data-oid="egg4-0-"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" data-oid="e:wx6e:" />
                        ) : (
                          <Eye className="h-5 w-5" data-oid="d76wz8r" />
                        )}
                      </button>
                    </div>
                    <p
                      className="mt-1 text-gray-500 text-xs"
                      data-oid="1:r70p5"
                    >
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  <div data-oid="afxr3.3">
                    <Label
                      className="font-medium text-sm"
                      data-oid=":-ioi97"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password *
                    </Label>
                    <div className="relative mt-1" data-oid="mz3ewlt">
                      <Input
                        className="h-12 pr-10"
                        data-oid="g7xwzca"
                        id="confirmPassword"
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        placeholder="Confirm your password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                      />

                      <button
                        className="-translate-y-1/2 absolute top-1/2 right-3 transform text-gray-400 hover:text-gray-600"
                        data-oid="ut_trto"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        type="button"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" data-oid="7y6:5yi" />
                        ) : (
                          <Eye className="h-5 w-5" data-oid="ko1nyeo" />
                        )}
                      </button>
                    </div>
                    {formData.confirmPassword &&
                      formData.password !== formData.confirmPassword && (
                        <p
                          className="mt-1 text-red-500 text-xs"
                          data-oid="s_d89-o"
                        >
                          Passwords do not match
                        </p>
                      )}
                  </div>

                  <div className="space-y-3 pt-4" data-oid="1yjyq0t">
                    <div
                      className="flex items-center space-x-2"
                      data-oid="_toe5a1"
                    >
                      <Checkbox
                        checked={formData.newsletter}
                        data-oid="jvahtp9"
                        id="newsletter"
                        onCheckedChange={(checked) =>
                          handleInputChange("newsletter", checked as boolean)
                        }
                      />

                      <Label
                        className="text-sm"
                        data-oid="j86u0q4"
                        htmlFor="newsletter"
                      >
                        Subscribe to our newsletter for quiz updates and tips
                      </Label>
                    </div>

                    <div
                      className="flex items-center space-x-2"
                      data-oid=":.:z5d3"
                    >
                      <Checkbox
                        checked={formData.terms}
                        data-oid="o7ad6hi"
                        id="terms"
                        onCheckedChange={(checked) =>
                          handleInputChange("terms", checked as boolean)
                        }
                      />

                      <Label
                        className="text-sm"
                        data-oid="79zwi_p"
                        htmlFor="terms"
                      >
                        I agree to the{" "}
                        <Link
                          className="text-indigo-600 hover:underline"
                          data-oid="45zeyc2"
                          href="#"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          className="text-indigo-600 hover:underline"
                          data-oid="w5kdt5f"
                          href="#"
                        >
                          Privacy Policy
                        </Link>{" "}
                        *
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6" data-oid="g7fdatx">
                <Button
                  data-oid="qg8z3b-"
                  onClick={() => router.push("/login")}
                  variant="outline"
                >
                  <ArrowLeft className="h-4 w-4" data-oid="4h9s-oi" />
                  <span data-oid="7lxdz5j">
                    {currentStep === 1 ? "Back to Login" : "Back"}
                  </span>
                </Button>

                {currentStep < 3 ? (
                  <Button
                    data-oid="be3kle."
                    disabled={!canProceed()}
                    onClick={nextStep}
                  >
                    <span data-oid="a.ijmp-">Next</span>
                    <ArrowRight className="h-4 w-4" data-oid="m8s_xpn" />
                  </Button>
                ) : (
                  <Button data-oid="u_f07is" disabled={!canProceed()}>
                    <span data-oid="281f9sm">Create Account</span>
                    <Trophy className="h-4 w-4" data-oid="d54b-9c" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
