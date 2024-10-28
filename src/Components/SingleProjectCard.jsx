/* eslint-disable react/prop-types */


const SingleProjectCard = ({ title, git,type, live, desc,emoji }) => {
  return (
    <>
      <div className='w-[300px] transform transition duration-300 hover:scale-105 rounded-xl border border-zinc-500'>
        <div className='p-4'>
          <h1 className='text-4xl font-semibold  text-zinc-300'>
            {title.toLowerCase()}
            <span className="animate-pulse">{emoji}</span>
          </h1>
          <p className='mt-3 text-sm text-gray-500'>{desc}</p>
          <div className='flex mb-2 -ml-[10px]'>
            <a href={live} rel="noreferrer" target='_blank'>
              <button
                type='button'
                className='mt-4 transform transition duration-300 hover:scale-105 mr-[] rounded-full px-2.5 py-1 text-[15px] underline text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                demo
              </button>
            </a>
            <a href={git} rel="noreferrer" target='_blank'>
              <button
                type='button'
                className='mt-4 transform transition duration-300 hover:scale-105  mr-[] rounded-full px-2.5 py-1 text-[15px] underline text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                github
              </button>
            </a>
          </div>
          <span className={`px-4 py-1 ${type === "Hiring assessment" ? "bg-green-300" : "bg-purple-300"} text-gray-950 rounded-full`}>
  {type}
</span>
        </div>
        
      </div>
    </>
  );
};

export default SingleProjectCard;
