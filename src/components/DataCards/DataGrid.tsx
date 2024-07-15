"use client"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import { Badge, Link } from '@mui/material';
import { ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import { CardData } from './Card';
import { useState } from 'react';
import { config } from '../../global/config';
import { styles } from '../../global/styles';
import { GnewsRes } from '../../global/GnewsApi/gnewsResponse';

const newsImage = `https://img.freepik.com/premium-vector/breaking-news-template-with-3d-red-blue-badge-breaking-news-text-dark-blue-with-earth-world-map-background_34645-1113.jpg`
interface CardParams {
    post: GnewsRes
    key: any
    lg?: number
    height?: string
    md?: number
    sm?: any
    xs?: any
}
const url = `https://www.msn.com/ar-eg/news/national/%D8%A7%D9%84%D9%85%D8%B1%D9%88%D8%B1-%D9%81%D8%AA%D8%AD-%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%B9%D9%8A%D9%86-%D8%A7%D9%84%D8%B3%D8%AE%D9%86%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%86%D9%82%D8%B4%D8%A7%D8%B9-%D8%A7%D9%84%D8%B4%D8%A8%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9/ar-AA1jTIFQ?ocid=msedgdhphdr&cvid=3fb260c1cefe413fafaf3e7217b71c23&ei=11`


export function DataGrid({ post: thePost, key, lg = 4, height = "250rem", md = 4, sm = 6, xs = 12 }: Readonly<CardParams>) {

    const [post, setPost] = useState(thePost)
    const [immotion, setImmotion] = useState(0)

    async function updateImmotion(body: any) {
        const response = await (await fetch(`${config.hostname}/immotions`, {
            body: JSON.stringify(body), method: "POST", cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
        })).json()

        return response.data.data
    }


    const handleImmotion = async (like: number) => {
        if (like == immotion) like = 0
        const comingPost = await updateImmotion({ post_id: +post.url, like })
        setPost(comingPost)
        setImmotion(like)
    }

    return (

        <Grid display={'grid'} xs={xs} sm={sm} md={md} lg={lg} key={key} >
            <Card elevation={20} >
                <CardContent >
                    {/* <Image style={styles.newsLogo} src={post.sourceLogo} alt='logo' width={10} height={10} /> */}
                    <Typography sx={styles.source} variant='overline' display='block'>{post.title}</Typography>
                </CardContent>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.description}
                // subheader={post.title}
                />
                {/* <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {post.content}
                    
                    </Typography>
                </CardContent> */}
                <Link
                    href={"/postDetails/" + post.url}
                >
                    <CardMedia
                        component="img"
                        height={height}
                        image={post.image ?? newsImage}
                        alt={post.title}
                    />
                </Link>
                <CardActions disableSpacing>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleImmotion(2)}
                    >
                        {immotion == 2 ? <ThumbDownAlt /> : <ThumbDownOffAlt />}
                        <Typography >{0}</Typography>
                    </IconButton>
                    <IconButton
                        onClick={() => handleImmotion(1)}

                    >
                        {immotion == 1 ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
                        <Typography >{0}</Typography>

                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </Grid>
    )
}