import React from 'react';
import ProjectForm from '../components/ProjectForm';

const ProjectCreate = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <ProjectForm /> : <h1>You are not logged in </h1>
};

export default ProjectCreate;