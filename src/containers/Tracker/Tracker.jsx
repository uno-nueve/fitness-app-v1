import { useState } from "react";
import WeekContainer from "../Week/WeekContainer";
import Navbar from "../nav/Navbar";
import './Tracker.css'

//TODO: Fix bug with weeks sharing the same state instead of having individual states

const Tracker = () => {
    //? Selected list item state
    const [selected, setSelected] = useState(null);

    //* Function to select a week item
    const selectWeek = (value) => {
        if (selected === value) {
            setSelected(null)
        } else {
            setSelected(value)
        }
    }

    return (
        <div className="container">
            <nav className="navbar">
                <Navbar selectWeek={selectWeek} />
            </nav>
            <div className="week_wrapper">
                {selected !== null && <WeekContainer value={selected} />}
            </div>
        </div>
    );
}

export default Tracker;
