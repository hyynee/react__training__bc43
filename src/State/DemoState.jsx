import React, { Component } from "react";
import DemoLogin from "./DemoLogin";
import BaiTapChonXe from "./BaiTapChonXe";
import DemoChangeFontSize from "./DemoChangeFontSize";
import DemoChangeColor from "./DemoChangeColor";

export default class DemoState extends Component {
  render() {
    return (
      <div style={{marginBottom:500}}>
        <DemoLogin></DemoLogin>
        <BaiTapChonXe></BaiTapChonXe>
        <DemoChangeFontSize></DemoChangeFontSize>
        <hr/>
        <DemoChangeColor></DemoChangeColor>
      </div>
    );
  }
}
