import Animelist from "../components/Animelist";
import Header from "@/components/Animelist/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 4);

  return (
    <>
      {/* POPULAR ANIME LIST */}
      <section>
        <Header
          title="Popular List"
          linkHref="/popular"
          linkTitle="See Anime Popular"
        />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation For You" />
        <Animelist api={recommendAnime} />
      </section>
    </>
  );
};

export default Page;
