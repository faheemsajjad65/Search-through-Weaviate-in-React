import React, {useState} from "react";
import './App.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {weaviateMagic} from "./functions";
import Container from "@material-ui/core/Container";

// import Article from "./Article";
import Nugget from "./Nugget";


function App() {
  
  const [keyword, setKeyword] = useState("");
  const [nugget, setnugget] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      <form>
        <TextField
        id="weaviate-search-text-field"
        label="Type keyword"
        type="search"
        variant="outlined"
        className="searchInput"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          className="searchButton"
          style={{ height: "55px" }}
          onClick={() => weaviateMagic(keyword,setnugget,setIsSearching)}
          >
          {isSearching ? "Searching…" : "Search"}
        </Button>
      </form>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <div
          style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          }}
        >
          {nugget
          ? nugget.data.map((nugget, idx) => (
            <Nugget nugget={nugget} key={idx} />
          ))
          : null}
        </div>
      </Container>
    </div>
  );
}

export default App;
