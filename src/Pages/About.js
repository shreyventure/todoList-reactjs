import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="mt-3">About</h1>
      <p>Here's something about this project.</p>
      <p className="lead mt-5">
        Todo List is an application created using{" "}
        <a href="https://reactjs.org/">React.js</a>. <br /> It makes use of
        local-storage to save states, hence it displays difference todos on
        different devices.
      </p>
      <p className="mt-5 bg-dark d-flex text-light p-2 align-items-center shadow">
        <strong className="mx-2 font-weight-bold align-content-center ">
          Version:
        </strong>
        1.2.0
      </p>
    </div>
  );
};

export default About;
