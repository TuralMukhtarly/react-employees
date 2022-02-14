import React from "react";
import { IEmployee } from "./Employees";

type PropsType = {
  user: IEmployee;
  removeEmployee: (id: number) => void;
};
export const Employee: React.FC<PropsType> = ({ user, removeEmployee }) => {
  const deleteUser = () => {
    removeEmployee(user.id);
  };
  return (
    <div
      style={{
        border: "1px solid red",
        width: "200px",
        padding: "20px",
        margin: "10px 5px 0 0",
      }}
    >
      <img src={user.avatar} alt="" />
      <div>Name: {user.first_name}</div>
      <div>Surname: {user.last_name}</div>
      <div>Email: {user.email}</div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
      >
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={deleteUser}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
