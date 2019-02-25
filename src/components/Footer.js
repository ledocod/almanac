import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://dribbble.com/ledocoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          dribbble
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/ledocod"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="mailto:ledocoding@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          say hello
        </a>
      </footer>
    );
  }
}

export default Footer;
