import { useEffect } from 'react'
import { useState } from 'react'
import ViewSearchProductHook from '../Product/view-search-product-hook'
const NavbarSearchHook=()=> {
    const [searchWord,setSearchSord]=useState()
    const [,,,getProud]=ViewSearchProductHook()
    const handleChangeSearch = (e) =>{
        setSearchSord(e.target.value)
        localStorage.setItem("searchWord", e.target.value)
        const path = window.location.pathname;
        if (path != "/products") {
           window.location.href = "/products"
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getProud();
        }, 1000);
    }, [searchWord])
    return [searchWord,handleChangeSearch]
}

export default NavbarSearchHook