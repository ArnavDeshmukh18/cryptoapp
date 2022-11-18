import React from "react";
import axios from "axios";
import Coin from "./Coin.jsx";
import "./styles.css";


function Mainpage() {
  const [coins, setCoins] = React.useState([]);

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(function (response) {
        console.log(response);
        setCoins(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const SearchCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mainPage">
      <nav className="navbar">
        <h1>Crypto Mania</h1>
        <form className="submit-form">
        
          <input
            type="text"
            placeholder="Search Coins"
            className="search-coin"
            onChange={handleChange}
          />
        </form>
      </nav>
      <div>
        {SearchCoin.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Mainpage;
