import React, { Component } from "react";
import ItemCounter from "./itemCounter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <ItemCounter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h5>{counter.item}</h5>
          </ItemCounter>
        ))}
      </div>
    );
  }
}

export default Counters;
