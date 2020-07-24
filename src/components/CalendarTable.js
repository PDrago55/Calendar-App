import React, { useState } from "react";
import "./bootstrap-grid.css";
import TaskCard from "./TaskCard";
import Button from "./Button";
function CalendarTable() {
  const [addTask, setAddTask] = useState("");
  function addATask() {
    setAddTask("yes");
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-1.5 mb-3">Monday</div>
          <div className="col col-1.5">Tuesday</div>
          <div className="col col-1.5">Wednesday</div>
          <div className="col col-1.5">Thursday</div>
          <div className="col col-1.5">Friday</div>
          <div className="col col-1.5">Saturday</div>
          <div className="col col-1.5">Sunday</div>
        </div>
        <div className="row">
          <div className="col col-sm">
            {" "}
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
          <div className="col col-sm">
            <Button
              onClick={() => {
                addATask();
                console.log("clicked");
              }}
            >
              Add a Task
            </Button>
          </div>
        </div>
        <div className="row">
          {addTask === "yes" ? (
            <div className="col col-sm">
              <TaskCard />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <style>
        {`
          .col{
              border-bottom: 1px solid blue;
              border-right: 1px solid blue;
              text-align: center;
              padding: 15px;
          }`}
      </style>
    </>
  );
}

export default CalendarTable;
