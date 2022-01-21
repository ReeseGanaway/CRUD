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
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${member.members_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${member.members_id}`}
        onClick={() => setName(member.name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Hero</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setName(member.name)}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                class="modalBody"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
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
