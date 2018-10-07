webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Tariq\\Dev\\keystone\\making\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      date: '11.11.2018',
      arr: ['t', 's', 'a']
    });

    return _this;
  }

  _createClass(App, [{
    key: "submit",
    value: function submit(event) {
      event.preventDefault();
      console.log(event.target.children[0].value);
      event.target.children[0].value = '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "bands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "vertical-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2908740068",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.date.split('').map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-2908740068",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, val);
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "dates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.arr.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2908740068" + " " + 'date',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, _this2.state.date);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2908740068" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Comming Soon")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2908740068",
        css: "@font-face{font-family:main;src:url('/static/fonts/Helvetica Neu Bold.ttf');}.body.jsx-2908740068{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:main;}.bands.jsx-2908740068,.logo.jsx-2908740068,.dates.jsx-2908740068,.vertical-date.jsx-2908740068{position:absolute;}.vertical-date.jsx-2908740068{left:0;top:0;font-size:400%;height:100%;display:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 0 15px;}.vertical-date.jsx-2908740068 ul.jsx-2908740068{list-style-type:none;margin:0;padding:0;}.dates.jsx-2908740068{bottom:0;right:0;margin:10px;width:100%;text-align:center;}.date.jsx-2908740068{font-size:30px;margin-top:-50px;}.bands.jsx-2908740068{opacity:0.8;width:100%;top:0;}.band.jsx-2908740068{float:right;width:25%;height:10px;background:#283D7F;}.band.jsx-2908740068:nth-child(1){background:#E2CC00;}.band.jsx-2908740068:nth-child(2){background:#DA3231;}.band.jsx-2908740068:nth-child(3){background:#E16991;}.center.jsx-2908740068{text-align:center;}.text.jsx-2908740068{font-size:50px;}.input-text.jsx-2908740068{font-size:50px;}input[type=text].jsx-2908740068{width:90%;font-size:30px;margin:20px auto;padding:30px 10px;}@media screen and (min-width:1050px){.vertical-date.jsx-2908740068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.dates.jsx-2908740068{text-align:right;}.date.jsx-2908740068{font-size:30px;}.text.jsx-2908740068{font-size:100px;}input[type=text].jsx-2908740068{padding:10px;font-size:20px;}.input-text.jsx-2908740068{font-size:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERldlxca2V5c3RvbmVcXG1ha2luZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEMkIsQUFHb0MsQUFLTixBQVNPLEFBSVosQUFVZSxBQU1aLEFBUU0sQUFLSCxBQU1ELEFBTVEsQUFHQSxBQUdBLEFBSUQsQUFJSCxBQUlBLEFBSUwsQUFTTSxBQUdJLEFBR0YsQUFJQyxBQUlILEFBS0UsT0ExRlosRUFnQkUsQ0ErQ08sQ0E1RUgsQ0EwQ0QsQUFNRCxDQWxDSyxBQXFGRyxFQTlERCxBQStCcEIsQUFJQSxBQW1CRyxBQWFBLENBVEEsQ0FwR2dELEFBbUNwQyxBQTBEWixDQS9FSCxBQXVEQSxDQVZBLEFBR0EsQUFHQSxFQXJDVyxDQTBCSSxDQWhEQSxBQTBDUCxFQWtDWSxHQTlETCxBQXFGWixDQXJFVyxBQWFkLENBcEJZLEVBY1osRUFZc0IsTUFsQ04sQUFTaEIsQUFPcUIsRUE4Q0EsV0E3REEsQUFrQ3JCLEtBbEJBLEVBOENBLEtBbkZBLFNBeUZHLHVCQW5GdUIsaURBZ0JMLGtCQUNyQixnQ0FoQnNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXZcXGtleXN0b25lXFxtYWtpbmdcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgIHN0YXRlID0ge1xyXG4gICAgICBkYXRlOiAnMTEuMTEuMjAxOCcsXHJcbiAgICAgIGFycjogWyd0JywgJ3MnLCAnYSddXHJcbiAgIH1cclxuXHJcbiAgIHN1Ym1pdChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUpO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUgPSAnJ1xyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGUuc3BsaXQoJycpLm1hcCgodmFsLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57dmFsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcnIubWFwKCh2YWwsIGtleSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUnPnt0aGlzLnN0YXRlLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q29tbWluZyBTb29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8Zm9ybSBhY3Rpb249XCJzdWJtaXRcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbC5cIiAvPlxyXG4gICAgICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXRleHRcIj5FbnRlciB5b3VyIGVtYWlsIGFuZCB3ZWxsIGhvbGxhIGF0IHlvdSB3aGVuIG1ha2luZyBpcyBtYWRlLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICBAZm9udC1mYWNle1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbWFpbjtcclxuICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvSGVsdmV0aWNhIE5ldSBCb2xkLnR0ZicpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuYm9keXtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogOTV2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1haW47XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIC5iYW5kcywgLmxvZ28sIC5kYXRlcywgLnZlcnRpY2FsLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgLnZlcnRpY2FsLWRhdGUgdWwge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIC5kYXRlcyB7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuYmFuZHMge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgLmJhbmQge1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjgzRDdGO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5iYW5kOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0UyQ0MwMDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYmFuZDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEQTMyMzE7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmJhbmQ6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTE2OTkxO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgLmlucHV0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIC8vIFRISVMgSVMgQSBGT1IgU01BTExFUiBTQ1JFRU5TXHJcbiAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCl7XHJcbiAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5kYXRlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5pbnB1dC10ZXh0IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Dev\\keystone\\making\\pages\\index.js */",
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.c6085335dafbeacc52b9.hot-update.js.map