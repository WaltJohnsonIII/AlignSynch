"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  Wallet,
} from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Transaction = {
  id: number;
  type: string;
  amount: number;
  source: string;
  date: string;
  status: string;
};
// Sample data
const transactions: Transaction[] = [
  {
    id: 1,
    type: "earning",
    amount: 12.5,
    source: "Quiz plays",
    date: "2023-05-15",
    status: "completed",
  },
  {
    id: 2,
    type: "earning",
    amount: 8.75,
    source: "Affiliate commission",
    date: "2023-05-10",
    status: "completed",
  },
  {
    id: 3,
    type: "withdrawal",
    amount: 20.0,
    source: "PayPal",
    date: "2023-05-03",
    status: "completed",
  },
  {
    id: 4,
    type: "earning",
    amount: 5.25,
    source: "Quiz plays",
    date: "2023-04-28",
    status: "completed",
  },
  {
    id: 5,
    type: "withdrawal",
    amount: 15.0,
    source: "Bank transfer",
    date: "2023-04-25",
    status: "pending",
  },
];

export function WalletDashboard() {
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const balance = 124.5;
  const pendingWithdrawals = transactions
    .filter((t) => t.type === "withdrawal" && t.status === "pending")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalEarnings = transactions
    .filter((t) => t.type === "earning")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6" data-oid="-bf9dhl">
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="j59_x:_"
      >
        <Card data-oid="dohfc-c">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="2x7yi-2"
          >
            <CardTitle className="font-medium text-sm" data-oid="jrm_-_i">
              Available Balance
            </CardTitle>
            <DollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid=".fpj63_"
            />
          </CardHeader>
          <CardContent data-oid=":_cd_4l">
            <div className="font-bold text-2xl" data-oid="mo7izk4">
              ${balance.toFixed(2)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="fs9uzvy">
              Available for withdrawal
            </p>
            <Button
              className="mt-3 w-full"
              data-oid="8lp:xaf"
              onClick={() => setIsWithdrawDialogOpen(true)}
            >
              <Download className="mr-2 h-4 w-4" data-oid="f0g2x5h" />
              Withdraw
            </Button>
          </CardContent>
        </Card>

        <Card data-oid="yq_las2">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid=":r3bwzv"
          >
            <CardTitle className="font-medium text-sm" data-oid="ltf_ncj">
              Pending Withdrawals
            </CardTitle>
            <Clock
              className="h-4 w-4 text-muted-foreground"
              data-oid="nyszu52"
            />
          </CardHeader>
          <CardContent data-oid="5j3rxd9">
            <div className="font-bold text-2xl" data-oid="hdewsaw">
              ${pendingWithdrawals.toFixed(2)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="g0x24-s">
              Being processed
            </p>
          </CardContent>
        </Card>

        <Card data-oid="r--k7.8">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="67f86-u"
          >
            <CardTitle className="font-medium text-sm" data-oid="u6s9be2">
              Total Earnings
            </CardTitle>
            <ArrowUpRight
              className="h-4 w-4 text-green-500"
              data-oid="w._xho1"
            />
          </CardHeader>
          <CardContent data-oid="30r5cih">
            <div className="font-bold text-2xl" data-oid="b7msdoy">
              ${totalEarnings.toFixed(2)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="iryhhoj">
              Lifetime earnings
            </p>
          </CardContent>
        </Card>

        <Card data-oid=":x7mhx.">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="4i69-i0"
          >
            <CardTitle className="font-medium text-sm" data-oid="7zgoh92">
              This Month
            </CardTitle>
            <ArrowUpRight
              className="h-4 w-4 text-green-500"
              data-oid="pptpu42"
            />
          </CardHeader>
          <CardContent data-oid="umps11k">
            <div className="font-bold text-2xl" data-oid="yq6xyei">
              $42.50
            </div>
            <p className="text-muted-foreground text-xs" data-oid="t52f6hs">
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card data-oid="taz.vhe">
        <CardHeader data-oid=".7yt9.6">
          <CardTitle data-oid="l90yq54">Transaction History</CardTitle>
          <CardDescription data-oid="_55vvyu">
            Your recent financial activity
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="0z.c22_">
          <Tabs className="space-y-4" data-oid="k--vhhm" defaultValue="all">
            <TabsList data-oid="430633_">
              <TabsTrigger data-oid=":0w-xdv" value="all">
                All Transactions
              </TabsTrigger>
              <TabsTrigger data-oid="op-e871" value="earnings">
                Earnings
              </TabsTrigger>
              <TabsTrigger data-oid="t.2oaun" value="withdrawals">
                Withdrawals
              </TabsTrigger>
            </TabsList>

            <TabsContent className="space-y-4" data-oid="7jo.2p-" value="all">
              {transactions.map((transaction) => (
                <TransactionCard
                  data-oid="fnxkfxl"
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </TabsContent>

            <TabsContent
              className="space-y-4"
              data-oid="bgq5127"
              value="earnings"
            >
              {transactions
                .filter((t) => t.type === "earning")
                .map((transaction) => (
                  <TransactionCard
                    data-oid="a3ael4z"
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
            </TabsContent>

            <TabsContent
              className="space-y-4"
              data-oid="u2hzsmr"
              value="withdrawals"
            >
              {transactions
                .filter((t) => t.type === "withdrawal")
                .map((transaction) => (
                  <TransactionCard
                    data-oid="h.esr3g"
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2" data-oid="14eh6jg">
        <Card data-oid="u.:w:gd">
          <CardHeader data-oid="dg_-650">
            <CardTitle data-oid="d31.nhj">Payment Methods</CardTitle>
            <CardDescription data-oid="1dlao:2">
              Manage your withdrawal options
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="yxzd19v">
            <div className="space-y-4" data-oid="6.wyzpn">
              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="2jfoap_"
              >
                <div className="flex items-center gap-3" data-oid="l1mgteu">
                  <CreditCard
                    className="h-5 w-5 text-muted-foreground"
                    data-oid="zljt6eh"
                  />

                  <div data-oid="eyg0_8z">
                    <p className="font-medium" data-oid="kvqhphp">
                      PayPal
                    </p>
                    <p
                      className="text-muted-foreground text-sm"
                      data-oid="3.v3awe"
                    >
                      user@example.com
                    </p>
                  </div>
                </div>
                <Badge data-oid=":sy9t6:">Default</Badge>
              </div>

              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="kf1f-2_"
              >
                <div className="flex items-center gap-3" data-oid="49z.e_0">
                  <Wallet
                    className="h-5 w-5 text-muted-foreground"
                    data-oid="9:9gmnz"
                  />

                  <div data-oid="1jjuyp7">
                    <p className="font-medium" data-oid="z2yybbg">
                      Bank Account
                    </p>
                    <p
                      className="text-muted-foreground text-sm"
                      data-oid=".afj68:"
                    >
                      **** 1234
                    </p>
                  </div>
                </div>
                <Button data-oid="0_im6uz" size="sm" variant="outline">
                  Set Default
                </Button>
              </div>

              <Button className="w-full" data-oid="yncyg35" variant="outline">
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="ug7wous">
          <CardHeader data-oid="7_vg5jw">
            <CardTitle data-oid="a0e.sji">Earnings Breakdown</CardTitle>
            <CardDescription data-oid="79q0xwv">
              Where your earnings come from
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="5ozsm37">
            <div className="space-y-4" data-oid="g7q139d">
              <div data-oid=".uqj79w">
                <div
                  className="mb-1 flex items-center justify-between"
                  data-oid="0agfbzs"
                >
                  <p className="font-medium text-sm" data-oid="pwhv_ql">
                    Quiz Plays
                  </p>
                  <p className="font-medium text-sm" data-oid="..b-y.p">
                    $78.25 (62.8%)
                  </p>
                </div>
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-muted"
                  data-oid="4k2vep-"
                >
                  <div
                    className="h-full bg-primary"
                    data-oid="9i0g0pf"
                    style={{ width: "62.8%" }}
                  />
                </div>
              </div>

              <div data-oid="e6tkboh">
                <div
                  className="mb-1 flex items-center justify-between"
                  data-oid="c434ui0"
                >
                  <p className="font-medium text-sm" data-oid="_wpiio5">
                    Affiliate Commissions
                  </p>
                  <p className="font-medium text-sm" data-oid="4jr3e0h">
                    $32.50 (26.1%)
                  </p>
                </div>
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-muted"
                  data-oid="3ezntj0"
                >
                  <div
                    className="h-full bg-blue-500"
                    data-oid="x_d4i8e"
                    style={{ width: "26.1%" }}
                  />
                </div>
              </div>

              <div data-oid="t4:pki1">
                <div
                  className="mb-1 flex items-center justify-between"
                  data-oid="wp76_aj"
                >
                  <p className="font-medium text-sm" data-oid="2ecel_8">
                    Premium Content
                  </p>
                  <p className="font-medium text-sm" data-oid="5qkfflv">
                    $13.75 (11.1%)
                  </p>
                </div>
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-muted"
                  data-oid="gt.kdt1"
                >
                  <div
                    className="h-full bg-green-500"
                    data-oid="k-:jwzb"
                    style={{ width: "11.1%" }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <WithdrawDialog
        balance={balance}
        data-oid="wa3owg."
        onOpenChange={setIsWithdrawDialogOpen}
        open={isWithdrawDialogOpen}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        setWithdrawAmount={setWithdrawAmount}
        withdrawAmount={withdrawAmount}
      />
    </div>
  );
}

function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <div
      className="flex items-center justify-between rounded-lg border p-4"
      data-oid="y_gukrl"
    >
      <div className="flex items-center gap-3" data-oid="tyz:9u4">
        {transaction.type === "earning" ? (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100"
            data-oid="q6tfmiy"
          >
            <ArrowUpRight
              className="h-5 w-5 text-green-600"
              data-oid="hxn45h_"
            />
          </div>
        ) : (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100"
            data-oid="8rah5cq"
          >
            <ArrowDownRight
              className="h-5 w-5 text-blue-600"
              data-oid="2w6gi.p"
            />
          </div>
        )}

        <div data-oid="8pjf7ta">
          <p className="font-medium" data-oid="29gtizx">
            {transaction.type === "earning" ? "Earned from" : "Withdrawal to"}{" "}
            {transaction.source}
          </p>
          <p className="text-muted-foreground text-sm" data-oid="32zdj-z">
            {new Date(transaction.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end" data-oid="5-15hss">
        <p
          className={`font-medium ${transaction.type === "earning" ? "text-green-600" : ""}`}
          data-oid=".3o5x_."
        >
          {transaction.type === "earning" ? "+" : "-"}$
          {transaction.amount.toFixed(2)}
        </p>
        <div className="flex items-center gap-1" data-oid="ct5890g">
          {transaction.status === "completed" ? (
            <>
              <CheckCircle
                className="h-3 w-3 text-green-600"
                data-oid="3nm4n-."
              />

              <span className="text-green-600 text-xs" data-oid="3tz8gfz">
                Completed
              </span>
            </>
          ) : (
            <>
              <Clock className="h-3 w-3 text-amber-600" data-oid="3suawq_" />
              <span className="text-amber-600 text-xs" data-oid="w0oc1lp">
                Pending
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
type WithdrawDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  balance: number;
  withdrawAmount: string;
  setWithdrawAmount: Dispatch<SetStateAction<string>>;
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
};
function WithdrawDialog({
  open,
  onOpenChange,
  balance,
  withdrawAmount,
  setWithdrawAmount,
  paymentMethod,
  setPaymentMethod,
}: WithdrawDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal logic here
    onOpenChange(false);
  };

  return (
    <Dialog data-oid="evcwz1a" onOpenChange={onOpenChange} open={open}>
      <DialogContent className="sm:max-w-[425px]" data-oid="vki-o9e">
        <DialogHeader data-oid="sl8xt-5">
          <DialogTitle data-oid="z0witmf">Withdraw Funds</DialogTitle>
          <DialogDescription data-oid="qtwo9hc">
            Enter the amount you want to withdraw and select your payment
            method.
          </DialogDescription>
        </DialogHeader>
        <form data-oid="jnpviwn" onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4" data-oid="env9bz8">
            <div
              className="flex items-center justify-between px-1"
              data-oid="_kpfaol"
            >
              <p className="text-muted-foreground text-sm" data-oid="67_jvym">
                Available Balance
              </p>
              <p className="font-medium" data-oid="me-lq_f">
                ${balance.toFixed(2)}
              </p>
            </div>

            <div className="grid gap-2" data-oid="i:56g8s">
              <Label data-oid="5qp6tcw" htmlFor="amount">
                Amount
              </Label>
              <div className="relative" data-oid="ja2b95z">
                <DollarSign
                  className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
                  data-oid="tga5-nt"
                />

                <Input
                  className="pl-9"
                  data-oid="_gna._0"
                  id="amount"
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0.00"
                  value={withdrawAmount}
                />
              </div>
              <p className="text-muted-foreground text-xs" data-oid="srqfhl6">
                Minimum withdrawal: $10.00
              </p>
            </div>

            <div className="grid gap-2" data-oid="li2zfcy">
              <Label data-oid="oxdpw_9" htmlFor="payment-method">
                Payment Method
              </Label>
              <Select
                data-oid="g8ta_ko"
                onValueChange={setPaymentMethod}
                value={paymentMethod}
              >
                <SelectTrigger data-oid="pfrao-8" id="payment-method">
                  <SelectValue
                    data-oid="j9f139d"
                    placeholder="Select payment method"
                  />
                </SelectTrigger>
                <SelectContent data-oid="bw5j938">
                  <SelectItem data-oid="4my2mj4" value="paypal">
                    PayPal (user@example.com)
                  </SelectItem>
                  <SelectItem data-oid="9c35pvy" value="bank">
                    Bank Account (**** 1234)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter data-oid="jp:9gbb">
            <Button
              data-oid="daays2x"
              onClick={() => onOpenChange(false)}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              data-oid="45piess"
              disabled={
                !(withdrawAmount && paymentMethod) ||
                Number.parseFloat(withdrawAmount) > balance ||
                Number.parseFloat(withdrawAmount) < 10
              }
              type="submit"
            >
              Withdraw Funds
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
