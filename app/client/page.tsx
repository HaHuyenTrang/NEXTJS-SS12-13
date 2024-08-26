"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    // call api lấy dữ liệu 
    const [user,setUser]= useState ([])
    useEffect(()=>{

        const getData = async ()=>{
            const res = await        fetch("https://jsonplaceholder.typicode.com/users")
            const data= await res.json();
            setUser(data)
        }
        getData();
        
    })
  return (
    <div>render dữ liệu client
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        {user.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
