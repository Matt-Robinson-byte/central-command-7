export const getPic = (info) =>{
    let output = {
        pic : info._links.self
    }
    console.log(output)
    return output
}