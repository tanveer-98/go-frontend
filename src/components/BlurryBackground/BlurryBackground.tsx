import React from 'react';
import './styles.css'
function BlurryBackground() {
  return (
    <div className="blurry-background">
      <div className="gradient-overlay" />
      <div className="content">
        <h1 className="text-white">Animated Blurry Background</h1>
        <p>This is some example content.</p>
      </div>
    </div>
  );
}

export default BlurryBackground;
