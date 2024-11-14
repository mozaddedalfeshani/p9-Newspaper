import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

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
        <aside className="col-span-3">Left Nav</aside>
        <div className="col-span-6">Main</div>
        <aside className="col-span-3">Right</aside>
      </main>
    </div>
  );
}
