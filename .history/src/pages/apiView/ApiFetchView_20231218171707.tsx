import { useEffect, useState } from "react";

const ApiFetchView: React.FC = () => {
    const [catFacts, setCatFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Create an AbortController for canceling the fetch
        // const controller = new AbortController();
        // const signal = controller.signal;

        // Function to fetch cat facts
        const fetchCatFacts = async () => {
            try {
                // Fetch cat facts from the Cat Facts API
                const response = await fetch('https://catfact.ninja/fact?limit=5', { signal });
                const data = await response.json();

                // Update state with the fetched cat facts
                setCatFacts(data.data);
                setLoading(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    // Ignore fetch errors caused by component unmounting
                    return;
                }

                console.error('Error fetching cat facts:', error);
                setError('Error fetching cat facts. Please try again.');
                setLoading(false);
            }
        };

        // Call the fetchCatFacts function
        fetchCatFacts();

        // Cleanup function to cancel the fetch if the component unmounts
        return () => controller.abort();
    }, []); // Empty dependency array means the effect runs once after the initial render
    return (
        <>
            <h2>Cat Facts</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {console.log(catFacts)}
                    {catFacts?.map((fact, index) => (
                        <li key={index}>{fact.fact}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default ApiFetchView;