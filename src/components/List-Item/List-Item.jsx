import PropTypes from 'prop-types';
import './List-Item.css';

const ListItem = ({value, selectWeek}) => {
    return (
        <div className='item' onClick={() => selectWeek(value)}>
            <span>Week {value}</span>
        </div>
    );
}

ListItem.propTypes = {
    value: PropTypes.number,
    selectWeek: PropTypes.func
}

export default ListItem;
