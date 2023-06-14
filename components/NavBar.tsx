import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full  absolute z-10">
      <Link href={"/"}>
        <div className="bg-purple-500 text-white p-4">FCPM</div>
      </Link>
    </header>
  );
}
