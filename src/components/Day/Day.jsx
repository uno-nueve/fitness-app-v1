import PropTypes from 'prop-types'
import Exercise from '../Exercise/Exercise'
import { useState } from 'react';

const Day = ({dayTitle, exercisesData}) => {
    //? Exercise index state
    const [exIndex, setExIndex] = useState(0);
    
    //? Progress index state
    const [progIndex, setProgIndex] = useState(0);

    // const [exerciseStates, setExerciseStates] = useState(
    //     exercisesData.map(() => ({exIndex: 0, progIndex: 0}))
    // );

    //* Function that upgrades the exercise's progressions.
    //* Once it reaches the last progression it upgrades the exercise starting at the 1st progression.

    // const upgradeExercise = (exercise, progression, index) => {
    //     setExerciseStates((prevStates) => {
    //         const newStates = [...prevStates]
    //         const currentState = newStates[index]

    //         if (currentState.progIndex < progression[index][currentState.exIndex].length - 1) {
    //             currentState.progIndex += 1
    //         } if (currentState.progIndex === progression[index][currentState.exIndex].length - 1 && currentState.exIndex !== exercise.length - 1) {
    //             currentState.progIndex = 0
    //             if (currentState.exIndex < exercise.length - 1) {
    //                 currentState.exIndex += 1
    //             }
    //         }
    //         return newStates
    //     })
    // }

    const upgradeExercise = (exercise, progression) => {
        if (progIndex < progression[exIndex].length - 1 ) {
            setProgIndex(progIndex + 1)
        } if (progIndex === progression[exIndex].length - 1 && exIndex !== exercise.length - 1) {
            setProgIndex(0)
            if (exIndex < exercise.length - 1) {
                setExIndex(exIndex + 1)
            }
        }
    }
    
    //* Function that downgrades the exercise's progressions.
    //* Once it reaches the 1st progression it downgrades the exercise at the last progression.

    // const downgradeExercise = (progression, index) => {
    //     setExerciseStates((prevStates) => {
    //         const newStates = [...prevStates]
    //         const currentState = newStates[index]

    //         if (currentState.progIndex > 0) {
    //             currentState.progIndex -= 1
    //         } if (currentState.progIndex === 0 && currentState.exIndex > 0) {
    //             currentState.progIndex = progression[index][currentState.exIndex].length - 1
    //             if (currentState.exIndex > 0) {
    //                 currentState.exIndex -= 1
    //             }
    //         }
    //         return newStates
    //     })
    // }

    const downgradeExercise = (progression) => {
        if (progIndex > 0) {
            setProgIndex(progIndex - 1)
        } if (progIndex === 0 && exIndex > 0) {
            setProgIndex(progression[exIndex].length - 1)
            if (exIndex > 0) {
                setExIndex(exIndex - 1)
            }
        }
    }
    
    return (
        <div className="day_section">
                <div className="day_title">
                    <span>{dayTitle}</span>
                </div>
                {exercisesData.map(({exercise, progression}, index) => (
                    <Exercise 
                        key={index}
                        exercise={exercise}
                        progression={progression}
                    />
                ))}
            </div>
    );
}

Day.propTypes = {
    dayTitle: PropTypes.string.isRequired,
    exercisesData: PropTypes.array.isRequired
}

export default Day;

