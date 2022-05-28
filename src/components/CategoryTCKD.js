import React, { Component } from "react";
const axios = require("axios").default;

class BigNews extends Component {
  
  render() {
    <div className="BigBlock">
      <img src={this.props.news.img} className="card-img-top" alt="" />
      <h3 className="card-title">{this.props.news.title} </h3>
      <p>{this.props.news.timeup}</p>
    </div>;
  }
}


class MiniNews extends Component {
  render () {
    <div className="card mb-3 d-flex align-items-center justify-content-center">
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center">
          <img src={this.props.news.img} className="img-fluid ms-3" alt="" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="card-title">
              {this.props.news.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}








class CategoryTCKD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      News: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://61bc10bdd8542f001782451c.mockapi.io/News")
      .then((res) => {
        var News = res.data;
        this.setState({ News });
      });
  }

  render() {
    return (
      <div className="container CategoryWorld">
        {/* <div>
          {" "}
          {this.state.News.map((News) => (
            <div className="categories">
              <p>{News.title}</p>
            </div>
          ))}{" "}
        </div> */}
<div>z</div>
        <div className="MiniBlock">
          {/* <div>
                <img src="https://flowershop.com.vn/wp-content/uploads/2020/09/y-nghia-hoa-cuc-hoa-mi-6-min.jpg" alt="" />
                <h5>Title</h5>
                <p>Time</p>
            </div> */}
        </div>
      </div>
    );
  }
}

export default CategoryTCKD;
