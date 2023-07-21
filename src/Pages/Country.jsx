import { useParams,useNavigate } from "react-router-dom"
import { data } from '../Database/db'
export default function Country() {
    const { name } = useParams();
    const navigate=useNavigate();
    const countryItem = data?.continents.find(item => item.name === name)

    return (
        <div>
            <h1 className="flex justify-center text-[1.5rem] font-bold mt-5">Top Countries In Asia For Your Next Holiday</h1>
            <div className="flex wrap gap-5 justify-center mt-10">
                {
                    countryItem?.countries?.map(item => <img src={item.image} onClick={()=>navigate(`/city/${item.id}`)} className='rounded-xl' width='300px' />)
                }
            </div>

        </div>
    )
}