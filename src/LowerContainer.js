import Button from './Button'
import Select from './Select'

const LowerContainer = ({ getData, bgStyle, selectedData, setQuote, setAuthor }) => {
    return (
        <div className="lowerContainer">
            <a href="https://github.com/SerhatG35" target='blank'>
                <i style={bgStyle} className="fab fa-github fa-2x"></i>
            </a>
            <div className="lowerRight">
                <Select />
                <Button getData={getData} bgStyle={bgStyle} selectedData={selectedData} setQuote={setQuote} setAuthor={setAuthor} />
            </div>
        </div>
    );
}

export default LowerContainer;