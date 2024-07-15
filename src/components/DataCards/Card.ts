
export interface CardData {

    id: number;
    article_id: string
    title: string
    link: string
    keywords: []
    creator: string
    video_url: string
    description: string
    content: string
    pubDate: Date
    image_url: string
    source_id: string
    source_priority: number
    country: string[]
    category: string[]
    language: string[]
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;

    likes?: number
    dislikes?: number
    comments?: number
    shareds?: number
    like?: number


}
