import { useContextState } from "../../context/StateContext";
const About: React.FC = () => {
    const { name } = useContextState()
    console.log(obj)
    return (
        <>About</>
    )
}

export default About;