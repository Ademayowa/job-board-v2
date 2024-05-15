type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div>
      <h2 className='text-blueColor text-xl lg:text-3xl font-bold'>{title}</h2>
    </div>
  );
}
