import React, { Component } from 'react';
import { connect } from 'react-redux'
import { muneebInfo, hanzalaInfo } from '../actions/action1';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={
            //here is action dispatching
            () => {
              this.props.setUser1()
            }}>Show Muneeb</button>
          <br />
          <button onClick={
            //here another action dispatching
            () => {
              this.props.setUser2()
            }}>Show Hanzala</button>
          {/*this props is coming from mapDispatchToProps */}
          <h1>{this.props.user.name}</h1>
          <h1>{this.props.user.age}</h1>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    //this user property will be available in Component props
    user: state.userInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //we call this properties when we will dispatching actions
    
    setUser1: (name) => {
      //here muneebInfo is coming from action1.js
      dispatch(muneebInfo());
    },
    setUser2: (name) => {
      dispatch(hanzalaInfo());
    }
  }
}

//connect function will connect your App Component to state through mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

