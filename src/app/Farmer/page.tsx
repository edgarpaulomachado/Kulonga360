'use client';

import Header from "../../components/header";
import Table from "../../components/table";
import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  function: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 360,
  bgcolor: '#E5E7EB',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  overflow: 'auto',
};

export default function Farmer() {
    const [open, setOpen] = React.useState(false);
    const [farmers, setFarmers] = React.useState<IFormInput[]>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, reset } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setFarmers([...farmers, data]); 
        reset(); 
        handleClose(); 
    };

    return (
        <>
            <div className="w-full h-screen bg-white scroll-m-2 overflow-y-auto scroll-hide">
                <main>
                    <div>
                      <Header/>
                    </div>

                    <h1 className="text-black text-[20px] ml-[30px] mt-[40px]">Nossos Agricultores</h1>

                    <div className="flex justify-end mt-[20px] pr-[30px]">
                        <button className="w-auto h-[40px] p-[10px] rounded-lg bg-[#66FF66] text-white text-center cursor-pointer" onClick={handleOpen}>
                            Adicionar Agricultor
                        </button>
                    </div>

                    <div className="mt-[30px] px-[30px]">
                        <Table farmers={farmers} />
                    </div>

                    <div className="flex justify-end mt-[15px]">
                        <Link href={"./details"} className="underline text-green-400 pr-[30px]">Mostrar mais detalhes</Link>
                    </div>
                </main>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" className="text-center mt-[10px]">
                        Novo Agricultor
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center pl-[25px] mt-[30px]">
                        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Insira o primeiro nome" className="w-[350px] h-[30px] bg-transparent outline-none outline-gray-400 rounded-lg pl-[10px]"/>
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Insira o último nome" className="w-[350px] h-[30px] bg-transparent outline-none outline-gray-400 rounded-lg mt-[20px] pl-[10px]"/>
                        <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="Insira a idade" className="w-[350px] h-[30px] bg-transparent outline-none outline-gray-400 rounded-lg mt-[20px] pl-[10px]"/>
                        <input {...register("function", { required: true })} placeholder="Insira o tipo de produto agrícola" className="w-[350px] h-[30px] bg-transparent outline-none outline-gray-400 rounded-lg mt-[20px] pl-[10px]"/>

                        <button type="submit" className="w-[250px] h-[40px] p-[10px] rounded-xl bg-[#66FF66] text-white text-center cursor-pointer ml-[45px] mt-[20px]">
                            Adicionar Agricultor
                        </button>
                    </form>
                </Box>

                </Modal>
            </div>
        </>
    );
}
