export const consolidate = (whatever) =>{
    let output = {

        state : whatever.consolidated_weather[0].weather_state_name,
        abbr : whatever.consolidated_weather[0].weather_state_abbr,
        temp: whatever.consolidated_weather[0].the_temp
    }
   // console.log(output.abbr)
    return output;
}