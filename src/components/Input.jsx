import React, { useState } from 'react'
import '../App.css';

const Input = ({ handleTextChange, handleUsernameChange, handleNameChange}) => {
    
    return (
        <div style={{alignSelf: "center", textAlign:"left", alignContent: "right"}}>

            <form>
                <div className="setting">
                    <p>
                    Your tweet:
                    </p>
                    <textarea 
                        onChange={(e) => handleTextChange(e.target.value)}
                        className='input' type="textarea" 
                        name="text"
                        />

                    
                </div>

                <div className="setting">
                    <p>
                    Username:
                    </p>
                    <textarea 
                        onChange={(e) => handleUsernameChange(e.target.value)}
                        className='input' type="textarea" 
                        name="username"
                        />

                    
                </div>

                <div className="setting">
                    <p>
                    Name:
                    </p>
                    <textarea 
                        onChange={(e) => handleNameChange(e.target.value)}
                        className='input' type="textarea" 
                        name="name"
                        />

                    
                </div>
                

            </form>
        </div>
    )
}

export default Input