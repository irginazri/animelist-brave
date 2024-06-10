"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearchButton = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key == "Enter" || event.type == "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="Find Your Anime"
        className="w-full p-2 rounded bg-me-white"
        ref={searchRef}
        onKeyDown={handleSearchButton}
      />
      <button
        className="absolute top-2 end-2 text-me-primary"
        onClick={handleSearchButton}
      >
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
