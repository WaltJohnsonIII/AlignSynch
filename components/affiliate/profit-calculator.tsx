"use client";
import { motion } from "framer-motion";
import { Calculator, Calendar, DollarSign, Users } from "lucide-react";
import { type JSX, useEffect, useReducer } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

// Types
interface CalculatorState {
  referrals: number;
  conversionRate: number;
  averageValue: number;
  monthlyEarnings: number;
  yearlyEarnings: number;
}

type CalculatorAction =
  | { type: "SET_REFERRALS"; payload: number }
  | { type: "SET_CONVERSION_RATE"; payload: number }
  | { type: "SET_AVERAGE_VALUE"; payload: number }
  | { type: "UPDATE_EARNINGS" };

// Initial state
const initialState: CalculatorState = {
  referrals: 10,
  conversionRate: 20,
  averageValue: 50,
  monthlyEarnings: 0,
  yearlyEarnings: 0,
};

// Action types
const actionTypes = {
  SET_REFERRALS: "SET_REFERRALS",
  SET_CONVERSION_RATE: "SET_CONVERSION_RATE",
  SET_AVERAGE_VALUE: "SET_AVERAGE_VALUE",
  UPDATE_EARNINGS: "UPDATE_EARNINGS",
} as const;

// Reducer function
function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case actionTypes.SET_REFERRALS:
      return { ...state, referrals: action.payload };
    case actionTypes.SET_CONVERSION_RATE:
      return { ...state, conversionRate: action.payload };
    case actionTypes.SET_AVERAGE_VALUE:
      return { ...state, averageValue: action.payload };
    case actionTypes.UPDATE_EARNINGS: {
      const conversions = Math.round(
        state.referrals * (state.conversionRate / 100)
      );
      const monthly = conversions * state.averageValue * 0.3; // 30% commission
      return {
        ...state,
        monthlyEarnings: monthly,
        yearlyEarnings: monthly * 12,
      };
    }
    default:
      return state;
  }
}

