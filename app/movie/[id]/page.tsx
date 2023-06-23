import React from 'react'
import Image from 'next/image';

type Props = {
    params: any;
}

export default async function MovieDetail({params}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const {id} = params;
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,{next : {revalidate:10}}
  );
  const res = await data.json();
  await delay(2000)

  return (
    <div>
      <div>
        รายละเอียดของหนัง: 
        </div>
      <div>
      <h2 className=' text-4xl mt-20'>ชื่อหนัง: {res.title}</h2>
      <h2 className=' text-4xl mt-5'>ความยาว: {res.runtime}</h2>
      <div className='bg-center'>
      <Image 
      src={imagePath + res.backdrop_path} 
      width={700} 
      height={700}
      alt='movie'
      />
      <p>{res.overview}</p>
      </div>
    </div>
    </div>

  )
}
function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}