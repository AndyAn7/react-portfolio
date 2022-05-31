import React from 'react';  
import './index.sass';

const Project = (props) => {
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">{props.project.name}
                    </h1>
                    <img
                    className="card-image"
                    src={props.project.image}
                    alt={props.project.name}
                    />
                </div>

                <p className="card-text">{props.project.description}
                </p>
                <div className="card-links">
                    <a
                    href={props.project.github_link}
                    rel="noreferrer"
                    target="_blank"
                    className="card-link"
                    >
                    GitHub
                    </a>
                    <a
                    href={props.project.deployed_link}
                    rel="noreferrer"
                    target="_blank"
                    className="card-link"
                    >   
                    Deployment/Tutorial
                    </a>
                </div>
            </div>
        </>
    )
}

export default Project;