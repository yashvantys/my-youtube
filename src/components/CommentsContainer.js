import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
    const commentListData = [
        {
            name: "Yashvant Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
            replies: [
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        },
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [
                                {
                                    name: "Yashvant Yadav",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                                    replies: [
                                        {
                                            name: "Yashvant Yadav",
                                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                                            replies: [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Yashvant Yadav",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                                    replies: [
                                        {
                                            name: "Yashvant Yadav",
                                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                                            replies: [

                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Yashvant Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
            replies: [
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [

                    ]
                },
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [

                    ]
                }
            ]
        },
        {
            name: "Yashvant Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
            replies: [
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [

                    ]
                },
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [

                    ]
                }
            ]
        },
        {
            name: "Yashvant Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
            replies: [
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        },
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        }
                    ]
                },
            ]
        },
        {
            name: "Yashvant Yadav",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
            replies: [
                {
                    name: "Yashvant Yadav",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                    replies: [
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        },
                        {
                            name: "Yashvant Yadav",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam non ante blandit, et imperdiet dolor commodo. Pellentesque ullamcorper massa eu nulla ultrices, id dignissim orci eleifend",
                            replies: [

                            ]
                        }
                    ]
                },
            ]
        }
    ]
    const CommentList = ({ comments }) => {
        return comments.map((comment, index) => {
            return (
                <div key={index}>
                    <Comment data={comment} />
                    <div className='pl-5 border border-l-black ml-5'>
                        <CommentList comments={comment.replies} />
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments</h1>
            <CommentList comments={commentListData} />
            {/* <Comment data={commentList[0]} /> */}
        </div>
    )
}

export default CommentsContainer