import { useState } from "react";
import ListItem from "../../components/List-Item/List-Item";
import './Navbar.css';
import PropTypes from 'prop-types'


const Navbar = ({selectWeek}) => {
    
    //? Week number state
    const [count, setCount] = useState(0);

    //? All weeks state
    const [weekItems, setWeekItems] = useState([]);

    //* Function to add a new week item in the weeks list
    const addWeek = () => {
        const currentCount = count + 1
        setCount(currentCount)
        setWeekItems([...weekItems, currentCount])
    }

    return (
        <>
            <button className="nav_btn" onClick={addWeek}>
                <i className="fa-solid fa-plus"></i>
                New Week
            </button>
            <ul className="weeks_list">
                {weekItems.map((item, index) => (
                    <ListItem
                        key={index} 
                        value={item}
                        selectWeek={selectWeek}
                    />
                ))}
            </ul>
        </>
    );
}

Navbar.propTypes = {
    selectWeek: PropTypes.func
}

export default Navbar;
