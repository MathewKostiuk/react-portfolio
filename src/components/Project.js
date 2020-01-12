import React from 'react';

export default function Project({
  name,
  id,
  openProject
}) {

  const onOpen = () => {
    openProject(id);
  }

  return(
    <li onClick={onOpen}>
      { name }
    </li>
  )
}
