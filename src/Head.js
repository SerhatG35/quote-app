const Head = ({ bgStyle }) => {
    return (
        <header className='head'>
            <i style={bgStyle} className="fab fa-discourse flipped"></i>
            <h2 style={bgStyle}>Get  Quote</h2>
            <i style={bgStyle} className="fab fa-discourse"></i>
        </header>
    );
}
 
export default Head;