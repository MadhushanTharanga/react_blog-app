import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = React.useState('');
  co
  return (
    <div className='add' >
      <div className="content">
        <input type="text" placeholder='Title'/>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />

        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Status: </b> Public
          </span>
          <input type="text" />
        </div>
        <div className="item">i2</div>
      </div>
    </div>
  )
}

export default Write