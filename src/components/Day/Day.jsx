import PropTypes from 'prop-types'
import Exercise from '../Exercise/Exercise'
import { useState } from 'react';

const Day = ({dayTitle, exercisesData}) => {
    //? Exercise index state
    const [exIndex, setExIndex] = useState(exercisesData.map(() => 0));
    
    //? Progress index state
    const [progIndex, setProgIndex] = useState(exercisesData.map(() => 0));

    //* Function that upgrades the exercise's progressions.
    //* Once it reaches the last progression it upgrades the exercise starting at the 1st progression.
    const upgradeExercise = (exercise, progression, index) => {
        if (progIndex[index] < progression[index].length - 1) {
            setProgIndex(prevProgIndex => prevProgIndex.map(
                (_, i) => i === index 
                    ? progIndex[index] + 1 
                    : _
            ));
        } else {
            if (exIndex[index] < exercise.length - 1) {
                setProgIndex(prevProgIndex => prevProgIndex.map(
                    (_, i) => i === index 
                        ? 0 
                        : _
                ));
                setExIndex(prevExIndex => prevExIndex.map(
                    (currentIndex, i) => i === index 
                        ? currentIndex + 1 
                        : currentIndex
                ));
            }
        }
    }
    
    //* Function that downgrades the exercise's progressions.
    //* Once it reaches the 1st progression it downgrades the exercise at the last progression.
    const downgradeExercise = (progression, index) => {
        if (progIndex[index] > 0) {
            setProgIndex(prevProvIndex => prevProvIndex.map(
                (currentIndex, i) => i === index 
                    ? currentIndex - 1 
                    : currentIndex
            ))
        } else {
            if (exIndex[index] > 0) {
                setProgIndex(prevProvIndex => prevProvIndex.map(
                    (_, i) => i === index 
                        ? progression[index].length - 1 
                        : _
                ))
                setExIndex(prevExIndex => prevExIndex.map(
                    (currentIndex, i) => i === index 
                        ? currentIndex - 1 
                        : currentIndex
                ))
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
                        upgrade={() => upgradeExercise(exercise, progression, index)}
                        downgrade={() => downgradeExercise(progression, index)}
                        current={exercise[exIndex[index]]}
                        progress={progression[exIndex[index]][progIndex[index]]}
                    />
                ))}
            </div>
    );
}

Day.propTypes = {
    dayTitle: PropTypes.string,
    exercisesData: PropTypes.array
}

export default Day;

