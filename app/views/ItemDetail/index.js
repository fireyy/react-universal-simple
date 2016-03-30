import React from 'react';

export default class ItemDetail extends React.Component {

  render() {
    const itemId = this.props.params.id;
    let item = this.props.items.filter(function(item) {
      return item.show_id == itemId;
    })[0];

    return (
      <div>
        <h1>{item.show_title} - {item.release_year}</h1>
        <div>{item.summary}</div>
        <p><img src={item.poster} /></p>
      </div>
    );
  }
};
