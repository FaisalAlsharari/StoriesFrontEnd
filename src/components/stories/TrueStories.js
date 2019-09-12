import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../apiConfig';
import StoryItem from './StoryItem';

export default class TrueStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stories: []
        };
      }
      componentDidMount() {
        axios.get(`${apiUrl}/stories/trueStories`)
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
        return (
            <div class="row">
              {allStories}
            </div>
          );
    }
}
