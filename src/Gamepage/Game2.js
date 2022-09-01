import { useState, ReactDOM} from 'react';
import styles from './Game2.module.css'


function Game2() {
    let [record, setRecord] = useState([0,0])
    return (
        <div className={styles.container}>
            <div style={styles.computerSide}>
                컴퓨터 사이드 보여주는 칸
            </div>
            <div className={styles.userSide}>
                <button>✊</button>
                <button>✌</button>
                <button>🖐</button>
            </div>
            <div className={styles.record}>
                WIN : {record[0]} <button onClick={()=>{let copy = [...record]; copy[0]+=1; setRecord(copy)}}></button>
                <br></br>
                LOSE : {record[1]}
            </div>

        </div>
    )
} 

export default Game2;