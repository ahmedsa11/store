import { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBranddata } from '../../redux/actions/BrandsAction'
function HomeBrandPage() {
    const dispatch=useDispatch()
    const {Brand,loading}=useSelector(state=>state.getAllBrand)
    useEffect(()=>{
        dispatch(getAllBranddata())
    },[])
    return [Brand,loading]
}
export default HomeBrandPage