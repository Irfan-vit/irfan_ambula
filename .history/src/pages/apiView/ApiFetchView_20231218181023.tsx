import { useEffect, useState } from "react";

interface CatFacts {
    fact: string;
}

const ApiFetchView: React.FC = () => {
    const [catFacts, setCatFacts] = useState<CatFacts | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
                    <p>{catFacts.fact}</p>
                    <button onClick={() => fetchCatFacts()}>Next</button>
                </>
            )
            }
        </>
    )
}

export default ApiFetchView;