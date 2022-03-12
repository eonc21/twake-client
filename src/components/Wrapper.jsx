import React, {useState} from 'react'
import '../App.css';
import Input from './Input'
import Tweet from './Tweet'

export const Wrapper = () => {

    const defaultTweet = {
        text: "I am the tweet. Change me.",
        name: "AnonUser",
        username: "anonUser_"

    }

    const downloadJpeg = () => {
        
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
