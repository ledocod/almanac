import React from 'react';
import profilePic from '../assets/profile-pic.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Eugene Lazarev`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{fontFamily: 'Inter, sans-serif', maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://elazarev.me">Eugene Lazarev</a>.{' '}
          About&nbsp;design from a developer's point-of-view.
        </p>
      </div>
    );
  }
}

export default Bio;
