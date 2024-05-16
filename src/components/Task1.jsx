import React, { useState } from 'react';

function Task1() {
    const [coal, setCoal] = useState('');
    const [mazut, setMazut] = useState('');
    const [naturalGas, setNaturalGas] = useState('');
    const [result, setResult] = useState('');

    const handleCalculation = () => {
        const hzu = 0.985;
        const gV = 1.5;
        const aV = 0.8;
        const aRV = 25.20;
        const qV = 20.47;
        const gM = 0;
        const aM = 1;
        const aRM = 0.15;
        const qM = 40.40;

        const kV = ((10 ** 6) / qV) * aV * (aRV / (100 - gV)) * (1 - hzu);
        const kM = ((10 ** 6) / qM) * aM * (aRM / (100 - gM)) * (1 - hzu);
        const kG = 0;

        const vV = ((10 ** -6) * kV) * qV * coal;
        const vM = ((10 ** -6) * kM) * qM * mazut;
        const vG = 0;

        setResult(`
            <br>К<sub>тв</sub> вугілля = ${kV.toFixed(2)} г/ГДж
            <br>Е<sub>тв</sub> вугілля = ${vV.toFixed(2)} т
            <br>К<sub>тв</sub> мазуту = ${kM.toFixed(2)} г/ГДж
            <br>Е<sub>тв</sub> мазуту = ${vM.toFixed(2)} т
            <br>К<sub>тв</sub> газу = ${kG.toFixed(2)} г/ГДж
            <br>Е<sub>тв</sub> газу = ${vG.toFixed(2)} т
        `);
    };

    return (
        <main style={styles.main}>
            <h2 style={styles.heading}>Розрахунок валових викидів</h2>
            <hr style={styles.hr} />
            <form style={styles.form}>
                <label htmlFor="coal">Вугілля: </label>
                <input
                    id="coal"
                    className="entry"
                    type="text"
                    value={coal}
                    onChange={(e) => setCoal(e.target.value)}
                    style={styles.input}
                />
                <label htmlFor="mazut">Мазут: </label>
                <input
                    id="mazut"
                    className="entry"
                    type="text"
                    value={mazut}
                    onChange={(e) => setMazut(e.target.value)}
                    style={styles.input}
                />
                <label htmlFor="naturalGas">Природній газ: </label>
                <input
                    id="naturalGas"
                    className="entry"
                    type="text"
                    value={naturalGas}
                    onChange={(e) => setNaturalGas(e.target.value)}
                    style={styles.input}
                />
                <input
                    id="submit"
                    type="button"
                    value="Вирахувати"
                    onClick={handleCalculation}
                    style={styles.submitButton}
                />
            </form>
            <p id="result" dangerouslySetInnerHTML={{ __html: result }}></p>
        </main>
    );
}

const styles = {
    main: {
        padding: '20px',
    },
    heading: {
        textAlign: 'center',
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        display: 'block',
        margin: '0 auto',
        width: 'fit-content',
    },
    hr: {
        width: '50vw',
        borderRadius: '15px',
        background: 'black',
        height: '3px',
        margin: '20px auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        display: 'block',
        margin: '10px 0',
        borderRadius: '5px',
        width: '30vw',
        textAlign: 'center',
    },
    submitButton: {
        width: '10vw',
        background: 'black',
        color: 'white',
        border: 'none',
        boxShadow: 'grey 0 2px 2px',
        cursor: 'pointer',
    },
};

export default Task1;
