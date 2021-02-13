import { useEffect } from 'react'

let temp = 0, num = 0 // random num and temp for color

let selectedTemp = 0, selectedRandomNum = 0 // random num and temp for when "Random" is not selected on dropdown menu 
let rnd = 0 // for selected item

const Button = ({ getData, selectedData, setQuote, setAuthor }) => {
    const colors = ['#6F4242', '#FF6F61', '#6B5B95', '#92A8D1', '#775ce0' , '#34568B' , '#cd7f32' , '#009e69']

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