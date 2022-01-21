import React, { Fragment, useState } from "react";

function EditHeroes({ member }) {
  const [name, setName] = useState(member.name);

  const updateName = async () => {
    try {
      const body = { name };
      const response = await fetch(
        `http://localhost:5000/jl/${member.members_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${member.members_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${member.members_id}`}
        onClick={() => setName(member.name)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Hero</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setName(member.name)}
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="modalBody"
                id="modal-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setName(member.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditHeroes;
