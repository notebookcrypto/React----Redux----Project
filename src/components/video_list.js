import React from 'react';
import VideoListItem from './video_list_item';



const VideoList = (props) =>  // FAT ARROW.  Was originally const VideoList = function () {};
// This is a functional component.  We do not care for state so we do not make it a Class Component.
// Since this is a functional component any Props items from our Parent component gets passed into this function automatically.
// So for example for us, since at this time of writing we only have one prop in the parent component 'App', 
// you can imagine this gets passed into the argument of our functional component VideoList: const videos = props.videos;
{
   const videoItems =  props.videos.map // videoItems is an array and will contain a new array based on the props.videos array
    (
        (video) => 
        {
            return (
                < VideoListItem
                    key = {video.etag} 
                    video = {video} // this video object is getting created here but from the videos array of the APP parent component
                    onVideoSelect = { props.onVideoSelect } />  // this props.onVideoSelect is getting created from here and passed to child/sibling object
            );
        }  //  ABOVE here *** IMPORTANT  Props are for Parent to Child communications.  Props are defined and passed when you create a new component using the JSX tags. - Stephen Grider
           // So Above since we are calling the VideoListItem component from this component Video_List, VideoListItem is a child of Video_List and we are passing Props.video from here to VideoListItem for access.
          // Yes the APP component is the Parent to all other components and you could technically call props.videos from it in the VideoListItems component (I THINK) but remember that props.videos is an array and
          //  here we are making this props property in between a map function call that separates each video out of the videos array in the first place, so it is exactly what we want to pass to VideoListItems as opposed to an array of videos.
    );

    return (

        <ul className = "col-md-4 list-group" >  
           {videoItems}

        </ul>
    );
};


export default VideoList;