import React from 'react'
import "./css/Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            {/* Tweet Box */}
            <TweetBox />

            {/* post */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
