import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {
    userNameInput: '',
    commentInput: '',
    commentsList: [],
  }

  onChangeNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {userNameInput, commentInput, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="title">Comments</h1>
          <div className="comments-inputs">
            <form className="form">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-box"
                placeholder="Your Name"
                value={userNameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                className="comment-box"
                value={commentInput}
                rows="6"
                placeholder="Your Comment"
                onChange={this.onChangeCommentInput}
              />
              <button type="submit" className="addcomment-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <p className="comments-text">
            <span className="comments-count">{commentsList.length}</span> Comments
          </p>
        </div>
      </div>
    )
  }
}

export default Comments
