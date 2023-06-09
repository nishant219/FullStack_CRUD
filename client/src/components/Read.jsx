import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {

  const [data, setData] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();


  //to delete
  async function handleDelete(id) {
    const response = await fetch(`http://localhost:8000/api/${id}`, {
      method: "DELETE",
    });
    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }


  async function getData() {
    const response = await fetch("http://localhost:8000/api/allUsers");
    const result = await response.json();
    console.log("Result ==> ", result);
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
      setError("");
    }
  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger"> {error} </div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <span className="card-link">
                <button className="btn btn-success" onClick={()=>navigate("/update")} >	Edit  </button>
                  {/* Edit */}
                  </span>
                <span className="card-link" onClick={() => handleDelete(ele._id)}>
                <button className="btn btn-secondary">	Delete </button>
                  {/* Delete */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Read;