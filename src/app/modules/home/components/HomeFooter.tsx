import Link from "next/link";

export default function HomeFooter() {
    const now = new Date();
    const year = now.getFullYear();
  return (
    <footer className="flex flex-col gap-2 p-6 border-t border-[#D72638] bg-[#2B2B2B] text-white text-xs">
      <p>© {year} InkTime Studio. Todos os direitos reservados.</p>
      <nav className="flex gap-4">
        <Link href="#" className="text-white no-underline">
          Termos de Serviço
        </Link>
        <Link href="#" className="text-white no-underline">
          Política de Privacidade
        </Link>
      </nav>
    </footer>
  );
}
