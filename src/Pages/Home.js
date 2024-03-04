import React from 'react'
import Gym from '../Gym'
import Fifth from '../components/Fifth'
import Forth from "../components/Forth";
import SecondDiv from "../components/SecondDiv";
import Third from '../components/Third';



const Home = ({data,cloth}) => {
  
  return (
    <>
    <Gym   data={data[1]}/>
      <SecondDiv/>
      <Third cloth={cloth}/>
      <Forth/>
      <Fifth/>
     
    
    
    
    </>
  )
}

export default Home

