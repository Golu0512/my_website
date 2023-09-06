import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComponent = (props) => {

    const { total, limit } = props;
    const [ totalPages, setTotalPages ] = useState([]);

    const totalPagesCalc = (total, limit) => {
        let pages = [];
        for (let x = 1; x <= Number(total)/limit; x++) {
            setTotalPages(pages.push(x));
        }
        
    }

    useEffect(()=>{
        totalPagesCalc(total, limit);
    },[])

    return (
        <>
            <Stack spacing={2}>
                <Pagination 
                    count={totalPages} 
                    color="secondary" 
                />
            </Stack>
        </>
    )
}

export default PaginationComponent
