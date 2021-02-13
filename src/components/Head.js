const Head = () => {
  const BG_COLOR = document.body.style.backgroundColor;
  return (
    <header className="head">
      <i style={{ color: BG_COLOR }} className="fab fa-discourse flipped"></i>
      <h2 style={{ color: BG_COLOR }}>Get Quote</h2>
      <i style={{ color: BG_COLOR }} className="fab fa-discourse"></i>
    </header>
  );
};

export default Head;
