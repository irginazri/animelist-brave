import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-6xl text-me-white">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      <div className="pt-8 px-4 flex sm:flex-nowrap flex-wrap gap-6 text-me-white text-justify">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          height={250}
          width={250}
          className="h-96 rounded object-cover"
        />
        <div className="overflow-x-auto">
          <div className="flex pt-6 gap-2 text-me-white ">
            <div className="w-36 justify-center items-center rounded border border-me-white p-2">
              <h3>score</h3>
              <p>{anime.data.score}</p>
            </div>
            <div className="w-36 justify-center items-center rounded border border-me-white p-2">
              <h3>duration</h3>
              <p>{anime.data.duration}</p>
            </div>
            <div className="w-36 justify-center items-center rounded border border-me-white p-2">
              <h3>year</h3>
              <p>{anime.data.year}</p>
            </div>
            <div className="w-36 justify-center items-center rounded border border-me-white p-2">
              <h3>episode</h3>
              <p>{anime.data.episodes}</p>
            </div>
          </div>
          <p className="py-4">{anime.data.synopsis}</p>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default page;
