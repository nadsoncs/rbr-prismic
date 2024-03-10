import Image from 'next/image';
import Link from "next/link";

const navigation = [
  { name: 'Sobre', href: '#' },
  { name: 'Serviços', href: '#' },
  { name: 'Depoimentos', href: '#' },
  { name: 'Portfólio', href: '#' },
]

interface HeaderProps {
  phone: string;
}
export function Header({ phone }: HeaderProps) {
  return (
    <header className="relative">
      <div className="bg-rbr-500 py-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <span className="sr-only">Workflow</span>
                <Image
                  src="/logo-min.svg"
                  alt="RBR logo hat"
                  width={46}
                  height={35}
                />
              </Link>
            </div>

            <div className="hidden space-x-8 w-full justify-center md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href={`https://wa.me/55${phone}`} className="w-40 justify-center inline-flex items-center px-4 py-2 border border-rbr-350 text-base font-medium rounded-full text-white bg-transparent hover:scale-105 transform transition duration-300 ease-out">
                Fale Conosco
              </Link>
            </div>

          </div>
        </nav>
      </div>

    </header>
  );
}