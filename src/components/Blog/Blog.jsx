import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";



const Blog = ({blog,handleBookmarks}) => {
    // console.log(blog);
    const {title,cover_img, reading_time,author_img,author,posted_date,hashtags} = blog;
    return (
        <div className='pt-10 space-y-6 mb-20'>
            <img className='rounded-lg h-full' src={cover_img} alt={`cover picture or the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-2xl' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h2 className='text-xl font-semibold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div  className='space-x-2'>
                    <span>{reading_time} read</span>
                    <button onClick={()=> handleBookmarks(blog)? 'red': 'green'}>
                        <FaRegBookmark />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <a className='font-semibold text-blue-500 underline' href=''><p>Mark as read</p></a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func.isRequired
}

export default Blog;