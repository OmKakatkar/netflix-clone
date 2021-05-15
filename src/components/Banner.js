import React from "react";
import "./Banner.css";

function Banner() {
  const truncate = (string, num) => {
    return string.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://wallpapercave.com/wp/wp8741227.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description loremThis is a test description lorem`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
