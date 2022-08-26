import './App.css';
import {Col, Container, Row, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import data from './Gamepage/data.js'
import { useState } from 'react';

function Item(props) {
  const navigate = useNavigate();
  return (
    <Col sm={4} onClick={() => {navigate('/game/'+props.idx)}}>
      <h2>Game{props.idx}</h2>
      <h5>{props.games[props.idx].name}</h5>
    </Col>
  )
}

function Items(props) {
  let [games] = useState(data);
  return (
    
    <Container>
      <Row>
        {
          games.map((a,i) => {
            return (<Item key={i} idx={i} games={games}></Item>)
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
    {games[id].content}
    </>
  )
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
        <div className='navbar'>
          <span className='link' onClick={()=>{navigate('/')}}>HOME</span>
        </div>
        <div id='wrapper'>
          <Routes>
            <Route path = '/' element={<Items></Items>}></Route>
            <Route path = '/game/:id' element = {<Gamepage></Gamepage>}></Route>
          </Routes>
        
        </div>
    </div>
  );  
}

export default App;
