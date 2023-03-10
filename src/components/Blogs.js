import React from 'react';
import { useSelector } from 'react-redux';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useSelector((state)=>state.blogsReducer);
    const filter = useSelector((state)=>state.filterReducer);
    console.log(filter);
    return (
        <section
            class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div class="absolute inset-0">
                <div class="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div class="relative max-w-7xl mx-auto">
                <div class="text-center">
                    <h2
                        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>

                {/* <!-- card grid  --> */}
                <div
                    class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {/* <!-- single card  --> */}
                    {
                        blogs
                        .filter(blog=>{
                            switch (filter.searchText) {
                                case '':
                                    return true;
                            
                                default:
                                    return blog.blogTitle.toLowerCase().includes(filter.searchText.toLowerCase())
                            }
                        })
                        .filter((blog)=>{
                            switch (filter.searchCategory) {
                                case 'Article':
                                    return blog.category === 'Article'
                                case 'News':
                                    return blog.category === 'News'
                                case 'Content':
                                    return blog.category === 'Content'
                                default:
                                    return true
                            }
                        })
                        .map(blog=><Blog
                        key={blog.id}
                        blog={blog}
                        ></Blog>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;