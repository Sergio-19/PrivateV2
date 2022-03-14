import React from 'react';
import { useSelector } from 'react-redux';
import DiagramRow from './DiagramRow';


const DiagramRightWorkPart = () => {

    const {right, left} = useSelector((state)=> state.cupReducer)

    function getRandom(min, max, n) {
        return (Math.random()*(max - min) + min).toFixed(n)
    }

    const rowArray = new Array(20).fill('')
    const newRowArray = []

        rowArray.forEach((el)=> {
            newRowArray.push({num1: getRandom(3, 400, 2),
                              num2: getRandom(250, 350, 2),
                              num3: getRandom(250, 350, 2),
                              num4: getRandom(5, 350, 2)})})
    
    
    return(
        <div className='diagram_right_work_wrap'>
        {newRowArray.map((row, i)=> {

            return(
                <DiagramRow left = {getRandom(3, left, 2)}
                            right = {getRandom(3, right, 2)} 
                            key = {i}
                            num1 = {row.num1}
                            num2 = {row.num2}
                            num3 = {row.num3}
                            num4 = {row.num4}
                            />
            )
        })}</div>
    )
}


export default DiagramRightWorkPart;