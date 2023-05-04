import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { setname } from "../Store/slices/nameuser.slice";
import { useNavigate } from "react-router-dom";
import './styles/home.css'
const Home = () => {

  const inputName = useRef();
  const disoatch = useDispatch();
  const navigate = useNavigate()
  const handelsubmit = (e) => {
    e.preventDefault();
    disoatch(setname(inputName.current.value.trim()));
    navigate("./location")
  };
  return (
    <article className="hom">
    <div className="home">
      <section className="home_img">
        <img src="./image/Podex.png" alt="" />
      </section>
      <section className="home_info">
        <h1 className="home_h1">¡Hola Entrenador!</h1>
      <p className="home_p">Para poder comenzar dame tu nombre</p>
      <form onSubmit={handelsubmit} action="">
        <input className="home_input" ref={inputName} type="text" />
        <button className="home_btn">Comenzar</button>
      </form>
      </section>
    </div>
    </article>
  );
};

export default Home;
