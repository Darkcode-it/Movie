

function Nav() {
    return (
        <nav className="flex mt-10 items-center text-slate-300">
            <div className="flex items-center">
                <h1 className="text-2xl mr-12">Movis <span className="text-rose-600 font-semibold"> Film</span>
                <p className="text-slate-600 text-xs text-center font-semibold">Film Review</p>
                </h1>
                <ul className="flex gap-4 uppercase">
                    <li className=""><a href="#">Movis</a></li>
                    <li className=""><a href="#">TV shows</a></li>
                    <li className=""><a href="#"></a>Pip</li>
                    <li className=""><a href="#"></a>More</li>
                </ul>
            </div>
<div className="ml-auto ">
    <ul className="flex gap-4 items-center uppercase">
        <li className="cursor-pointer hover:text-white"><a href="#"></a>Login</li>
        <li className="bg-rose-700 hover:bg-rose-500 cursor-pointer px-6 py-3 rounded-3xl text-white "><a href="#" ></a>Sign up</li>
    </ul>
</div>

        </nav>
    );
}

export default Nav;