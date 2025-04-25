import React, { useEffect, useState } from 'react';
import "../baitap05.css";
import ToggleInfo from '../baitap02/ToggleInfo';

export default function TodoApp() {
  // Danh sách công việc ban đầu
  const [taskList, setTaskList] = useState(()=>{
    const savedTask= localStorage.getItem("taskList");
    return savedTask ? JSON.parse(savedTask):[];
  })
  /*   [
    {
      id: Date.now(),
      text: "Giặt quần áo",
      completed: false,
    },
    {
      id: Date.now() + 1,
      text: "Nấu cơm",
      completed: false,
    },
  ]); */
  
  const [task, setTask]= useState("");

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask=()=>{
    console.log("click");
    const newTask={
      id: Date.now(),
      text: task,
      completed: false,

    };
    setTaskList([...taskList, newTask]);
    setTask("");
    
  };
  
  const handleInput=(e)=>{
   setTask(e.target.value);
  };

  const toggleTaskStatus =(id)=>{
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const deleteTask=(id)=>{
    if(confirm("bạn có chắc muốn xóa công việc này không")){
      const updatedTasks= taskList.filter(task=> task.id !== id);
      setTaskList(updatedTasks);
      localStorage.setItem("taskList", JSON.stringify(updatedTasks));   
    }};
 


  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={(e)=>e.preventDefault()}>
                    <div className="form-outline flex-fill">
                      <input type="text" 
                             id="form2"
                             className="form-control"
                             value={task} 
                             onChange={handleInput}
                             />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button type="submit" className="btn btn-info ms-2" onClick={handleAddTask}>
                      Thêm
                    </button>
                  </form>

                  <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {taskList.map((el, index) => (
                          <li
                            key={index}
                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultChecked={el.completed}
                                onChange={()=>toggleTaskStatus(el.id)}
                                readOnly
                              />
                              <span style={{ textDecoration: el.completed ? "line-through" : "none" }}>
                                {el.text}
                              </span>
                            </div>
                            <div>
                              <a href="#!" className="text-info" title="Sửa công việc">
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a href="#!" 
                                 className="text-danger" 
                                 title="Xóa công việc"
                                 onClick={()=>deleteTask(el.id)}
                                 >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

