 export const signIn = (token, name, email, id) => ({
    type: "SIGN-IN",
    token: token,
    name: name,
    email: email,
    id: id
})


export const signOut = () => ({
    type: "SIGN-OUT"
})

export const userCommentaire = (user_commentaires) => ({
    type: "USER-COMMENTAIRES",
    user_commentaires: user_commentaires
})                         