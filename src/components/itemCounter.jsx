import React, { Component } from "react";

class ItemCounter extends Component {
  //state contiene la data que el componente necesita

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.counter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  counter() {
    //Accede a la propiedad count a través de método de desestructuración
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default ItemCounter;
