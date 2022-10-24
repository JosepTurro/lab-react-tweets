import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {   // aqui fem el destructuring de la linea 40 de app.js

//canvis
 
  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image} />

<div className="body">
  
  <div className="top">
    <User userData={props.tweet.user} />
    <Timestamp time={props.tweet.timestamp} />
  </div>

  <Message message={props.tweet.message} />
  <Actions />
  
</div>

<i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
