import React from "react";

function Meme() {
  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
        ></input>
        <input
          type="Submit"
          className="form--button"
          value="Get a new Meme Image "
        ></input>
      </form>
    </main>
  );
}
export default Meme;
