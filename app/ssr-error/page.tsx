"use client"
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/nonexistent-url')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
        console.error('Đã xảy ra lỗi:', error);
      });
  }, []);

  return (
    <div>
      <h1>Xử lí lỗi với SSR</h1>

      <h2>Lỗi khi tải dữ liệu
        <br />
        post.man is not a function
        <br />
         ➢	Do đường dẫn sai nên API sẽ không trả về dữ liệu. Từ đó phát sinh ra lỗi ở trên
      </h2>

    </div>
  );
}