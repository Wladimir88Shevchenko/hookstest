import React, { useState } from 'react';
import NameShower from './nameShower';

const App = () => {

    const [caunter, setCaunter] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setCaunter((v) => v + 1)
                    }>+</button>
                <button
                    onClick={() => setVisible(false)}
                >hide me</button>
                <NameShower id={caunter} />
            </div>
        )
    } else {
        return (
            <button
                onClick={() => setVisible(true)}
            >show</button>
        )
    }
}

export default App;