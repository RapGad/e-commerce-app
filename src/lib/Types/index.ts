export interface PostListsProps{
    posts: Array<{
        id: number
        title: string
        description: string
        slug: string
        createdAt: Date
        author: {

            name: string
        }
    }>
}


export interface PostCardProp{
    post: {
        id: number
        title: string
        description: string
        slug: string
        createdAt: Date
        author: {
            name: string
        }
    }

}


export interface PostContentProps{
    post: {
        id: number
        title: string
        description: string
        slug: string
        createdAt: Date
        updatedAt: Date
        content: string
        author: {
            name: string
        }
    }
    isAuthor: Boolean

}

export interface DeletePostButtonProps{
    postId: number
    
}