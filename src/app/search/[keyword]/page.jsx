import { getAnimeResponse } from "@/libs/api-libs";
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      {/* POPULAR ANIME LIST */}
      <section>
        <Header title={`Search ${decodeKeyword}`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
