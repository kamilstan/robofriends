import React from 'react';
import Card from './Card'

const RobotList = (props) => {
    const RobotList = props.robots.map((robot, id) => (<Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
    />))

    return (
        <div>
            {RobotList}
        </div>
    )
};
export default RobotList