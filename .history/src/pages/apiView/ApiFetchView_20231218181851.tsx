import { useEffect, useState } from "react";


const ApiFetchView: React.FC = () => {
    const [catFacts, setCatFacts] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch cat facts
    const fetchCatFacts = async () => {
        try {
            // Fetch cat facts from the Cat Facts API
            setLoading(true);
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setCatFacts(data.fact);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cat facts:', error);
            setError('Error fetching cat facts. Please try again.');
            setLoading(false);
        }
    };

    
    useEffect(() => {
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
                <>
                    <p>{catFacts}</p>
                    <button onClick={() => fetchCatFacts()}>Next</button>
                </>
            )
            }
        </>
    )
}

export default ApiFetchView;