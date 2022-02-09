
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading"

const Loading = ({src, ...restProps})=>{
    return (
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={process.env.PUBLIC_URL +  `/images/users/${src}.png`}/>
        </Spinner>
    )
}

Loading.ReleaseBody =()=>{
    return <ReleaseBody/>
}

export default Loading