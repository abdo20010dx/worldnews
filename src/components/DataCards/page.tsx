import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { DataGrid } from './DataGrid';
import Carousel from './carousel';
import PaginatePosts from '../footer/pagination';
import { Cards } from '../../global/GnewsApi/gnewsResponse';
import { requestGnews } from '../../global/GnewsApi/requests';
import { useEffect, useState } from 'react';
import Loading from '../loadingPage/loading';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';



export function DataCards() {
    const defaultData = { data: [], meta: { current_page: 1, per_page: 10, startItemInPage: 1, total: 1000, total_pages: 1000 } }
    const [response, setResponse] = useState(defaultData as Cards)
    const { pathname } = useLocation()
    let [searchParams, setSearchParams] = useSearchParams();
    const [cookies, setCookie] = useCookies();
    const page = searchParams?.get("page") ?? 1
    const category = pathname.split('/')[1] as any
    const { data, meta } = response
    useEffect(() => {
        const fetchData = async () => {
            const response: Cards = await requestGnews(cookies.country, +page, category)
            setResponse(response)
        }
        fetchData()
    }, [pathname])

    let start = -1
    let end = 2

    return (
        <>
            {
                !data.length ? <Loading /> :

                    <Box sx={{ flexGrow: 1 }}>
                        <Carousel posts={data?.slice(0, 4)} />
                        <br />
                        <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} direction={'row'} >

                            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} lg={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            </Grid>

                            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} lg={12} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                                {

                                    data?.map(
                                        (post, index) => {
                                            if (index > start && index < end) {
                                                if (index == end - 1) { start += 5; end += 5; }

                                                return (<DataGrid post={post} key={post.url} lg={6} md={6} />)
                                            }
                                            return (<DataGrid post={post} key={post.url} />)
                                        }

                                    )
                                }
                            </Grid>
                        </Grid>
                        <PaginatePosts totalPages={meta?.total_pages}></PaginatePosts>
                    </Box>

            }
        </>
    );
}

