import "./Tasks.scss";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "TASK-01",
      projectName: "ProjectProctor",
      client: "John Doe",
      status: "Completed",
      type: "Design",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "12/12/2021"
    },
    {
      id: "TASK-02",
      projectName: "SmartLife Web App",
      client: "Phil Daniels",
      status: "In progress",
      type: "Design",
      priority: "High",
      assignedTo: "Cara Eve",
      dueDate: "12/12/2021"
    },
    {
      id: "TASK-03",
      projectName: "Health Tracker",
      client: "Alice Smith",
      status: "Pending",
      type: "Development",
      priority: "Medium",
      assignedTo: "Bob Brown",
      dueDate: "14/12/2021"
    },
    {
      id: "TASK-04",
      projectName: "CityScape Ecommerce",
      client: "Jane Steward",
      status: "In progress",
      type: "Development",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "05/06/2024"
    },
    {
      id: "TASK-05",
      projectName: "Responsive Website",
      client: "John Hemsworth",
      status: "Completed",
      type: "Web Development",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "23/02/2024"
    },
    {
      id: "TASK-06",
      projectName: "Ecommerce App",
      client: "John Doe",
      status: "Pending",
      type: "App Development",
      priority: "Medium",
      assignedTo: "Cara Eve",
      dueDate: "12/12/2021"
    }
  ]);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (id) => {
  };

  const handleCreateTask = () => {
    const newTask =push.tasks({
        id: "",
        projectName: "",
        client: "",
        status: "",
        type: "",
        priority: "",
        assignedTo: "",
        dueDate: ""
        });
  };

  return (
    <div className="tasks">
      <div className="task-bar">
        <div className="task-bar__title">
          <h1>My Tasks</h1>
        </div>
        <div className="create-task-button">
          <button> Create Task</button>
        </div>
        <div className="task-bar__search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="task-table">
          <table className="table">
            <thead>
              <tr>
                <th>Task No</th>
                <th>Project Name</th>
                <th>Client</th>
                <th>Status</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Assigned To</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td className="data-number">{task.id}</td>
                  <td className="data-name">{task.projectName}</td>
                  <td className="data-client">{task.client}</td>
                  <td className="data-status">{task.status}</td>
                  <td className="data-type">{task.type}</td>
                  <td className="data-priority">{task.priority}</td>
                  <td className="data-assigned">{task.assignedTo}</td>
                  <td className="data-date">{task.dueDate}</td>
                  <td>
                    <button className="btn" onClick={() => handleCreateTask(task.id)}>
                      View
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
