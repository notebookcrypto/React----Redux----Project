import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';  // youtube search algo from NPM package we installed in node_modules
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDITnxls8Br1v_RC3HnxjERSbeKRAQ5yBg';


class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, searchTerm: 'surfboards'}, (videos) => // FAT ARROW, it read: 'function(videos)' before we used the FAT ARROW.  Means exactly the same thing.
        {
            this.setState({ videos });  
            // Updates state from this callback function
            // This above is condensed ES6 syntax, it was originally and means the same as: this.setState({ videos: videos })
        });
    }

    render()
    {
        return (   ///   <------  MAKE SURE when returning components here that there is at least a '(' or 'div' on same line as 'return' or error will happen.  **** IMPORTANT I believe this is only true for the Render Function!
            // *** IMPORTANT Below we are importing Components from different js files using JSX.  The 'default' exports that we classified in those respected js files.  No.000000tice the names of the components are exactly the same as we decided in those js files to export
            <div>
                    <SearchBar />  
                    <VideoList videos = {this.state.videos} /> 
                    {/* THIS IS A JSX comment */}
                    {/* So above with VideoList we are passing data between the Parent component 'APP' and its child component 'VideoList'.  In order to do this React has a property for this specific use-case known as 'Props'.  The 'videos' property is the props. */}
            </div>
        );  
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));