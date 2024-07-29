import CoverParticles from "@/components/CoverParticles"
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/Transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}
