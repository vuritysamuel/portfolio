import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-primary">Samuel Vurity</h1>
        <div className="space-x-6 font-medium">
          <Link href="#about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="#experience" className="hover:text-primary transition">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-primary transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-primary transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}