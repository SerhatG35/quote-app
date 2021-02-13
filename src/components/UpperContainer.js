const UpperContainer = ({ author, quote, bgStyle }) => {
  return (
    <div className="upperContainer">
      <div className="innerContainer">
        <p>
          <i style={{ bgStyle }} className="fas fa-quote-left fa-xs"></i>
          {quote}
          <i style={{ bgStyle }} className="fas fa-quote-right fa-xs"></i>
        </p>
        <footer>{author}</footer>
      </div>
    </div>
  );
};

export default UpperContainer;
