import SectionHeader from "../components/shared/SectionHeader";
import MediaCard from "../components/shared/MediaCard";

const Home = () => {
  return (
    <div>

      <SectionHeader
        title="Trending Music"
        subtitle="Top tracks this week"
      />

      <div className="grid grid-cols-4 gap-6">

        <MediaCard
          image="https://picsum.photos/300"
          title="Blinding Lights"
          subtitle="The Weeknd"
        />

      </div>

    </div>
  );
};

export default Home;