import React from 'react';
import Link from 'next/link';
import Logo from '../../../public/logo_kulonga.png';
import Image from 'next/image';
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineControl } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { CgTrees } from "react-icons/cg";
import { IoCalendarOutline } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";
import {IoPersonSharp} from "react-icons/io5";


const Layout = ({children} : {children : React.ReactNode}) => {
    return (

        <div className="w-[100%] h-screen flex overflow-hidden ">
         <aside className="flex-col w-[300px] h-screen bg-[#4e544e] px-3">
            <Image
                src={Logo}
                alt={""}
                width={250}
                height={200}
                className="mt-[2px] px-[20px]"
            />

            <ul className="flex flex-col">
                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px] ">
                    <LuLayoutDashboard className="w-[20px] h-[20px] text-white"/>
                    <Link href={'dashboard'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Dashboard</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <AiOutlineControl className="w-[20px] h-[20px] text-white"/>
                    <Link href={'monitorament'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Monitoramento</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <IoCalendarOutline className="w-[20px] h-[20px] text-white"/>   
                    <Link href={'planeament'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Planejamento</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <HiOutlineDocumentReport className="w-[20px] h-[20px] text-white"/>
                    <Link href={'#'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Relatórios</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <CgTrees className="w-[20px] h-[20px] text-white"/>
                    <Link href={'#'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Gestão de recursos</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <CiTempHigh className="w-[20px] h-[20px] text-white"/>
                    <Link href={'#'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Temperatura</Link>
                </div>

                <div className="w-[270px] h-[50px] px-[15px] flex items-center rounded-[10px] cursor-pointer hover:bg-gray-300 border-gray-300 gap-[10px]">
                    <IoPersonSharp className="w-[20px] h-[20px] text-white"/>
                    <Link href={'farmer'} className="cursor-pointer text-white text-center hover:text-[#4e544e]">Agricultor</Link>
                </div>
                
            </ul>
         </aside>
            {children}
        </div>
    )
}

export default Layout;
