import Link from "next/link";
import type { CategoryType } from "@/components/categories/categories-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CategoryCardProps {
  category: CategoryType;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
      data-oid="1pkylow"
    >
      <div
        className="flex h-32 items-center justify-center p-4"
        data-oid="_pxp238"
        style={{ backgroundColor: category.color }}
      >
        <div
          className="relative flex h-full w-full items-center justify-center"
          data-oid="9fradt5"
        >
          {/* Category count badge */}
          <div
            className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-medium text-sm text-white"
            data-oid="0fjbtxk"
          >
            {category.count}
          </div>

          {/* Category icon */}
          <div className="text-white" data-oid="j0nb3z.">
            {category.icon}
          </div>
        </div>
      </div>

      <CardContent className="p-4" data-oid=".5h:k5g">
        <h3 className="font-semibold text-lg" data-oid="bbmspmj">
          {category.name}
        </h3>
        <p
          className="mt-1 line-clamp-2 text-muted-foreground text-sm"
          data-oid="u0qkca."
        >
          {category.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0" data-oid="ti.33dh">
        <Button asChild className="w-full" data-oid="n.kfz9u">
          <Link data-oid="-42lfw_" href={`/categories/${category.slug}`}>
            Explore
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
