import React from 'react';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarWindow from './SidebarWindow';




const Sidebar = () => {

    return(
        <div className='sidebar'>
         
            <SidebarHeader />
            <SidebarWindow />
            <SidebarFooter />
        </div>
        )}


export default Sidebar;