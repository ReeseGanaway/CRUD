import React, { Fragment, useEffect, useState } from "react";
import EditHeroes from "./EditHeroes";

function ListHeroes() {
  const [heroList, setHeroList] = useState([]);

  const removeMember = async (id) => {
    try {
      const removeMember = await fetch(`http://localhost:5000/jl/${id}`, {
        method: "DELETE",
      });

      //console.log(removeMember);
      setHeroList(heroList.filter((member) => member.members_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getHeroes = async () => {
    try {
      const response = await fetch("http://localhost:5000/jl");
      const jsonData = await response.json();

      setHeroList(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th class="colHead">Hero</th>
            <th class="colHead">Edit</th>
            <th class="colHead">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
          {heroList.map((member) => (
            <tr key={member.members_id}>
              <td class="colItem">{member.name}</td>
              <td class="colItem">
                <EditHeroes member={member} />
              </td>
              <td class="colItem">
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => removeMember(member.members_id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListHeroes;
