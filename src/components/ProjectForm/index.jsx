import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
    const [FormData, setFormData] = useState({
        title: '',
        description: '',
        goal: '',
        cause: 'goods',
        image: '',
        is_open: true,
        is_active: true,
        // owner: 
    });
    // "title": "Fido new fund",
    // "description": "Fido hurt his leg",
    // "goal": 150,
    // "cause":"adoption",
    // "image": "https://via.placeholder.com/300.jpg",
    // "is_open": true,
    // "is_active":true,
    // "owner": "Ash"

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };
    // console.log(FormData)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();


        postData().then((response) => {

            navigate('/')
            console.log(response)
        })

    }

    const postData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "authorization": `token ${token}`
            },
            body: JSON.stringify(FormData)
        })
        return response.json();
    }


    return (
        <form>
            <div>
                <label htmlFor='Title'>Title:</label>
                <input onChange={handleChange} type="text" id="title" placeholder='Enter Title'></input>
            </div>
            <div>
                <label htmlFor='Description'>Description:</label>
                <input onChange={handleChange} type="text" id="description" placeholder='Enter Description'></input>
            </div>
            <div>
                <label htmlFor='Goal'>Goal:</label>
                <input onChange={handleChange} type="number" id="goal" placeholder='Enter Goal'></input>
            </div>
            <div>
                <label htmlFor='Cause'>Cause:</label>

                <select onChange={handleChange} name="cause" id="cause">
                    <option value="goods">Goods</option>
                    <option value="adoption">Adoption</option>
                    <option value="shelter">shelter</option>
                    <option value="animal healthcare">animal healthcare</option>
                    <option value="events">Events</option>
                </select>

            </div>
            <div>
                <label htmlFor='Image'>Image:</label>
                <input onChange={handleChange} type="url" id="image" placeholder='Enter Image'></input>
            </div>
            <button onClick={handleSubmit} type="submit">Create</button>
        </form>
    );
};

export default ProjectForm;