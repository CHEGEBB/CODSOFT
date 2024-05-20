
const CreateProject = () => {
    return ( 
        <div className="project-create">
            <h1>Create Project</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" name="projectName" />
                </div>
                <div className="form-group">
                    <label htmlFor="projectDescription">Project Description</label>
                    <textarea id="projectDescription" name="projectDescription"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager</label>
                    <input type="text" id="projectManager" name="projectManager" />
                </div>
                <div className="form-group">
                    <label htmlFor="projectMembers">Project Members</label>
                    <input type="text" id="projectMembers" name="projectMembers" />
                </div>
                <div className="form-group">
                    <label htmlFor="projectDeadline">Project Deadline</label>
                    <input type="date" id="projectDeadline" name="projectDeadline" />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
     );
}
 
export default CreateProject;