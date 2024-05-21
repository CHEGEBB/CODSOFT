import './Tasks.scss'

const Tasks = () => {
   const TaskManager = () =>{
    
   }

    
    return ( 


        <div className="tasks">
        <div className="task-bar">
            <div className="task-bar__title">
                <h1>Tasks</h1>
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
                            <th>Assigned To</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
           </div>
        </div>
        </div>
        
     );
}
 
export default Tasks;