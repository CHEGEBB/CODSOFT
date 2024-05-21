import './Tasks.scss'

const Tasks = () => {
   const TaskManager = () =>{
    
   }

    
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
                        <tr>
                            <td>TASK-01</td>
                            <td>ProjectProctor</td>
                            <td>John Doe</td>
                            <td>Completed</td>
                            <td>Design</td>
                            <td>High</td>
                            <td>John Doe</td>
                            <td>12/12/2021</td>
                            <td>
                                <button className="btn">View</button>
                                <button className="btn">Edit</button>
                                <button className="btn">Delete</button>
                            </td>
                           </tr>
                            <tr>
                             <td>TASK-02</td>
                             <td>ProjectProctor</td>
                             <td>John Doe</td>
                             <td>Completed</td>
                             <td>Design</td>
                             <td>High</td>
                             <td>John Doe</td>
                             <td>12/12/2021</td>
                             <td>
                                  <button className="btn">View</button>
                                  <button className="btn">Edit</button>
                                  <button className="btn">Delete</button>
                             </td>
                            </tr>
                            <tr>
                             <td>TASK-03</td>
                             <td>ProjectProctor</td>
                             <td>John Doe</td>
                             <td>Completed</td>
                             <td>Design</td>
                             <td>High</td>
                             <td>John Doe</td>
                             <td>12/12/2021</td>
                             <td>
                                  <button className="btn">View</button>
                                  <button className="btn">Edit</button>
                                  <button className="btn">Delete</button>
                             </td>
                            </tr>
                            <tr>
                                <td>TASK-04</td>
                                <td>SmartHome Web App</td>
                                <td>Phil Daniels</td>
                                <td>Completed</td>
                                <td>Development</td>
                                <td>High</td>
                                <td>Phil Daniels</td>
                                <td>12/12/2021</td>
                                <td>
                                  <button className="btn">View</button>
                                  <button className="btn">Edit</button>
                                  <button className="btn">Delete</button>
                             </td>
                            </tr>
                            <tr>
                                <td>TASK-05</td>
                                <td>SmartHome Web App</td>
                                <td>Phil Daniels</td>
                                <td>Completed</td>
                                <td>Development</td>
                                <td>High</td>
                                <td>Phil Daniels</td>
                                <td>12/12/2021</td>
                                <td>
                                  <button className="btn">View</button>
                                  <button className="btn">Edit</button>
                                  <button className="btn">Delete</button>
                             </td>
                            </tr>
                            <tr>
                                <td>TASK-06</td>
                                <td>SmartHome Web App</td>
                                <td>Phil Daniels</td>
                                <td>Completed</td>
                                <td>Development</td>
                                <td>High</td>
                                <td>Phil Daniels</td>
                                <td>12/12/2021</td>
                                <td>
                                  <button className="btn">View</button>
                                  <button className="btn">Edit</button>
                                  <button className="btn">Delete</button>
                             </td>
                            </tr>
                    </tbody>
                </table>
           </div>
        </div>
        </div>
        
     );
}
 
export default Tasks;