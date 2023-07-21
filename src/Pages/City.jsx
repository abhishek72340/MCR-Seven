import { useParams } from "react-router-dom"
import { data } from '../Database/db'

export default function City() {
    const { id} = useParams();
    const city = data?.continents.find(item => item.id === id)


  return (
    <div>
     {
                    city?.destinations?.map(item => <img src={item.image} className='rounded-xl' width='300px' />)
                }
    </div>
  )
}