import React from 'react';
import VideoListItem from './video_list_item';



const VideoList = (props) =>  // FAT ARROW.  Was originally const VideoList = function () {};
// This is a functional component.  We do not care for state so we do not make it a Class Component.
// Since this is a functional component any Props items from our Parent component gets passed into this function automatically.
// So for example for us, since at this time of writing we only have one prop in the parent component 'App', 
// you can imagine this gets passed into the argument of our functional component VideoList: const videos = props.videos;
{
   const videoItems =  props.videos.map
    (
        (video) => 
        {
            return < VideoListItem key = {video.etag} video = {video} />
        }
    );

    return (

        <ul className = "col-md-4 list-group" >  
           {videoItems}

        </ul>
    );
}


export default VideoList;