"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="mzwy1ww">
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props} data-oid="8x4y_za">
          <div className="grid gap-1" data-oid="ln:44ms">
            {title && <ToastTitle data-oid="egraz4-">{title}</ToastTitle>}
            {description && (
              <ToastDescription data-oid="uk7h1yt">
                {description}
              </ToastDescription>
            )}
          </div>
          {action}
          <ToastClose data-oid="vwbmrc." />
        </Toast>
      ))}
      <ToastViewport data-oid="haoff02" />
    </ToastProvider>
  );
}
