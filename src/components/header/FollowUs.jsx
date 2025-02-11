import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
function FollowUs() {
    return (
        <section>
            <div>
                <span>
                    <ul className="  flex
                     mt-5 gap-4 text-center items-center
                      justify-end text-slate-200 pr-10">

                        Follow Us :

                        <li><a href="#"></a><FaInstagram size="20"
                         className="hover:text-rose-500" /></li>
                        <li><a href="#"></a><CiFacebook size="20"
                            className="hover:text-rose-500" /></li>
                        <li><a href="#"></a><FaGithub size="20" 
                        className="hover:text-rose-500" /></li>
                        <li><a href="#"></a><FaTelegram size="20"
                            className="hover:text-rose-500" /></li>
                    </ul>
                </span>
            </div>
        </section>

    );
}

export default FollowUs;