import PropTypes from 'prop-types'
import Week from '../../components/Week/Week'

const WeekContainer = ({value}) => {
    return (
        <Week 
            value={value}
        />
    );
}

WeekContainer.propTypes = {
    value: PropTypes.number
}

export default WeekContainer;

