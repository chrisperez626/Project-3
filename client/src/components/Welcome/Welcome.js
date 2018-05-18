import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

class Welcome extends Component {
    state={
        redirectTo:"",
        projects:""
    }
    componentDidMount(){
        this.loadProjects();
    }
    loadProjects=()=>{
        API.getAllProject().then(res=>{
            console.log(res.data[0].projectname);
            this.setState({
                projects:res.data[0].projectname
            });
        }).catch(err=>console.log(err));
    }
    handleProject=()=>{
        this.setState({redirectTo:"/projectpage"});
    }

    createProject=()=>{
        this.setState({redirectTo:"/createProject"});
    }

    render(){
        if(this.state.redirectTo){
            return <Redirect to={this.state.redirectTo} />
        }
        return(
            <div className="container">
                <h2>Projects</h2>
                <div className="grid">
                <div className="card ">
                    <div className="card-block preProject" onClick={this.handleProject}>
                        {this.state.projects}
                    </div>
                </div>
                <div className="card ">
                    <div className="card-block currProject">
                        Current Projects
                    </div>
                </div>
                <div className="card">
                    <div className="card-block newProject" onClick={this.createProject}>
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
}

export default Welcome;