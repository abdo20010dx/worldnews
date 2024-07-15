"use client"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom';


export default function PaginatePosts({ totalPages }: any) {
    const { pageId, search } = useParams()
    const navigate = useNavigate()
    const pageParams = pageId ?? 1

    const handlePagination = (event: any, page: any) => {
        const checkSearch = search ? `&search=${search}` : ''
        navigate(`?page=${page}${checkSearch}`)
    }
    return (
        <Stack sx={{ margin: "2em" }} spacing={2}>
            <Pagination page={+pageParams} count={totalPages} color="primary" onChange={handlePagination} />
        </Stack>
    );

}
