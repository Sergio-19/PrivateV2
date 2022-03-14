import React from 'react'
import { useSelector } from 'react-redux';
import ContentInfoDiff from './ContentInfoDiff';


const ContentInfo = () => {

const {currencies, current, different} = useSelector((state)=> state.mainReducer)


const currenciesArr = [...currencies].filter((el)=> el.id === current)

const {name, course, volume, diff, id} = currenciesArr[0]

const style = {background: ''}
id === different ? style.background = 'red' : style.background = ''

const date = new Date()
const hourse = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

    return(
        <div className='content_info'>
                  <div className='content_info_name'>
                      <h2>{name}</h2>
                  </div>
                  <div className='content_info_value'>
                      <h3 style = {style}>{course.toFixed(3)}</h3>
                  </div>
                  <ContentInfoDiff diff = {diff} />
                  <div className='content_info_sum'>
                      <p><span>{volume}</span><br/>
                      Объем за 24 часа</p>
                  </div>
                  <div className='content_info_time'>
                      <p><span>{`${hourse}:${minutes}:${seconds}`}</span><br/>
                      Funding (покупка -0.01%, продажа 0.01%)</p>
                  </div>
                  <div className='content_info_height'>
                      <div className='content_info_height_pic'></div>
                      <div className='content_info_height_text'><small>4%<br/>снижение</small><small>96%<br/>рост</small></div>
                  </div>

              </div>
    )
}

export default ContentInfo;