import { Link } from 'react-router-dom';
import style from '../styles/Home.module.css'

const Home = () => {
  return (
    <main>
      <section className={style.sec1}>
        <h1>
          Unlimited movies, <br></br>TV shows and more
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text" className="w-50 p-2 rounded me-2" />
        <button className="btn btn-danger p-2">Get Started </button>
        <Link to={"/shows"}>
          <h4 className="mt-5">The link for all shows ➡️</h4>
        </Link>
      </section>
    </main>
  );
}

export default Home