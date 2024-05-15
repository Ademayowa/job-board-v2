import Link from 'next/link';

type Props = {
  route: string;
  title: string;
  target?: string;
  rel?: string;
};

export default function Button({ route, title, target, rel }: Props) {
  return (
    <Link
      className='bg-[#FF761C] px-10 text-white py-4 rounded-md shadow-2xl hover:bg-orange-600'
      target={target}
      rel={rel}
      href={route}
    >
      {title}
    </Link>
  );
}
