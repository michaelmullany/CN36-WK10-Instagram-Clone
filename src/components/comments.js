export const Comment = ({ likes, timeSince, username, comment, numComments }) => {
    return(
        <div className="postCommentsSection">
            <p className="likes">{likes} likes</p>
            <p><span className="username">{username}</span> {comment}</p>
            <p className="expander">View {numComments} comments</p>
            <p className="timeSince">{timeSince} hours ago</p>
        </div>
    )
}