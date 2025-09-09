import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  currentPage?: number;
  totalPages?: number;
  onChange?: (page: number) => void;
}

interface PaginationLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}
const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, currentPage, totalPages, onChange, ...props }, ref) => (
    <nav
      className={cn("mx-auto flex w-full justify-center", className)}
      ref={ref}
      {...props}
      data-oid="kx8azrs"
    />
  )
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex items-center justify-center gap-1", className)}
    ref={ref}
    {...props}
    data-oid="870khhw"
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("h-8 w-8", className)}
    ref={ref}
    {...props}
    data-oid="5m-:d67"
  />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "h-8 w-8 p-0 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
          className
        )}
        ref={ref}
        size="sm"
        variant="outline"
        {...props}
        data-oid="idn3vf."
      />
    );
  }
);
PaginationLink.displayName = "PaginationLink";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    className={cn("h-8 w-8 select-none text-center", className)}
    ref={ref}
    {...props}
    data-oid="aqu2bj:"
  >
    ...
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <Button
      className={cn("h-8 w-8 p-0", className)}
      ref={ref}
      size="sm"
      variant="outline"
      {...props}
      data-oid="ni2efp3"
    />
  );
});
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <Button
      className={cn("h-8 w-8 p-0", className)}
      ref={ref}
      size="sm"
      variant="outline"
      {...props}
      data-oid=":g3w:f0"
    />
  );
});
PaginationNext.displayName = "PaginationNext";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
