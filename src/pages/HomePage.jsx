import React, { useState, useEffect } from 'react';
import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        // setProjectList(allProjects)
        //fetch accesses info from the API
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data)
            });
        // "then" overwrites async functions
    }, []);

    return (
        <div>
            {projectList.map((projectData, keey) => {
                // return <div key={key}>{projectData.title}</div>;
                return <ProjectCard keyyyy={keey} projectData={projectData} />
            })}
            <Link to={`/createProject`}>
                Create Project
            </Link>
        </div>
    );
};

export default HomePage;