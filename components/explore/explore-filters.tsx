"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

interface ExploreFiltersProps {
  activeFilters: {
    difficulty: string;
    sortBy: string;
    timeRange: string;
  };
  setActiveFilters: (filters: {}) => void;
}

export function ExploreFilters({
  activeFilters,
  setActiveFilters,
}: ExploreFiltersProps) {
  const [rewardRange, setRewardRange] = useState([0, 15]);
  const [timeRange, setTimeRange] = useState([0, 30]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
    []
  );
  const [activeFilterCount, setActiveFilterCount] = useState(0);

  const handleDifficultyChange = (difficulty: string) => {
    setActiveFilters({
      ...activeFilters,
      difficulty,
    });
  };

  const handleSortChange = (sortBy: string) => {
    setActiveFilters({
      ...activeFilters,
      sortBy,
    });
  };

  const handleTimeRangeChange = (timeRange: string) => {
    setActiveFilters({
      ...activeFilters,
      timeRange,
    });
  };

  const resetFilters = () => {
    setActiveFilters({
      difficulty: "all",
      sortBy: "popular",
      timeRange: "all",
    });
    setRewardRange([0, 15]);
    setTimeRange([0, 30]);
    setSelectedDifficulties([]);
    setActiveFilterCount(0);
  };

  return (
    <div className="w-full space-y-4 md:w-64" data-oid=":p.lw.c">
      <div className="flex items-center justify-between" data-oid=":hl3nef">
        <h3 className="font-medium" data-oid="6g6rx4:">
          Filters
        </h3>
        {activeFilterCount > 0 && (
          <Button
            data-oid="xrnplka"
            onClick={resetFilters}
            size="sm"
            variant="ghost"
          >
            Reset
          </Button>
        )}
      </div>

      <div className="rounded-lg border bg-card" data-oid="f:exedz">
        <Accordion
          data-oid="r6r8e0k"
          defaultValue={["difficulty", "sort", "reward"]}
          type="multiple"
        >
          <AccordionItem data-oid="fvc9gd4" value="difficulty">
            <AccordionTrigger className="px-4" data-oid="4pfslie">
              Difficulty
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4" data-oid="zpm-5wl">
              <RadioGroup
                data-oid="7t7vc6n"
                onValueChange={handleDifficultyChange}
                value={activeFilters.difficulty}
              >
                <div className="flex items-center space-x-2" data-oid="uujz658">
                  <RadioGroupItem data-oid="rivt9xs" id="all" value="all" />
                  <Label data-oid="h6emvxq" htmlFor="all">
                    All Levels
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="92-bl0o">
                  <RadioGroupItem data-oid=".jp0otv" id="easy" value="easy" />
                  <Label data-oid="hs53f.y" htmlFor="easy">
                    Easy
                  </Label>
                  <Badge
                    className="ml-auto"
                    data-oid="udhjzgy"
                    variant="success"
                  >
                    Easy
                  </Badge>
                </div>
                <div className="flex items-center space-x-2" data-oid="zd1nkir">
                  <RadioGroupItem
                    data-oid="h7nytj_"
                    id="medium"
                    value="medium"
                  />

                  <Label data-oid="noqg36c" htmlFor="medium">
                    Medium
                  </Label>
                  <Badge
                    className="ml-auto"
                    data-oid="3f_alsz"
                    variant="warning"
                  >
                    Medium
                  </Badge>
                </div>
                <div className="flex items-center space-x-2" data-oid="vuafgtn">
                  <RadioGroupItem data-oid="4ymh7u3" id="hard" value="hard" />
                  <Label data-oid="r0_r-gw" htmlFor="hard">
                    Hard
                  </Label>
                  <Badge
                    className="ml-auto"
                    data-oid="v__np-z"
                    variant="destructive"
                  >
                    Hard
                  </Badge>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="j4psaop" value="sort">
            <AccordionTrigger className="px-4" data-oid="4bp1-n2">
              Sort By
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4" data-oid="a.bry3d">
              <RadioGroup
                data-oid="2gb0oh7"
                onValueChange={handleSortChange}
                value={activeFilters.sortBy}
              >
                <div className="flex items-center space-x-2" data-oid="5a2w:uz">
                  <RadioGroupItem
                    data-oid="d3l67sd"
                    id="popular"
                    value="popular"
                  />

                  <Label data-oid="vzy86c3" htmlFor="popular">
                    Most Popular
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="sib2ab6">
                  <RadioGroupItem
                    data-oid="6f-s_pv"
                    id="newest"
                    value="newest"
                  />

                  <Label data-oid="-ma8vhq" htmlFor="newest">
                    Newest
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="yfcykn1">
                  <RadioGroupItem
                    data-oid="kgrg7vk"
                    id="highest-rated"
                    value="highest-rated"
                  />

                  <Label data-oid="tdsma5i" htmlFor="highest-rated">
                    Highest Rated
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="n54yvfq">
                  <RadioGroupItem
                    data-oid="gno1dc_"
                    id="highest-reward"
                    value="highest-reward"
                  />

                  <Label data-oid="zisr2qi" htmlFor="highest-reward">
                    Highest Reward
                  </Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="5drnhr4" value="reward">
            <AccordionTrigger className="px-4" data-oid="0upaazz">
              Reward
            </AccordionTrigger>
            <AccordionContent
              className="space-y-4 px-4 pb-4"
              data-oid="8ck6-bj"
            >
              <div className="space-y-2" data-oid="jfo24ut">
                <div className="flex justify-between" data-oid="9hdax98">
                  <span className="text-sm" data-oid="ehuoj5f">
                    ${rewardRange[0]}
                  </span>
                  <span className="text-sm" data-oid="n4n50is">
                    ${rewardRange[1]}+
                  </span>
                </div>
                <Slider
                  data-oid="p0xpqzr"
                  defaultValue={[0, 15]}
                  max={15}
                  onValueChange={setRewardRange}
                  step={1}
                  value={rewardRange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="_32a3-2" value="time">
            <AccordionTrigger className="px-4" data-oid="mpt34gz">
              Time Limit
            </AccordionTrigger>
            <AccordionContent
              className="space-y-4 px-4 pb-4"
              data-oid="x.ba.zl"
            >
              <div className="space-y-2" data-oid="nmzdpb6">
                <div className="flex justify-between" data-oid="pjuot64">
                  <span className="text-sm" data-oid="qclv.2m">
                    {timeRange[0]} min
                  </span>
                  <span className="text-sm" data-oid="6d1lwo6">
                    {timeRange[1]}+ min
                  </span>
                </div>
                <Slider
                  data-oid=".8cca0m"
                  defaultValue={[0, 30]}
                  max={30}
                  onValueChange={setTimeRange}
                  step={5}
                  value={timeRange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="pj4gq.3" value="availability">
            <AccordionTrigger className="px-4" data-oid="lpe5vt.">
              Availability
            </AccordionTrigger>
            <AccordionContent
              className="space-y-2 px-4 pb-4"
              data-oid="0wtuhr_"
            >
              <div className="flex items-center space-x-2" data-oid="::ofk-5">
                <Checkbox data-oid="l99-xue" id="spots-available" />
                <Label data-oid="jcwnrtj" htmlFor="spots-available">
                  Spots Available
                </Label>
              </div>
              <div className="flex items-center space-x-2" data-oid="gt:y.sd">
                <Checkbox data-oid="f64:nz:" id="almost-full" />
                <Label data-oid="wzj.dny" htmlFor="almost-full">
                  Almost Full
                </Label>
              </div>
              <div className="flex items-center space-x-2" data-oid="p.ba5kl">
                <Checkbox data-oid="k271ftp" id="limited-time" />
                <Label data-oid="8c0h_p4" htmlFor="limited-time">
                  Limited Time
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="1uiof7m" value="time-range">
            <AccordionTrigger className="px-4" data-oid="vt04v.c">
              Time Range
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4" data-oid="w.o5zqg">
              <RadioGroup
                data-oid="880rs:t"
                onValueChange={handleTimeRangeChange}
                value={activeFilters.timeRange}
              >
                <div className="flex items-center space-x-2" data-oid="ot4oxtv">
                  <RadioGroupItem
                    data-oid="shk82ly"
                    id="time-all"
                    value="all"
                  />

                  <Label data-oid="_ryl0jj" htmlFor="time-all">
                    All Time
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="8ujkgz.">
                  <RadioGroupItem data-oid="qa_rr18" id="today" value="today" />
                  <Label data-oid="1.ld38k" htmlFor="today">
                    Today
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="t4nhry.">
                  <RadioGroupItem
                    data-oid="d2978pw"
                    id="this-week"
                    value="this-week"
                  />

                  <Label data-oid="cadum4z" htmlFor="this-week">
                    This Week
                  </Label>
                </div>
                <div className="flex items-center space-x-2" data-oid="rgr87bm">
                  <RadioGroupItem
                    data-oid="fx2bcgf"
                    id="this-month"
                    value="this-month"
                  />

                  <Label data-oid="fh5d8qx" htmlFor="this-month">
                    This Month
                  </Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="hidden md:block" data-oid="e_kn7l1">
        <Button className="w-full" data-oid="q99ofj_">
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
