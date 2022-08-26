import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import data from './Gamepage/data.js'
import { useState } from 'react';



function Item(props) {
  const navigate = useNavigate();
  return (
    <Col sm={4} onClick={() => {navigate('/game/'+props.idx)}}>a</Col>
  )
}

function Items(props) {
  let [games] = useState(data);
  return (
    <Container>
      <Row>
        {
          games.map((a,i) => {
            return (<Item key={i} idx={i}></Item>)
          })
        }
      </Row>
    </Container>
  )
}

function Gamepage(props) {
  let {id} = useParams();
  let [games] = useState(data);
  return (
    <>
    {games[id]}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header></header>
        <div id='wrapper'>
          <Routes>
            <Route path = '/' element={<Items></Items>}></Route>
            <Route path = '/game/:id' element = {<Gamepage></Gamepage>}></Route>
          </Routes>
        
        </div>
      <footer></footer>
    </div>
  );  
}

export default App;
