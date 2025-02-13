import { Github, Instagram, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="flex mx-auto max-w-5xl justify-between">
        <div className="max-w-sm">
          <Logo bg="dark" />
          <p className="mt-2 text-sm font-extralight">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex gap-3">
          <Instagram className="cursor-pointer hover:text-blue-400" />
          <Github className="cursor-pointer hover:text-blue-400" />
          <Mail className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
}
