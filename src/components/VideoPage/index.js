
import React from 'react';
import { Component } from 'react';
import ReactPlayer from 'react-player';

class ResponsivePlayer extends Component {
  render() {
    return (
      <div style={{ display: 'flex', margin: '1%' }}>
        <ReactPlayer
          style={{ flex: 1, marginRight: '10px' }}
          width='100%'
          height='500px'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        />
        <div style={{ border: '1px solid #000000', borderRadius: '10px', flex: 1 }}>
          <h1 style={{ textAlign: 'center', margin: '10px' }}>quiz area</h1>
        </div>
      </div>
    );
  }
}

export default ResponsivePlayer;