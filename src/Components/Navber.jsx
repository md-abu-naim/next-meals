"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navber = () => {
    const pathName = usePathname()
    const router = useRouter()

    const navLinks = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
    ]

    const hanlde = () => {
        router.push('/login')
    }

    if(pathName.includes('dashboard')){
        return <div className="bg-green-600">
            dashboard layout
        </div>
    }
    return (
        <nav className="bg-black text-white px-10 flex items-center justify-between">
            <Link href={'/'} className="text-3xl">Next Hero</Link>
            <ul className="flex items-center justify-between space-x-4">
             {
                navLinks.map((link, i) => <Link href={link.path} key={i} className={`${pathName === link.path && `border-b-2 text-red-500`}`}>{link.title}</Link>)
             }
            </ul>
            <button onClick={hanlde} className="bg-white p-1 text-black">Login</button>
        </nav>
        
    );
};

export default Navber;