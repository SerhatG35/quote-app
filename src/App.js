import { useState, useEffect, useRef } from 'react';

import UpperContainer from './components/UpperContainer';
import LowerContainer from './components/LowerContainer';
import Head from './components/Head.js';

import { BG_COLOR, randomNum } from './utils/constants';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const inputEl = useRef(null);

  const fetchData = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    setSelectedData(data);

    const rndNum = randomNum(data);
    setQuote(data[rndNum].text);
    setAuthor(data[rndNum].author);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Head />
        <UpperContainer bgStyle={BG_COLOR} quote={quote} author={author} />
        <LowerContainer
          bgStyle={BG_COLOR}
          getData={fetchData}
          selectedData={selectedData}
          setQuote={setQuote}
          setAuthor={setAuthor}
          inputRef={inputEl}
        />
      </div>
    </div>
  );
}

export default App;
