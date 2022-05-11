function Nav({children}){

    return(
        <div className="page">
            <div className='nav'>
                <div className="nav-part-1">Home</div>
                <div className="nav-part-2">
                    <a className="nav-item" href="#about">About</a>
                    <a className="nav-item" href="#skills">Skills</a>
                    <a className="nav-item" href="#portfolio">Portfolio</a>
                    <button className="nav-item contact">Contact me</button>
                </div>
            </div>
            <div className="children"> {children} </div>
        </div>
    )
};

export default Nav;