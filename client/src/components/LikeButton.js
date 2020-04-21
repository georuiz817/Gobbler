import React from 'react'

const LikeButton= (props) => {
    return( 
        <div>
            <button class="btn btn-warning" onClick={props.handleLike}><span  aria-label="turkey" role="img">Likes 🦃</span></button>  
            {/*presentational componenent that has a props of handleLike function*/}
        </div>
        )
    }

export default LikeButton