

const SingleContactCard = ({title,desc,link,icon}) => {
  return (
    <>
     <div className='w-[300px] rounded-xl border text-zinc-500 border-zinc-500'>
        <div className='p-4 flex '>
         <a href={link} rel="noreferrer" target='_blank'>

            {icon}
          
          <div className="flex flex-col">
            <p>{title}</p>
            <p>{desc}</p>
          </div> 
         </a>

        </div>
      </div>
    </>
  )
}

export default SingleContactCard