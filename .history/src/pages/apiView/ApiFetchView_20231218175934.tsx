import { useEffect, useState } from "react";

const ApiFetchView: React.FC = () => {
    const [catFacts, setCatFacts] = useState({});
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
                const response = await fetch('https://catfact.ninja/fact?limit=5');
                const data = await response.json();
                // console.log(data)

                // Update state with the fetched cat facts
                setCatFacts(data);
                setLoading(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    return;
                }

                console.error('Error fetching cat facts:', error);
                setError('Error fetching cat facts. Please try again.');
                setLoading(false);
            }
        };

        fetchCatFacts();
    }, []);
    return (
        <>
            <h2>Cat Facts</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <p>{catFacts.fact}</p>
            )}
        </>
    )
}

export default ApiFetchView;