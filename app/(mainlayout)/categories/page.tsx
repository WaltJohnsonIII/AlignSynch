import { CategoriesPage } from "@/components/categories/categories-page";
import { withBrand } from "@/lib/app-config";

export const metadata = {
  title: withBrand("Quiz Categories"),
  description:
    "Browse all quiz categories and find quizzes that match your interests.",
};

export default function CategoriesRoute() {
  return <CategoriesPage data-oid="zvpja27" />;
}
