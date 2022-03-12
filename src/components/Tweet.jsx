import React from 'react'
import logo from './logo.jpeg'; // with import    

export const Tweet = ({tweet}) => {
let now = new Date();

  return (
    <div className="tweet" style={{alignSelf: "center"}}>
        <div className="user-details">
            <img src={logo} />
            <div class="name-and-username">
                <text>{tweet.name}</text>
                <text className='username'>@{tweet.username}</text>
            </div>
            
        </div>
        <p className='content'>{tweet.text}</p>
        

        <div className='details'>
            <text style={{margin:"1rem 0 1rem 0", width: 400}}>{now.getHours() + ":" + now.getMinutes()} · {now.toLocaleDateString()} · <span className='span'>Twitter Web App</span></text>
        </div>

        <div className='idk'>
        <div className='statistics'>
            <text className="stat">
                <span>1,560</span> Retweets
            </text>

            <text className="stat">
                <span>2,440</span> Likes
            </text>
        </div>
</div>
        
    </div>
  )
}

export default Tweet
