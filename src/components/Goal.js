import React from 'react';
import './goal.css';

const scrollToTop = () => window.scrollTo(0, 0);

function Goal(props) {
    const { goalObj, setViewGoal } = props;

    scrollToTop();

    const handleClick = () => {
        setViewGoal(null);
    }
    
    return (
        <div className='view-goal-container'>
            <button onClick={handleClick} style={{width: '150px'}}>← Go Back</button>
            <div>
                <div className='view-goal-container__inner-container'>
                    <h1>Goal {goalObj.code}</h1>
                    <h2>{goalObj.title}</h2>
                    <p>{goalObj.description}</p>
                    <hr style={{width: '400px'}}/>
                    <h2>Sub Goals:</h2>
                </div>
                <div className='page-container'>
                    {goalObj.targets.map((obj, idx) => (
                        <div key={idx} className='goal-container'>
                            <h3>{obj.code}</h3>
                            <p>{obj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Goal
