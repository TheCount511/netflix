import {useContent} from '../hooks'
const Browse =()=>{

    //we need the series and movies
    const {series}= useContent ('series');
    console.log(series);
    //we need slides
    //pass it to the browse container
    return(
        <p>Hello from the Browse Page</p>
    )
} 

export default Browse;