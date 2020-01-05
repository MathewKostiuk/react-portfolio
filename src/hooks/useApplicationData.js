import { useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  async function getProjects() {
    try {
      const response = await axios({
        method: 'get',
        url: '/projects',
        responseType: 'json'
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProjects();
  });

  return;
}

