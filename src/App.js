import React, { useState, useEffect } from 'react';
import Goal from './components/Goal'
import './App.css';

function App() {

    // states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [viewGoal, setViewGoal] = useState(null);

    // Fetchar data från API (vi hämtar utan children för att spara på resurser, att sidan laddas snabbare)
    useEffect(() => {
        setLoading(true);
        fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            })
            .catch((err) => {
                setLoading(false);
                setError('404 Failed to load data');
            })
    }, [])

    // Innan vi har fått datan från API:et så renderas förljande: 
    if (loading) {
        return <p>loading...</p>;
    }
    
    // Om vi får ett error så renderas följande:
    if (error !== '') {
        return <h2>ERROR: {error}</h2>;
    } 

    // Denna gången hämtar vi ett goal med children
    const handleClick = (e) => {
        fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${e.target.id}/Target/List?includechildren=true`)
            .then((res) => res.json())
            .then((data) => setViewGoal(data[0]))
    }

    return (
        <div className="App">
            <h1 className="title">UN 17 Sustainable Goals</h1>
                {(viewGoal === null) ? 
                    <div className="page-container">
                        {data.map((goal) => (
                            <div key={goal.code} className='goal-container'>
                                <h2>{goal.code}</h2>
                                <h3>{goal.title}</h3>
                                <p>{goal.description}</p>
                                <button id={goal.code} onClick={handleClick}>Read More</button>
                            </div>
                        ))}
                    </div> :
                    <Goal goalObj={viewGoal} setViewGoal={setViewGoal}/>
                }
        </div>
    );
}

export default App;
