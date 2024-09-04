"use client"
import React from 'react'
interface Params{
    id:string
}
interface Props{
    params:Params
}
async function getDynamic(){
    const respon = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await respon.json();
    return data;
}
export default async function Page(props:Props) {
    const {params}=props
    const idDynamic = await getDynamic()
  return (
    <div>Chi tiết bài viết
        {idDynamic.map((item:any)=>{
            return <li key={item.id=params.id}>bài viết có id là : {params.id} nội dung :  {item.body}</li>
        })}
    </div>
  )
}
