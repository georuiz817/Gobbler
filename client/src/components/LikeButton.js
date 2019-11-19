
import React from 'react'


const LikeButton= (props) => {
    return( 
        <div>
            <button onClick={props.handleLike}>Like</button> 
            {/* presentational componenent that has a props of handleLike function, this is a stateless componenet */}
        </div>
    )
}


export default LikeButton