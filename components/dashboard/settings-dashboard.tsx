import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SettingsDashboard() {
  return (
    <div className="space-y-6" data-oid="2y-904m">
      <Tabs className="space-y-4" data-oid="b.m:s4j" defaultValue="display">
        <TabsList data-oid="7eyyxw:">
          <TabsTrigger data-oid="aa9gw:q" value="display">
            Display
          </TabsTrigger>
          <TabsTrigger data-oid="6w.ky65" value="notifications">
            Notifications
          </TabsTrigger>
          <TabsTrigger data-oid="x5-fkj5" value="preferences">
            Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent className="space-y-4" data-oid="iwpjq92" value="display">
          <Card data-oid="txwi49h">
            <CardHeader data-oid="0.1z1me">
              <CardTitle data-oid="cglml9t">Dashboard Layout</CardTitle>
              <CardDescription data-oid="diu_55q">
                Customize how your dashboard looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="5ixway4">
              <div
                className="flex items-center justify-between"
                data-oid="3xu3ic4"
              >
                <div className="space-y-0.5" data-oid="8_zg3ef">
                  <Label data-oid="wwlm4s0" htmlFor="compact-mode">
                    Compact Mode
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="d5rhl1x"
                  >
                    Display more information in less space
                  </p>
                </div>
                <Switch data-oid="7_y3f8x" id="compact-mode" />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="s8y-ew2"
              >
                <div className="space-y-0.5" data-oid="rfz648q">
                  <Label data-oid="-896r9i" htmlFor="show-earnings">
                    Show Earnings
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="0z2xrah"
                  >
                    Display earnings information on dashboard
                  </p>
                </div>
                <Switch data-oid="dm3pesb" defaultChecked id="show-earnings" />
              </div>

              <div className="space-y-2" data-oid="pfs:nwr">
                <Label data-oid="y6gh7a3" htmlFor="default-view">
                  Default Dashboard View
                </Label>
                <Select data-oid="vhc8ydo" defaultValue="overview">
                  <SelectTrigger data-oid="5yeh2pn" id="default-view">
                    <SelectValue
                      data-oid="eyy5vkk"
                      placeholder="Select default view"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="84wfnd8">
                    <SelectItem data-oid="6u4g8po" value="overview">
                      Overview
                    </SelectItem>
                    <SelectItem data-oid="9r05:zx" value="my-quizzes">
                      My Quizzes
                    </SelectItem>
                    <SelectItem data-oid="oagl7td" value="wallet">
                      Wallet
                    </SelectItem>
                    <SelectItem data-oid="rkjnw7c" value="affiliate">
                      Affiliate
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="0p_0r60">
            <CardHeader data-oid="nlht6nh">
              <CardTitle data-oid="fck4qcn">Chart Settings</CardTitle>
              <CardDescription data-oid="uy84371">
                Customize how charts are displayed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="sf19-9r">
              <div className="space-y-2" data-oid="ktn5qr4">
                <Label data-oid="zaqn-si" htmlFor="chart-timeframe">
                  Default Chart Timeframe
                </Label>
                <Select data-oid="71qdp9s" defaultValue="30days">
                  <SelectTrigger data-oid="q:xyc57" id="chart-timeframe">
                    <SelectValue
                      data-oid="ev-3509"
                      placeholder="Select timeframe"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="088qu0f">
                    <SelectItem data-oid="ses99w9" value="7days">
                      Last 7 days
                    </SelectItem>
                    <SelectItem data-oid="y_by_nr" value="30days">
                      Last 30 days
                    </SelectItem>
                    <SelectItem data-oid="42q:2eu" value="90days">
                      Last 90 days
                    </SelectItem>
                    <SelectItem data-oid="pg1pv.n" value="year">
                      Last year
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="wxlydln"
              >
                <div className="space-y-0.5" data-oid="2:nw4u8">
                  <Label data-oid="p46a4en" htmlFor="show-tooltips">
                    Show Chart Tooltips
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="qvzh67v"
                  >
                    Display detailed information when hovering over charts
                  </p>
                </div>
                <Switch data-oid="w5pqd1n" defaultChecked id="show-tooltips" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="space-y-4"
          data-oid="i_253wu"
          value="notifications"
        >
          <Card data-oid="0--bfhl">
            <CardHeader data-oid="shwsuae">
              <CardTitle data-oid="j917gb4">Dashboard Notifications</CardTitle>
              <CardDescription data-oid="-_33p2f">
                Control what notifications you receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="31mmg93">
              <div
                className="flex items-center justify-between"
                data-oid="es9h:fo"
              >
                <div className="space-y-0.5" data-oid="ftzxzir">
                  <Label data-oid=":l7cai_" htmlFor="earnings-notifications">
                    Earnings Updates
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="dgmce8l"
                  >
                    Get notified about new earnings
                  </p>
                </div>
                <Switch
                  data-oid=":ljd15f"
                  defaultChecked
                  id="earnings-notifications"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="f_txhui"
              >
                <div className="space-y-0.5" data-oid="8scx1fl">
                  <Label data-oid="2z3n5i7" htmlFor="quiz-notifications">
                    Quiz Activity
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="ejf3mo0"
                  >
                    Get notified when someone plays your quiz
                  </p>
                </div>
                <Switch
                  data-oid="vbc9o3f"
                  defaultChecked
                  id="quiz-notifications"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="z6zo079"
              >
                <div className="space-y-0.5" data-oid="fim_r9o">
                  <Label data-oid="2p49d9u" htmlFor="referral-notifications">
                    Referral Activity
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="3vc.q.2"
                  >
                    Get notified about new referrals
                  </p>
                </div>
                <Switch
                  data-oid="fjqww.2"
                  defaultChecked
                  id="referral-notifications"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="v63mst2"
              >
                <div className="space-y-0.5" data-oid="i48oi7f">
                  <Label data-oid="vh4e3:q" htmlFor="withdrawal-notifications">
                    Withdrawal Updates
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="gbmsr4j"
                  >
                    Get notified about withdrawal status changes
                  </p>
                </div>
                <Switch
                  data-oid="n_xv3e7"
                  defaultChecked
                  id="withdrawal-notifications"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="space-y-4"
          data-oid="7w-0ik0"
          value="preferences"
        >
          <Card data-oid="07k:04w">
            <CardHeader data-oid="2mkh9fm">
              <CardTitle data-oid="8-m.glf">Dashboard Preferences</CardTitle>
              <CardDescription data-oid="9yb6112">
                Customize your dashboard experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="2:ockc-">
              <div className="space-y-2" data-oid="cbzoq_7">
                <Label data-oid="dlftv8p" htmlFor="currency">
                  Currency Display
                </Label>
                <Select data-oid="suoxorf" defaultValue="usd">
                  <SelectTrigger data-oid="qksqr0z" id="currency">
                    <SelectValue
                      data-oid="gfug.s0"
                      placeholder="Select currency"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="5yihr9_">
                    <SelectItem data-oid="9bpscap" value="usd">
                      USD ($)
                    </SelectItem>
                    <SelectItem data-oid="4:d_v3-" value="eur">
                      EUR (€)
                    </SelectItem>
                    <SelectItem data-oid="48zii5x" value="gbp">
                      GBP (£)
                    </SelectItem>
                    <SelectItem data-oid="sce4_iq" value="cad">
                      CAD ($)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="k.em7ab"
              >
                <div className="space-y-0.5" data-oid="y-a8i-y">
                  <Label data-oid="sfl65_9" htmlFor="auto-refresh">
                    Auto-refresh Dashboard
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="gq.w-h:"
                  >
                    Automatically update dashboard data
                  </p>
                </div>
                <Switch data-oid="_0ojze8" defaultChecked id="auto-refresh" />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="kwmnmri"
              >
                <div className="space-y-0.5" data-oid="b8pav71">
                  <Label data-oid=":i4ay_1" htmlFor="show-tips">
                    Show Dashboard Tips
                  </Label>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="j640zgs"
                  >
                    Display helpful tips and suggestions
                  </p>
                </div>
                <Switch data-oid="ln1pbyu" defaultChecked id="show-tips" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end" data-oid="n7luzss">
            <Button data-oid="ne0ax:6">Save Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
