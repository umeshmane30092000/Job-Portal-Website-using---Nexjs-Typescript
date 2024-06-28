"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react'

interface props {
    children:React.ReactNode;
}

const ClientProvider = ({children}:props) => {
  return <SessionProvider>{children}</SessionProvider>
  
}

export default ClientProvider