export function ProfitCalculator(): JSX.Element {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  // Update earnings whenever input values change
  useEffect(() => {
    dispatch({ type: actionTypes.UPDATE_EARNINGS });
  }, [state.referrals, state.conversionRate, state.averageValue]);

  const handleReferralsChange = (value: number[]): void => {
    dispatch({ type: actionTypes.SET_REFERRALS, payload: value[0] });
  };

  const handleConversionRateChange = (value: number[]): void => {
    dispatch({ type: actionTypes.SET_CONVERSION_RATE, payload: value[0] });
  };

  const handleAverageValueChange = (value: number[]): void => {
    dispatch({ type: actionTypes.SET_AVERAGE_VALUE, payload: value[0] });
  };

  return (
    <section
      className="bg-slate-50 py-10 sm:px-4 xl:px-8 xl:py-20 dark:bg-slate-900"
      data-oid="yt09vxk"
    >
      <div className="container mx-auto px-4" data-oid="ggbq_5z">
        <div className="mx-auto mb-16 max-w-3xl text-center" data-oid="0_nuxsd">
          <h2
            className="mb-6 font-bold text-3xl md:text-4xl"
            data-oid="l.v-r0_"
          >
            Calculate Your Potential Earnings
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
            data-oid=".8ui0l_"
          >
            Use our calculator to estimate how much you could earn as a QuizHub
            affiliate. Adjust the sliders to match your audience and see your
            potential earnings.
          </p>
        </div>

        <div
          className="grid items-center gap-8 md:grid-cols-2 lg:gap-12"
          data-oid="crc4pn7"
        >
          {/* Calculator inputs */}
          <motion.div
            className="space-y-8"
            data-oid="a-7pmj2"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-4" data-oid="31r:je7">
              <div
                className="flex items-center justify-between"
                data-oid="o34xg03"
              >
                <label
                  className="flex items-center gap-2 font-medium"
                  data-oid="z7:lvzt"
                >
                  <Users
                    className="h-4 w-4 text-purple-500"
                    data-oid="_o:1eic"
                  />
                  Monthly Referrals
                </label>
                <span
                  className="rounded-md bg-white px-2 py-1 font-semibold text-sm shadow-sm dark:bg-slate-700"
                  data-oid=".wcoagv"
                >
                  {state.referrals}
                </span>
              </div>
              <Slider
                className="py-2"
                data-oid="juvdrw5"
                max={100}
                min={1}
                onValueChange={handleReferralsChange}
                step={1}
                value={[state.referrals]}
              />

              <p
                className="text-slate-500 text-sm dark:text-slate-400"
                data-oid="x50atwq"
              >
                The number of people you refer to QuizHub each month
              </p>
            </div>

            <div className="space-y-4" data-oid="3uzf4w1">
              <div
                className="flex items-center justify-between"
                data-oid="pfrhpl-"
              >
                <label
                  className="flex items-center gap-2 font-medium"
                  data-oid="mk8wj23"
                >
                  <Users
                    className="h-4 w-4 text-indigo-500"
                    data-oid="ecoitg9"
                  />
                  Conversion Rate
                </label>
                <span
                  className="rounded-md bg-white px-2 py-1 font-semibold text-sm shadow-sm dark:bg-slate-700"
                  data-oid="ifarax1"
                >
                  {state.conversionRate}%
                </span>
              </div>
              <Slider
                className="py-2"
                data-oid="e_x17y-"
                max={100}
                min={1}
                onValueChange={handleConversionRateChange}
                step={1}
                value={[state.conversionRate]}
              />

              <p
                className="text-slate-500 text-sm dark:text-slate-400"
                data-oid="m5:e1pp"
              >
                The percentage of referrals who become paying customers
              </p>
            </div>

            <div className="space-y-4" data-oid="rle26j6">
              <div
                className="flex items-center justify-between"
                data-oid="toa.y-7"
              >
                <label
                  className="flex items-center gap-2 font-medium"
                  data-oid="rozjg7."
                >
                  <DollarSign
                    className="h-4 w-4 text-blue-500"
                    data-oid="ka02n0f"
                  />
                  Average Purchase Value
                </label>
                <span
                  className="rounded-md bg-white px-2 py-1 font-semibold text-sm shadow-sm dark:bg-slate-700"
                  data-oid="7td.gzs"
                >
                  ${state.averageValue}
                </span>
              </div>
              <Slider
                className="py-2"
                data-oid="fd:8bq5"
                max={200}
                min={10}
                onValueChange={handleAverageValueChange}
                step={5}
                value={[state.averageValue]}
              />

              <p
                className="text-slate-500 text-sm dark:text-slate-400"
                data-oid="9cqdgrm"
              >
                The average amount your referrals spend on QuizHub{" "}
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            data-oid="808y:3m"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card
              className="overflow-hidden border-0 bg-white shadow-xl dark:bg-slate-900"
              data-oid="7avs-oa"
            >
              <CardHeader
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                data-oid="zlbu_sh"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="j2zvyt8"
                >
                  <CardTitle className="text-xl" data-oid="okqemh6">
                    Your Earnings Potential
                  </CardTitle>
                  <Calculator
                    className="h-5 w-5 opacity-75"
                    data-oid="bzduj1k"
                  />
                </div>
                <CardDescription className="text-purple-100" data-oid="h7lws09">
                  Based on your audience and our 30% commission rate
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 xl:p-6" data-oid="-lbmh_v">
                <div className="space-y-6" data-oid="_g73rgk">
                  <div className="grid grid-cols-2 gap-4" data-oid="wext0en">
                    <div
                      className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800"
                      data-oid="bjtr.ti"
                    >
                      <div
                        className="mb-1 flex items-center gap-2 text-slate-500 text-sm dark:text-slate-400"
                        data-oid="rnjg3q."
                      >
                        <Users className="h-4 w-4" data-oid="5.16gpg" />
                        <span data-oid="2nwfs4u">Monthly Referrals</span>
                      </div>
                      <div className="font-bold text-2xl" data-oid="qcnojku">
                        {state.referrals}
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800"
                      data-oid=":qq9tzm"
                    >
                      <div
                        className="mb-1 flex items-center gap-2 text-slate-500 text-sm dark:text-slate-400"
                        data-oid="qclu8cv"
                      >
                        <Users className="h-4 w-4" data-oid="d1wusos" />
                        <span data-oid="nt2.yms">Conversions</span>
                      </div>
                      <div className="font-bold text-2xl" data-oid="owq56rw">
                        {Math.round(
                          state.referrals * (state.conversionRate / 100)
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4" data-oid="1hof4xf">
                    <div
                      className="rounded-lg border border-purple-100 bg-purple-50 p-6 dark:border-purple-800/30 dark:bg-purple-900/20"
                      data-oid="g96pma4"
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="f92-3h0"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-oid="e1m6a::"
                        >
                          <div
                            className="rounded-full bg-purple-100 p-2 dark:bg-purple-800/30"
                            data-oid="gth0j2q"
                          >
                            <Calendar
                              className="h-5 w-5 text-purple-600 dark:text-purple-400"
                              data-oid="1tgje:p"
                            />
                          </div>
                          <span className="font-medium" data-oid="1ytw7e5">
                            Monthly Earnings
                          </span>
                        </div>
                        <div
                          className="font-bold text-2xl text-purple-600 dark:text-purple-400"
                          data-oid="nbs3ps-"
                        >
                          ${state.monthlyEarnings.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-lg border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-800/30 dark:bg-indigo-900/20"
                      data-oid="_91zp3j"
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="iqhocr1"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-oid="8yyr0en"
                        >
                          <div
                            className="rounded-full bg-indigo-100 p-2 dark:bg-indigo-800/30"
                            data-oid="xa88:rd"
                          >
                            <Calendar
                              className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                              data-oid="1havnn9"
                            />
                          </div>
                          <span className="font-medium" data-oid="3c:1nef">
                            Yearly Earnings
                          </span>
                        </div>
                        <div
                          className="font-bold text-2xl text-indigo-600 dark:text-indigo-400"
                          data-oid="j6ld0ft"
                        >
                          ${state.yearlyEarnings.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-slate-500 text-sm italic dark:text-slate-400"
                    data-oid="5k:n8k6"
                  >
                    * These calculations are estimates and actual earnings may
                    vary based on multiple factors.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
