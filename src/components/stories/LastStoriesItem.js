import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class LastStoriesItem extends Component {
    render() {
        return (
            
        // <div className="card">
            <div className="card col-md-3 col-sm-6" id='HomeLast' >
  <img src={this.props.story.img} className="card-img-top" alt="lo"/>
  <div className="card-body">
    <h5 className="card-title">{this.props.story.title}</h5>
    <p className="card-text">{this.props.story.content}</p>
    <Link to={`/story/${this.props.story._id}`}><button className="btn btn-primary ">Read More!</button></Link>
  </div>
</div>
// </div>


        )
    }
}
