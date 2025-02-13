// import { Button, buttonVariants } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import boatImage from "@/public/boat.webp";

export default function NotFound() {
  return (
    <main className="py-10 text-center max-w5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800">
        Nada encontrado aqui...
      </h2>
      <Image
        className="mx-auto mt-10 w-xs"
        src={boatImage}
        alt="ilustração de um barco"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possível encontrar o recurso solicitado
      </p>

      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-6",
        )}
      >
        Voltar para Home
      </Link>
    </main>
  );
}

// 2:199
