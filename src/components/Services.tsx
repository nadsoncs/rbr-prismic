import { 
  DocumentCheckIcon,
  ChevronDoubleUpIcon,
  ArrowPathRoundedSquareIcon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon, 
} from '@heroicons/react/24/solid'

const advantages = [
  {
    name: 'Projeto',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Construção',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: ChevronDoubleUpIcon,
  },
  {
    name: 'Reforma',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Serviço quatro',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: HomeModernIcon,
  },
  {
    name: 'Outro serviço',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Mais um',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.',
    icon: BuildingOffice2Icon,
  },
]
export function Services() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-sky-900 uppercase">Tudo que você precisa</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Como podemos ajudá-lo em seu empreendimento?
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div key={advantage.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <advantage.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{advantage.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}