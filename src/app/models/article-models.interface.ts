export interface ArticleBlock {
    id:string,
    type:'article' | 'anchor'  | 'gallery',
    data: Article | Anchor | Gallery
}


export interface Article {
    title:string,
    text:string,
    images:Image[]

}

export interface Image{
    title:string,
    description:string,
    imageUrl:string    
}


export interface Anchor{
    title:string,
    article:Article[]

}


export interface Gallery{
    title:string,
    images:Image[]
}

