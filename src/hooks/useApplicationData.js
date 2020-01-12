import { useEffect, useReducer } from 'react';
import axios from 'axios';

export default function useApplicationData(data) {

  const initialState = {
    projects: data,
    openProject: null
  }

  const SET_PROJECTS = 'SET_PROJECTS';
  const SET_OPEN_PROJECT = 'SET_OPEN_PROJECT';

  const reducers = {
    [SET_PROJECTS]: (state, { projects }) => {
      return { ...state, projects }
    },
    [SET_OPEN_PROJECT]: (state, { id }) => {
      const openProject = state.projects.filter(project => project.id === id);
      return { ...state, openProject: openProject }
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
        url: '/api/projects',
        responseType: 'json'
      });
      dispatch({ type: SET_PROJECTS, projects: response.data});
    } catch (error) {
      console.error(error);
    }
  }

  const openProject = (id) => {
    console.log('here', id);
    dispatch({ type: SET_OPEN_PROJECT, id: id });
  }

  useEffect(() => {
    // getProjects();
  }, []);

  return { state, openProject };
}

