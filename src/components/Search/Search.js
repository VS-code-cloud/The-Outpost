import React, { useState, useEffect } from 'react';
// import { render } from "react-dom";
import axios from 'axios';

const Search = () => {
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getEbayData();
  });

  const handleInputChange = (inputData) => {
    setInputValue(inputData.currentTarget.value);
  };

  const getEbayData = () => {
    const token = '';

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Language': 'en-US',
        Authorization: 'Bearer ' + token,
      },
    };

    axios
      .get(
        `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${inputValue}`,
        config
      )
      .then((response) => {
        // this.setState({
        // 	results: response.data.itemSummaries
        // });
        setResults();
        console.log(
          'response.data.itemSummaries =>',
          response.data.itemSummaries
        );
      })
      .catch((err) => {
        alert('error fetching, check if your token is valid!');
      });
  };

  const reformatUrl = (url) => {
    return url.replace('www.ebay.com', 'www.sandbox.ebay.com');
  };

  return (
    <div>
      <input onChange={handleInputChange} value={inputValue} />
      <button onClick={getEbayData}>Search</button>
      <hr />

      <ul>
        {results.map((item) => (
          <li key={item.itemId}>
            <p>{item.title}</p>
            <p>
              <span>{item.price.value} </span>
              <span>{item.price.currency}</span>
              {/* <img src={item.image.imageUrl} /> */}
            </p>

            <a href={`${reformatUrl(item.itemWebUrl)}`} target='_blank'>
              {reformatUrl(item.itemWebUrl)}
            </a>

            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Search;
