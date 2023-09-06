import PropTypes from 'prop-types'
import Exercise from '../Exercise/Exercise'
import './Day.css'

const Day = ({dayTitle, exercisesData}) => {
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

