import React from 'react'
import DiagramRightWorkPart from './DiagramRightWorkPart';


const DiagramRight = () => {
    return(
        <div className='content_diagram_right_wrap'>
            <div className='diagram_right_content'>
                <div className='diagram_right_content_header'>
                    <h2>
                        Биржевой стакан
                    </h2>
                </div>
                    <DiagramRightWorkPart />
            </div>
        </div>
    )
}
export default DiagramRight;