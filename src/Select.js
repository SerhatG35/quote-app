
const Select = () => {

    return (
        <select name="people" id="quote-select" style={{ backgroundColor: document.body.style.backgroundColor }}>
            <option value="default">Random</option>
            <option value="aristotle">Aristotle</option>
            <option value="daVinci">Leonardo da Vinci</option>
            <option value="napoleonBonaparte">Napoleon Bonaparte</option>
            <option value="albertEinstein">Albert Einstein</option>
            <option value="socrates">Socrates</option>
            <option value="pabloPicasso">Pablo Picasso</option>
            <option value="nikolaTesla">Nikola Tesla</option>
            <option value="marieCurie">Marie Curie</option>
            <option value="williamShakespeare">William Shakespeare</option>
            <option value="laoTzu">Lao Tzu</option>
            <option value="chineseProverb">Chinese proverb</option>
        </select>
    );
}

export default Select;