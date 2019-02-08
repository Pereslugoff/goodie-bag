import axios from 'axios'


const initialState = {
  candy: []
}

const GET_CANDY = "GET_CANDY"

export const getCandy = (candyArr) => ({
  type: GET_CANDY,
  candy: candyArr
})

export const getCandyThunk = () => {
  return async (dispatch) => {
    const candies = await axios.get("/api/candy")
    console.log("This is the candy we're sending over to state", candies.data.data)
    dispatch(getCandy(candies.data.data))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDY:
      return {...state, candy: action.candy}
    default:
      return state
  }
}

export default rootReducer
