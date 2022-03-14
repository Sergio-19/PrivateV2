import React from 'react';


const ContentInfoDiff = ({diff}) => {
    return(
        <div className='content_info_dif'>
            <p>
                <span style = {{color: diff > 0 ? '#13DA5A' : '#FF504B'}}>{diff > 0  ? `+${diff}%` : `${diff}%`}</span>
                <br/>за день</p>
        </div>
    )
}

export default ContentInfoDiff;