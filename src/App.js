import './App.css';
import {Col, Container, Row, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import data from './Gamepage/data.js'
import { useEffect, useState } from 'react';

function Item(props) {
  const navigate = useNavigate();
  return (
    <Col sm={4} className='Item'>
      <span className='ItemInside' onClick={() => {navigate('/game/'+props.idx)}}>
        <h2>Game{props.idx}</h2>
        <h5>{props.games[props.idx].name}</h5>
      </span>  
    </Col>
  )
}

function Items(props) {
  let [games] = useState(data);
  return (
    
    <Container className='Items'>
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
  let [fade, setFade] = useState('');
  useEffect(()=> {
    let a = setTimeout( ()=> { setFade('end') }, 100)
    return()=> {
      setFade('')
      clearTimeout(a);
    }
  },[])
  return (
    <div className={"App start " + fade}>
        <div className='navbar'>
          <span className='homelink' onClick={()=>{navigate('/')}}>HOME</span>
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
