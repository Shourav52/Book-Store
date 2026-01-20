
import Categories from "@/component/module/Categories";
import CTAPage from "@/component/module/CTAPage";
import FAQPage from "@/component/module/FAQPage";
import FeaturesPage from "@/component/module/FeaturesPage";
import HighlightsPage from "@/component/module/HighlightsPage";
import NewsletterPage from "@/component/module/NewsletterPage";
import Slider from "@/component/module/Slider";
import SuggestedBooks from "@/component/module/Suggesstedbooks";
import Testimonials from "@/component/module/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Slider></Slider>
      <SuggestedBooks></SuggestedBooks>
      <Categories></Categories>
      <FeaturesPage></FeaturesPage>
      <HighlightsPage></HighlightsPage>
      <Testimonials></Testimonials>
      <FAQPage></FAQPage>
      <NewsletterPage></NewsletterPage>
      <CTAPage></CTAPage>

    </div>
  );
}
