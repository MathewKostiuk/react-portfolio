import { useEffect, useReducer } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const initialState = {
    projects: []
  }

  const SET_PROJECTS = 'SET_PROJECTS';

  const reducers = {
    [SET_PROJECTS]: (state, { projects }) => {
      return { ...state, projects }
    }
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProjects() {
    try {
      const response = await axios({
        method: 'get',
        url: '/projects',
        responseType: 'json'
      });
      dispatch({ type: SET_PROJECTS, projects: response.data});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return { state };
}

