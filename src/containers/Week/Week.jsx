import Day from '../../components/Day/Day'

const pushups = [
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

const pushupsProg = [
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

const legRaises = [
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

const legRaisesProg = [
    ['2 sets of 10', '2 sets of 20', '2 sets of 30'],
    ['2 sets of 10', '2 sets of 20', '2 sets of 30'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 5', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 20'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 20'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 25']
];

const pullups = [
    'Wall Pullps',
    'Horizontal Pullups',
    'Advanced Horizontal Pullups',
    'Jackknife Pullups',
    'Full Pullups',
    'Narrow Pullups',
    'One Hand Pullups',
    'Advanced One Hand Pullups',
    'Archer Pullups',
    'One Arm Pullups'
];

const pullupsProg = [
    ['2 sets of 30', '2 sets of 50', '3 sets of 50'],
    ['2 sets of 15', '2 sets of 30', '3 sets of 30'],
    ['2 sets of 10', '2 sets of 15', '3 sets of 25'],
    ['2 sets of 5', '2 sets of 15', '3 sets of 20'],
    ['1 set of 3', '2 sets of 6', '3 sets of 12'],
    ['2 sets of 3', '2 sets of 6', '3 sets of 9'],
    ['2 sets of 3 (both sides)', '2 sets of 6 (both sides)', '2 sets of 9 (both sides)'],
    ['2 sets of 3 (both sides)', '2 sets of 6 (both sides)', '2 sets of 9 (both sides)'],
    ['2 sets of 3 (both sides)', '2 sets of 6 (both sides)', '2 sets of 9 (both sides)'],
    ['1 set of 1 (both sides)', '2 sets of 3 (both sides)', '2 sets of 6 (both sides)']
];

const squats = [
    'Jackknife Squats',
    'Assisted Squats',
    'Half Squats',
    'Full Squats',
    'Narrow Squats',
    'Side Staggered Squats',
    'Front Staggered Squats',
    'Assisted One Leg Squats',
    'One Leg Chair Squats',
    'One Leg Squats'
];

const squatsProg = [
    ['2 sets of 15', '2 sets of 25', '3 sets of 35'],
    ['2 sets of 10', '2 sets of 20', '3 sets of 30'],
    ['2 sets of 10', '2 sets of 25', '2 sets of 50'],
    ['2 sets of 10', '2 sets of 20', '2 sets of 30'],
    ['2 sets of 10', '2 sets of 15', '2 sets of 30'],
    ['2 sets of 10 (both sides)', '2 sets of 15 (both sides)', '2 sets of 20 (both sides)'],
    ['2 sets of 7 (both sides)', '2 sets of 12 (both sides)', '2 sets of 15 (both sides)'],
    ['2 sets of 5 (both sides)', '2 sets of 9 (both sides)', '2 sets of 12 (both sides)'],
    ['2 sets of 5 (both sides)', '2 sets of 9 (both sides)', '2 sets of 12 (both sides)'],
    ['2 sets of 5 (both sides)', '2 sets of 9 (both sides)', '2 sets of 12 (both sides)']
];

const bridges = [
    'Glute Bridges',
    'Straight Bridges',
    'Wall Bridges',
    'Incline Bridges',
    'Head Bridges',
    'Full Bridges',
    'Wheel Bridges',
    'Tap Bridges',
    'Wall Walking Bridges',
    'Stand to Stand Bridges'
];

const bridgesProg = [
    ['2 sets of 15', '2 sets of 30', '3 sets of 50'],
    ['2 sets of 15', '2 sets of 25', '3 sets of 30'],
    ['2 sets of 15', '2 sets of 25', '3 sets of 30'],
    ['2 sets of 10', '2 sets of 20', '2 sets of 25'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 25'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 5', '2 sets of 10', '2 sets of 15'],
    ['2 sets of 5 taps (per side, alternating)', '2 sets of 20 taps (per side, alternating)', '2 sets of 30 taps (per side, alternating)'],
    ['1 set of 3', '1 set of 6', '2 sets of 10'],
    ['1 set of 1', '1 set of 3', '2 sets of 5']
];

const twists = [
    'Straight Leg Twists',
    'Bent Leg Twists',
    'Full Twists'
];

const twistsProg = [
    ['3 holds of 15s (both sides)', '3 holds of 30s (both sides)', '3 holds of 60s (both sides)'],
    ['3 holds of 15s (both sides)', '3 holds of 30s (both sides)', '3 holds of 60s (both sides)'],
    ['3 holds of 15s (both sides)', '3 holds of 30s (both sides)', '3 holds of 60s (both sides)']
];

const weekDays = [
    {
        day: 'MON',
        exercises: [
            {exercise: pushups, progression: pushupsProg},
            {exercise: legRaises,progression: legRaisesProg}
        ]
    },
    {
        day: 'TUE',
        exercises: [
            {exercise: pullups, progression: pullupsProg},
            {exercise: squats,progression: squatsProg}
        ]
    },
    {
        day: 'WED',
        exercises: [
            {exercise: bridges,progression: bridgesProg},
            {exercise: twists, progression: twistsProg}
        ]
    },
    {
        day: 'THU',
        exercises: [
            {exercise: pushups, progression: pushupsProg},
            {exercise: legRaises,progression: legRaisesProg}
        ]
    },
    {
        day: 'FRI',
        exercises: [
            {exercise: pullups, progression: pullupsProg},
            {exercise: squats,progression: squatsProg}
        ]
    },
    {
        day: 'SAT',
        exercises: [
            {exercise: bridges,progression: bridgesProg},
            {exercise: twists, progression: twistsProg}
        ]
    },
    {
        day: 'SUN',
        exercises: []
    }
]

const Week = () => {
    return (
        <div className='week_container'>
            {weekDays.map(({day, exercises}, index) => (
                <Day key={index} dayTitle={day} exercisesData={exercises} />
            ))}
        </div>
    );
}

export default Week;
