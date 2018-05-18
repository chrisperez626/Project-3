import React from 'react';
import "./style.css";

const Home = () => {
    return(
        <div className="container">
            {/* <h1> This is Home Page </h1> */}
            <h2>Projects</h2>
            <div className="grid">
            <div className="card ">
                <div className="card-block preProject">
                    Previous Projects
                </div>
            </div>
            <div className="card ">
                <div className="card-block currProject">
                    Current Projects
                </div>
            </div>
            <div className="card">
                <div className="card-block newProject">
                    + Create New Projects
                </div>
            </div>
            </div>
            <h2>Boards</h2>
            <div className="card board-card">
                <div className="card-block">
                    Task1
                </div>
            </div>
            <br/>
            <div className="card board-card">
                <div className="card-block">
                    Task2
                </div>
            </div>
            <br/>
            <div className="card board-card">
                <div className="card-block">
                    Task3
                </div>
            </div>
            <br/>
            <h2>Team</h2>
            <div className="card">
                <div className="card-block">
                    Create new Team
                </div>
            </div>
        </div>
    );
}

export default Home;