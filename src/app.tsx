import React from 'react';
import { render } from 'react-dom';
import { MindmapEditor } from './MindmapEditor';
import { MindmapViewer } from './MindmapViewer';
import './App.css';

const App = <>
    <div className="leftPanel">
        <MindmapEditor
            defaultValue="# comment"
        />
    </div>
    <div className="rightPanel">
        <MindmapViewer />
    </div>
</>

render(App, document.getElementById('root'))