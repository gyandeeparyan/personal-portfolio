import { projectData } from "../Data/Data";
import Header from "./Header";
import SingleProjectCard from "./SingleProjectCard";

const Projects = () => {
  return (
    <>
      <div className='flex flex-col relative z-10  w-screen   h-full '>
        <Header />
        <div className='mx-[70px] mt-20'>
          <h1 className='text-4xl text-white font-bold'>Projects</h1>
          <div className=' mt-24  border-b border-zinc-800'></div>
          <div className='grid grid-cols-1 py-10 mt-6 gap-5 md:grid-cols-4'>
            {projectData.map((item) => {
              return <SingleProjectCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
