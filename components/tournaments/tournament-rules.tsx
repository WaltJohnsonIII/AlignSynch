"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tournament } from "./tournament-detail";

interface TournamentRulesProps {
  tournament: Tournament;
}

export function TournamentRules({ tournament }: TournamentRulesProps) {
  return (
    <Card data-oid="qo4g3th">
      <CardHeader data-oid="k-n64mx">
        <CardTitle data-oid="l15z4xt">Tournament Rules & Guidelines</CardTitle>
      </CardHeader>
      <CardContent data-oid="3874h4x">
        <Accordion
          className="w-full"
          collapsible
          data-oid="dky0cgd"
          type="single"
        >
          <AccordionItem data-oid="byeywqv" value="item-1">
            <AccordionTrigger data-oid="bg1my6t">
              Eligibility & Registration
            </AccordionTrigger>
            <AccordionContent data-oid="n6lspiv">
              <ul className="list-disc space-y-2 pl-5" data-oid="6a2rwtz">
                <li data-oid="e_84dc0">
                  All registered users of QuizHub are eligible to participate.
                </li>
                <li data-oid="0n4aoe1">
                  Registration must be completed before the deadline (
                  {tournament.registrationEnds} remaining).
                </li>
                <li data-oid="qdhqrbn">
                  Each participant may only register once using their primary
                  account.
                </li>
                <li data-oid="yi_p_w-">
                  By registering, participants agree to abide by all tournament
                  rules.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="w9--s_g" value="item-2">
            <AccordionTrigger data-oid="c6geeqi">
              Tournament Format
            </AccordionTrigger>
            <AccordionContent data-oid="jcw8xbh">
              <ul className="list-disc space-y-2 pl-5" data-oid="z5w3uti">
                <li data-oid="w0nwkqb">
                  The tournament consists of {tournament.rounds} rounds.
                </li>
                <li data-oid="ll856d2">
                  Each round contains {tournament.questionsPerRound} questions.
                </li>
                <li data-oid="s9.92da">
                  Questions will be drawn from multiple categories.
                </li>
                <li data-oid="mo-s..:">
                  Participants have {tournament.timePerQuestion} seconds to
                  answer each question.
                </li>
                <li data-oid="tp3yavo">The format is {tournament.format}.</li>
                {tournament.format === "Elimination" && (
                  <li data-oid="ea-9uy7">
                    Top performers from each round advance to the next round.
                  </li>
                )}
                {tournament.format === "Points-based" && (
                  <li data-oid="2.fz01b">
                    Points accumulate across all rounds to determine final
                    standings.
                  </li>
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="5.4jg6:" value="item-3">
            <AccordionTrigger data-oid="6r8l9_k">
              Scoring System
            </AccordionTrigger>
            <AccordionContent data-oid="o3t3kqd">
              <ul className="list-disc space-y-2 pl-5" data-oid="wphssun">
                <li data-oid="am51bx0">Correct answers: 10 points</li>
                <li data-oid="f5zxtji">
                  Bonus for speed: Up to 5 additional points based on answer
                  speed
                </li>
                <li data-oid="khwrjtk">
                  Incorrect answers: 0 points (no penalty)
                </li>
                <li data-oid="c-g7wr8">Unanswered questions: 0 points</li>
                <li data-oid="5qdjle-">
                  Streak bonus: 2 extra points for each consecutive correct
                  answer (max 10)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="m9mwu0_" value="item-4">
            <AccordionTrigger data-oid="pk_a2yl">
              Fair Play & Conduct
            </AccordionTrigger>
            <AccordionContent data-oid="k3g4._i">
              <ul className="list-disc space-y-2 pl-5" data-oid="qflalzb">
                <li data-oid="e3a-ofc">
                  Use of external resources or assistance during the tournament
                  is prohibited.
                </li>
                <li data-oid="y_plmz8">
                  Sharing questions or answers with other participants is not
                  allowed.
                </li>
                <li data-oid="81.9nzv">
                  Multiple accounts or collaborative play is forbidden.
                </li>
                <li data-oid="tp1167i">
                  QuizHub reserves the right to disqualify participants
                  suspected of cheating.
                </li>
                <li data-oid=".un:q72">
                  All participants are expected to maintain respectful conduct
                  in tournament discussions.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="1_9es01" value="item-5">
            <AccordionTrigger data-oid="s.nh-n3">
              Technical Requirements
            </AccordionTrigger>
            <AccordionContent data-oid="6hfi1wo">
              <ul className="list-disc space-y-2 pl-5" data-oid="jbzqzxo">
                <li data-oid="sttoi9y">
                  Stable internet connection is required.
                </li>
                <li data-oid="zgp.ajk">
                  Participants are responsible for their own technical setup.
                </li>
                <li data-oid="qk_ugxm">
                  In case of technical issues, limited accommodations may be
                  made at the organizer's discretion.
                </li>
                <li data-oid="co_ks-2">
                  The tournament platform works best on modern browsers (Chrome,
                  Firefox, Safari, Edge).
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem data-oid="57ryyka" value="item-6">
            <AccordionTrigger data-oid="j72ervv">
              Prizes & Winners
            </AccordionTrigger>
            <AccordionContent data-oid="8mgc66h">
              <ul className="list-disc space-y-2 pl-5" data-oid="m26w1ky">
                <li data-oid="oadugj4">
                  Prize distribution is detailed in the Prizes tab.
                </li>
                <li data-oid="lk:xd.a">
                  Winners will be announced within 48 hours of tournament
                  completion.
                </li>
                <li data-oid="s5sb6_3">
                  All prizes will be distributed within 14 days of the
                  announcement.
                </li>
                <li data-oid="3:.qffj">
                  Winners may be required to verify their identity before
                  receiving prizes.
                </li>
                <li data-oid="col52jx">
                  All decisions by tournament organizers regarding winners are
                  final.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
