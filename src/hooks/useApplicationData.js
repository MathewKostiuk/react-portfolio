import { useEffect, useReducer } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://vast-sierra-75132.herokuapp.com';

export default function useApplicationData() {

  const initialState = {
    projects: [],
    openProject: null
  }

  const SET_PROJECTS = 'SET_PROJECTS';
  const SET_OPEN_PROJECT = 'SET_OPEN_PROJECT';

  const reducers = {
    [SET_PROJECTS]: (state, { projectData }) => {
      const allProjects = projectData;
      const currentProjects = projectData.filter(project => project.current === true);
      const pastProjects = projectData.filter(project => project.current === false);
      const projects = {
        allProjects,
        currentProjects,
        pastProjects
      }
      return { ...state, projects }
    },
    [SET_OPEN_PROJECT]: (state, { id }) => {
      const openProject = state.projects.allProjects.filter(project => project.id === id);
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
      console.log(response);
      dispatch({ type: SET_PROJECTS, projectData: response.data});
    } catch (error) {
      console.error(error);
    }
  }

  const openProject = (id) => {
    dispatch({ type: SET_OPEN_PROJECT, id: id });
  }

  useEffect(() => {
    getProjects();
  }, []);

  return { state, openProject };
}

