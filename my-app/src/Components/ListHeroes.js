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
            <th className="colHead">Hero</th>
            <th className="colHead">Edit</th>
            <th className="colHead">Delete</th>
          </tr>
        </thead>
        <tbody>
          {heroList.map((member) => (
            <tr key={member.members_id}>
              <td className="colItem">{member.name}</td>
              <td className="colItem">
                <EditHeroes member={member} />
              </td>
              <td className="colItem">
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
