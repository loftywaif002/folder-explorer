import React from 'react';
import file from '../images/file.png';
import styles from './Tree.css'

const FileComponent = ({ selectMe,level,filename, selected}) => (
  <div className={styles.file} style={{marginLeft: getInden(level), marginTop: 10,}}>
    <span className={selected ? [styles.fileText, styles.selected].join(' ') : styles.fileText} onClick={selectMe}>
      <img src={file} style={{marginLeft: '10px'}} />
      
    </span>

  </div>
);

FileComponent.propTypes = {
  filename: React.PropTypes.string.isRequired
};

function getInden(level) {
  return `${5 * level}px`;
}

export default FileComponent;
