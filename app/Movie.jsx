import Image from "next/image";
import Link from "next/link";

export default function Movie({ poster_path, release_date, id, title }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  console.log(poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
