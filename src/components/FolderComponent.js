import React from 'react';
import pImg from '../images/pImg.png';
import mImg from '../images/mImg.png';
import folder from '../images/folder.png';
import privateFolder from '../images/privateFolder.png';
import styles from './Tree.css';


const FolderComponent = ({ level, filename, toggleFolder, open, setMyName, selectMe, selected }) => (
  <div className={styles.folder} style={{marginLeft: getInden(level), marginTop: 10,}}>
    <a onClick={toggleFolder}><img src={open? mImg  : pImg } /> </a>
    <span className={selected ? [styles.folderText, styles.selected].join(' ') : styles.folderText} onClick={selectMe}>
      <img src={getFolderShape(filename)} />
    </span>
  </div>
);
function getFolderShape(filename) {
  if (filename==='Private Folder') {
    return privateFolder
  }
  else {
    return folder
  }
}
FolderComponent.propTypes = {
  open: React.PropTypes.bool.isRequired,
  toggleFolder: React.PropTypes.func.isRequired,
}

function getInden(level) {
  return `${5 * level}px`;
}

export default FolderComponent;