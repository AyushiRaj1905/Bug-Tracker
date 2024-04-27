import React from "react";
import{useDispatch,useSelector} from 'react-redux'
export default()=>{
    const dispatch = useDispatch();
    const {bugs}= useSelector(state=>state);
   return(
    <div className='page-container'>

    </div>
   )
}

