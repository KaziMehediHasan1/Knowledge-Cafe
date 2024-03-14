import PropsTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-red-100 p-4 mt-6 rounded-lg text-center'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropsTypes.func,
}
export default Bookmark;