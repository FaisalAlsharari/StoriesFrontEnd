
import React, { Component } from 'react'
import axios from 'axios';
import apiUrl from '../../apiConfig';

export default class AddStoryForm extends Component {
    constructor(props){
        super(props)

        this.onChangeStoryType = this.onChangeStoryType.bind(this);
        this.onChangeStoryTitle= this.onChangeStoryTitle.bind(this);
        this.onChangeStoryContent= this.onChangeStoryContent.bind(this);
        this.onChangeStoryImg = this.onChangeStoryImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            type: '',
            title: '',
            content: '',
            img: '',
        }

    }

    onChangeStoryType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeStoryTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeStoryContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onChangeStoryImg(e) {
        this.setState({
            img: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newStory = {
            story: {
                type: this.state.type,
                title: this.state.title,
                content: this.state.content,
                img: this.state.img,       
            }
        }

        axios.post(`${apiUrl}/stories`, newStory, {
            headers: {
                'Authorization': `Bearer ${this.props.user.token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res.data))

        this.setState({
            type: '',
            title: '',
            content: '',
            img: '',
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form className='auth-form' onSubmit={this.onSubmit}>
                <h2>Add new story</h2>
                    <label htmlFor="Type">Type:</label>
                       <div>
                       <input  type="radio"
                                name="storyType"
                                id="true"
                                value="true"
                                checked={this.state.type==='true'}
                                onChange={this.onChangeStoryType}
                                />True
                        <input  type="radio"
                                name="storyType"
                                id="imagination"
                                value="imagination"
                                checked={this.state.type==='imagination'}
                                onChange={this.onChangeStoryType}
                                />Imagination
                       </div>

                        <input  type="text"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.onChangeStoryTitle}
                                />
                        <input  type="text"
                                placeholder="content"
                                value={this.state.content}
                                onChange={this.onChangeStoryContent}
                                />
                        <input  type="text"
                                placeholder="img"
                                value={this.state.img}
                                onChange={this.onChangeStoryImg}
                                />
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}
