import { useState, useEffect, useRef } from "react";

import UpperContainer from "./components/UpperContainer";
import LowerContainer from "./components/LowerContainer";
import Head from "./components/Head.js";
import Footer from "./components/Footer";

import { randomNum } from "./utils/constants";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [rnd, setRandom] = useState("0");
  const inputEl = useRef(null);

  const fetchData = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    setSelectedData(data);

    setRandom(randomNum(data));
    setQuote(data[rnd]?.text);
    setAuthor(data[rnd]?.author);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Head />
        <UpperContainer quote={quote} author={author} />
        <LowerContainer
          getData={fetchData}
          selectedData={selectedData}
          setQuote={setQuote}
          setAuthor={setAuthor}
          inputRef={inputEl}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
