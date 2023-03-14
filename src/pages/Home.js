import { Link } from "react-router-dom";

const Home = () => {
    return <div>
        <header className="header">
            <Link to ="/">Home</Link>
            <Link to ="contact">Contct</Link>
            <Link to ="project">Project</Link>
        </header>
        <section>


        </section>

    </div>
}

export default Home;