import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="mt-3">Contact</h1>
      <p>Hi! I'm Shreyas. Lets get in touch.😊</p>
      <form className="mt-5">
        <div className=" form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            placeholder="First Name"
          />
          <label htmlFor="fname">First Name</label>
        </div>

        <div className=" form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
          <label htmlFor="lname">Last Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            name="subject"
          />
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea">Enter message here...</label>
        </div>
        <div className="my-3">
          <input
            type="submit"
            className="form-control bg-success text-light"
            id="submit"
            placeholder="submit"
            name="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
