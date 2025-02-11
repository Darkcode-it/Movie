
import { CiSearch } from "react-icons/ci";
export default function ShearcheBox() {
    return (
        <section className=" mt-10 text-slate-400 pl-10 pr-10" >
            <div className="relative">
                <input type="text" placeholder="What are you looking for?" className="w-full bg-slate-700 text-2xl p-3
    border-slate-500 border-0.5 rounded-md"/>
                <CiSearch className="absolute right-0 top-1/3 mr-5 w-10 h-10 -translate-y-3" />
            </div>
        </section>
    );
}

