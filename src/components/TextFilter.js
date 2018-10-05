import React, { Component } from 'react';

class TextFilter extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event){
      this.props.onFilterChange(event.target.value);
  }
  render() {
    
    return (
      <div >
        <div className="countFilter">{this.props.podcastsCount}</div>
        <input className="textFilter" type="text" name="filter" onChange={this.handleChange}/>

        
      </div>
    );
  }
}

export default TextFilter;