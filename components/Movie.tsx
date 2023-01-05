import Link from "next/link";
import { useRouter } from "next/router";
import { MovieInfo } from "../types";
import styled from "styled-components";

function Movie({ id, poster_path, title }: MovieInfo) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/stages/${id}`);
      }}
      className="movie"
      key={id}
    >
      <Image src={poster_path} alt={title} />
      <h4>
        <Link href={`/stages/${id}`}>
          <a>{title}</a>
        </Link>
      </h4>

      <style jsx>{`
        .movie {
          cursor: pointer;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          margin-bottom: 0;
        }
        .movie p {
          margin-top: 2px;
          font-size: 13px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

const Image = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

export default Movie;
