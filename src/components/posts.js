import { Comment } from "./comments";
import { PostHeader } from './postHeader';

export const Post = ({ imgUrl, imgAlt, username, likes, timeSince, comment, numComments, location, profilePic }) => {
    return(
        <div className="post">
            <PostHeader username={username} location={location} profilePic={profilePic} />
            <img src={imgUrl} alt={imgAlt}></img>
            <p>Image Interaction</p>
            <Comment likes={likes} timeSince={timeSince} username={username} comment={comment} numComments={numComments} />
        </div>
    )
}