import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftNav from "../components/LayoutComponets/LeftNav";
import RightNav from "../components/LayoutComponets/RightNav";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div className="font-poppins ">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <NavBar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        <aside className="col-span-3">
          <LeftNav />
        </aside>
        <div className="col-span-6">
          <h1>mian</h1>
        </div>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
}
