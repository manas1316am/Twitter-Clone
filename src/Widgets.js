import React from "react";
import "./css/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterFollowButton
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Manas07776439"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/manas-am2"}
          options={{ text: "#reactjs is awesome", via: "realDonaldTrump" }}
        />

        <TwitterFollowButton screenName={"Manas07776439"} />
      </div>
    </div>
  );
}

export default Widgets;
