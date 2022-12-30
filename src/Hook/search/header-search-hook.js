import { useEffect } from 'react'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoriesdata } from '../../redux/actions/CategoriesAction'
// import ViewSearchProductHook from '../Product/view-search-product-hook'
const HeaderSearchHook=()=> {
    const dispatch=useDispatch()
   //  const [items,pagination,onPress,getProud,results]=ViewSearchProductHook()
    let Categories=[]
   //  let CategoriesMore=[]
   //  const [getOneCategory,setgetOneCategory]=useState('')
    const {Category}=useSelector(state=>state.getAllCategory)
    useEffect(()=>{
        dispatch(getAllCategoriesdata())
    },[])
    try {
     if(Category.data){
        Categories=Category.data.slice(0,4)
     }
     else{
        Categories=[]
     }
   }
   catch(e){}
   //   const getCat=(id)=>{
   //      console.log(id)
   //      localStorage.setItem("OneCat",id)
   //      setgetOneCategory(id)
   //   }
    //  useEffect(()=>{
    //     getProud()
    //  },[getOneCategory]);
   //   const getCategories=()=>{
   //      if(Category.data)
   //      Categories=Category.data
   //   }
   return [Categories]
   
}

export default HeaderSearchHook