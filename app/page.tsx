import HeaderCard from "@/components/Cards/HeaderCard";
import HomeContentCard from "@/components/Cards/HomeContentCard";

export default function Home() {
  return (
    <main>
      <section className="bg-home-header py-32 px-3">
        <HeaderCard />
      </section>
      <section className="bg-home-main py-32 px-3">
        <HomeContentCard />
      </section>
    </main>
  );
}
