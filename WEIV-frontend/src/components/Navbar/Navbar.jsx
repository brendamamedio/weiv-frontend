import React from "react";
import {
  Menubar,
  MenubarMenu
} from "@/components/ui/menubar";
import { Button } from "../Button/Button";
import "../Navbar/navbar-style.css";
import { CustomInput} from "../Input/Input";

export const Navbar = () => {
  return (
    <>
      <Menubar className='navbar'>
        <MenubarMenu>
            <CustomInput type='search' placeholder='Buscar' ></CustomInput>
            <Button className='btn-border' textContent='Cadastre-se'></Button>
            <Button className='btn' textContent='Login'></Button>
        </MenubarMenu>
      </Menubar>
    </>
  );
};
