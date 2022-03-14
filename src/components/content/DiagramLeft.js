import React from 'react'
import canva from '../../img/canva.png'


const DiagramLeft = () => {
    return(
        <div className='content_diagram_left'>
                      <div className='content_diagram_left_header'>
                          <div className='content_diagram_left_header_btn'>
                              <div><span>Fx индикаторы</span></div>
                          </div>
                          <div className='content_diagram_left_header_info'>
                              <p>Bicoin/Tether</p>
                          </div>
                      </div>
                      <div className='content_diagram_left_work'>
                        <img src = {canva} alt = 'canva'/>
                      </div>
                      <div className='content_diagram_left_footer'>
                          <div className='content_diagram_left_footer_btn'>
                              <span>Открытые сделки</span>
                          </div>
                          <div className='content_diagram_left_footer_btn'>
                              <span>Лимит/Стоп ордера</span>
                          </div>
                          <div className='content_diagram_left_footer_btn'>
                              <span>Закрытые сделки</span>
                          </div>
                      </div>
                  </div>
    )
}
export default DiagramLeft;