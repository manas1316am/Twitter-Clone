import React from 'react';
import "./css/Tweetbox.css";
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src={require("./assets/pexelUser.jpg")} />
                    <input placeholder="What's happening?"/>
                   
                </div>
                <input 
                    className="tweetbox__imageInput" 
                    placeholder="Enter Image URL" 
                />

                <Button className="tweetbox__tweetButton" >Tweet</Button>
            </form>
        </div>
    )
}


export default TweetBox

