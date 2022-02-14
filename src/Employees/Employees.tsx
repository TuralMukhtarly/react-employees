import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Employee } from "./Employee";

export interface IEmployee {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const addEmployee = () => {
    const employee = {
      first_name: firstName ? firstName : "Name",
      last_name: lastName ? lastName : "Surname",
      id: 5,
      email: email ? email : "user@gmail.com",
      avatar: "avatar",
    };

    const newUsers = [employee, ...employees];
    setEmployees(newUsers);
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  const inputFirstNameHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFirstName(e.currentTarget.value);
  };
  const inputLastNameHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLastName(e.currentTarget.value);
  };
  const inputEmailHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.currentTarget.value);
  };

  const removeEmployee = (id: number) => {
    const newUsers = employees && employees.filter((u) => u.id !== id);
    setEmployees(newUsers);
  };

  const renderEmployees =
    employees &&
    employees.map((user, i) => (
      <Employee key={i} user={user} removeEmployee={removeEmployee} />
    ));
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((res) => setEmployees(res.data.data));
  }, []);
  return (
    <>
      <div>
        <div style={{ display: "flex", margin: "20px 5px 0 0", justifyContent: "center"}}>
          <input
            onChange={inputFirstNameHandler}
            value={firstName}
            placeholder="Name"
          />
          <input
            onChange={inputLastNameHandler}
            value={lastName}
            placeholder="Surname"
          />
          <input
            onChange={inputEmailHandler}
            value={email}
            placeholder="Email"
          />
          <button
            onClick={() => {
              addEmployee();
            }}
            style={{
              color: "white",
              border: "none",
              fontSize: "20px",
              backgroundColor: "green",
              cursor: "pointer",
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderEmployees}</div>
    </>
  );
}
