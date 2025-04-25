import React from "react";
import FormUserList from "./FormUserList";
import ListItem from "./ListItem";
import FormInfo from "./FormInfo";

export default function UserList() {
  const students = [
    {
      id: 1,
      StudentCode: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      gender: "Nam",
    },
    {
      id: 2,
      StudentCode: "SV002",
      studentName: "Nguyễn Văn B",
      age: 21,
      gender: "Nam",
    }, {
      id: 3,
      StudentCode: "SV003",
      studentName: "Nguyễn Văn C",
      age: 22,
      gender: "Nam",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <FormUserList />
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                  </select>
                </div>
              </div>
            </div>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <div className="card-body">
              <h3 className="card-title">Danh sách sinh viên</h3>
              <div className="table-responsive pt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã sinh viên</th>
                      <th>Tên sinh viên</th>
                      <th>Tuổi</th>
                      <th>Giới tính</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {students.map((std, index)=> 
                   <tr key={index}>
                     
                   <td>{std.id}</td>
                   <td>{std.StudentCode}</td>
                   <td>{std.studentName}</td>
                   <td>{std.age}</td>
                   <td>{std.gender}</td>
                   <td>
                     <div className="template-demo">
                       <button
                         type="button"
                         className="btn btn-danger btn-icon-text"
                       >
                         Xem
                       </button>
                       <button
                         type="button"
                         className="btn btn-warning btn-icon-text"
                       >
                         Sửa
                       </button>
                       <button
                         type="button"
                         className="btn btn-success btn-icon-text"
                       >
                         Xóa
                       </button>
                     </div>
                   </td>
                 </tr>

                  )}
                   
                    <ListItem />
                  </tbody>
                </table>
              </div>
            </div>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <div className="col-5 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Thông tin sinh viên</h3>
              <FormInfo />
            </div>
          </div>
        </div>
        {/* END FORM SINH VIÊN */}
      </div>
    </>
  );
}
