import { useState, useEffect } from 'react'

import UpperContainer from './UpperContainer'
import LowerContainer from './LowerContainer'


let selectedData // for sending data to Select

let rndNum = 0 // variables for random number
let temp = 0, num = 0

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const randomNum = (array) => {
    num = Math.floor(Math.random() * (array.length))
    if (num !== temp) {
      temp = num
      return num
    }
    else return randomNum(array)
  }

  const fetchData = async () => { //fetching data and setting the contents to its place
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json();
    selectedData = data; // for sending data to select.js

    rndNum = randomNum(data)
    setQuote(data[rndNum].text)
    setAuthor(data[rndNum].author)
  }

  useEffect(() => { // getting random quote on first load
    fetchData()
  }, [])

  const bgStyle = {
    color: document.body.style.backgroundColor
  }

  return (
    <div className="App">
      <div className="container">
        <h2 style={bgStyle}>Get Quote</h2>
        <UpperContainer bgStyle={bgStyle} quote={quote} author={author} />
        <LowerContainer bgStyle={bgStyle} getData={fetchData} selectedData={selectedData} setQuote={setQuote} setAuthor={setAuthor} />
      </div>
    </div>
  );
}

export default App;