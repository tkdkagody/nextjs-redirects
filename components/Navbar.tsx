import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const Navbar: NextPage = () => {
  const router = useRouter();

  return (
    <nav>
      {/* <Image src="/logo.png" alt="logo" width={300} height={70} /> */}
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>인기 있는</a>
        </Link>
        <Link href="/nowPlaying">
          <a className={router.pathname === "/nowPlaying" ? "active" : ""}>
            상영 중
          </a>
        </Link>
        <Link href="/upcoming">
          <a className={router.pathname === "/upcoming" ? "active" : ""}>
            개봉 예정
          </a>
        </Link>
      </div>

      {/* styles JSX */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          border-bottom: 5px solid #222222;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: red;
        }
        nav div {
          display: flex;
          width: 100%;
          justify-content: space-around;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
