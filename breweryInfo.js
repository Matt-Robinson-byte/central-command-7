export const breweryInfo = (whatever) =>{
    console.log(whatever[0])
    // for (i = 0; i < whatever.length; i++){
    //     if (whatever.addr && i < 4) 
    let output = [
        {
        name : whatever[0].name,
        addr : whatever[0].street,
        city: whatever[0].city
        },
        {
        name : whatever[1].name,
        addr : whatever[1].street,
        city: whatever[1].city
        },
        {
        name : whatever[2].name,
        addr : whatever[2].street,
        city: whatever[2].city
        },
        {
        name : whatever[3].name,
        addr : whatever[3].street,
        city: whatever[3].city
        },
        {
        name : whatever[4].name,
        addr : whatever[4].street,
        city: whatever[4].city
        }
    ]
    console.log(output)
    return output;
}