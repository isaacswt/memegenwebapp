import memedata from './memedata'
import MemeDisplay from './MemeDisplay'
import React, {useState} from "react"

export default function MemeGenerate(){
    const memeArray = memedata.data.memes
    const randNum = Math.floor(Math.random() * memeArray.length)
    let url = memeArray[randNum].url
    console.log(url)
    let memedisplay = <MemeDisplay url={url}/>
    return (
        <div>
            {memedisplay}
        </div>
    )

}