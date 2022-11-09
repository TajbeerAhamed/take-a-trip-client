import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - TAKE A TRIP`
    },[title])
}
 export default useTitle