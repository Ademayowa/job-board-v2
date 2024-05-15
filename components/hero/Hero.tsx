import BaseLayout from '@/components/layouts/BaseLayout';

export default function HeroPage() {
  return (
    <section className='bg-[#0F4A7B] pt-20 lg:pt-36 py-24'>
      <BaseLayout>
        <div className='mt-10 flex flex-col items-center justify-center'>
          <div className='lg:w-11/12 w-full mx-auto'>
            <h1 className='text-3xl font-bold capitalize tracking-wider md:text-[64px] md:leading-tight text-white'>
              The Easiest Way To Get Your Dream Job Is Now.
            </h1>

            <p className='mt-5 text-lg font-light !leading-normal tracking-wide text-white md:text-2xl w-11/12'>
              Searching and finding your dream job is now easier. Browse latest
              jobs and apply with ease on our platform. All jobs posted are
              verified.
            </p>
          </div>
        </div>
      </BaseLayout>
    </section>
  );
}
