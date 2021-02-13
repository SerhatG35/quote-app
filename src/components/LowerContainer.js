import Button from './Button';

import { scientists } from '../utils/constants';
const LowerContainer = ({
  getData,
  bgStyle,
  selectedData,
  setQuote,
  setAuthor,
  inputRef,
}) => {
  const BG_COLOR = document.body.style.backgroundColor;
  return (
    <div className="lowerContainer">
      <a href="https://github.com/SerhatG35" target="blank">
        <i style={{ color: BG_COLOR }} className="fab fa-github fa-2x"></i>
      </a>
      <div className="lowerRight">
        <select
          name="people"
          id="quote-select"
          style={{ backgroundColor: document.body.style.backgroundColor }}
          ref={inputRef}
        >
          {scientists.map((scientist, index) => (
            <option key={index}>{scientist}</option>
          ))}
        </select>
        <Button
          getData={getData}
          bgStyle={{ bgStyle }}
          selectedData={selectedData}
          setQuote={setQuote}
          setAuthor={setAuthor}
          refObject={inputRef}
        />
      </div>
    </div>
  );
};

export default LowerContainer;
