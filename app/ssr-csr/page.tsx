import React from 'react'
async function getComponent(){
    const respon = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await respon.json();
    return data;
}
export default async function page() {
    const component = await getComponent();

  return (
    <div>Danh sách bài viết với Refresh
         {component.map((item:any)=>{
            return <ul key={item.id}>
                <li>
                    {/* id: {item.id}
                    <br /> */}
                    tiêu đề: {item.title}
                    <br />
                    nội dung: {item.body}
                    <br />
                    ---------------------
                </li>
            </ul>
         })}


    </div>
  )
}
