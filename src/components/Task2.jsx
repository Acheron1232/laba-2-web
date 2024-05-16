import React, { useState } from 'react';

function Task2() {
    const [h, setH] = useState('');
    const [c, setC] = useState('');
    const [o, setO] = useState('');
    const [s, setS] = useState('');
    const [w, setW] = useState('');
    const [a, setA] = useState('');
    const [v, setV] = useState('');
    const [result, setResult] = useState('');

    const task2 = () => {
        const nt = 40.40;
        const kf = (100 - w - a) / 100;
        const hr = h * kf;
        const cr = c * kf;
        const sr = s * kf;
        const vr = v * (100 - 2) / 100;
        const ar = a * (100 - 2) / 100;
        const or = o * (100 - 0.2 - 0.015) / 100;
        const qri = (nt * ((100 - w - ar) / 100)) - 0.025 * w;

        setResult(`
            Hг = ${hr.toFixed(2)}%
            Cг = ${cr.toFixed(2)}%
            Oг = ${or.toFixed(3)}%
            Sг = ${sr.toFixed(2)}%
            Vг = ${(vr * 100).toFixed(2)} мг/кг
            Wг = ${w}%
            Aг = ${ar.toFixed(2)}%
            QГн = ${qri.toFixed(3)} МДж/кг
        `);
    };

    return (
        <main>
            <h2 style={styles.heading}>TASK2</h2>
            <form style={styles.form}>
                <label htmlFor="H">Вуглець: </label>
                <input id="H" className="entry" type="text" value={h} onChange={(e) => setH(e.target.value)} />
                <br />
                <label htmlFor="C">Водень: </label>
                <input id="C" className="entry" type="text" value={c} onChange={(e) => setC(e.target.value)} />
                <br />
                <label htmlFor="O">Кисень: </label>
                <input id="O" className="entry" type="text" value={o} onChange={(e) => setO(e.target.value)} />
                <br />
                <label htmlFor="S">Сірка: </label>
                <input id="S" className="entry" type="text" value={s} onChange={(e) => setS(e.target.value)} />
                <br />
                <label htmlFor="W">Вологість: </label>
                <input id="W" className="entry" type="text" value={w} onChange={(e) => setW(e.target.value)} />
                <br />
                <label htmlFor="A">Зола: </label>
                <input id="A" className="entry" type="text" value={a} onChange={(e) => setA(e.target.value)} />
                <br />
                <label htmlFor="V">Ванадій: </label>
                <input id="V" className="entry" type="text" value={v} onChange={(e) => setV(e.target.value / 100)} />
                <br />
                <input id="submit" type="button" value="Вирахувати" onClick={task2} />
            </form>
            <p id="task2" dangerouslySetInnerHTML={{ __html: result }}></p>
        </main>
    );
}

const styles = {
    heading: {
        textAlign: 'center',
        display: 'block',
        border: 'black solid 5px',
        borderRadius: '25px',
        margin: '0',
        padding: '0',
    },
    form: {
        listStyleType: 'none',
    }
};

export default Task2;
