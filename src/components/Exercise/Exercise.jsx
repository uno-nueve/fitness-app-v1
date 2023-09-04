import PropTypes from 'prop-types'
import { useState } from 'react';

const Exercise = ({exercise, progression}) => {
    //? Exercise index state
    const [exIndex, setExIndex] = useState(0);

    //? Progression index state
    const [progIndex, setProgIndex] = useState(0);

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

    return  (
        <div className="day_exercise">
            <div className="exercise_title">
                <h3>{exercise[exIndex]}</h3>
                <p>{progression[exIndex][progIndex]}</p>
                <div className="title_buttons">
                    <button className="upgrade-btn" onClick={upgradeExercise}>U</button>
                    <button className="downgrade-btn" onClick={downgradeExercise}>D</button>
                </div>
            </div>
            <div className="exercise_info">
                <div className="ranking_buttons">
                    <button className="btn success-btn"></button>
                    <button className="btn warning-btn"></button>
                    <button className="btn failure-btn"></button>
                </div>
            </div>
        </div>
    )
}

Exercise.propTypes = {
    exercise: PropTypes.array.isRequired,
    progression: PropTypes.array.isRequired
}

export default Exercise;
