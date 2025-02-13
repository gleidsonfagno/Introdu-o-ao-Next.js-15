import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <nav className="max-w-5xl w-full mx-auto flex justify-between py-4">
      <div className="flex items-center">
        <Logo />
      </div>

      <ul className="flex items-center gap-4">
        <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
          Home
        </Link>
        <Link className={cn(buttonVariants({ variant: "link" }))} href="/sobre">Sobre</Link>
        <Link className={cn(buttonVariants({ variant: "link" }))} href="/vagas">Vagas</Link>
        <Link className={cn(buttonVariants({ variant: "link" }))} href="/vagas/cadastro">Cadastrar vagas</Link>
      </ul>
    </nav>
  );
}
