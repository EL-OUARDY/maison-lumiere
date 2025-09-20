import Hero from '@/components/sections/Hero';
import ScrollText from '@/components/sections/ScrollText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import FragranceList from '@/components/sections/Fragrance/FragranceList';
import CallToAction from '@/components/sections/CallToAction';
import Video from '@/components/sections/Video';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <FeaturesGrid />
      <FragranceList />
      <CallToAction />
      <Video />
    </>
  );
}
