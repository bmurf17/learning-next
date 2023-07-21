import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function CustomCard({ image, title, description }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer h-full transform transition duration-500 hover:scale-110">
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={image}
          alt={`picture of ${image}`}
          fill={true}
          sizes="50vw"
          // priority={true}
          placeholder="blur"
          blurDataURL={"/img/logo.png"}
          className="object-cover"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
    </div>
  );
}
