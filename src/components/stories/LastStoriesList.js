import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import LastStoriesItem from './LastStoriesItem';

export default class LastStoriesList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stories: []
        };
      }
    
      componentDidMount() {
        axios.get(`${apiUrl}/stories`)
          .then((response) => {
            this.setState({ stories: response.data.stories});
          })
          .catch((err) => {
            console.log(err);
          })
      }

    render() {
        const allStories = this.state.stories.map((story, index) => {
            return <LastStoriesItem story={story} key={index} />
        })
        const lastStories = allStories.slice(-3);
        return (
          <div class="card-group">

          {lastStories}
          </div>
        )
    }
}
