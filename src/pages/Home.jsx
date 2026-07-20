import Seo from '@/components/common/Seo/Seo';
import Hero from '@/components/home/Hero/Hero';
import CategoriesSection from '@/components/home/CategoriesSection/CategoriesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection/FeaturedProductsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection/WhyChooseUsSection';
import SolutionsSection from '@/components/home/SolutionsSection/SolutionsSection';
import StatsSection from '@/components/home/StatsSection/StatsSection';
import ProjectsPreviewSection from '@/components/home/ProjectsPreviewSection/ProjectsPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection/FaqSection';
import CtaSection from '@/components/home/CtaSection/CtaSection';
import { seo } from '@/data/seo';

function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <CategoriesSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <SolutionsSection />
      <StatsSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

export default Home;
