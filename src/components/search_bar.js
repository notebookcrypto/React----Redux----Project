import React, { Component } from 'react';



class SearchBar extends Component 
{
    constructor(props)  // Contructor for this Class Component SearchBar.  Need this to initialize state object.
    {
        super(props); // Calling the Parent function from COMPONENT class that we extend from.

        this.state = { term: '' };  // Only time we set state like this is in our contructor.

        this.onInputChange = this.onInputChange.bind(this);  // Need to always add this BULLSHIT for ES6/ES7 so that any functions you make will be bound to the "this" property otherwise in our example 'SetState' will come back as undefined.

    }


    render()
    {
        return (

        // 'onChange' is a property from React.  It handles the 'Change' property from regular vanilla HTML
        <div> 
            <input onChange = {this.onInputChange} />  
            <br />
            VALUE OF INPUT:  {this.state.term}
        </div>

        );
    }



    onInputChange(event)  // We created the name for this function which is our event handler, could have been anything, same with the 'event' parameter.  That parameter returns an event object
    {
        this.setState({term: event.target.value})
    }


    
}






export default SearchBar;