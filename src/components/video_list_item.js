import React from 'react';

const VideoListItem = ({video}) => 
{
    //const video = props.video; 
    // The above statement is the same as (props) to ( {video} )
    // Instead making a new variable to store the intended props.video property we just create it inside the parameter of this component
    // Keep in mind you need to use the exact same spelling as the props property you made in the parent component that you are passing to the child component
    //  Also the word "key" does not work in this example. I am assuming it is a property of react mapping function and it is not a keyword you can use to create a property with so it is not an actual prop u can pass

    // console.log(video);

    const imageURL = video.snippet.thumbnails.default.url;  // This property detail came from console logging the video property of the Youttube API search function and checking whats included in the console. Same for the below for the Video Title.

    return (
        <li  className = "list-group-item">  
             <div className = "video-list media">
                    <div className = "media-left" >
                            <img className = "media-object" src = {imageURL} />
                    </div>

                    <div className = "media-body">
                            <div className = "media-heading"> {video.snippet.title} </div>
                    </div>
             </div>
        </li>
    );

};


export default VideoListItem;