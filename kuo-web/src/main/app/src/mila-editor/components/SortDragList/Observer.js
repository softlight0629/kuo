import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Observer extends Component {

  render() {
    const { provided, snapshot, items = [], dragListStyle, dragItemStyle, dragItemRender } = this.props;

    return (
      <div
        ref={provided.innerRef}
        style={dragListStyle(snapshot)}
      >
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={dragItemStyle(
                  snapshot,
                  provided.draggableProps.style
                )}
              >
                {dragItemRender(item, index)}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    )
  }
}

export default Observer;
