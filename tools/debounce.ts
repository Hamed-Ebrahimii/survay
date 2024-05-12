let timer: string | number | NodeJS.Timeout | undefined 
export const debounce = (time : number , cb : ()=> void) =>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
        cb()

    } , time)
    
}