import { Carousel } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { SpecificGameResponse } from "../../redux";
import { useEffect, useState } from "react";
import "./GameInfo.css";

interface GamePageProps {
  data: SpecificGameResponse;
}

const GameInfo: React.FC<GamePageProps> = (props) => {
  const data = props.data;

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (data) {
      const releaseDate = new Date(data.release_date);
      setDate(
        releaseDate.toLocaleString("ru-RU", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
      );
    }
  }, [data]);

  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined className="arrow" />
      </Link>
      <h1 className="gameTitle">{data.title}</h1>
      <div className="game">
        <div className="gameImageContainer">
          <img
            loading="lazy"
            alt=""
            className="gameImage"
            src={data.thumbnail}
          />
          <div className="carouselContainer">
            <h1 className="crarouselTitle">Screenshots</h1>
            <div className="carouselWrapper">
              <Carousel
                autoplay
                dots={true}
                dotPosition={"bottom"}
                draggable
                className="screenCarausel"
              >
                {data.screenshots.map((screenshot) => (
                  <div key={screenshot.id}>
                    <img
                      loading="lazy"
                      alt=""
                      className="screenCarouselImg"
                      src={screenshot.image}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="gameInfo">
          <div className="gameDescription">{data.description}</div>
          {data.minimum_system_requirements && (
            <div className="OS-requirements">
              <p className="date">Release Date: {date}</p>
              <p className="publisher">Publisher: {data.publisher}</p>
              <p className="developer">Developer: {data.developer}</p>
              <p className="genre">Genre: {data.genre}</p>
              <h2> OS requirements</h2>
              <ul>
                <li> OS: {data.minimum_system_requirements.os}</li>
                <li>Graphics: {data.minimum_system_requirements.graphics}</li>
                <li>Memory: {data.minimum_system_requirements.memory}</li>
                <li>Processor: {data.minimum_system_requirements.processor}</li>
                <li>Storage: {data.minimum_system_requirements.storage}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameInfo;
