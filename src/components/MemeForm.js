import React, {useState} from "react"
// import memedata from './memedata'
// import MemeGenerate from './MemeGenerate'
import MemeDisplay from './MemeDisplay'
import GeneratedMeme from './GeneratedMeme'

export default function MemeForm() {
    let url = ""
    const [MemeArray, setMemeArray] = useState([])
    const [Meme, setMeme] = useState("")
    const [memeData, setMemeData] = useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
        console.log("Effect Ran")
    },[])
    console.log(memeData)

    const[inputStates, setInput] = useState({topText:"", btmText:""})

    const generatedMeme = MemeArray.map(item => {
        return <GeneratedMeme url={item}/>
    })
    console.log(inputStates)
    
    function handleChange(event) {
        setInput({...inputStates, [event.target.name]: event.target.value})
    }
    function MemeGenerate(){
        const memeArray = memeData
        const randNum = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randNum].url
        setMeme(url)
    }

    function SaveMeme() {
        setMemeArray(prevMemeArray => 
            {
                return [...prevMemeArray, Meme]
            })
    }
   
    return (
        <div className="memeform--container">
            <div className="form">
                <input 
                type="text"
                name="topText"
                placeholder="Top Text"
                onChange={handleChange}
                value={inputStates.topText}
                />
                <input 
                type="text"
                name="btmText"
                placeholder="Bottom Text"
                onChange={handleChange}
                value={inputStates.btmText}/>
                    <button 
                    onClick={MemeGenerate} 
                    className="generate--button">
                        Get a new meme image🌈
                    </button>
                    <button 
                    onClick={SaveMeme} 
                    className="save--meme">
                        Save Meme 🔥
                    </button>
            </div>
                <MemeDisplay 
                topText={inputStates.topText}
                btmText={inputStates.btmText}
                url={Meme}/>
            <div className="memearray--container">
                    {generatedMeme}
            </div>
        </div>
    )
}