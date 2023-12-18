import { useContextState } from "../../context/StateContext";
const About: React.FC = () => {
    const { name } = useContextState()
    console.log(name)
    return (
        <>About</>
    )
}

export default About;