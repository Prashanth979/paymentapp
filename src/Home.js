import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/transaction">Do transaction</Link>
              </li>
              <li>
                <Link to="/admin">Admin panel</Link>
              </li>
        </div>
    )
}

export default Home;