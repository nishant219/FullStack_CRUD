import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    var addUser = { name:fname, email:email, age:age };
    
    console.log(addUser);

// const link=process.env.REACT_APP_BACKEND;


    const response = await fetch("http://localhost:8000/api/create", {
      method: "POST",
      headers: {
         Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addUser),
    });


    const result = await response.json();

    //if responce not handle properly
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      setAge(0);
      setError("");
      navigate("/read");
    }
  };


  return (

    <div className="container my-2">
      <h2 className="h1 text-center">Fill the data</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            //with the help of below 2 lines we are storing entered data in use states
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
