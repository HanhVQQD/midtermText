import React from "react";
const axios = require('axios').default;

class Home extends React.Component {
    constructor (props){
        super(props)
        this.state={
            News:[]
        }
    }

    componentDidMount(){
        axios.get('https://61bc10bdd8542f001782451c.mockapi.io/News')
        .then(res=>{
            var News = res.data;
            this.setState({News})
        }
        )
    }
    render() {
        return (
            <div> {this.state.News.map(News => <div className="categories"><p>{News.title}</p></div>) } </div>
        );
    }
}


export default Home;