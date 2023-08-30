import PropTypes from 'prop-types'
import Exercise from '../Exercise/Exercise'
import { useEffect, useState } from 'react';

const exercise1 = [
    'Wall Pushups',
    'Incline Pushups',
    'Advanced Incline Pushups',
    'Knee Pushups',
    'Full Pushups',
    'Narrow Pushups',
    'Side-Staggered Pushups',
    'Archer Pushups',
    'Sliding One-Arm Pushups',
    'One-Arm Pushups',
    'Advanced One-Arm Pushups'
];

const progress1 = [
    ['2 sets of 30', '2 sets of 50', '3 sets of 50'],
    ['2 sets of 20', '2 sets of 30', '3 sets of 40'],
    ['2 sets of 20', '2 sets of 30', '3 sets of 35'],
    ['2 sets of 10', '2 sets of 20', '3 sets of 30'],
    ['2 sets of 5', '2 sets of 15', '3 sets of 25'],
    ['2 sets of 5', '2 sets of 10', '3 sets of 20'],
    ['2 sets of 5 (per side)', '2 sets of 10 (per side)', '2 sets of 20 (per side)'],
    ['2 sets of 5 (per side)', '2 sets of 9 (per side)', '2 sets of 12 (per side)'],
    ['2 sets of 5 (per side)', '2 sets of 9 (per side)', '2 sets of 12 (per side)'],
    ['2 sets of 3 (per side)', '2 sets of 6 (per side)', '2 sets of 9 (per side)'],
    ['2 sets of 3 (per side)', '2 sets of 6 (per side)', '2 sets of 9 (per side)']
];

const exercise2 = [
    'Knee Raises',
    'Advanced Knee Raises',
    'Alternating Leg Raises',
    'Full Leg Raises',
    'Tuck Plow Raises',
    'Plow Raises',
    'Hanging Knee Raises',
    'Advanced Hanging Knee Raises',
    'Hanging Leg Raises',
    'Toe to Bars'
];

const progress2 = [
    ['2 sets of 10', '2 sets of 20', '2 sets of 30'],
    ['2 sets of 10', '2 sets of 20', '2 sets of 30'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 5', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 20'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 20'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25'],
];

const Day = ({dayTitle}) => {
    //? Exercise index states
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    //? Current exercise states
    const [current1, setCurrent1] = useState(exercise1[index1]);
    const [current2, setCurrent2] = useState(exercise1[index1]);
    
    //? Progress index states
    const [progIndex1, setProgIndex1] = useState(0);
    const [progIndex2, setProgIndex2] = useState(0);

    //? Current progress states
    const [prog1, setProg1] = useState([...progress1[index1]][progIndex1]);
    const [prog2, setProg2] = useState([...progress2[index2]][progIndex2]);
    
    useEffect(() => {
        setProg1([...progress1[index1]][progIndex1])
        setCurrent1(exercise1[index1])
    }, [index1, progIndex1]);

    useEffect(() => {
        setProg2([...progress2[index2]][progIndex2])
        setCurrent2(exercise2[index2])
    }, [index2, progIndex2]);

    //* Function that upgrades the exercise's progressions.
    //* Once it reaches the last progression it upgrades the exercise starting at the 1st progression.
    //* One for each exercise
    const upgradeExercise1 = () => {
        if (progIndex1 < [...progress1[index1]].length - 1) {
            setProgIndex1(progIndex1 + 1)
        } if (progIndex1 === [...progress1[index1]].length - 1) {
            setProgIndex1(0)
            if (index1 < exercise1.length - 1) {
                setIndex1(index1 + 1)
            }
        }
    }

    const upgradeExercise2 = () => {
        if (progIndex2 < [...progress2[index2]].length - 1) {
            setProgIndex2(progIndex2 + 1)
        } if (progIndex2 === [...progress2[index2]].length - 1) {
            setProgIndex2(0)
            if (index2 < exercise2.length - 1) {
                setIndex2(index2 + 1)
            }
        }
    }
    
    //* Function that downgrades the exercise's progressions.
    //* Once it reaches the 1st progression it downgrades the exercise at the last progression.
    //* One for each exercise
    const downgradeExercise1 = () => {
        if (progIndex1 > 0) {
            setProgIndex1(progIndex1 - 1)
        } if (progIndex1 === 0 && index1 > 0) {
            setProgIndex1([...progress1[index1]].length - 1)
            if (index1 > 0) {
                setIndex1(index1 - 1)
            }
        } 
    }

    const downgradeExercise2 = () => {
        if (progIndex2 > 0) {
            setProgIndex2(progIndex2 - 1)
        } if (progIndex2 === 0 && index2 > 0) {
            setProgIndex2([...progress2[index2]].length - 1)
            if (index2 > 0) {
                setIndex2(index2 - 1)
            }
        }
    }
    
    return (
        <div className="day_section">
                <div className="day_title">
                    <span>{dayTitle}</span>
                </div>
                <Exercise 
                    upgrade={() => upgradeExercise1()}
                    downgrade={() => downgradeExercise1()}
                    current={current1}
                    progress={prog1}
                />
                <Exercise 
                    upgrade={() => upgradeExercise2()}
                    downgrade={() => downgradeExercise2()}
                    current={current2}
                    progress={prog2}
                />
            </div>
    );
}

Day.propTypes = {
    dayTitle: PropTypes.string
}

export default Day;

