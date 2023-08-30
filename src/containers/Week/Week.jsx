import Day from '../../components/Day/Day'

const dayTitles = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const pushups = [
    {
        id: 1, 
        value: 'Wall Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 30'
            },
            {
                level: 2,
                sets: '2 sets of 50',
            },
            {
                level: 3,
                sets: '3 sets of 50'
            }
        ]
    },
    {
        id: 2, 
        value: 'Incline Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 20'
            },
            {
                level: 2,
                sets: '2 sets of 30',
            },
            {
                level: 3,
                sets: '3 sets of 40'
            }
        ]
    },
    {
        id: 3, 
        value: 'Advanced Incline Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 20'
            },
            {
                level: 2,
                sets: '2 sets of 30',
            },
            {
                level: 3,
                sets: '3 sets of 35'
            }
        ]
    },
    {
        id: 4, 
        value: 'Knee Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 10'
            },
            {
                level: 2,
                sets: '2 sets of 20',
            },
            {
                level: 3,
                sets: '3 sets of 30'
            }
        ]
    },
    {
        id: 5, 
        value: 'Full Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 5'
            },
            {
                level: 2,
                sets: '2 sets of 15',
            },
            {
                level: 3,
                sets: '3 sets of 25'
            }
        ]
    },
    {
        id: 6, 
        value: 'Narrow Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 5'
            },
            {
                level: 2,
                sets: '2 sets of 10',
            },
            {
                level: 3,
                sets: '3 sets of 20'
            }
        ]
    },
    {
        id: 7, 
        value: 'Side-Staggered Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 5 (per side)'
            },
            {
                level: 2,
                sets: '2 sets of 10 (per side)',
            },
            {
                level: 3,
                sets: '2 sets of 20 (per side)'
            }
        ]
    },
    {
        id: 8, 
        value: 'Archer Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 5 (per side)'
            },
            {
                level: 2,
                sets: '2 sets of 9 (per side)',
            },
            {
                level: 3,
                sets: '2 sets of 12 (per side)'
            }
        ]
    },
    {
        id: 9, 
        value: 'Sliding One-Arm Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 5 (per side)'
            },
            {
                level: 2,
                sets: '2 sets of 9 (per side)',
            },
            {
                level: 3,
                sets: '2 sets of 12 (per side)'
            }
        ]
    },
    {
        id: 10, 
        value: 'One-Arm Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 3 (per side)'
            },
            {
                level: 2,
                sets: '2 sets of 6 (per side)',
            },
            {
                level: 3,
                sets: '2 sets of 9 (per side)'
            }
        ]
    },
    {
        id: 11, 
        value: 'Advanced One-Arm Pushups',
        progression: [
            {
                level: 1,
                sets: '2 sets of 3 (per side)'
            },
            {
                level: 2,
                sets: '2 sets of 6 (per side)',
            },
            {
                level: 3,
                sets: '2 sets of 9 (per side)'
            }
        ]
    }
];

const legRaises = [
    {id: 1, value: 'Knee Raises'},
    {id: 2, value: 'Advanced Knee Raises'},
    {id: 3, value: 'Alternating Leg Raises'},
    {id: 4, value: 'Full Leg Raises'},
    {id: 5, value: 'Tuck Plow Raises'},
    {id: 6, value: 'Plow Raises'},
    {id: 7, value: 'Hanging Knee Raises'},
    {id: 8, value: 'Advanced Hanging Knee Raises'},
    {id: 9, value: 'Hanging Leg Raises'},
    {id: 10, value: 'Toe to Bars'},
];

const Week = () => {
    return (
        <div className='week_container'>
            {dayTitles.map((day, index) => (
                <Day key={index} dayTitle={day} />
            ))}
        </div>
    );
}

export default Week;
