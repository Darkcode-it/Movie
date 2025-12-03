import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
function FollowUs() {
    return (
        <section className="w-full py-4">
            <div className="container mx-auto px-2">
                <ul className="flex items-center justify-end gap-4 text-slate-200">
                    <li className="text-sm font-medium">Follow Us :</li>
                    <li>
                        <a 
                            href="https://www.instagram.com/darkcodeit/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors"
                            aria-label="اینستاگرام"
                        >
                            <FaInstagram size="20" />
                        </a>
                    </li>
                    {/* <li>
                        <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors"
                            aria-label="فیس‌بوک"
                        >
                            <CiFacebook size="20" />
                        </a>
                    </li> */}
                    <li>
                        <a 
                            href="https://github.com/Darkcode-it" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors"
                            aria-label="گیت‌هاب"
                        >
                            <FaGithub size="20" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://t.me/Darkcodeit" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-rose-500 transition-colors"
                            aria-label="تلگرام"
                        >
                            <FaTelegram size="20" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default FollowUs;