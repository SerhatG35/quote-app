import { useEffect, useState } from "react";

import { colorList, randomNum, RANDOM } from "../utils/constants";

const Button = ({
  getData,
  selectedData,
  setQuote,
  setAuthor,
  refObject: { current } = {},
}) => {
  const [rnd, setRandom] = useState("0");

  const changeBg = () => {
    document.body.style.backgroundColor = colorList[randomNum(colorList)];
  };

  useEffect(() => {
    changeBg();
  }, []);

  const getSelected = () => {
    var result = current?.options[current?.selectedIndex]?.text;
    return result;
  };

  const handleClick = () => {
    changeBg();
    if (getSelected() === RANDOM) getData();
    else configureSelectedData();
  };

  const configureSelectedData = () => {
    const newData = selectedData.filter(
      (person) => person.author === getSelected()
    );

    setRandom(randomNum(newData));
    setQuote(newData[rnd]?.text);
    setAuthor(newData[rnd]?.author);
  };

  return (
    <button
      style={{ backgroundColor: document.body.style.backgroundColor }}
      className="getQuote"
      onClick={() => handleClick()}
    >
      Get Quote!
    </button>
  );
};

export default Button;
