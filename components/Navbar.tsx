import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar: NextPage = () => {
  const router = useRouter();

  return (
    <nav>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>stages</a>
        </Link>
      </div>

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
