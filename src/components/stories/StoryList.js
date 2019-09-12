import React, { Component } from 'react'
import StoryItem from './StoryItem';
import apiUrl from '../../../src/apiConfig';
import axios from 'axios'
export default class StoryList extends Component {
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
            return <StoryItem story={story} key={index} /> 


        })
        return(
          <div class="row col-md-3 col-sm-6">
            {allStories}
          </div>
        )
    }
}
