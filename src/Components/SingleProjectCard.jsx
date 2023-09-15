/* eslint-disable react/prop-types */


const SingleProjectCard = ({ title, git, live, desc }) => {
  return (
    <>
      <div className='w-[300px] rounded-xl border border-zinc-500'>
        <div className='p-4'>
          <h1 className='text-4xl font-semibold text-zinc-300'>
            {title.toLowerCase()}
          </h1>
          <p className='mt-3 text-sm text-gray-500'>{desc}</p>
          <div className='flex -ml-[10px]'>
            <a href={live} rel="noreferrer" target='_blank'>
              <button
                type='button'
                className='mt-4  mr-[] rounded-full px-2.5 py-1 text-[15px]  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                demo
              </button>
            </a>
            <a href={git} rel="noreferrer" target='_blank'>
              <button
                type='button'
                className='mt-4  mr-[] rounded-full px-2.5 py-1 text-[15px]  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                github
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectCard;
