import Link from "next/link";


export default function ProjectCard({title, description, link}) {
    return(
        <div className="bg-slate-800 rounded-lg md:p-4 p-3 m-2 flex flex-col gap-2 w-9/12 h-fit">
            <h3 className="text-2xl font-bold text-gray-200">{title}</h3>
            <p className="md:text-lg text-base text-slate-300">
                {description}
            </p>
            <Link
                href={link}
                target="blank"
                className="p-2 text-slate-400 border-2 rounded-lg w-fit border-slate-500 text-sm font-bold transition-all duration-300 hover:bg-cyan-500 hover:text-white"
            >
                See Repo
            </Link>
        </div>
    )
}