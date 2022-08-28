import styles from './Game1.module.css';

function Game1() {
    return (
        <div className={styles.game1}>
            <div className={styles.container}>
                <div>
                    <div className={styles.item + ' ' + styles.left}>
                        <div className={styles.main}>
                            <input>
                            </input>
                            <input>
                            </input>
                            <input>
                            </input>
                        </div>
                        <div className={styles.res}>
                            asdfadsadsfafsd
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h5 className={styles.record}>Record</h5>
                </div>
            </div>
        </div>
    )
} 

export default Game1;