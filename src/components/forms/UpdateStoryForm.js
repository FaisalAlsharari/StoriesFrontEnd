import React, { Component } from 'react'
import axios from 'axios';
import apiUrl from '../../apiConfig';

export default class EditProduct extends Component {
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

        const updatedStory = {
            story: {
                type: this.state.type,
                title: this.state.title,
                content: this.state.content,
                img: this.state.img,       
            }
        }
        const storyID = this.props.match.params.id
        axios.patch(`${apiUrl}/stories/${storyID}`, updatedStory, {
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
        //-------------------------------------------------------------------
    componentDidMount() {
            const storyID = this.props.match.params.id

            axios.get(`${apiUrl}/story/${storyID}`)
            .then((response) => {
                this.setState({ 
                    type: response.data.story.type,
                    title: response.data.story.title,
                    content: response.data.story.content,
                    img: response.data.story.img,
                    });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <form className='auth-form' onSubmit={this.onSubmit}>
                <h2>Update story</h2>
                    <label htmlFor="Type">Type:</label>
                       <div>
                       <input  type="radio"
                                name="storyType"
                                id="true"
                                value={this.state.type}
                                checked={this.state.type==='true'}
                                onChange={this.onChangeStoryType}
                                />True
                        <input  type="radio"
                                name="storyType"
                                id="imaginations"
                                value={this.state.type}
                                checked={this.state.type==='imaginations'}
                                onChange={this.onChangeStoryType}
                                />Imaginations
                       </div>

                        <input  type="text"
                                value={this.state.title}
                                onChange={this.onChangeStoryTitle}
                                />
                        <input  type="text"
                                value={this.state.content}
                                onChange={this.onChangeStoryContent}
                                />
                        <input  type="text"
                                value={this.state.img}
                                onChange={this.onChangeStoryImg}
                                />
                    <input type="submit" value="Update"/>
                </form> 
            </div>
        )
    }
}