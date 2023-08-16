import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Card from "../Components/Card";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    async function fetchData() {
        setLoading(true);
        try {
            const data = await fetch(API_URL);
            const result = await data.json();
            setData(result);
        } catch (error) {
            alert("Unable to Fetch data");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {
                loading ? <Spinner></Spinner> : <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-[10vh]">
                    {data.map((forEachData) => { return <Card key={forEachData.id} forEachData={forEachData} ></Card> })} </div>
            }
        </div>
    );
}
export default Home;
