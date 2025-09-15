import Hero from '@/components/sections/Hero';
import ScrollText from '@/components/sections/ScrollText';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <section className="min-h-screen bg-emerald-500"></section>
      <section className="min-h-screen bg-rose-500"></section>
      <section className="min-h-screen bg-purple-500"></section>
      <section className="min-h-screen bg-orange-500"></section>
      <section className="min-h-screen bg-gray-500"></section>
    </>
  );
}
