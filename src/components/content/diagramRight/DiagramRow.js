import React from 'react';



const DiagramRow = ({left, right, num1, num2, num3, num4}) => {
    return(
        <div className='diagram_right_row'>
                <div className='cell_left'>
                    <span>{num1}</span>
                    <span>{num2}</span>
                    <div className='cell_left_mask'
                         style = {{ left: `${left}px`}}
                    ></div>
                </div>
                <div className='cell_right'>
                    <span>{num3}</span>
                    <span>{num4}</span>
                    <div className='cell_right_mask'
                         style = {{right: `${right}px`}}
                    ></div>
                </div>
            </div>
    )
}


export default DiagramRow;