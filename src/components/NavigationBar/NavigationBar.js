import React from "react";
import style from "./NavigationBar.module.css";
import { Link, Outlet } from "react-router";

export default function NavigationBar() {
  return (
    <div>
      <main className={style.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </main>
      <Outlet />
    </div>
  );
}
