import React from "react";
import List from "./components/List";
import data from "./helper/data";
import { useState } from "react";
function App() {
  let filtered = [];

  const [page, setPage] = useState({ x: 0, y: 5 });
  filtered = data.slice(page.x, page.y);

  console.log(filtered);
  console.log(page);
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {page.x + 1} to {page.y})
        </h5>
        {filtered.map((item) => (
          <List key={item.id} {...item} />
        ))}
        <div className="btns">
          <button
            onClick={() => {
              if (page.x === 0) {
              } else {
                setPage({ ...page, x: page.x - 5, y: page.y - 5 });
              }
            }}
          >
            Previus
          </button>
          <button
            onClick={() => setPage({ ...page, x: page.x + 5, y: page.y + 5 })}
            disabled={page.y > data.length - 1}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
