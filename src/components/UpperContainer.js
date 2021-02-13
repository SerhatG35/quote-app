const UpperContainer = ({ author, quote}) => {
  const BG_COLOR = document.body.style.backgroundColor;
  return (
    <div className="upperContainer">
      <div className="innerContainer">
        <p>
          <i style={{ color: BG_COLOR }} className="fas fa-quote-left fa-xs"></i>
          {quote}
          <i style={{ color :BG_COLOR }} className="fas fa-quote-right fa-xs"></i>
        </p>
        <footer>{author}</footer>
      </div>
    </div>
  );
};

export default UpperContainer;
