import Hero from '@/components/sections/Hero';
import ScrollText from '@/components/sections/ScrollText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import FragranceList from '@/components/sections/Fragrance/FragranceList';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <FeaturesGrid />
      <FragranceList />
    </>
  );
}
