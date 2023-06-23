import Movie from "./coponents/movie";


export default async function Home() {
  //fetch from API
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
  const data = await fetch(url)
  const res = await data.json()
  await delay(2000)

  return (
    <main>
      <h1 className="text-2xl mb-20">โปรแกรมโปสเตอร์หนัง</h1>
      <div className="grid gap-2 grid-cols-3">
        {res.results.map((movie: any) =>(
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
        ))}
      </div>      
    </main>
  );
}
function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

