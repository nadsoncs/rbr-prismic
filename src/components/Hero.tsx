import Image from 'next/image';
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-rbr-500 pt-10 sm:pt-16 lg:pt-8 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 justify-items-end">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <Image
                src="/logo.svg"
                width={350}
                height={111}
                alt=""
              />
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Projeto e construção</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-rbr-250 to-rbr-350 sm:pb-5">
                  simplificada para todos
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl lg:mb-10">
                Os engenheiros da RBR são bla bla sdsasdo lasmsdpjs oijasd knmasiuids iojadwe oijaje ajjeeo.
              </p>
            </div>
          </div>
          <div className="mt-12  lg:m-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl  lg:max-w-none lg:px-0">
              <Image
                src="/engenheiro.png"
                width={392}
                height={534}
                alt=""
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}