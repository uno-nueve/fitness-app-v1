import PropTypes from 'prop-types'
import { useState } from 'react';
import './Exercise.css'

const Exercise = ({exercise, progression}) => {
    //? Exercise index state
    const [exIndex, setExIndex] = useState(0);

    //? Progression index state
    const [progIndex, setProgIndex] = useState(0);
    
    //? Exercise ranking state
    const [ranking, setRanking] = useState(null);

    //* Function that upgrades the exercise's progressions.
    //* Once it reaches the last progression it upgrades the exercise starting at the 1st progression.
    const upgradeExercise = () => {
        if (progIndex < progression[exIndex].length - 1 ) {
            setProgIndex(progIndex + 1)
        } if (progIndex === progression[exIndex].length - 1 && exIndex !== exercise.length - 1) {
            setProgIndex(0)
            if (exIndex < exercise.length - 1) {
                setExIndex(exIndex + 1)
            }
        }
    };

    //* Function that downgrades the exercise's progressions.
    //* Once it reaches the 1st progression it downgrades the exercise at the last progression.
    const downgradeExercise = () => {
        if (progIndex > 0) {
            setProgIndex(progIndex - 1)
        } if (progIndex === 0 && exIndex > 0) {
            setProgIndex(progression[exIndex].length - 1)
            if (exIndex > 0) {
                setExIndex(exIndex - 1)
            }
        }
    };

    /**
     * Function to set a ranking to the current exercise's progression.
     * It toggles a class to add styles to the selected button.
     * @param {string} rank 
     */
    const selectRanking = (rank) => {
        setRanking(prevRank => {
            return prevRank === rank ? null : rank
        })
    };

    return  (
        <>
            {progression.length === 1
                ?   <div className="day_exercise-large">
                        <div className="exercise_title">
                            <div className="title_text">
                                <h3>{exercise[exIndex]}</h3>
                            </div>
                        </div>
                        <div className="exercise_info">
                            <div className="ranking_buttons">
                                <button 
                                    className={`btn-secondary success-btn ${
                                        ranking === 'success' ? 'success' : ''
                                    }`}
                                    onClick={() => selectRanking('success')}
                                ></button>
                            </div>
                        </div>
                    </div>
                :   <div className="day_exercise">
                        <div className="exercise_title">
                            <div className="title_text">
                                <h3>{exercise[exIndex]}</h3>
                                <p>{progression[exIndex][progIndex]}</p>
                            </div>
                            <div className="title_buttons">
                                <button className="btn-primary upgrade-btn" onClick={upgradeExercise}>
                                    <i className="fa-solid fa-circle-chevron-up"></i>
                                </button>
                                <button className="btn-primary downgrade-btn" onClick={downgradeExercise}>
                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                </button>
                            </div>
                        </div>
                        <div className="exercise_info">
                            <div className="ranking_buttons">
                                <button 
                                    className={`btn-secondary success-btn ${
                                        ranking === 'success' ? 'success' : ''
                                    }`}
                                    onClick={() => selectRanking('success')}
                                ></button>
                                <button 
                                    className={`btn-secondary warning-btn ${
                                        ranking === 'warning' ? 'warning' : ''
                                    }`} 
                                    onClick={() => selectRanking('warning')}
                                ></button>
                                <button 
                                    className={`btn-secondary failure-btn ${
                                        ranking === 'failure' ? 'failure' : ''
                                    }`}
                                    onClick={() => selectRanking('failure')}
                                ></button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

Exercise.propTypes = {
    exercise: PropTypes.array.isRequired,
    progression: PropTypes.array.isRequired
}

export default Exercise;
