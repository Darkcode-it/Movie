import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

function FollowUs() {
    return (

        <section>
            <div className="container mx-auto">

                <span>

                    <ul className="flex mt-5 gap-4 text-center items-center justify-end text-slate-200">
                         Follow Us
                        <li><a href="#"></a><FaInstagram className="hover:text-rose-300" /></li>
                        <li><a href="#"></a><CiFacebook className="hover:text-rose-300" /></li>
                        <li><a href="#"></a><FaGithub className="hover:text-rose-300" /></li>
                        <li><a href="#"></a><FaTelegram className="hover:text-rose-300" /></li>
                        </ul>
                </span>
            </div>
        </section>

    );
}

export default FollowUs;