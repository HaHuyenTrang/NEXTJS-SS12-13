// import { log } from 'console';
import React from 'react'
async function getUserId() {
    const respon = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await respon.json();
    return data;
}
export default async function Page() {
    const userId = await getUserId()
    console.log(userId);
    
    return (
        <div>Danh sách Bài viết
            {userId.slice(0, 4).map((item: any) => {
                return <li key={item.id}>tên: {item.title} 
                <br /> nội dung: {item.body}</li>;
            })}
        </div>
    )
}
