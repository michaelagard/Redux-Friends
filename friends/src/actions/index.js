import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';

export const addFriend = friend => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .post('http://localhost:5000/api/friends', friend)

      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
        console.log(response.data);
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/api/friends')

      .then(response => {
        console.log(response.data);
        dispatch({ type: FETCHED, payload: response.data });
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};
