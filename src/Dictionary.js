import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(params) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhoto] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhoto(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    // documentation: https://www.pexels.com/api/documentation/
    let apiKey = "563492ad6f91700001000001b60530671444429cb271ab515a9de24e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9}`;
    let headers = { Authorization: `Bearer ${apiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form className="search-form" onSubmit={search}>
          <input
            type="search"
            className="search-field"
            onChange={handleKeywordChange}
            placeholder="Type a word here eg. travel, dog, ..."
          />
          <input type="submit" value="🔍" onClick={search} />
        </form>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
