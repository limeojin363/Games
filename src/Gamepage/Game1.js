import { useState, ReactDOM} from 'react';
import styles from './Game1.module.css'

function getRandomInt(a, b) {
    let min = Math.ceil(a);
    let max = Math.floor(b);
    return Math.floor(Math.random() * (max - min)) + min; 
}  

function getAns() {
    let candidate=[1,2,3,4,5,6,7,8,9];
    let res=[];
    for (var i=0;i<3;i++) res.push(candidate.splice(getRandomInt(0,candidate.length),1));
    return res;
}

function isNumeric(val) {
    return /^-?\d+$/.test(val);
}

const ans = getAns();
console.log(ans);

function Game1() {
    let [userInput, setUserInput] = useState(['','','']);
    let [res,setRes] = useState([]);
    let [btnAble, setBtnAble] = useState(true);
    return (
        <div className={styles.game1}>
            <div className={styles.container}>
                <div>
                    <div className={styles.item + ' ' + styles.left}>
                        <div className={styles.main}>
                            <input value = {userInput[0]} onChange={(e)=>{
                                let copy = [...userInput];
                                copy[0] = e.target.value
                                setUserInput(copy);
                                }}>
                            </input>
                            <input value = {userInput[1]} onChange={(e)=>{
                                let copy = [...userInput];
                                copy[1] = e.target.value
                                setUserInput(copy);
                                }}>
                            </input>
                            <input value = {userInput[2]} onChange={(e)=>{
                                let copy = [...userInput];
                                copy[2] = e.target.value
                                setUserInput(copy);
                                }}>
                            </input>
                            <button onClick={()=>{
                                if (!btnAble) return;
                                let v1 = userInput[0];
                                let v2 = userInput[1];
                                let v3 = userInput[2];
                                if (v1==v2||v2==v3||v3==v1||v1<1||v1>9||v2<1||v2>9||v3<1||v3>9||
                                    (!isNumeric(v1)||(!isNumeric(v2)||(!isNumeric(v2))))) {
                                    alert("ERROR");
                                    return;
                                }                                
                                let sCnt = 0;
                                let bCnt = 0;
                                for (let i = 0; i < 3; i++) {
                                    for (let j = 0; j < 3; j++) {
                                        if (i!=j && userInput[i]==ans[j]) bCnt++;
                                        if (i==j && userInput[i]==ans[i]) sCnt++;
                                    }
                                }
                                let copy = [...res];
                                copy.push([[v1,v2,v3],[sCnt,bCnt]]);
                                setRes(copy);
                                if (sCnt==3) {
                                    alert("That's right")
                                    setBtnAble('false');
                                }
                                setUserInput(['','',''])
                            }}>제출</button>

                        </div>
                        <div className={styles.res}>
                            {
                                res.length == 0
                                ?
                                null
                                :
                                (<h2>S : {res[res.length-1][1][0]} B : {res[res.length-1][1][1]}</h2>)
                            }
                            
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h5 className={styles.record}></h5>Record  <button onClick={()=>{
                    setRes([])
                    setUserInput(['','',''])
                    setBtnAble(true);
                    }}>Game Reset</button>
                    {
                        res.map((a,i)=>{
                            return (
                                <div key={i} className={styles.item} style={{margin:'5px'}}>
                                    <div>Input : {a[0][0]} {a[0][1]} {a[0][2]} </div>
                                    <div>Result : S{a[1][0]} B{a[1][1]}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
} 

export default Game1;