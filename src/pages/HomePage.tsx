import React from "react";
import LoadingContainer from "../components/LoadingContainer/LoadingContainer";
import GameGrid from "../components/GameGrid/GameGrid";
import Nav from "../components/Nav/Nav";
import { Filters, useGetGamesQuery } from "../redux";
import { useSelector } from "react-redux";

const HomePage: React.FC = () => {
  const filters = useSelector((state: { filters: Filters }) => state.filters);
  const { data = [], isLoading, isError, error } = useGetGamesQuery(filters);

  return (
    <>
      <Nav filters={filters} />
      <div>
        {isError ? (
          <p>
            An error has occurred:{" "}
            {error && "data" in error && JSON.stringify(error.data)}
          </p>
        ) : isLoading ? (
          <LoadingContainer />
        ) : (
          <GameGrid data={data} />
        )}
      </div>
    </>
  );
};

export default HomePage;
