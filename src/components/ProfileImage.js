function ProfileImage(props){
    console.log("img props", props)
    return ( 
        <img src={props.image} className="profile" alt="profile"/>
    );
}
export default ProfileImage;