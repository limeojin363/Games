import './App.css';
import React, {Component} from 'react';

var i;
var score=0;
var memory=[];
var user=[];
var flag=true;

async function user_input(x) {
  user.push(x);
  if (user[user.length-1]!=memory[user.length-1]){
    alert('ㅂㅅ');
    flag=false;
  }
  else if (user.length==memory.length) {
    await timer(500);
    restart();
  }
}

function restart() {
  user=[];
  memory_show();
  score++;
  document.getElementById('score').innerHTML="SCORE : " + String(score);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function timer(ms) {
  return new Promise(res=>setTimeout(res,ms));
}

async function memory_show() {
  flag=false;
  memory.push(getRandomInt(0,9));
  for (i=0;i<memory.length;i++) {
    animation(document.querySelectorAll('button')[memory[i]])
    if (i==memory.length-1) break;
    await timer(300);
  }
  flag=true;
}

function animation(x) {
  x.classList.remove('a');
  void x.offsetWidth;
  x.classList.add('a');
}

function Button(props) {
  return (
  <button id='button' value={props.value} onClick={function() {
    if (flag) {user_input(props.value);
      if (flag) {animation(document.querySelectorAll('button')[props.value])}}}}></button>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid">
          <Button value='0'></Button>
          <Button value='1'></Button>
          <Button value='2'></Button>
          <Button value='3'></Button>
          <Button value='4'></Button>
          <Button value='5'></Button>
          <Button value='6'></Button>
          <Button value='7'></Button>
          <Button value='8'></Button>
        </div>
        <button onClick={function() {
          memory=[]
          user=[]
          score=0
          document.getElementById('score').innerHTML="SCORE : " + String(score);
          memory_show()}}>START</button>
        <div id='score'>SCORE : {score}</div>
        
      </div>
    );
  }
}


export default App;