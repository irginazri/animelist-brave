"use client";

import Animelist from "@/components/Animelist";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const animePopular = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(animePopular);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Popular List ${page}`} />
      <Animelist api={topAnime} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default page;
