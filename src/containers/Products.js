import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { API } from '../config/endpoint';
import axios from 'axios';
import '../index.css';


const styles = {
    // border: '1px solid rgb(177, 170, 170)',
    // margin: 10,
    // padding: 10,
    // width: "33.33333333333%",
    // display: 'inline-block',
    textAlign: 'left',
    paddingLeft: 30,
    // background: '#eee',
    paddingBottom: 20,
    paddingTop: 20
}

const imgStyles = {
    height: 250,
    width: 250,
    borderRadius: 6,
}

const btnStyle = {
    background: "#eeba37",
    textAlign: 'center',
    border: "1px solid",
    borderColor: "#c89411 #b0820f #99710d",
    margin: "10px 10px 0 0px !important",
    borderRadius: "3px 3px 3px 3px",
    cursor: 'pointer',
    boxShadow: "inset 0 1px 0 0 #fcf3dc",
    padding: 10,
    fontWeight: "bold",
    letterSpacing: .5,
    fontSize: 15,
    marginTop: 10,
    float: "left !important",
    textAlign: "left !important"
}
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            isErr: false,
            err: null
        }
    }

    componentDidMount() {
        axios.get(`${API}/getProducts`).then(res => {
            this.setState({ products: res.data })
        }).catch(err => {
            this.setState({ isErr: true })
        })
    }

    clickHandler() {
        this.props.history.push('/details')
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }} className="container wrap">
                <h1 style={{ textAlign: 'center' }} className="page-header">Product List</h1>
                <div className="row">
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 1</h2>
                        <img src="https://picsum.photos/1000" alt="Product" style={imgStyles} />
                        <div >Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 2</h2>
                        <img src="https://picsum.photos/400" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 3</h2>
                        <img src="https://picsum.photos/500" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 4</h2>
                        <img src="https://picsum.photos/600" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 5</h2>
                        <img src="https://picsum.photos/800" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 6</h2>
                        <img src="https://picsum.photos/900" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 7</h2>
                        <img src="https://picsum.photos/1000" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 7</h2>
                        <img src="https://picsum.photos/1000" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                    <div style={styles} className="col-md-4 product">
                        <h2>Product 7</h2>
                        <img src="https://picsum.photos/1000" alt="Product" style={imgStyles} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                        <button onClick={this.clickHandler.bind(this)} style={btnStyle}>Details</button>
                    </div>
                </div>
            </div >
        )
    }
}


export default withRouter(ProductList);



