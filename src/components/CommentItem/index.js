import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'button active': 'button'
  const likeImageUrl = isLiked 
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    const {toggleisLiked} = props
    toggleisLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img
            src={likeImageUrl}
            className="like-image"
            alt="like"
          />
          <button type="button" onClick={onClickLike} className={likeTextClassName}>Like</button>
        </div>
        <button className="button" onClick={onDeleteComment} type="button" data-testid="delete">
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
