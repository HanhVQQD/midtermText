import React, { Component } from 'react'
const axios = require('axios').default;


export default class World extends Component {
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
        <div>
            <div>
                <h3>Thế giới</h3>
            </div>
            <div className='categories1'> {this.state.News.map(News=><div className="categories"><p>{News.title}</p></div>) } </div>
        </div>
        )
  }
}
