
"use client"
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material';
import { CardData } from '../DataCards/Card';
import { ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import { splitContentInThree } from '../../global/methods';
import { config } from '../../global/config';
import { styles } from '../../global/styles';
//https://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A%2F%2Fshiner-suited-only.ngrok-free.app%2FpostDetails%2F5357&display=popup
export default function PostDetails({ post: thePost }: Readonly<{ post: CardData }>) {
    const [post, setPost] = useState(thePost)
    const [immotion, setImmotion] = useState(post.like)


    let theContent = post.content ?? post.description
    let content = splitContentInThree(theContent);

    async function updateImmotion(body: any) {

        const response = await (await fetch(`${config.hostname}/immotions`, {
            body: JSON.stringify(body), method: "POST", cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
        })).json()

        return response.data.data
    }


    const handleImmotion = async (like: number) => {
        if (like == immotion) like = 0
        const comingPost = await updateImmotion({ post_id: +post.id, like })
        setPost(comingPost)
        setImmotion(like)
    }

    return (
        <>
            <CssBaseline />
            <Box sx={{ "paddingRight": "1em", "paddingLeft": "1em" }}>
                <Card>
                    <CardActions disableSpacing sx={{ position: "fixed", right: "10%" }}>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => handleImmotion(2)}
                        >
                            {immotion == 2 ? <ThumbDownAlt sx={styles.thumbLike} /> : <ThumbDownOffAlt sx={styles.thumbLike} />}
                            <Typography sx={styles.thumbLike}>{post.dislikes}</Typography>
                        </IconButton>
                        <IconButton
                            onClick={() => handleImmotion(1)}

                        >
                            {immotion == 1 ? <ThumbUpAlt sx={styles.thumbLike} /> : <ThumbUpOffAlt sx={styles.thumbLike} />}
                            <Typography sx={styles.thumbLike}>{post.likes}</Typography>

                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon sx={styles.thumbLike} />
                        </IconButton>
                    </CardActions>
                    <CardContent>

                        {/* <Image style={styles.newsLogo} src={post.sourceLogo} alt='logo' width={10} height={10} /> */}
                        <Typography sx={styles.source} variant='h6' display='block'>{post.source_id}</Typography>
                        <br />
                        <Typography sx={styles.source} variant='h6' display='block'> {new Date(post.pubDate).toLocaleTimeString()} </Typography>
                        <br />
                        <Typography sx={styles.source} variant='h4' display='block'>{post.title}</Typography>

                    </CardContent>

                    <CardMedia
                        sx={styles.imageDetais}
                        component="img"
                        image={post.image_url}
                        alt={post.title}
                    />
                    <br />
                    <CardContent>

                        <Typography sx={styles.source} variant='h6' display='block'>
                            {content[0]}
                        </Typography>
                        {/* <Link href="" height="15rem" >
                            <CardMedia
                                sx={{ height: "inherit", objectFit: "fill" }}
                                component="img"
                                src={post.image_url}

                            />
                        </Link> */}
                        <Typography sx={styles.source} variant='h6' display='block'>

                            {content[1]}
                            {content[2]}
                        </Typography>

                    </CardContent>

                </Card>
            </Box>
        </>
    );
}
