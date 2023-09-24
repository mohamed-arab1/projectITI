function addToFavorite (movie){
    return {
        type: 'SET_FAVORITE',
        payload : movie
    }
}

export default addToFavorite;