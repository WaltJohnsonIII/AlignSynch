import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Bell, Check, X } from "lucide-react";
import { type Notification, notifications } from "@/data/notifications";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Props = {
  isNotificationsDrawerOpen: boolean;
  setIsNotificationsDrawerOpen: (isOpen: boolean) => void;
  handleNotificationClick: (notification: Notification) => void;
  markAllNotificationsAsRead: () => void;
};
const NotificationDrawer = ({
  handleNotificationClick,
  isNotificationsDrawerOpen,
  markAllNotificationsAsRead,
  setIsNotificationsDrawerOpen,
}: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full bg-background shadow-xl transition-transform duration-300 ease-in-out sm:w-96 ${isNotificationsDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      data-oid="1mn:dvh"
    >
      <div
        className="flex items-center justify-between border-b p-4"
        data-oid="oyqy1k9"
      >
        <h2 className="font-semibold text-lg" data-oid="5anbg9o">
          Notifications
        </h2>
        <div className="flex items-center gap-2" data-oid="y_tkx5h">
          <Button
            className="flex items-center gap-1"
            data-oid="_zct.h1"
            onClick={markAllNotificationsAsRead}
            size="sm"
            variant="outline"
          >
            <Check className="h-4 w-4" data-oid="o-j:6t4" />
            <span data-oid="88nbv.2">Mark all read</span>
          </Button>
          <Button
            aria-label="Close notifications"
            data-oid="q0mftk."
            onClick={() => setIsNotificationsDrawerOpen(false)}
            size="icon"
            variant="ghost"
          >
            <X className="h-5 w-5" data-oid="-5g_re0" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-64px)]" data-oid="rkcvf5v">
        <div className="p-2" data-oid="ozfber.">
          {notifications.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center p-8 text-center"
              data-oid="i.wn09p"
            >
              <Bell
                className="mb-4 h-12 w-12 text-muted-foreground"
                data-oid="rfd17gi"
              />

              <h3 className="font-medium text-lg" data-oid="4r8z0hg">
                No notifications
              </h3>
              <p
                className="mt-1 text-muted-foreground text-sm"
                data-oid="v0nirtn"
              >
                You're all caught up! We'll notify you when something new
                happens.
              </p>
            </div>
          ) : (
            <>
              <div className="px-3 py-2" data-oid="c:1v_rb">
                <h3
                  className="font-medium text-muted-foreground text-sm"
                  data-oid="sm:3uh3"
                >
                  New
                </h3>
              </div>
              <div className="space-y-3" data-oid="ae_:qep">
                {notifications
                  .filter((notification) => !notification.read)
                  .map((notification) => (
                    <div
                      className="flex cursor-pointer items-start gap-3 rounded-lg border-primary border-l-2 p-3 transition-colors hover:bg-muted"
                      data-oid="ok47q1p"
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted"
                        data-oid=".sewof:"
                      >
                        {notification.icon}
                      </div>
                      <div
                        className="flex-1 space-y-1 overflow-hidden"
                        data-oid="ratgwm3"
                      >
                        <div
                          className="flex items-center justify-between"
                          data-oid="tyj6z_y"
                        >
                          <p className="font-medium" data-oid="otejh48">
                            {notification.title}
                          </p>
                          <Badge
                            className="font-normal text-xs"
                            data-oid="x3k4z:x"
                            variant="outline"
                          >
                            {notification.time}
                          </Badge>
                        </div>
                        <p
                          className="text-muted-foreground text-sm"
                          data-oid="qma5o68"
                        >
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-2 px-3 py-2" data-oid="u-cqzf4">
                <h3
                  className="font-medium text-muted-foreground text-sm"
                  data-oid="d51azwg"
                >
                  Earlier
                </h3>
              </div>
              <div className="space-y-3" data-oid="4mjrftu">
                {notifications
                  .filter((notification) => notification.read)
                  .map((notification) => (
                    <div
                      className="flex cursor-pointer items-start gap-3 rounded-lg p-3 opacity-70 transition-colors hover:bg-muted"
                      data-oid="8wn2vz8"
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted"
                        data-oid="f00.9ba"
                      >
                        {notification.icon}
                      </div>
                      <div
                        className="flex-1 space-y-1 overflow-hidden"
                        data-oid="bkdqr.2"
                      >
                        <div
                          className="flex items-center justify-between"
                          data-oid="5wp8czn"
                        >
                          <p className="font-medium" data-oid="yyq_hqk">
                            {notification.title}
                          </p>
                          <Badge
                            className="font-normal text-xs"
                            data-oid="oxk50up"
                            variant="outline"
                          >
                            {notification.time}
                          </Badge>
                        </div>
                        <p
                          className="text-muted-foreground text-sm"
                          data-oid="l8cekcb"
                        >
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default NotificationDrawer;
