import React from 'react';

const VideoDetail = ({video}) => 
{

    if (!video) // If video props is null, display loading message
    {
        return <div> Loading.... </div>;
    }

    const videoId = video.id.videoId;  // Youtube URL ID, only thing that changes for youtube videos. Data accessible from props video
    const url = `https://www.youtube.com/embed/${videoId}`;  // More ES6 syntax magic.  Same as writing: 'https://www.youtube.com/embed/' + videoId;


    return (
        <div className = "video-details col-md-8" >

            <div className = "embed-responsive embed-responsive-16by9" > 
                <iframe className = "embed-responsive-item" src = {url} >  </iframe>
            </div>

            <div className = "details">
                <div> {video.snippet.title} </div>
                <div> {video.snippet.description} </div>
            </div>

        </div>
    );
};


export default VideoDetail;