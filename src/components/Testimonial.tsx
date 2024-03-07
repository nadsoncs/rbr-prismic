import Image from 'next/image';
export function Testimonial() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          O que os clientes dizem sobre a RBR Engenharia
        </p>
        <div className="my-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-rbr-250 rounded-lg px-6 pb-8">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-rbr-750 opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-xl font-medium text-gray-600 text-left">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
                <footer className="mt-6 content-start">
                  <p className="text-base font-bold text-rbr-750 text-left">Fulana de Tal</p>
                  <p className="text-base font-medium text-gray-500 text-left">CEO Empresa X</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <h2 className="text-base font-semibold tracking-wider text-rbr-950 uppercase">Empresas que confiam</h2>
        

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/acesso.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover "
              src="/assets/brands/conteflex.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/feiracopias.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/gqsseguros.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/ion.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/nazaria.png"
              alt=""
              width={144}
              height={144}
            />
          </div>

          <div className="pt-2">
            <Image
              className="object-cover"
              src="/assets/brands/prolinhas.png"
              alt=""
              width={144}
              height={144}
            />
          </div>
        </div>
      </div>
    </div>
  );
}