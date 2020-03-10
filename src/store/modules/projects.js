import axios from "axios";

state = {
    projects:[]
};

getters = {
    Projects:(state)=>state.projects
};

actions = {
    async fetchProjects({commit}){
        const response = await axios.get('api/projects/');

        commit("getProjects", response.data);
    },
    async addProject({commit},project){
        const response = await axios.post("api/projects/", project);
        commit("newProject", response.data);
    },
    async editProject({commit}, project){
        const response = await axios.put(`api/projects/${id}/`, project);
        commit("editProject", response.data);
    },
    async deleteProject({commit}, id){
        await axios.delete(`api/projects${id}`);
        commit("deleteProject", id);
    }
};

mutations = {
    getProjects:(state, projects)=>(state.projects=projects),
    newProject:(state, project)=>state.projects.unshift(project),
    deleteProject:(state, id)=>state.projects=state.filter(ptoject=>project !== id),
    editProject:(state, project)=>(console.log(project))
};

export default {
    state,
    getters,
    actions,
    mutations
}