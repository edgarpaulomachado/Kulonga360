'use client';

import React from 'react';
import Header from "../../components/header";
import Table from "../../components/t";

export default function Planeament() {
    return (
        <div className="w-full h-screen bg-white scroll-m-2 overflow-y-auto scroll-hide">
            <main>
                <div>
                    <Header />
                </div>
                <h1 className="text-black text-[20px] ml-[30px] mt-[40px]">Planeie com a Kulonga</h1>

                <div  className="w-full mt-[30px] px-[30px]">
                    <iframe src="https://calendar.google.com/calendar/embed?src=kadyedgarpaulomachado%40gmail.com&ctz=Africa%2FLagos" className="border-none w-[950px] h-[400px] ml-[20px]"></iframe>
                </div>
            </main>
    </div>
    )
}
