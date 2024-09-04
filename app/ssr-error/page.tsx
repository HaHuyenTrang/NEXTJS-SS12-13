
// import React, { useState, useEffect } from 'react';

//  async function  getPage() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/nonexistent-url')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setData(data);
//   //     })
//   //     .catch(error => {
//   //       setError(error);
//   //       console.error('Đã xảy ra lỗi:', error);
//   //     });
//   // }, []);\
//       try{
//         const res = await  fetch('https://jsonplaceholder.typicode.com/nonexistent-url')
//         const data = await res.json();
//       } catch(error){
//         console.log(error);
//         // return JSON.stringify(error)
//         return "đường dẫn sai"
//       }

//     }  
//       export default async function page() {
//         const data = await getPage()
//   return (
//     <div>
//       <h1>Xử lí lỗi với SSR {data}</h1>

//       <h2>Lỗi khi tải dữ liệu
//         <br />
//         post.man is not a function
//         <br />
//          ➢	Do đường dẫn sai nên API sẽ không trả về dữ liệu. Từ đó phát sinh ra lỗi ở trên
//       </h2>

//     </div>
//   );
// }
 


import React from 'react'
async function getUser(){
  try{
    const res = await fetch("https://`11111111jsonplaceholder.typicode.com/nonexistent-url")
    const data = await res.json();
  }catch(err:any){
    console.log("error",err);
    return "duong dan bi loi"

  }
}
export default  async function Page() {
  const data = await getUser()  
  return (
    <div>Xử lí lỗi với SSR : {data}</div>
  )
}

