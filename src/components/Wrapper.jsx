import React, {useState} from 'react'
import '../App.css';
import Input from './Input'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import Tweet from './Tweet'

export const Wrapper = () => {

    const defaultTweet = {
        text: "I am the tweet. Change me.",
        name: "AnonUser",
        username: "anonUser_"

    }

    const downloadJpeg = () => {
        htmlToImage.toJpeg(document.getElementsByClassName('tweet')[0], { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
        console.log("henlo");

    }
    

    const [tweet, setTweet] = useState(defaultTweet)

    const handleTextChange = (text) => {
        setTweet({...tweet, text})

    }

    const handleUsernameChange = (username) => {
        setTweet({...tweet, username})

    }

    const handleNameChange = (name) => {
        setTweet({...tweet, name})

    }

    return (
        <div className='container'>
            <Input 
                handleTextChange={handleTextChange}
                handleNameChange={handleNameChange}
                handleUsernameChange={handleUsernameChange}
                />
            {tweet && <Tweet id="tweet" tweet={tweet}/>}

            <button onClick={downloadJpeg} style={{height: "100px"}}>Export picture of fake tweet</button>

        </div>
    )
}

export default Wrapper
