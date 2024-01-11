import Link from 'next/link';

interface card {
  title: string;
  icon: JSX.Element;
  href: string;
}

const Card: React.FC<card> = ({ title, icon, href }) => {
  return (

      <Link href={href} className="w-1/3 p-0">
        <div className="flex flex-col items-center justify-center rounded-md border border-gray-300 p-4 text-center transition duration-300 hover:bg-blue-500 hover:text-white">
          {icon}
          <span>{title}</span>
        </div>
      </Link>

  );
};

export default Card;
