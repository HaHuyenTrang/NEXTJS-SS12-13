import React from 'react'
// hàm đi lấy dữ liệu bằng cách gọi api
 async function getUser(){
    const respon = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respon.json();
    return data;
}
export default async function page() {
    const user= await getUser();
  return (
    <div>server
        {user.map((item:any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}
