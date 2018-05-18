import axios from "axios";

export default {
  getCurrentUser: function(){
    return axios.get("/auth/getUser");
  },
  
  signUp: (newUser) => {
    return axios.post("/auth/signup", newUser)
  },

  login: (user) => {
    return axios.post("/auth/login", user)
  },

  logout: () => {
    return axios.get("/auth/logout");
  },
  getProject: function(){
    return axios.get("/api/projects");
  },
  saveProject: function(projectData){
    return axios.post("/api/projects",projectData);
  },
  getProject: function(id){
    return axios.get("/api/projects/"+id);
  },
  updateProject: function(id, projectData){
    return axios.post("/api/projects/"+id, projectData);
  },
  deleteProject: function(id){
    return axios.delete("/api/projects/"+id);
  },
  getTask: function(){
    return axios.get("/api/tasks");
  },
  saveTask: function(taskData){
    return axios.post("/api/tasks",taskdata);
  },
  getTask: function(id){
    return axios.get("/api/tasks/"+id);
  },
  updateTask: function(id,taskData){
    return axios.post("/api/tasks/"+id, tasktData);
  },
  deleteTask: function(id){
    return axios.delete("/api/tasks/"+id);
  }
}