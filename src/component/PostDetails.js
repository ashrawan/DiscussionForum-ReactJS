import React, { Component } from 'react';
import axios from 'axios';
import Aux from './Ax';
import {Link} from 'react-router-dom';

class PostDetails extends Component {
    
    state = {
        loadedPost : null,
        loadedComment : null
    }

    componentDidMount(){
        if(this.props.match.params.id){
          // loading post data
            axios.get('forumPost/'+this.props.match.params.id)
            .then(response => {
                this.setState({loadedPost: response.data});
                console.log(this.state.loadedPost);

                // Loading post comment  ### TODO Backend
              axios.get('/comment/allComments/'+this.props.match.params.id)
                .then(response => {
                  this.setState({loadedComment: response.data});
                  console.log(this.state.loadedComment);
              });
            });
            
        }
        
    }
    
    render() {
      let PostDetails = <p style={{textAlign:'center'}}>Sorry the post doesnt seems to exist</p>;
      let PostComments = <p style={{textAlign:'center'}}>...loading</p>;
      console.log(this.props.match.params.id);
      
      if(this.state.loadedComment){
        console.log('Triggered during Comment UI')
        console.log(this.state.loadedComment);

        let comment = this.state.loadedComment.map(c =>{
          if(c.comments){
            return <p key={c.id}>single comment</p>
          }
          else {
            return <p key={c.id}>many comments </p>
          }
        })

        PostComments = (
            <div> {comment}
          {/* //Single Comment  */}
          {/* <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
            <div className="media-body">
              <Link to={"/user/"+c.post_id.user.id}><h5 className="mt-0">{c.post_id.user.username}</h5></Link>{c.message}
            </div>

          </div> */}

          {/* // Comment with nested comments */}
          <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

              <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>

              <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>

            </div>
          </div>
          </div>
        )
      }

      if(this.state.loadedPost){
        PostDetails = (
          <div style={{marginLeft:'10%'}}>
          <h1 className="mt-4 forum-title">{this.state.loadedPost.title}</h1>

          <p className="lead">
            by&nbsp;
            <Link to={"/user/"+this.state.loadedPost.user.id}>{this.state.loadedPost.user.username}</Link>
          </p>

          <hr/>

          <p>Posted on January 1, 2018 at 12:00 PM</p>

          <hr/>

          <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>

          <hr/>

          {/* <!-- Post Content --> */}
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

          <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

          <hr/>

          {/* Comments Form */}
          <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

        
        </div>
        )
      }
        return (
            <Aux>
              {PostDetails}
              {PostComments}
            </Aux>
        );
    }
}

export default PostDetails;
