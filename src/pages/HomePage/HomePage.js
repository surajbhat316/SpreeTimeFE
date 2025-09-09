import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router';
import style from "./HomePage.module.css";
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function HomePage() {


    useEffect(()=> {
        async function getData(){
            let res = await fetch(process.env.REACT_APP_SERVER_DEV+ "/home/v1",{
                method: "GET",
                credentials: 'include'
            });
            let data = res.json();
            console.log(data)
        }

        getData();
    },[])

  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main className={style.main}>
        <div>
          Welcome to Spreetime..
        </div>
      </main>
    </div>
  )
}

export default HomePage
