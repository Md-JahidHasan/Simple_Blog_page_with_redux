import { BLOGADDED } from "./actionTypes";

const initialState = [
    {
        id: 1,
        blogTitle: 'Boost your conversation rate',
        blogImage: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        category: 'Article',
        author: 'Priyanka Saha',
        date: '11 Jul, 2022',
        readingDuration: 5

    },
    {
        id: 2,
        blogTitle: 'How to use search engine optimization to drive sales',
        blogImage: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        category: 'News',
        author: 'Sahabuddin',
        date: '13 Jun, 2022',
        readingDuration: 5

    },
    {
        id: 3,
        blogTitle: 'Earning Hacks - Learn &',
        blogImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        category: 'Content',
        author: 'Priha',
        date: '11 Jul, 2023',
        readingDuration: 5

    },
    {
        id: 4,
        blogTitle: 'The cancer of Bangladesh - Corruption',
        blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpD5QHm9ofLPmPvhK9KcVlSZ8kJYSrC0Bqw&usqp=CAU',
        category: 'Article',
        author: 'Saha Alam',
        date: '11 Jan, 2022',
        readingDuration: 6

    },
    {
        id: 5,
        blogTitle: 'Boost your conversation rate',
        blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgKx-bTsAQtyWeP-6-d5cFJ-VzYaJGOePwA&usqp=CAU',
        category: 'Article',
        author: 'Priyanka Saha',
        date: '11 Jul, 2022',
        readingDuration: 5

    },
    {
        id: 6,
        blogTitle: 'Boost your conversation rate',
        blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgKx-bTsAQtyWeP-6-d5cFJ-VzYaJGOePwA&usqp=CAU',
        category: 'Article',
        author: 'Priyanka Saha',
        date: '11 Jul, 2022',
        readingDuration: 5

    },
]

export const blogsReducer = (state= initialState, action) =>{
        switch (action.types) {
            case BLOGADDED:
                return [
                    ...state,
                    {
                        blogTitle: action.payloads
                    }
                ]
        
            default:
                return state
        }
    
}