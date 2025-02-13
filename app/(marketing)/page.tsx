import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import peaploImg from "@/public/people1.png";

export default function Home() {
  return (
    <section className="text-center pb-10">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Link 
      href="/vagas"
      className={cn(
        "cursor-pointer mt-12",
        buttonVariants({  variant: "outline"} )
      )}
      >
        Busque Uma Vaga
      </Link>
      <Image
        src={peaploImg}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}