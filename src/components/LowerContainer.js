import Button from "./Button";

import { people } from "../utils/constants";

const LowerContainer = ({
  getData,
  selectedData,
  setQuote,
  setAuthor,
  inputRef,
}) => {
  return (
    <div className="lowerContainer">
      <div className="lowerRight">
        <select
          name="people"
          id="quote-select"
          style={{ backgroundColor: document.body.style.backgroundColor }}
          ref={inputRef}
        >
          {people.map((author, index) => (
            <option key={index}>{author}</option>
          ))}
        </select>
        <Button
          getData={getData}
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
