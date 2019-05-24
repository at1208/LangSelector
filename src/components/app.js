import React from 'react';
// import Header from './header';
import UserCreate from './userCreate'
import { connect } from 'react-redux';
// import { IndiaLang, UsLang, MexicoLang, RussiaLang } from '../actions/index'


const App = (props) => {
  console.log(props)
  return <div>
       <UserCreate />
        </div>
}

const mapStateToProp = (state)=>{
  return {
    state: state
  }
}

export default connect(mapStateToProp)(App);
