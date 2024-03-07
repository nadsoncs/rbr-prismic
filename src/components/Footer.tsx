import Image from 'next/image';
import { 
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export function Footer() {
  return (
    <footer className="bg-rbr-750">
      <div
        className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24"
      >
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
          <a
            className="inline-block p-2 shadow sm:p-3 lg:p-4 border border-rbr-350 text-base font-medium rounded-full text-white bg-transparent hover:scale-105 transform transition duration-300 ease-out"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            
            <div className="flex justify-center text-white lg:justify-start">
              <Image
                src="/logo.svg"
                width={200}
                height={64}
                alt=""
              />
          </div>

          <p
            className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-300 lg:text-left"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
          <h2 className="sr-only" id="footer-navigation">Footer navigation</h2>

          <ul
            className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12"
          >
            <li>
              <a className="text-2xl text-white transition hover:text-rbr-250" href="#">
                <IoLogoInstagram  />
              </a>
            </li>

            <li>
              <a className="text-2xl text-white transition hover:text-rbr-250" href="#">
                <IoLogoFacebook/>
              </a>
            </li>

            <li>
              <a className="text-2xl text-white transition hover:text-rbr-250" href="#">
                <IoLogoLinkedin/>
              </a>
            </li>

            <li>
              <a className="text-2xl text-white transition hover:text-rbr-250" href="#">
                <IoLogoWhatsapp/>
              </a>
            </li>
          </ul>
      </nav>
        </div>

        <p className="mt-12 text-sm text-center text-gray-300 lg:text-right">
          Copyright &copy; 2022 - RBR Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>

  );
}