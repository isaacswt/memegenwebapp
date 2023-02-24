

export default function MemeDisplay(props) {
    console.log(props.url)
    return (
        <div className="memedisplay--container">
            {props.url &&<img src={props.url}/>}
            <h3 className="topText">{props.topText}</h3>
            <h3 className="btmText">{props.btmText}</h3>
        </div>
    )
}