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
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "bands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "band",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "vertical-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2058109116",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.state.date.split('').map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-2058109116",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, val);
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "dates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.state.arr.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2058109116" + " " + 'date',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, _this2.state.date);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Comming Soon"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "email",
        id: "email",
        className: "jsx-2058109116",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2058109116" + " " + "input-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Enter your email and well holla at you when making is made.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2058109116",
        css: "@font-face{font-family:main;src:url('/static/fonts/Helvetica Neu Bold.ttf');}.body.jsx-2058109116{width:100%;height:95vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:main;}.bands.jsx-2058109116,.logo.jsx-2058109116,.dates.jsx-2058109116,.vertical-date.jsx-2058109116{position:absolute;}.vertical-date.jsx-2058109116{left:0;top:0;font-size:70px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 0 15px;}.vertical-date.jsx-2058109116 ul.jsx-2058109116{list-style-type:none;margin:0;padding:0;}.dates.jsx-2058109116{bottom:0;right:0;margin:10px;}.date.jsx-2058109116{font-size:40px;margin-top:-30px;}.bands.jsx-2058109116{width:100%;top:0;}.band.jsx-2058109116{float:right;width:25%;height:8px;background:#283D7F;}.band.jsx-2058109116:nth-child(1){background:#E2CC00;}.band.jsx-2058109116:nth-child(2){background:#DA3231;}.band.jsx-2058109116:nth-child(3){background:#E16991;}.center.jsx-2058109116{text-align:center;}.text.jsx-2058109116{font-size:100px;}input[type=text].jsx-2058109116{width:80%;margin:0 auto;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERldlxca2V5c3RvbmVcXG1ha2luZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDd0IsQUE2RGlDLEFBS04sQUFTTyxBQUlaLEFBV2UsQUFNWixBQU1NLEFBS0osQUFLQSxBQU1RLEFBR0EsQUFHQSxBQUlELEFBSUYsQUFJTixPQXhESixFQWlCRSxDQXdDTSxDQXRFRixBQXlDUCxDQUtLLENBaENLLEVBc0JFLENBOEJwQixDQXZFbUQsQUFvQ3BDLEFBV2YsQ0FqQ0EsQUFxREEsQ0FWQSxBQUdBLEFBR0EsRUFsQ1csQ0F1QkcsQ0E5Q0MsQ0FzRUMsSUF4REQsQ0FpQmYsQ0FQWSxFQVlaLENBV3NCLElBd0J0QixHQXhEZ0IsQUFVaEIsWUF1QkEsYUFyREEsZ0NBTTBCLGlCQWVMLGtGQWRDLFdBZUQsa0JBRXJCLGdFQWhCb0IsaUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFyaXFcXERldlxca2V5c3RvbmVcXG1ha2luZ1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgc3RhdGUgPSB7XHJcbiAgICAgIGRhdGU6ICcxMS4xMS4yMDE4JyxcclxuICAgICAgYXJyOiBbJ3QnLCAncycsICdhJ11cclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZHNcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRlLnNwbGl0KCcnKS5tYXAoKHZhbCwga2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGk+e3ZhbH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj5cclxuICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJyLm1hcCgodmFsLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57dGhpcy5zdGF0ZS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPkNvbW1pbmcgU29vbjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC10ZXh0XCI+RW50ZXIgeW91ciBlbWFpbCBhbmQgd2VsbCBob2xsYSBhdCB5b3Ugd2hlbiBtYWtpbmcgaXMgbWFkZS48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBAZm9udC1mYWNle1xyXG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogbWFpbjtcclxuICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvSGVsdmV0aWNhIE5ldSBCb2xkLnR0ZicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9keXtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgIGhlaWdodDogOTV2aDtcclxuICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1haW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYW5kcywgLmxvZ28sIC5kYXRlcywgLnZlcnRpY2FsLWRhdGUge1xyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRlIHtcclxuICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1kYXRlIHVsIHtcclxuICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZXMge1xyXG4gICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhbmRzIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFuZCB7XHJcbiAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI4M0Q3RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFuZDpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMkNDMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhbmQ6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjREEzMjMxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYW5kOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0UxNjk5MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Tariq\\Dev\\keystone\\making\\pages\\index.js */",
        __self: this
      }));
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
//# sourceMappingURL=index.js.2ea054265311da5f8c02.hot-update.js.map