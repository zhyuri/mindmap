import { g as go } from './common/go-944c798c.js';
import { r as react } from './common/index-c277be94.js';
import './common/_commonjsHelpers-eb5a497e.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// Copyright (C) 1998-2020 by Northwoods Software Corporation. All Rights Reserved.

var ReactDiagram = (function (_super) {
    __extends(ReactDiagram, _super);
    function ReactDiagram(props) {
        var _this = _super.call(this, props) || this;
        _this.modelChangedListener = null;
        _this.divRef = react.createRef();
        return _this;
    }
    ReactDiagram.prototype.getDiagram = function () {
        if (this.divRef.current === null)
            return null;
        return go.Diagram.fromDiv(this.divRef.current);
    };
    ReactDiagram.prototype.componentDidMount = function () {
        var _this = this;
        if (this.divRef.current === null)
            return;
        var diagram = this.props.initDiagram();
        diagram.div = this.divRef.current;
        this.modelChangedListener = function (e) {
            if (e.isTransactionFinished && e.model && !e.model.isReadOnly && _this.props.onModelChange) {
                var dataChanges = e.model.toIncrementalData(e);
                if (dataChanges !== null)
                    _this.props.onModelChange(dataChanges);
            }
        };
        diagram.addModelChangedListener(this.modelChangedListener);
        diagram.delayInitialization(function () {
            var model = diagram.model;
            model.commit(function (m) {
                if (_this.props.modelData !== undefined) {
                    m.assignAllDataProperties(m.modelData, _this.props.modelData);
                }
                m.mergeNodeDataArray(_this.props.nodeDataArray);
                if (_this.props.linkDataArray !== undefined && m instanceof go.GraphLinksModel) {
                    m.mergeLinkDataArray(_this.props.linkDataArray);
                }
            }, 'gojs-react init merge');
        });
    };
    ReactDiagram.prototype.componentWillUnmount = function () {
        var diagram = this.getDiagram();
        if (diagram !== null) {
            diagram.div = null;
            if (this.modelChangedListener !== null) {
                diagram.removeModelChangedListener(this.modelChangedListener);
                this.modelChangedListener = null;
            }
        }
    };
    ReactDiagram.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextProps.skipsDiagramUpdate)
            return false;
        if (nextProps.nodeDataArray === this.props.nodeDataArray &&
            nextProps.linkDataArray === this.props.linkDataArray &&
            nextProps.modelData === this.props.modelData)
            return false;
        return true;
    };
    ReactDiagram.prototype.componentDidUpdate = function (prevProps, prevState) {
        var diagram = this.getDiagram();
        if (diagram !== null) {
            var model = diagram.model;
            model.startTransaction('update data');
            if (this.props.modelData !== undefined) {
                model.assignAllDataProperties(model.modelData, this.props.modelData);
            }
            model.mergeNodeDataArray(this.props.nodeDataArray);
            if (this.props.linkDataArray !== undefined && model instanceof go.GraphLinksModel) {
                model.mergeLinkDataArray(this.props.linkDataArray);
            }
            model.commitTransaction('update data');
        }
    };
    ReactDiagram.prototype.render = function () {
        return (react.createElement("div", { ref: this.divRef, className: this.props.divClassName }));
    };
    return ReactDiagram;
}(react.Component));

var ReactOverview = (function (_super) {
    __extends(ReactOverview, _super);
    function ReactOverview(props) {
        var _this = _super.call(this, props) || this;
        _this.divRef = react.createRef();
        return _this;
    }
    ReactOverview.prototype.getOverview = function () {
        if (this.divRef.current === null)
            return null;
        return go.Diagram.fromDiv(this.divRef.current);
    };
    ReactOverview.prototype.componentDidMount = function () {
        if (this.divRef.current === null)
            return;
        var overview;
        if (this.props.initOverview !== undefined) {
            overview = this.props.initOverview();
        }
        else {
            overview = new go.Overview();
            overview.contentAlignment = go.Spot.Center;
        }
        overview.div = this.divRef.current;
        overview.observed = this.props.observedDiagram;
    };
    ReactOverview.prototype.componentWillUnmount = function () {
        var overview = this.getOverview();
        if (overview !== null) {
            overview.div = null;
            overview.observed = null;
        }
    };
    ReactOverview.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextProps.observedDiagram === this.props.observedDiagram)
            return false;
        return true;
    };
    ReactOverview.prototype.componentDidUpdate = function (prevProps, prevState) {
        var overview = this.getOverview();
        if (overview !== null) {
            overview.observed = this.props.observedDiagram;
        }
    };
    ReactOverview.prototype.render = function () {
        return (react.createElement("div", { ref: this.divRef, className: this.props.divClassName }));
    };
    return ReactOverview;
}(react.Component));

var ReactPalette = (function (_super) {
    __extends(ReactPalette, _super);
    function ReactPalette(props) {
        var _this = _super.call(this, props) || this;
        _this.divRef = react.createRef();
        return _this;
    }
    ReactPalette.prototype.getPalette = function () {
        if (this.divRef.current === null)
            return null;
        return go.Diagram.fromDiv(this.divRef.current);
    };
    ReactPalette.prototype.componentDidMount = function () {
        var _this = this;
        if (this.divRef.current === null)
            return;
        var palette = this.props.initPalette();
        palette.div = this.divRef.current;
        palette.delayInitialization(function () {
            var model = palette.model;
            model.commit(function (m) {
                if (_this.props.modelData !== undefined) {
                    m.assignAllDataProperties(m.modelData, _this.props.modelData);
                }
                m.mergeNodeDataArray(_this.props.nodeDataArray);
                if (_this.props.linkDataArray !== undefined && m instanceof go.GraphLinksModel) {
                    m.mergeLinkDataArray(_this.props.linkDataArray);
                }
            }, null);
        });
    };
    ReactPalette.prototype.componentWillUnmount = function () {
        var palette = this.getPalette();
        if (palette !== null) {
            palette.div = null;
        }
    };
    ReactPalette.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextProps.nodeDataArray === this.props.nodeDataArray &&
            nextProps.linkDataArray === this.props.linkDataArray &&
            nextProps.modelData === this.props.modelData)
            return false;
        return true;
    };
    ReactPalette.prototype.componentDidUpdate = function (prevProps, prevState) {
        var palette = this.getPalette();
        if (palette !== null) {
            var model = palette.model;
            model.startTransaction('update data');
            if (this.props.modelData !== undefined) {
                model.assignAllDataProperties(model.modelData, this.props.modelData);
            }
            model.mergeNodeDataArray(this.props.nodeDataArray);
            if (this.props.linkDataArray !== undefined && model instanceof go.GraphLinksModel) {
                model.mergeLinkDataArray(this.props.linkDataArray);
            }
            model.commitTransaction('update data');
        }
    };
    ReactPalette.prototype.render = function () {
        return (react.createElement("div", { ref: this.divRef, className: this.props.divClassName }));
    };
    return ReactPalette;
}(react.Component));

export { ReactDiagram };
