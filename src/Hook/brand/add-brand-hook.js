import {useEffect, useState } from 'react'
import notify from '../../Hook/useNotifcation'
import avatar from '../../images/avatar.png'
import { CreateBrand } from '../../redux/actions/getAllBrands'
import { useDispatch, useSelector } from 'react-redux'
function AddBrandHook() {
    const dispatch=useDispatch()
    const [img,setImg]=useState(avatar)
    const [Name,setName]=useState('')
    const [selected,setSelected]=useState(null)
    const [loading,setLoading]=useState(true)
    const [isPress, setIsPress] = useState(false)
    const res =useSelector(state=>state.getAllBrand.Brand)
    const onImageChange = (e) => {
        if(e.target.files&&e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelected(e.target.files[0])
        }
    }
    const changeName = (e) => {
        e.persist()
        setName(e.target.value)
    }
    const handleSubmt =async (e) => {
        e.preventDefault()
        if (Name === "" || selected === null) {
            notify('من فضلك اكمل البيانات', "warn");
            return;
        }
        const formdata=new FormData()
        formdata.append("name",Name)
        formdata.append("image",selected)
        setLoading(true)
        setIsPress(true)
        await dispatch(CreateBrand(formdata))
      setLoading(false)
    }
    useEffect(()=>{
        if(!loading){
            setName('')
            setImg(avatar)
            setSelected(null)
            setIsPress(false)
            if (res.status === 201) {
                notify('تمت عملية الاضافة بنجاح', "success");
            }
            else {
                notify('هناك مشكله فى عملية الاضافة', "error");
            }
        }
    },[loading])
    return [img,Name,changeName,handleSubmt,onImageChange,loading,isPress]
}
export default AddBrandHook