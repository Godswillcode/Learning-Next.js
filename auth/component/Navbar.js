import Link from "next/link";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">Next Auth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {session && (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && (
          <li>
            <Link href="/api/auth/signin" onClick={() => signIn()}>
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout" onClick={() => signOut()}>
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
