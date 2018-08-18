import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react';
import Observer from './Observer';
import './index.less';

class SortDragList extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const { onResort } = this.props;
    onResort && onResort(result.source.index, result.destination.index);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Observer provided={provided} snapshot={snapshot} {...this.props} />
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default SortDragList;
