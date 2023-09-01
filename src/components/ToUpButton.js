import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { TbNavigationFilled } from "react-icons/tb";

const ToUpButton = () => {

    const goToUp = () => {
        window.scroll(0,0);
    }

    return (
        <>
            <div className='d-flex justify-content-end px-xl-4 px-lg-4 px-md-4 px-4'>
                <Tooltip title="Go To Top" placement="top" arrow>
                    <span className='d-flex bg_to_up rounded-pill p-2' onClick={goToUp}>
                        <TbNavigationFilled />
                    </span>
                </Tooltip>
            </div>
        </>
    )
}

export default ToUpButton
