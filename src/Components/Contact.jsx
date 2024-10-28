import { contactData } from "../Data/contactData";
import Header from "./Header";
import SingleContactCard from "./SingleContactCard";
const Contact = () => {
  return (
    <>
    <div className='flex flex-col relative z-10  w-screen py-6  h-screen '>
        <Header />
        <div className='mx-[70px] mt-20'>
          <h1 className='text-4xl text-white font-bold'>Contacts</h1>
          <div className=' mt-24  border-b border-zinc-800'></div>
          <div className='grid grid-cols-1 pb-10    mt-16 gap-5 md:grid-cols-4'>
           
            {contactData.map((item) => {
              return (<SingleContactCard key={item.id} {...item} />)
            })}

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
