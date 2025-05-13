import React, { useReducer } from "react";

export default function ManagerForm() {
  const initialState = {
    name: "",
    email: "",
  };

  const reduce = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };

  
    const [state, dispatch] = useReducer(reduce, initialState);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Họ Tên", state.name);
      console.log("Email", state.email);
    };

    return (
    
        <form onSubmit={ handleSubmit } style={{ padding: "2rem" }}>
          <div>
            <label>Họ và tên: </label>
            <br />
            <input
              type="text"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <label>Email</label>
            <br />
            <input
              type="text"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
          </div>
          <br />
          <button type="submit">Gửi</button>
        </form>
      
    );
  };

  

