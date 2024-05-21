import React, { useState } from 'react';
import './Tasks.scss';

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

  const handleEdit = (id, field, value) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, [field]: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCreateTask = () => {
    const newTask = {
      id: "", // You can generate a unique id here, or leave it empty if you have a mechanism for generating ids later
      projectName: "",
      client: "",
      status: "",
      type: "",
      priority: "",
      assignedTo: "",
      dueDate: ""
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="tasks">
      <div className="task-bar">
        <div className="task-bar__title">
          <h1>My Tasks</h1>
        </div>
        <div className="create-task-button">
          <button onClick={handleCreateTask}>Create Task</button>
        </div>
        
        <div className="task-bar__search">
          <input type="text" placeholder="Search..." />
        </div>
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
                <td className="data-number">
                <input
                    type="string"
                    value={task.id}
                    onChange={(e) => handleEdit(task.id, "id", e.target.value)}
                />
                </td>
                <td>
                <td className="data-name">
                  <input
                    type="text"
                    value={task.projectName}
                    onChange={(e) => handleEdit(task.id, "projectName", e.target.value)}
                  />
                  </td>
                </td>
                <td className="data-client">
                  <input
                    type="text"
                    value={task.client}
                    onChange={(e) => handleEdit(task.id, "client", e.target.value)}
                  />
                </td>
                <td className="data-status">
                  <input
                    type="text"
                    value={task.status}
                    onChange={(e) => handleEdit(task.id, "status", e.target.value)}
                  />
                </td>
                <td className="data-type">
                  <input
                    type="text"
                    value={task.type}
                    onChange={(e) => handleEdit(task.id, "type", e.target.value)}
                  />
                </td>
                <td className="data-priority">
                  <input
                    type="text"
                    value={task.priority}
                    onChange={(e) => handleEdit(task.id, "priority", e.target.value)}
                  />
                </td>
                <td className="data-assigned">
                  <input
                    type="text"
                    value={task.assignedTo}
                    onChange={(e) => handleEdit(task.id, "assignedTo", e.target.value)}
                  />
                </td>
                <td className="data-date">
                  <input
                    type="text"
                    value={task.dueDate}
                    onChange={(e) => handleEdit(task.id, "dueDate", e.target.value)}
                  />
                </td>
                <td>
                  <button className="btn" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
