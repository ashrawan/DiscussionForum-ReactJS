import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import Aux from './Ax';
import ForumManagement from './ForumManagement';
import Layout from './Layout';

class ForumList extends Component {
        
        state = {
            posts:[],
            selectedPost:{}
        }

        componentDidMount(){
            axios.get('forumPost/all')
            .then(response => {
                console.log(response);
                this.setState({posts: response.data});
            });
        }
    

    postSelectedHandler = ( id ) => {
        console.log(id);
        // this.props.history.push('/post/' + id );
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        posts = this.state.posts.map(postItem => {
            return (
                <Post key={postItem.id} post={postItem} user={postItem.user} onTitleClick={() => this.postSelectedHandler( postItem.id )}/>
            );
        })
        return (
            <Aux>
                <div className="card my-4">
                    <h5 className="card-header">Post</h5>
                    <div className="card-body">
                        {posts}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ForumList;