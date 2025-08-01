import React from 'react';

export const CriticalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 0,16 16,16" fill="#D92D20"/>
  </svg>
);

export const HighIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="8,0 16,16 0,16" fill="#D92D20" />
  </svg>
);

export const MediumIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="#F79009" />
  </svg>
);

export const LowIcon = () => (
  <div style={{
    width: 14,
    height: 14,
    backgroundColor: '#EAAA08',
  }} />
); 