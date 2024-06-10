const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center text-me-white text-xl items-center py-4 px-2 gap-4">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-me-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}

      <h4>{page}</h4>
      <button
        className="transition-all hover:text-me-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
