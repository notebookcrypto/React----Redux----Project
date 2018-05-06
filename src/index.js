import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyDITnxls8Br1v_RC3HnxjERSbeKRAQ5yBg';



// Create a new Component. This component should produce some HTML

const App = () => // This hoe is called a 'FAT ARROW' lol; is substitute for function()
{
    return (   ///   <------  MAKE SURE when returning components here that there is at least a '(' or 'div' on same line as 'return' or error will happen
        <div>
                <SearchBar />
        </div>
    );
           
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));