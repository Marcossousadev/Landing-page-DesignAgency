import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
export default function Home() {
  return (
   <>
   <Header/>

   <main className="flex flex-col items-center mt-20">
    <HeroSection />
   </main>
   </>
  );
}
