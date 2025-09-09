import { CategoriesHowItWorks } from "@/components/categories/categories-how-it-works";
import { CategoriesSlider } from "@/components/home/categories-slider";
import { FeaturedQuizzes } from "@/components/home/featured-quizzes";
import { HeroSection } from "@/components/home/hero-section";
import { LatestQuizzes } from "@/components/home/latest-quizzes";
import { LiveWinners } from "@/components/home/live-winners";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { PlayerTestimonials } from "@/components/home/player-testimonials";
import { QuizzesByDifficulty } from "@/components/home/quizzes-by-difficulty";
import { ResourcesAndReferral } from "@/components/home/resources-and-referral";
import { TopPlayersCarousel } from "@/components/home/top-players-carousel";
import { Footer } from "@/components/layout/footer";
import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <div className="space-y-4 pb-8 xl:space-y-8" data-oid="57-k9ba">
      <HeroSection data-oid="fjccxhk" />
      <CategoriesSlider data-oid="u8x5lnb" />
      <LatestQuizzes data-oid="s2re77z" />
      <FeaturedQuizzes data-oid="v1l1s8r" />
      <TopPlayersCarousel data-oid="pnrrwwn" />
      <QuizzesByDifficulty data-oid="b267rh7" />
      <LiveWinners data-oid="8o6c98l" />
      <CategoriesHowItWorks data-oid="syb3rvs" />
      <PlayerTestimonials data-oid="4yj5vty" />
      <ResourcesAndReferral data-oid="79hc-ow" />
      <NewsletterSection data-oid="qhme.58" />
      <Footer data-oid=":-sv9:k" />
    </div>
  );
}
