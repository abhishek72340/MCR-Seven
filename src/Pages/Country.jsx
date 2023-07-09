import { useParams } from "react-router-dom"
import {data} from '../Database/db'
export default function Country() {
    const {name} =useParams();
    const countryItem=data.countries.filter(item=>item.name===name)

  return (
    <div>
        {
            countryItem?.map(item=><img src={item.image}/>)
        }
     
    </div>
  )
}