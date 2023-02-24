import trollface from '../images/Troll Face.png'
export default function Header() {

    return (
        <div className="header--container">
            <img src={trollface}/>
            <h3>Meme Generator</h3>
            <p>React Project - Project 3</p>
        </div>
    )
}