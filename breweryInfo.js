export const breweryInfo = (whatever) =>{
    let output = {

        name : whatever.name[0],
        addr : whatever.street[0]
    }
    console.log(output)
    return output;
}