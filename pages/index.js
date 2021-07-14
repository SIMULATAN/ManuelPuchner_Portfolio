import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home({ data }) {
  const [joke, setJoke] = useState({});

  const fetchJoke = async () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
      });
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetchJoke();
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <Head>
        <title>Manuel Puchner</title>
      </Head>
      <h1>Manuel Puchner portfolio</h1>
      <p>please note this is currently in development</p>

      <br />
      <br />
      <button onClick={handleClick}>test</button>
      <div className="joke">
        <h1>{joke.value}</h1>
      </div>
    </div>
  );
}
