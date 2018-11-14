import _ from 'lodash';  // library we installed from npm that will help throttle how often a function is called using "Debounce"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';  // youtube search algo from NPM package we installed in node_modules
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyBPLXJx2WM7BPjp51ezqOOCy8I2bC3XBAo';


class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = // This is where we set our props in this class component
        { videos: [],
          selectedVideo: null,
        };

        this.videoSearch('mahomes');
    }

    videoSearch(searchTerm) 
    {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => // FAT ARROW, it read: 'function(videos)' before we used the FAT ARROW.  Means exactly the same thing.
        {
            // Updates state from this callback function
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });  
        });
    }

    render()
    {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 1000 );
        // This above allows our search to be delayed and only executed every 1000 milliseconds or 1 sec.  This is 
        // a method from the Lodash library that we installed and the method is called debounce


        return (   ///   <------  MAKE SURE when returning components here that there is at least a '(' or 'div' on same line as 'return' or error will happen.  **** IMPORTANT I USED to believe this is only true for the Render Function but I tested it in another component a functional component and it didnt work you need to have curly braces on same line as return
            // *** IMPORTANT Below we are importing Components from different js files using JSX.  The 'default' exports that we classified in those respected js files.  No.000000tice the names of the components are exactly the same as we decided in those js files to export
            <div>
                    <SearchBar onSearchTermChange = { videoSearch } />  
                    <VideoDetail video = {this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect = { selectedVideo => this.setState({selectedVideo}) } // ES6 again.  Same as saying:  Function(selectedVideo) { this.setState({selectedVideo: selectedVideo})}
                        videos = {this.state.videos} /> 
                    {/* THIS IS A JSX comment */}
                    {/* So above with VideoList we are passing data between the Parent component 'APP' and its child component 'VideoList'.  In order to do this React has a property for this specific use-case known as 'Props'.  The 'videos' property is the props. */}
            </div>
        );  
    }
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
