"use client";

import { Loader2, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function AppearanceSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState("medium");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const handleSave = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Appearance settings saved!");
    }, 1000);
  };
  const handleThemeChange = (value: string) => {
    console.log("Selected theme:", value);
    setTheme(value);
  };
  return (
    <div className="space-y-6" data-oid="52yxbmx">
      <div data-oid=".wv.645">
        <h3 className="font-medium text-lg" data-oid="thp6sqi">
          Appearance Settings
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="nuirgl-">
          Customize how QuizHub looks and feels for you.
        </p>
      </div>

      <Card data-oid="vh-uw9t">
        <CardHeader data-oid="7-9t4aw">
          <CardTitle data-oid="gz.qa0q">Theme</CardTitle>
          <CardDescription data-oid="._t1dba">
            Choose your preferred color theme.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="g-0g.2p">
          <RadioGroup
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            data-oid="jh_pi7g"
            onValueChange={handleThemeChange}
            value={theme}
          >
            <div data-oid="mjf9ayr">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="ik51-pm"
                id="theme-light"
                value="light"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="qq9srkm"
                htmlFor="theme-light"
              >
                <Sun className="mb-3 h-6 w-6" data-oid="8wcf97h" />
                <span className="font-medium" data-oid="26zvu8q">
                  Light
                </span>
              </Label>
            </div>

            <div data-oid="8ah8vb:">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="sdlp3n8"
                id="theme-dark"
                value="dark"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="nnt7sqk"
                htmlFor="theme-dark"
              >
                <Moon className="mb-3 h-6 w-6" data-oid=":cctoht" />
                <span className="font-medium" data-oid="6v0ovm4">
                  Dark
                </span>
              </Label>
            </div>

            <div data-oid="npa8_4h">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="oaqi5ry"
                id="theme-system"
                value="system"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="zdb9yqf"
                htmlFor="theme-system"
              >
                <Monitor className="mb-3 h-6 w-6" data-oid="wp5dkrr" />
                <span className="font-medium" data-oid="uhsj4s:">
                  System
                </span>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card data-oid="-.9l13f">
        <CardHeader data-oid="wveytwe">
          <CardTitle data-oid="j_z-kge">Font Size</CardTitle>
          <CardDescription data-oid="qlk1co6">
            Choose your preferred font size.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="tl-bv3d">
          <RadioGroup
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            data-oid="q_mxxsp"
            onValueChange={setFontSize}
            value={fontSize}
          >
            <div data-oid="eifjk6c">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="0.n152w"
                id="font-small"
                value="small"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="g5794e3"
                htmlFor="font-small"
              >
                <span className="mb-3 text-sm" data-oid="yup-6v:">
                  Aa
                </span>
                <span className="font-medium" data-oid="8itj9df">
                  Small
                </span>
              </Label>
            </div>

            <div data-oid="w8krn5-">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="znl:08s"
                id="font-medium"
                value="medium"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="oh8omzr"
                htmlFor="font-medium"
              >
                <span className="mb-3 text-base" data-oid="5sd0j6o">
                  Aa
                </span>
                <span className="font-medium" data-oid="bxmit1c">
                  Medium
                </span>
              </Label>
            </div>

            <div data-oid="q:naa4u">
              <RadioGroupItem
                className="peer sr-only"
                data-oid="7pjs8_9"
                id="font-large"
                value="large"
              />

              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                data-oid="vx6fd:j"
                htmlFor="font-large"
              >
                <span className="mb-3 text-lg" data-oid="280.hh9">
                  Aa
                </span>
                <span className="font-medium" data-oid="rbm5vb3">
                  Large
                </span>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card data-oid="prx1x_v">
        <CardHeader data-oid=":.9cz20">
          <CardTitle data-oid="ihxkbc3">Accessibility</CardTitle>
          <CardDescription data-oid="rhrfj-.">
            Adjust settings to improve accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="mli8sc_">
          <div className="flex items-center justify-between" data-oid="cwjqalw">
            <div data-oid="dze:gby">
              <p className="font-medium" data-oid="pit1m12">
                Reduced Motion
              </p>
              <p className="text-muted-foreground text-sm" data-oid="3zafyyd">
                Reduce the amount of animations and transitions.
              </p>
            </div>
            <Switch
              checked={reducedMotion}
              data-oid="b-w_19t"
              onCheckedChange={setReducedMotion}
            />
          </div>

          <Separator data-oid="_jj3_s-" />

          <div className="flex items-center justify-between" data-oid="2npm4l0">
            <div data-oid="..3i_3b">
              <p className="font-medium" data-oid="f4.e:b0">
                High Contrast
              </p>
              <p className="text-muted-foreground text-sm" data-oid=".i:i.h1">
                Increase contrast for better visibility.
              </p>
            </div>
            <Switch
              checked={highContrast}
              data-oid="u9_b.be"
              onCheckedChange={setHighContrast}
            />
          </div>
        </CardContent>
        <CardFooter data-oid="j.3ok19">
          <Button
            className="w-full"
            data-oid="2yl1ubd"
            disabled={isLoading}
            onClick={handleSave}
          >
            {isLoading && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="2luz8si"
              />
            )}
            Save Appearance Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
