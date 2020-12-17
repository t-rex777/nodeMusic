import React from "react";
import "./styles.css";
import { useState } from "react";

const songDB = {
  rock: [
    { name: "rockabilly", rating: "4.5/5" },
    { name: "electric blues", rating: "5/5" },
    { name: "country", rating: "4.5/5" }
  ],

  lofi: [
    {
      name: "Morning View",
      rating: "4.5/5"
    },
    {
      name: "Tokyo Winter",
      rating: "4.5/5"
    },
    {
      name: "Hypnotyze",
      rating: "4/5"
    }
  ],
  pop: [
    {
      name: "Monster",
      rating: "4/5"
    },
    {
      name: "Fake",
      rating: "3.5/5"
    },
    {
      name: "Wonder",
      rating: "5/5"
    }
  ],
  romantic: [
    {
      name: "Perfect",
      rating: "5/5"
    },
    {
      name: "Stuck with you",
      rating: "4.5/5"
    },
    {
      name: "Senorita",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("pop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div class="bg"></div>
      <h1> 🎵 Node Music </h1>
      <h3 style={{ fontSize: "smaller" }}>
        Checkout my favorite songs! Select a genre to get started...{" "}
      </h3>

      <div>
        {Object.keys(songDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div>
        <ul>
          {songDB[selectedGenre].map((book) => (
            <li key={book.name} className="listItems">
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
