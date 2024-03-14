import PropTypes from 'prop-types'


const Blog = ({blog}) => {
    console.log(blog);
    const {title,cover_img} = blog;
    return (
        <div className='mt-4 space-y-6'>
            <img className='rounded-lg w-[650px]' src={cover_img} alt={`cover picture or the title ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;