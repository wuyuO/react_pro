import { SELECT_SUBREDDIT } from "../Actions"

const selectedSubreddit = (state = "reactjs", action) => {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit
  default:
    return state
  }
}

export default selectedSubreddit
