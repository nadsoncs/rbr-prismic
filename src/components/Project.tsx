import Image from 'next/image';

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  image: string;
}
export function Project({ slug, name, description, image }: ProjectProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image 
          className="h-48 w-full object-cover" 
          src={image} 
          alt=""
          width={100}
          height={192}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href={slug} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{name}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
      </div>
    </div>
  )
}