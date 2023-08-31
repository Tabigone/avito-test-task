import React, { useState, useEffect } from "react";
import LoadingContainer from "../components/LoadingContainer/LoadingContainer";
import GameGrid from "../components/GameGrid/GameGrid";
import Nav from "../components/Nav/Nav";
import { Filters, useGetGamesQuery, FilterName } from "../redux";
import { useAppSelector } from "../hooks/index";

const HomePage: React.FC = () => {
  const filters = useAppSelector((state) => state.filters);
  const [currentQuery, setCurrentQuery] = useState<
    Partial<Record<FilterName, string>>
  >({});
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetGamesQuery(currentQuery);

  useEffect(() => {
    let newQuery: Partial<Record<FilterName, string>> = {};
    let key: keyof Filters;
    for (key in filters) {
      if (filters[key].currentValue) {
        newQuery[key] = filters[key].currentValue;
      }
    }
    setCurrentQuery(newQuery);
  }, [filters]);

  return (
    <>
      <Nav filters={filters} />
      <div>
        {isError ? (
          <p>
            <span>An error has occurred:</span>
            <span>{(error as {}) && JSON.stringify(error)}</span>
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
