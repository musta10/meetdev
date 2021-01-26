 
 
 export const signIn = (user)  => dispatch => {
    dispatch({type: "SIGN-IN", user})

}


export const signOut = () => ({
    type: "SIGN-OUT"
})

export const userCommentaire = (user_commentaires) => ({
    type: "USER-COMMENTAIRES",
    user_commentaires: user_commentaires
})                         