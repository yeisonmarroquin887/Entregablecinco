import React from "react";

const Pagination = () => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    paginate(number);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => {
        return (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={number == currentPage ? "active" : ""}
          >
            {number}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;


