export const PostHeader = ({ username, location, profilePic }) => {
    return(
        <div className="postHeader">
            <img src={profilePic} alt="Poster's Profile Picture" className="userImage"></img>
            <div>
                <p className="username postHeaderText">{username}</p>
                <p className="location postHeaderText">{location}</p>
            </div>
        </div>
    )
}