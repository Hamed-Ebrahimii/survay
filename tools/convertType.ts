export const convertType = (value : number) =>{
    switch (value) {
        case 0 : return 'text'
        case 1 :  return 'textarea'
        case 2 : return 'checkbox'
        case 3 : return 'radio'
        case 4 : return 'range'
        case 5 : return 'date'
        case 6 : return 'time'
        case 7 : return 'select'
    }
}