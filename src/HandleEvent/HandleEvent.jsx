import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (event) => {
    // alert("Hello cyber");
    event.target.className = 'btn btn-danger';
  };

  render() {
    const handleEvent = (event) => {
        alert("Hello cyber123");
      };
    return (
      <div className="container">
        <h3>Handle event</h3>
        {/* Cách định nghĩa function cho 1 sự kiện của 1 nút xử lý  */}
        <button
          className="btn btn-success"
          onClick={(event) => {
            alert("hello cybersoft");
          }}
        >
          Click me
        </button>
        <br/>
        {/* Khi có nhiều nút xử lý cùng thực thi 1 chức năng thì ta có thể khai báo function riêng tại biến hoặc thuộc tính */}
        <button className="btn btn-success" onClick={this.handleClick}>
          Click me
        </button>
          <br/>
        <button className="btn btn-success" onClick={handleEvent}>
          Click me
        </button>
      </div>
    );
  }
}
