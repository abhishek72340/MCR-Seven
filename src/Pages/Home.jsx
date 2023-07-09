import {data} from '../Database/db'
import { useNavigate } from 'react-router-dom'
export default function Home(){
   const navigate=useNavigate();

    return (
      <div>
        <div className="flex justify-center mt-4 flex-col items-center">
       <h1 className="text-[2rem] font-bold">Welcome To Trip Advisor</h1>
       <h3 className="text-[1.5rem] text-blue-600">top continents for your next holiday</h3>
       </div>

<div className='flex wrap justify-center gap-[3rem] mt-10 '>
{
   data.continents.map(item=><img src={item.image} width='300px' className='rounded-xl' onClick={()=>navigate(`/country/${item.name}`)}/>)
}
</div>
      </div>
    )
   }