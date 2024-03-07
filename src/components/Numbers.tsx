export function Numbers(){
  return (
    <div className="relative bottom-8 md:bottom-24 w-full">
       <div className="flex flex-col w-full m-auto max-w-xs md:max-w-7xl md:h-52 items-center md:px-20 rounded-md bg-rbr-150 ">
        <ul className="grid grid-cols-1 gap-x-28 gap-y-8 my-8 lg:grid-cols-3">
          <li className="w-64 items-center p-4 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-blue-900 mb-2 text-center">+50</p>
            <p className="text-rbr-950 text-base text-center">Empreendimentos entregues</p>
          </li>

          <li className="w-64 p-8 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-blue-900 mb-2 text-center">+15</p>
            <p className="text-rbr-950 text-base text-center">Especialistas disponíveis</p>
          </li>

          <li className="w-64 p-8 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-blue-900 mb-2 text-center">+10</p>
            <p className="text-rbr-950 text-base text-center">Anos no mercado</p>
          </li>
        </ul>
      </div> 
    </div>
  );
}