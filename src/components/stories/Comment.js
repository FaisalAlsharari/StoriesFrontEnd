import React, { Component } from 'react'
import apiUrl from '../../apiConfig';
import axios from 'axios'

export default class Comment extends Component {
        // Delete Story
        deleteComment = (e) => {
            e.preventDefault();
            console.log('my props', this.props);
            const storyID = this.props.storyID
            const commentID = this.props.comment._id
            axios.delete(`${apiUrl}/stories/${storyID}/comments/${commentID}`, {
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
    render() {
        const userObject = localStorage.getItem('user')
        let deleteCommentButton = ''
        console.log('userObject:', userObject)

        if(this.props.user && userObject == this.props.comment.owner){
            // <button onClick={this.deleteComment}>Delete Comment</button>
            deleteCommentButton = (<input class="deleteButton" onClick={this.deleteComment} width="25px" height="25px" type="image" src="https://img.icons8.com/ios-glyphs/80/000000/delete-sign.png" />)
        }
        return (
            // <div class="col-3">
                <div className="card comments">
                    <div>
                        <p className="card-title">{this.props.comment.owner} reply: {this.props.comment.comment} <span>{deleteCommentButton}</span></p>
                    </div>
                </div>
        //   </div>
        )
    }
}
