import { useEffect, useState } from "react";
import axios from "axios";

function generateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
        },
      ]);
    }, 5000);
  });
}

async function fetchDataWithAsyncAwait() {
  console.log("Fetching data with async await");
  const response = await generateData();
  console.log("fetch data with async await success", response);

  console.log("Fetching data with async await 2");
  const response2 = await generateData();
  console.log("fetch data with async await success 2", response2);
}

function fetchDataWithThen() {
  console.log("Fetching data with then");
  generateData().then((response) => {
    console.log("fetch data success", response);
  });

  console.log("Fetching data with then 2");
  generateData().then((response) => {
    console.log("fetch data success 2", response);
  });
}

// fetchDataWithAsyncAwait();
// fetchDataWithThen();

export default function PokemonPage(params) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchPokemon = async () => {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const data = await response.json();
  //   setPokemons(data.results);
  //   console.log("data fetch", data);
  // };

  const fetchPokemonWithAxios = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(response.data.results);
      setIsLoading(false);
    } catch (error) {
      alert("Có lỗi rồi");
      setIsLoading(false);
    }

    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon")
    //   .then((response) => {
    //     setPokemons(response.data.results);
    //     console.log("data axios", response.data);
    //   })
    //   .catch((error) => {
    //     alert("Có lỗi rồi");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  useEffect(() => {
    // fetchPokemon();
    fetchPokemonWithAxios();
  }, []);

  // console.log("pokemons ", pokemons);

  return (
    <div>
      <h1>Pokemon page</h1>

      <div>
        {isLoading && <div>Loading ...</div>}
        <ul>
          {pokemons.map((item, index) => (
            <li key={index}> {item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
