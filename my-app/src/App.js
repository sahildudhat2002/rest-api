import logo from './logo.svg';
import './App.css';
import cs from './Api.module.css';
import { Row,Col,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState,useEffect} from 'react'
const axios = require('axios');

function App() {
  // const [character,setchar]= useState([
  //   {image:logo,name:"sahil",gender:"male",location:"surat",last_seen:"Rick and morty"},
  //   {image:logo,name:"sahil",gender:"male",location:"surat",last_seen:"Rick and morty"},
  //   {image:logo,name:"sahil",gender:"male",location:"surat",last_seen:"Rick and morty"},
  // ])

  const [character,setChar]= useState([])

  useEffect(()=>{
    console.log('ok');
    axios.get('https://rickandmortyapi.com/api/character')

    .then(function (res) {
      // handle success
      setChar(res.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])

  // const img = [
  //   {"image":"1.jpg"},
  //   {"image":"2.jpg"},
  //   {"image":"3.jpg"},
  // ]


  return (
    <div className="App" >
      {
        character.map((item,i)=>{
          return <div key={"character"+i}className={cs.body}>
            <Container>
              <Row>
                <Col sm={4} classname={cs.p1}>
                <img className={cs.img} src={item.image} width="125px"></img>

                </Col>
                <Col sm={8} className={cs.p2}>
            <p className={cs.name} >{item.name}</p>
            <p className={cs.name} >{item.gender}</p>
            <p className={cs.name} >{item.species}</p>
            <p className={cs.name} >last know location : {item.location.name}</p>
            <p className={cs.name} >last seen in : {item.status}</p>
            </Col>
            </Row>

            </Container>

          </div>
        })
      }

     
     
    </div>
  );
}


export default App;
