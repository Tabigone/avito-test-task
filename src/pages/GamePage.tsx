import {useLocation } from "react-router-dom";
import { useGetSpecificGameQuery } from "../redux";
import LoadingContainer from "../components/LoadingContainer/LoadingContainer";
import GameInfo from "../components/GameInfo/GameInfo";

const GamePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const gameId = queryParams.get("id");

  const { data, isLoading } = useGetSpecificGameQuery(gameId?.toString() || "");

  return (
    <div className="gamePage">
      {(isLoading || !data) ? (
        <LoadingContainer />
      ) : (
        <GameInfo data={data} />
      )}
    </div>
  );
};

export default GamePage;
