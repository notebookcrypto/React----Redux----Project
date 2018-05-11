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
        <div className = "search-bar" > 
            <input 
            value = {this.state.term}  // This line here makes this input element a "controlled component".  This is because the State is controlling the value of this element and not the other way around like it used to be.  This is now a controlled form element from the inside (State) out (external input)
            onChange = { event => this.onInputChange(event.target.value)} />  
            <br />
            {/* THIS IS A JSX comment */}
            {/* VALUE OF INPUT:  {this.state.term} */}
           
        </div>

        );
    }



    onInputChange(term)  // We created the name for this function which is our event handler, could have been anything, same with the 'event' parameter.  That parameter returns an event object
    {
        this.setState({term})
        // *** IMPORTANT caveat of SetState is that whenever it is called, the component it's called from re-renders automatically as well as any children re-render as well.  So the Render function gets called all over again.  Kinda like how the Update function in Unity gets called over and over again every new frame.  
        // *** IMPORTANT remember every Class Component has a Render function and ever CLass Component has State involved, in fact that is the difference between Class and Functional components, STATE!  You can think of this Render function as the Main or Update function.
        this.props.onSearchTermChange(term);
    }


    
};






export default SearchBar;