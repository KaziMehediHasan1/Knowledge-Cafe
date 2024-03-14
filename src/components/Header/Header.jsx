import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto border-b-2 pb-2 mt-4'>
            <h1 className="text-center font-semibold text-2xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;