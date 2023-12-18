import { useContextState } from "../../context/StateContext";
const About: React.FC = () => {
    const obj = useContextState()
    return (
        <>About</>
    )
}

export default About;