import Image from "next/image";


async function getData() {
    const response = await fetch("http://127.0.0.1:8000/anime/4/");
    return await response.json();
}

async function Dashboard() {
    const data = await getData();
    return (
        <div>
            <Image width="500" height="500" src={data.poster} alt="Morty"/>
        </div>
    );
}

export default Dashboard;
