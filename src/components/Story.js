import React, { Component } from 'react'
import StoryItem from './stories/StoryItem';
import apiUrl from '../apiConfig';
import axios from 'axios'
import Comment from './stories/Comment';
import { Link, Route } from 'react-router-dom'

export default class Story extends Component {
  constructor(props) {
    super(props);
      this.onChangeComment = this.onChangeComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        story: '',
        comment: '',
        comments: [],
        stories: []
      };
  }

      onChangeComment(e) {
          this.setState({
              comment: e.target.value
          });
      }

      onSubmit(e) {
          e.preventDefault();

          const newComment = {
              comment: {
                  comment: this.state.comment
              }
          }

          const storyID = this.props.match.params.id
          axios.post(`${apiUrl}/stories/${storyID}/comments`, newComment, {
            headers: {
                'Authorization': `Bearer ${this.props.user.token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
          .then(res => console.log(res.data))
          this.setState({
              comment: ''
          })


      axios.get(`${apiUrl}/story/${storyID}`)
      .then((response) => {
        console.log(response.data.story)
        this.setState({ story: response.data.story});
      })
      .catch((err) => {
        console.log(err);
      })
      }
  
  componentDidMount() {
    console.log(this.props.match.params.id)
    const storyID = this.props.match.params.id

    axios.get(`${apiUrl}/story/${storyID}`)
      .then((response) => {
        console.log(response.data.story)
        this.setState({ story: response.data.story});
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(`${apiUrl}/stories/${storyID}/comments`)
      .then((response) => {
        console.log(response.data.comment)
        this.setState({ comments: response.data.comments});
      })
      .catch((err) => {
        console.log(err);
      })      
    }
    //--------------------------------------------------------------------
    // Delete Story
    deleteStory = (e) => {
      e.preventDefault();
      console.log('my props', this.props);
      const storyID = this.props.match.params.id

      axios.delete(`${apiUrl}/stories/${storyID}`, {
            headers: {
                'Authorization': `Bearer ${this.props.user.token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            })
      .then((response) => {

      })
      .catch((err) => {
        console.log(err);
      })
    }
    //-----------------------------------------------------------------------------

  render() {
    const userObject = localStorage.getItem('user')
    let manageStoryButtons = ''
    console.log(userObject);
    
    if(this.props.user && userObject == this.state.story.owner){
      manageStoryButtons = (
        <div>
          <button class="btn btn-primary" onClick={this.deleteStory}>Delete Story</button>
          <Link to={`/updateStory/${this.state.story._id}`}><button className="btn btn-primary">Update Story</button></Link>
        </div>
      )
    }
    {/* view the comment form if the user is log-in */}
    let addCommentForm = ''
    if (this.props.user){
      addCommentForm= (  
          <div class="comment-form">
          <form className='auth-form' onSubmit={this.onSubmit}>
          <h2>Add new Comment</h2>
                  <input  type="text"
                          value={this.state.comment}
                          placeholder="comment"
                          onChange={this.onChangeComment}
                          />
              <input class="btn btn-primary" type="submit" value="Submit"/>
          </form> 
          </div>
  )}
    console.log("all comments within story",this.state.comments);
    
    return(
      <div>
          {/* show the story*/}
          <div>
            <div class="card storyCard" >
              <img src={this.state.story.img} class="card-img" alt="lo"/>
              <div class="card-body">
                <h5 class="card-title">{this.state.story.title}</h5>
                <p class="card-text">{this.state.story.content}</p>
                {manageStoryButtons}
            </div>
          </div>
        </div>
          {/* show all story's comments*/}
        <div>
          <p className='commentSaction'>Comments:</p>
          {this.state.comments.map(comment => <Comment storyID={this.props.match.params.id} comment={comment} user={this.props.user} />)}
        </div>
          {/* view the comment form*/}
          {addCommentForm}
      </div>
    )
  }
}