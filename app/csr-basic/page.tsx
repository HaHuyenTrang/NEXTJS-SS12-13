"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers]=useState([])
    useEffect (()=>{
        const getUser = async ()=>{
            const respon = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await respon.json();
            setUsers(data)
        }
        getUser();
    })
  return (
    <div>Danh sách người dùng(CSR)
        {users.map((item:any)=>{
            return <ul key={item.id}>
                <li>id: {item.id}</li>
                <li>tên: {item.name}</li>
                <li>địa chỉ: {item.adress}</li>
                <li>email: {item.email}</li>
                <li>*************************</li>
            </ul>
        })}
    </div>
  )
}
