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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "bands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "vertical-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3781971141",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.state.date.split('').map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-3781971141",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, val);
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "dates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.arr.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3781971141" + " " + 'date',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, _this2.state.date);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3781971141" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Comming Soon")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3781971141",
        css: "@font-face{font-family:main;src:url('/static/fonts/Helvetica Neu Bold.ttf');}.body.jsx-3781971141{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:main;}.bands.jsx-3781971141,.logo.jsx-3781971141,.dates.jsx-3781971141,.vertical-date.jsx-3781971141{position:absolute;}.vertical-date.jsx-3781971141{left:0;top:0;font-size:70px;height:100%;display:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 0 15px;}.vertical-date.jsx-3781971141 ul.jsx-3781971141{list-style-type:none;margin:0;padding:0;}.dates.jsx-3781971141{bottom:0;right:0;margin:10px;}.date.jsx-3781971141{font-size:80px;margin-top:-50px;}.bands.jsx-3781971141{opacity:0.8;width:100%;top:0;}.band.jsx-3781971141{float:right;width:25%;height:15px;background:#283D7F;}.band.jsx-3781971141:nth-child(1){background:#E2CC00;}.band.jsx-3781971141:nth-child(2){background:#DA3231;}.band.jsx-3781971141:nth-child(3){background:#E16991;}.center.jsx-3781971141{text-align:center;}.text.jsx-3781971141{font-size:150px;}.input-text.jsx-3781971141{font-size:25px;}input[type=text].jsx-3781971141{width:90%;font-size:30px;margin:20px auto;padding:30px 10px;}@media screen and (min-width:1050px){.band.jsx-3781971141{height:10px;}.vertical-date.jsx-3781971141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.date.jsx-3781971141{font-size:30px;}.text.jsx-3781971141{font-size:100px;}input[type=text].jsx-3781971141{padding:10px;font-size:20px;}.input-text.jsx-3781971141{font-size:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERldlxca2V5c3RvbmVcXG1ha2luZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEMkIsQUFHaUMsQUFLTixBQVNPLEFBSVosQUFVZSxBQU1aLEFBTU0sQUFLSCxBQU1ELEFBTVEsQUFHQSxBQUdBLEFBSUQsQUFJRixBQUlELEFBSUwsQUFTSyxBQUlDLEFBSUUsQUFJQyxBQUlILEFBS0UsT0ExRlosRUFnQkUsQ0E2Q08sQ0ExRUgsQ0F3Q0QsQUFNRCxBQXFDVixDQXJFZSxBQXFGRyxFQWhFRCxBQW1DcEIsQUFxQkcsQUFhQSxDQXRDSCxBQTZCRyxDQXBHZ0QsQUFtQ3BDLENBckJmLEFBcURBLENBVkEsQUFHQSxBQUdBLEVBbkNXLENBd0JJLENBOUNBLEFBd0NQLEVBa0NZLEdBNURMLEFBcUZaLENBckVILEFBV0EsQ0FsQlksRUFZWixFQVlzQixNQWhDTixBQVNoQixFQW1EcUIsV0EzREEsQUFnQ3JCLE9BNEJBLEtBakZBLFNBMkZHLHVCQXJGdUIsaURBZ0JMLGtCQUNyQixnQ0FoQnNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhcmlxXFxEZXZcXGtleXN0b25lXFxtYWtpbmdcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgIHN0YXRlID0ge1xyXG4gICAgICBkYXRlOiAnMTEuMTEuMjAxOCcsXHJcbiAgICAgIGFycjogWyd0JywgJ3MnLCAnYSddXHJcbiAgIH1cclxuXHJcbiAgIHN1Ym1pdChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUpO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUgPSAnJ1xyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRlLnNwbGl0KCcnKS5tYXAoKHZhbCwga2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3ZhbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJyLm1hcCgodmFsLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57dGhpcy5zdGF0ZS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNvbW1pbmcgU29vbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGZvcm0gYWN0aW9uPVwic3VibWl0XCIgb25TdWJtaXQ9e3RoaXMuc3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwuXCIgLz5cclxuICAgICAgICAgICAgICAgPC9mb3JtPiBcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC10ZXh0XCI+RW50ZXIgeW91ciBlbWFpbCBhbmQgd2VsbCBob2xsYSBhdCB5b3Ugd2hlbiBtYWtpbmcgaXMgbWFkZS48L2Rpdj5cclxuICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgQGZvbnQtZmFjZXtcclxuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1haW47XHJcbiAgICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0hlbHZldGljYSBOZXUgQm9sZC50dGYnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvZHl7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtYWluO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFuZHMsIC5sb2dvLCAuZGF0ZXMsIC52ZXJ0aWNhbC1kYXRlIHtcclxuICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmVydGljYWwtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRlIHVsIHtcclxuICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZXMge1xyXG4gICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhbmRzIHtcclxuICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYW5kIHtcclxuICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI4M0Q3RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFuZDpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMkNDMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhbmQ6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREEzMjMxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYW5kOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0UxNjk5MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVEhJUyBJUyBBIEZPUiBTTUFMTEVSIFNDUkVFTlNcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA1MHB4KXtcclxuICAgICAgICAgICAgICAgLmJhbmQge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRle1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuaW5wdXQtdGV4dCB7IFxyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=C:\\Users\\Tariq\\Dev\\keystone\\making\\pages\\index.js */",
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
//# sourceMappingURL=index.js.df6cef1cfb4a9453021e.hot-update.js.map