import React, { useEffect, useRef, useState } from "react";
import { useDispatch} from "react-redux";
import { setname } from "../Store/slices/nameuser.slice";
import { useNavigate } from "react-router-dom";
import './styles/home.css'
import IsLoading from "../components/IsLoading";
const Home = () => {
 const [loading, setloading] = useState(false)

 useEffect(() => {
  setTimeout(() => {
    setloading(true)
  }, 2000);
 },[])

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
      {
        loading
        ? (  <>
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

      <div className="margeni">
        <div className="rojito">
        </div>
        <div className="padreson">
           <div className="bolaocho">
            <div className="bolamay"> <div className="bolma"></div> </div>
           </div>
          </div>
          </div>
          </>
      )
        
        :(<IsLoading/>)
      }
    
  

    </article>
  );
};

export default Home;
