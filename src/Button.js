import { useEffect } from 'react'

let temp = 0, num = 0 // random num and temp for color

let selectedTemp = 0, selectedRandomNum = 0 // random num and temp for when "Random" is not selected on dropdown menu 
let rnd = 0 // for selected item

const Button = ({ getData, selectedData, setQuote, setAuthor }) => {
    const colors = ['#301934', '#191970', '#5D3FD3', '#4169E1', '#CD7F32', '#6F4E37', '#722F37', '#818589', '#36454F', '#454B1B', '#702963', '#A0522D', '#00A36C', '#6495ED', '#536DFE', '#1B5E20', '#996666']

    const randomNum = () => {
        num = Math.floor(Math.random() * (colors.length))
        if (num !== temp) {
            temp = num
            return num
        }
        else {
            return randomNum()
        }
    }

    const changeBg = () => {
        document.body.style.backgroundColor = colors[randomNum()]
    }

    useEffect(() => { // in order to get a random bgcolor on first load
        changeBg()
    }, [])

    const getSelected = () => { // GET SELECTED TEXT FROM DROPDOWN MENU
        var e = document.getElementById("quote-select");
        var result = e.options[e.selectedIndex].text;
        return result
    }

    const configureSelectedData = () => {
        const rndNum = () => {
            selectedRandomNum = Math.floor(Math.random() * (selectedDataArray.length))
            if (selectedRandomNum !== selectedTemp) {
                selectedTemp = selectedRandomNum
                return selectedRandomNum
            }
            else return rndNum()
        }

        let selectedDataArray = []
        for (let i = 0; i < selectedData.length; i++) {
            if (selectedData[i].author === getSelected()) {
                selectedDataArray.push(selectedData[i])
            }
        }
        rnd = rndNum()
        setQuote(selectedDataArray[rnd].text)
        setAuthor(selectedDataArray[rnd].author)
    }

    return (
        <button style={{ backgroundColor: document.body.style.backgroundColor }} className="getQuote" onClick={() => {
            changeBg();
            if (getSelected() === 'Random') getData(); //random
            else configureSelectedData() // selected author
        }}>
            Get Quote!
        </button>
    );
}

export default Button;