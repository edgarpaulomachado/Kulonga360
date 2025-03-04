'use client';

import { VscBell } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '20%',
    left: '90%',
    transform: 'translate(-80%, -10%)',
    width: 400,
    height: 400,
    bgcolor: '#E5E7EB',
    border: 'none',
    borderRadius: '10px',                                                                                    
    p: 4,
  };



export default function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
           <div className="flex w-[100%] h-[80px] border-b-2 justify-between px-[30px] py-[10px]">
                <div className= "flex w-[300px] h-[40px] py-[10px] px-[10px] justify-between items-center gap-[10px] mt-[10px] relative border border-[#66FF66] rounded-lg">
                    <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder="Search something"
                    className="w-[250px] h-[35px] pl-1 outline-transparent rounded-lg bg-transparent"
                    />
                    
                    <IoSearch className="w-[25px] h-[20px] cursor-pointer"/>
                </div>

                <VscBell className="w-[20px] h-[25px] mt-[15px] cursor-pointer" onClick={handleOpen} />       
         
            </div>

            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h1">
                            Notificações 
                        </Typography>

                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Something very good
                        </Typography>
                    </Box>
                </Fade>
            </Modal>  
        </>
    )
}




