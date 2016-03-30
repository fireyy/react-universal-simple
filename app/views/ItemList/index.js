import React from 'react';
import {Link} from 'react-router';

export default class ItemList extends React.Component {

  render() {

    return (
      <div>
        <h1>Quentin Tarantino</h1>
        <ul>
          {this.props.items.map(function(item) {
            return (
              <li key={item.show_id}>
                <Link to={'/item/' + item.show_id}>{item.show_title}</Link>
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}
