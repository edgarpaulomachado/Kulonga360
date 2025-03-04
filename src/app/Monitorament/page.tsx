'use client';

import Header from '../../components/header';
import React from 'react';
import LineChart from "../../components/lineChart";
import RadarChart from "../../components/radarChart";
import Machine from "../../components/machine";


export default function Monitoramento() {

    return (
        <div className="w-full h-screen bg-white scroll-m-2 overflow-y-auto scroll-hide overflow-x-hidden">
            <main>
                <div>
                    <Header />
                </div>
                <h1 className="text-black text-[20px] ml-[30px] mt-[40px]">Monitore com a Kulonga</h1>

                <div className="ml-[30px] mt-[30px] w-auto h-[400px] mr-[30px] bg-black">

                </div>

                <div className="w-auto grid grid-cols-2 px-[30px] mt-[15px] pt-4 border-b-2">
                    <LineChart />
                    <RadarChart />
                </div>

                <div className="px-[30px] py-[30px]">

                    <h2 className="text-center text-[20px] mb-[20px]"> Maquinaria</h2>
                    <Machine machines={[]} />
                </div>

            </main>
        </div>
    )
}
