import Link from "next/link";

export default function Home() {
  return (
    <main>
      MAIN PAGE
      <Link href="/dashboard">Admin DashBoard</Link>
      <Link href="/">Home Page</Link>
    </main>
  );
}
