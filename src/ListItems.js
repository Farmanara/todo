import React from "react";
import "./ListItems.css";
import FlipMove from "react-flip-move";

function deleteItem() {
  console.log("test");
}

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        {" "}
        <input
          className="inputTasks"
          id={item.key}
          value={item.text}
          onChange={(e) => props.setUpdate(e.target.value, item.key)}
        ></input>{" "}
        <button
          onClick={() => props.deleteItem(item.key)}
          className="deleteButton"
        >
          <i class="trash icon"></i>
        </button>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={200} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
