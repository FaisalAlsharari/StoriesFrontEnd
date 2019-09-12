import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class ProfileStories extends Component {

    render() {
        return (
            <div class="col-3">
              <div className="card " id='cardImg' >
                <img src={this.props.story.img} className="card-img-top" alt="image"/>
                <div className="card-body" id='cardBody'>
                <h5 className="card-title">{this.props.story.title}</h5>
                {/* <p className="card-text">{this.props.story.content}</p> */}
                <Link to="/story/:id"><button className="btn btn-primary ">Read More!</button></Link>
                </div>
            </div>
            </div>
          )
    }
}