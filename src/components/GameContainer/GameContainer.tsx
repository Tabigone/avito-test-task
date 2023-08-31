import { Card } from "antd";
import { Link } from "react-router-dom";
import { GameItem } from "../../redux";
import "./GameContainer.css";

const GameCard = ({ game }: { game: GameItem }) => {
  const releaseDate = new Date(game.release_date);
  const formattedDate = releaseDate.toLocaleString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/game?id=${game.id}`}>
      <Card hoverable className="game-container">
        <img
          loading="lazy"
          className="game-container__image"
          src={game.thumbnail}
          alt={game.title}
        />
        <p className="game-container__text">{game.title}</p>
        <p className="game-container__text">{game.publisher}</p>
        <p className="game-container__text">{game.genre}</p>
        <p className="game-container__text">{formattedDate}</p>
      </Card>
    </Link>
  );
};

export default GameCard;
