import { useContextState } from "../../context/StateContext";
const About: React.FC = () => {
    console.log(name)
    return (
        <>
            About
            {data}
            <button onClick={() => setData(data + 1)}>inc</button>
        </>

    )
}

export default About;