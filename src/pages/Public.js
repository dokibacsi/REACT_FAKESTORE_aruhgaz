import React from 'react'
import Kosar from "../components/Kosar/Kosar";
import Termekek from "../components/Termek/Termekek";

function Public() {
  return (
    <main className="row">
        <aside className='col-lg-3'>
          <h3>Kosár</h3>
          <Kosar/>
        </aside>
        <article className='col-lg-9 row'>
          <h3>Termékek</h3>{"  "}
          <Termekek/>
        </article>
      </main>
  )
}

export default Public