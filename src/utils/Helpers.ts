export const weekAgo = () =>{
    const nowDate = new Date();
    nowDate.setDate(nowDate.getDate() - 7); 
    let dateMilli = nowDate.getTime();
    return dateMilli;
}