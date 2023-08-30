import PropTypes from 'prop-types'

const Exercise = ({upgrade, downgrade, current, progress}) => {
    return  (
        <div className="day_exercise">
            <div className="exercise_title">
                <h3>{current}</h3>
                <p>{progress}</p>
                <div className="title_buttons">
                    <button className="upgrade-btn" onClick={upgrade}>U</button>
                    <button className="downgrade-btn" onClick={downgrade}>D</button>
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
    upgrade: PropTypes.func,
    downgrade: PropTypes.func,
    current: PropTypes.string,
    progress: PropTypes.string
}

export default Exercise;
