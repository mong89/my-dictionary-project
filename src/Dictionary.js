import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";


export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props);
    let [results, setResults] = useState (null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input 
            type="search" 
            onChange={handleKeywordChange}
            defaultValue="type here ✍🏻" />
        </form>
        </section>
        <Results results={results} />
    </div>
    );
    }