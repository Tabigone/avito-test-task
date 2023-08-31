import GameCard from "../GameContainer/GameContainer";
import { GamesResponse } from "../../redux/ftpApi";
import "./GameGrid.css";

const GameGrid = ({ data }: { data: GamesResponse }) => {
  return (
    <div className="game-grid">
      {data.map((game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
