'use client';

import React from 'react';
import { useState } from 'react';
import Header from '../../components/header';
import Link from 'next/link';
import ToDoList from '../../components/to-do-list';
import { TbAlertTriangleFilled } from "react-icons/tb";
import Chart from "../../components/Chart";
import { IoCalendar } from "react-icons/io5";


const Dashboard = () => {
    const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-full h-screen bg-white scroll-m-2 overflow-y-auto scroll-hide">
      <main>
        <div>
          <Header/>
        </div>
        <h1 className="text-black text-[20px] mt-[40px] ml-[30px]">Bem-vindo ao Painel Administrativo</h1>

        <div className="grid grid-cols-3 py-[20px] px-[30px]">
          
            <Link href={'../../pages/notification'}>
              <div className="w-[300px] h-[200px] rounded-lg bg-gray-300 p-[10px] flex justify-center gap-[5px]">
                  <h2 className='text-black text-center text-[18px] mt-[8px]'>
                    Alertas
                  </h2>
                  <TbAlertTriangleFilled className="w-[20px] h-[20px] mt-[10px]"/>
              </div>            
            </Link>

            <Link href={'../planeament'}>
              <div className="w-[300px] h-[200px] rounded-lg bg-gray-300 p-[10px] flex justify-center gap-[5px]">
                <h2 className='text-black text-center text-[18px] mt-[8px]'>
                  Plano diário
                </h2>
                <IoCalendar className="w-[20px] h-[20px] mt-[10px]"/>
              </div>
            </Link>

            <Link href={''}>
              <div className="w-[300px] h-[200px] rounded-lg bg-gray-300 p-[10px]">
                <h2 className='text-black text-center text-[18px] mt-[8px]'>
                  Recursos disponíveis
                </h2>
              </div>
            </Link>
        </div>

        <div className="flex justify-end">
          <Link href={'monitorament'} className="underline text-green-400 pr-[30px]"> Monitorar</Link>
        </div>

        <div className="py-[20px] px-[30px]">
          <Chart />
        </div>

        <div className="py-[10px] grid grid-cols-2 px-[30px]">
          <ToDoList />
          <iframe src="https://calendar.google.com/calendar/embed?src=kadyedgarpaulomachado%40gmail.com&ctz=Africa%2FLagos" className="border-none w-[450px] h-[300px]"></iframe>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
