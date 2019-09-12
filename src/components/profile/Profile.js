import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import ProfileStories from './ProfileStories';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          stories: []
        };
      }
      componentDidMount() {
        console.log(this.props.match.params.id)
        const userID = this.props.match.params.id
    
        axios.get(`${apiUrl}/profile/${userID}`)
          .then((response) => {
              console.log(response)
              console.log(response.data.user)
              console.log(response.data.stories)
            this.setState({
                user: response.data.user,
                stories: response.data.stories
            });
          })
          .catch((err) => {
            console.log(err);
          })
        }
    render() {
        const allProfileStories = this.state.stories.map((story, index) => {
            return <ProfileStories story={story} key={index} /> 
        })
        
        return(
            <div>
                <div class="row">
                  <div class="col-3">
                      <div className="card " id='cardImg' >
                        <div className="card-body" id='cardBody'>
                            <img src={this.state.user.img} class="card-img-top" alt="profile pic"/>
                            <p className="card-title">user:{this.state.user.username}</p>
                            <p className="card-title">bio:{this.state.user.bio}</p>
                        </div>
                     </div>
                  </div>
              </div>
              <div class="row">
                  {allProfileStories}
              </div>
          </div>    
        )
    }
}
