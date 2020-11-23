function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/agent-component/agent-component.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/agent-component/agent-component.component.ts ***!
    \**************************************************************/

  /*! exports provided: AgentComponentComponent */

  /***/
  function srcAppAgentComponentAgentComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentComponentComponent", function () {
      return AgentComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store/agents/agent.service */
    "./src/app/store/agents/agent.service.ts");
    /* harmony import */


    var _store_agents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/agents */
    "./src/app/store/agents/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var AgentComponentComponent = /*#__PURE__*/function () {
      function AgentComponentComponent(store) {
        _classCallCheck(this, AgentComponentComponent);

        this.store = store;
        this.isOffense = false;
        this.pos1 = 0;
        this.pos2 = 0;
        this.pos3 = 0;
        this.pos4 = 0;
        this.isMovable = false;
        this.headerOffset = 50;
        this.startingPositionOffsetY = 0;
        this.startingPositionOffsetX = 0;
        this.styleMap = {};
      }

      _createClass(AgentComponentComponent, [{
        key: "onMouseMove",
        value: function onMouseMove(e) {
          if (this.isMovable) {
            this.dragHandler(e);
          }
        }
      }, {
        key: "function",
        value: function _function() {
          this.isMovable = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
            return _store_agents__WEBPACK_IMPORTED_MODULE_2__["selectors"].getAgentSettingsBySideAndIndex(state, _this.isOffense, _this.index);
          })).subscribe(function (el) {
            _this.agent = el;
          });
          this.startingPositionOffsetY = this.agent.offsetY || this.index * 50 + this.headerOffset;
          this.startingPositionOffsetX = this.agent.offsetX || 0;
        }
      }, {
        key: "dragStart",
        value: function dragStart(e) {
          e.preventDefault();
          this.isMovable = true;
          this.target = e.target;
        }
      }, {
        key: "dragHandler",
        value: function dragHandler(e) {
          e.preventDefault();
          this.agentPositionOffsetY = e.clientY - 35 - this.headerOffset + "px";
          this.agentPositionOffsetX = e.clientX - 26 + "px";
          this.target.style.top = this.agentPositionOffsetY;
          this.target.style.left = this.agentPositionOffsetX;
        }
      }]);

      return AgentComponentComponent;
    }();

    AgentComponentComponent.ɵfac = function AgentComponentComponent_Factory(t) {
      return new (t || AgentComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    AgentComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgentComponentComponent,
      selectors: [["app-agent-component"]],
      hostBindings: function AgentComponentComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AgentComponentComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMouseMove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function AgentComponentComponent_mouseup_HostBindingHandler($event) {
            return ctx["function"]($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        agent: "agent",
        isOffense: "isOffense",
        index: "index"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]])],
      decls: 2,
      vars: 7,
      consts: [[3, "mousedown"], [3, "src"]],
      template: function AgentComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AgentComponentComponent_Template_div_mousedown_0_listener($event) {
            return ctx.dragStart($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("top: ", ctx.startingPositionOffsetY, "px;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("agent-thumbnail agent-thumbnail--", ctx.agent.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/images/", ctx.agent.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".agent-thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  padding: 2px;\n  width: 30px;\n  border-radius: 50%;\n  margin: 10px;\n  pointer-events: auto;\n}\n.agent-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: auto;\n  background: #131c2e;\n  border-radius: 50%;\n  border: 2px solid #202b43;\n  pointer-events: none;\n}\n.agent-thumbnail--breach[_ngcontent-%COMP%] {\n  background: #9E644B;\n}\n.agent-thumbnail--brimstone[_ngcontent-%COMP%] {\n  background: #468EB7;\n}\n.agent-thumbnail--cypher[_ngcontent-%COMP%] {\n  background: #A9AD96;\n}\n.agent-thumbnail--jett[_ngcontent-%COMP%] {\n  background: #55D1E0;\n}\n.agent-thumbnail--killjoy[_ngcontent-%COMP%] {\n  background: #308D60;\n}\n.agent-thumbnail--omen[_ngcontent-%COMP%] {\n  background: #543EFF;\n}\n.agent-thumbnail--phoenix[_ngcontent-%COMP%] {\n  background: #F0753A;\n}\n.agent-thumbnail--raze[_ngcontent-%COMP%] {\n  background: #F6AD40;\n}\n.agent-thumbnail--reyna[_ngcontent-%COMP%] {\n  background: #AF31EB;\n}\n.agent-thumbnail--sage[_ngcontent-%COMP%] {\n  background: #21CEAF;\n}\n.agent-thumbnail--skye[_ngcontent-%COMP%] {\n  background: #8CD453;\n}\n.agent-thumbnail--sova[_ngcontent-%COMP%] {\n  background: #325FFF;\n}\n.agent-thumbnail--viper[_ngcontent-%COMP%] {\n  background: #2AC849;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQtY29tcG9uZW50L0M6XFxVc2Vyc1xcT2Jvbmluc2VnbmFcXERlc2t0b3BcXE9tYXJcXFJlc291cmNlc1xcUHJvamVjdHNcXEFuZ3VsYXJcXFN0cmF0b3JhbnQvc3JjXFxhcHBcXGFnZW50LWNvbXBvbmVudFxcYWdlbnQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZ2VudC1jb21wb25lbnQvYWdlbnQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZ2VudC1jb21wb25lbnQvQzpcXFVzZXJzXFxPYm9uaW5zZWduYVxcRGVza3RvcFxcT21hclxcUmVzb3VyY2VzXFxQcm9qZWN0c1xcQW5ndWxhclxcU3RyYXRvcmFudC9zcmNcXGFwcFxcbWFpbi5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7QURHRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsbUJFdkJXO0FEcUJmO0FES0U7RUFDRSxtQkUxQmM7QUR1QmxCO0FETUU7RUFDRSxtQkU3Qlc7QUR5QmY7QURPRTtFQUNFLG1CRWhDUztBRDJCYjtBRFFFO0VBQ0UsbUJFbkNZO0FENkJoQjtBRFNFO0VBQ0UsbUJFdENTO0FEK0JiO0FEVUU7RUFDRSxtQkV6Q1k7QURpQ2hCO0FEV0U7RUFDRSxtQkU1Q1M7QURtQ2I7QURZRTtFQUNFLG1CRS9DVTtBRHFDZDtBRGFFO0VBQ0UsbUJFbERTO0FEdUNiO0FEY0U7RUFDRSxtQkVyRFM7QUR5Q2I7QURlRTtFQUNFLG1CRXhEUztBRDJDYjtBRGdCRTtFQUNFLG1CRTNEVTtBRDZDZCIsImZpbGUiOiJzcmMvYXBwL2FnZW50LWNvbXBvbmVudC9hZ2VudC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vbWFpbi5zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmFnZW50LXRodW1ibmFpbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5LCAyOCwgNDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDMyLCA0MywgNjcpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLS1icmVhY2gge1xyXG4gICAgYmFja2dyb3VuZDogJGJyZWFjaC1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLWJyaW1zdG9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYnJpbXN0b25lLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tY3lwaGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjeXBoZXItY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1qZXR0IHtcclxuICAgIGJhY2tncm91bmQ6ICRqZXR0LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0ta2lsbGpveSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAka2lsbGpveS1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLW9tZW4ge1xyXG4gICAgYmFja2dyb3VuZDogJG9tZW4tY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1waG9lbml4IHtcclxuICAgIGJhY2tncm91bmQ6ICRwaG9lbml4LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tcmF6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmF6ZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLXJleW5hIHtcclxuICAgIGJhY2tncm91bmQ6ICRyZXluYS1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLXNhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogJHNhZ2UtY29sb3I7XHJcbiAgfVxyXG5cclxuICAmLS1za3llIHtcclxuICAgIGJhY2tncm91bmQ6ICRza3llLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi0tc292YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkc292YS1jb2xvcjtcclxuICB9XHJcblxyXG4gICYtLXZpcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR2aXBlci1jb2xvcjtcclxuICB9XHJcbn0iLCIuYWdlbnQtdGh1bWJuYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uYWdlbnQtdGh1bWJuYWlsIGltZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMTMxYzJlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMDJiNDM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmFnZW50LXRodW1ibmFpbC0tYnJlYWNoIHtcbiAgYmFja2dyb3VuZDogIzlFNjQ0Qjtcbn1cbi5hZ2VudC10aHVtYm5haWwtLWJyaW1zdG9uZSB7XG4gIGJhY2tncm91bmQ6ICM0NjhFQjc7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1jeXBoZXIge1xuICBiYWNrZ3JvdW5kOiAjQTlBRDk2O1xufVxuLmFnZW50LXRodW1ibmFpbC0tamV0dCB7XG4gIGJhY2tncm91bmQ6ICM1NUQxRTA7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1raWxsam95IHtcbiAgYmFja2dyb3VuZDogIzMwOEQ2MDtcbn1cbi5hZ2VudC10aHVtYm5haWwtLW9tZW4ge1xuICBiYWNrZ3JvdW5kOiAjNTQzRUZGO1xufVxuLmFnZW50LXRodW1ibmFpbC0tcGhvZW5peCB7XG4gIGJhY2tncm91bmQ6ICNGMDc1M0E7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1yYXplIHtcbiAgYmFja2dyb3VuZDogI0Y2QUQ0MDtcbn1cbi5hZ2VudC10aHVtYm5haWwtLXJleW5hIHtcbiAgYmFja2dyb3VuZDogI0FGMzFFQjtcbn1cbi5hZ2VudC10aHVtYm5haWwtLXNhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMjFDRUFGO1xufVxuLmFnZW50LXRodW1ibmFpbC0tc2t5ZSB7XG4gIGJhY2tncm91bmQ6ICM4Q0Q0NTM7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1zb3ZhIHtcbiAgYmFja2dyb3VuZDogIzMyNUZGRjtcbn1cbi5hZ2VudC10aHVtYm5haWwtLXZpcGVyIHtcbiAgYmFja2dyb3VuZDogIzJBQzg0OTtcbn0iLCIkYnJlYWNoLWNvbG9yOiAjOUU2NDRCO1xyXG4kYnJpbXN0b25lLWNvbG9yOiAjNDY4RUI3O1xyXG4kY3lwaGVyLWNvbG9yOiAjQTlBRDk2O1xyXG4kamV0dC1jb2xvcjogIzU1RDFFMDtcclxuJGtpbGxqb3ktY29sb3I6ICMzMDhENjA7XHJcbiRvbWVuLWNvbG9yOiAjNTQzRUZGO1xyXG4kcGhvZW5peC1jb2xvcjogI0YwNzUzQTtcclxuJHJhemUtY29sb3I6ICNGNkFENDA7XHJcbiRyZXluYS1jb2xvcjogI0FGMzFFQjtcclxuJHNhZ2UtY29sb3I6ICMyMUNFQUY7XHJcbiRza3llLWNvbG9yOiAjOENENDUzO1xyXG4kc292YS1jb2xvcjogIzMyNUZGRjtcclxuJHZpcGVyLWNvbG9yOiAjMkFDODQ5O1xyXG5cclxuJGJhY2tncm91bmQ6ICMxMzFjMmUiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agent-component',
          templateUrl: './agent-component.component.html',
          styleUrls: ['./agent-component.component.scss'],
          providers: [_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]]
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        agent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOffense: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }],
        "function": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/agents-handler/agents-handler.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/agents-handler/agents-handler.component.ts ***!
    \************************************************************/

  /*! exports provided: AgentsHandlerComponent */

  /***/
  function srcAppAgentsHandlerAgentsHandlerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentsHandlerComponent", function () {
      return AgentsHandlerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store/agents/agent.service */
    "./src/app/store/agents/agent.service.ts");
    /* harmony import */


    var _store_agents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/agents */
    "./src/app/store/agents/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../agent-component/agent-component.component */
    "./src/app/agent-component/agent-component.component.ts");

    function AgentsHandlerComponent_app_agent_component_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-agent-component", 6);
      }

      if (rf & 2) {
        var i_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r3);
      }
    }

    function AgentsHandlerComponent_app_agent_component_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-agent-component", 7);
      }

      if (rf & 2) {
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOffense", true)("index", i_r5);
      }
    }

    var AgentsHandlerComponent = /*#__PURE__*/function () {
      function AgentsHandlerComponent(agentService, store) {
        var _this2 = this;

        _classCallCheck(this, AgentsHandlerComponent);

        this.agentService = agentService;
        this.store = store;
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(function (state) {
          return _store_agents__WEBPACK_IMPORTED_MODULE_2__["selectors"].getAgentsList(state);
        })).subscribe(function (el) {
          _this2.agentListDefend = el;
          _this2.agentListOffense = el;
        });
      }

      _createClass(AgentsHandlerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.agentService.loadAgents();
          this.agentService.resetAgents();
        }
      }]);

      return AgentsHandlerComponent;
    }();

    AgentsHandlerComponent.ɵfac = function AgentsHandlerComponent_Factory(t) {
      return new (t || AgentsHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    AgentsHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgentsHandlerComponent,
      selectors: [["app-agents-handler"]],
      outputs: {
        reset: "reset"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]])],
      decls: 9,
      vars: 2,
      consts: [[1, "agents-container"], [1, "defense-side"], [1, "side-name"], [3, "index", 4, "ngFor", "ngForOf"], [1, "offense-side"], [3, "isOffense", "index", 4, "ngFor", "ngForOf"], [3, "index"], [3, "isOffense", "index"]],
      template: function AgentsHandlerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AgentsHandlerComponent_app_agent_component_4_Template, 1, 1, "app-agent-component", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Offense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AgentsHandlerComponent_app_agent_component_8_Template, 1, 2, "app-agent-component", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.agentListDefend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.agentListOffense);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_5__["AgentComponentComponent"]],
      styles: [".agents-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  pointer-events: none;\n  position: relative;\n}\n\n.side-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnRzLWhhbmRsZXIvQzpcXFVzZXJzXFxPYm9uaW5zZWduYVxcRGVza3RvcFxcT21hclxcUmVzb3VyY2VzXFxQcm9qZWN0c1xcQW5ndWxhclxcU3RyYXRvcmFudC9zcmNcXGFwcFxcYWdlbnRzLWhhbmRsZXJcXGFnZW50cy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZ2VudHMtaGFuZGxlci9hZ2VudHMtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWdlbnRzLWhhbmRsZXIvYWdlbnRzLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlLW5hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59IiwiLmFnZW50cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlLW5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentsHandlerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agents-handler',
          templateUrl: './agents-handler.component.html',
          styleUrls: ['./agents-handler.component.scss'],
          providers: [_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]]
        }]
      }], function () {
        return [{
          type: _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        reset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: "**",
      redirectTo: "/"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agents-handler/agents-handler.component */
    "./src/app/agents-handler/agents-handler.component.ts");
    /* harmony import */


    var _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map-component/map-component.component */
    "./src/app/map-component/map-component.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Stratorant';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "background"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-agents-handler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_3__["AgentsHandlerComponent"], _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"]],
      styles: [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #131c2e;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxPYm9uaW5zZWduYVxcRGVza3RvcFxcT21hclxcUmVzb3VyY2VzXFxQcm9qZWN0c1xcQW5ndWxhclxcU3RyYXRvcmFudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXE9ib25pbnNlZ25hXFxEZXNrdG9wXFxPbWFyXFxSZXNvdXJjZXNcXFByb2plY3RzXFxBbmd1bGFyXFxTdHJhdG9yYW50L3NyY1xcYXBwXFxtYWluLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ0dXO0VERlgsV0FBQTtBRURGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9tYWluLnN0eWxlcy5zY3NzJztcclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59IiwiJGJyZWFjaC1jb2xvcjogIzlFNjQ0QjtcclxuJGJyaW1zdG9uZS1jb2xvcjogIzQ2OEVCNztcclxuJGN5cGhlci1jb2xvcjogI0E5QUQ5NjtcclxuJGpldHQtY29sb3I6ICM1NUQxRTA7XHJcbiRraWxsam95LWNvbG9yOiAjMzA4RDYwO1xyXG4kb21lbi1jb2xvcjogIzU0M0VGRjtcclxuJHBob2VuaXgtY29sb3I6ICNGMDc1M0E7XHJcbiRyYXplLWNvbG9yOiAjRjZBRDQwO1xyXG4kcmV5bmEtY29sb3I6ICNBRjMxRUI7XHJcbiRzYWdlLWNvbG9yOiAjMjFDRUFGO1xyXG4kc2t5ZS1jb2xvcjogIzhDRDQ1MztcclxuJHNvdmEtY29sb3I6ICMzMjVGRkY7XHJcbiR2aXBlci1jb2xvcjogIzJBQzg0OTtcclxuXHJcbiRiYWNrZ3JvdW5kOiAjMTMxYzJlIiwiLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWMyZTtcbiAgei1pbmRleDogLTE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map-component/map-component.component */
    "./src/app/map-component/map-component.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/store/reducers.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./agent-component/agent-component.component */
    "./src/app/agent-component/agent-component.component.ts");
    /* harmony import */


    var _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./agents-handler/agents-handler.component */
    "./src/app/agents-handler/agents-handler.component.ts");
    /* harmony import */


    var _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./map-component/map-switcher/map-switcher.component */
    "./src/app/map-component/map-switcher/map-switcher.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./store/settings/settings.service */
    "./src/app/store/settings/settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(Object.assign({}, _store_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]), {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"], _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponentComponent"], _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__["AgentsHandlerComponent"], _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__["MapSwitcherComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"], _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponentComponent"], _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__["AgentsHandlerComponent"], _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__["MapSwitcherComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(Object.assign({}, _store_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]), {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
          })],
          providers: [_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/map-component/map-component.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/map-component/map-component.component.ts ***!
    \**********************************************************/

  /*! exports provided: MapComponentComponent */

  /***/
  function srcAppMapComponentMapComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponentComponent", function () {
      return MapComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _store_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/settings */
    "./src/app/store/settings/index.ts");

    var MapComponentComponent = /*#__PURE__*/function () {
      function MapComponentComponent(store) {
        var _this3 = this;

        _classCallCheck(this, MapComponentComponent);

        this.store = store;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
          return _store_settings__WEBPACK_IMPORTED_MODULE_2__["selectors"].getSelectedMap(state);
        })).subscribe(function (el) {
          return _this3.selectedMap = el;
        });
      }

      _createClass(MapComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapComponentComponent;
    }();

    MapComponentComponent.ɵfac = function MapComponentComponent_Factory(t) {
      return new (t || MapComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MapComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponentComponent,
      selectors: [["app-map-component"]],
      decls: 2,
      vars: 1,
      consts: [[1, "map"], [3, "src"]],
      template: function MapComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/images/maps/", ctx.selectedMap, "-layout.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".map[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 680px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNvbXBvbmVudC9DOlxcVXNlcnNcXE9ib25pbnNlZ25hXFxEZXNrdG9wXFxPbWFyXFxSZXNvdXJjZXNcXFByb2plY3RzXFxBbmd1bGFyXFxTdHJhdG9yYW50L3NyY1xcYXBwXFxtYXAtY29tcG9uZW50XFxtYXAtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAtY29tcG9uZW50L21hcC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXAtY29tcG9uZW50L21hcC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA2ODBweDtcclxuICB9XHJcbn0iLCIubWFwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5tYXAgaW1nIHtcbiAgaGVpZ2h0OiA2ODBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-component',
          templateUrl: './map-component.component.html',
          styleUrls: ['./map-component.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/map-component/map-switcher/map-switcher.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/map-component/map-switcher/map-switcher.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MapSwitcherComponent */

  /***/
  function srcAppMapComponentMapSwitcherMapSwitcherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapSwitcherComponent", function () {
      return MapSwitcherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
    /* harmony import */


    var _store_settings_map_mapList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/settings/map/mapList */
    "./src/app/store/settings/map/mapList.ts");
    /* harmony import */


    var _store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/settings */
    "./src/app/store/settings/index.ts");
    /* harmony import */


    var src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/settings/settings.service */
    "./src/app/store/settings/settings.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapSwitcherComponent_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mapName_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mapName_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mapName_r1, " ");
      }
    }

    var MapSwitcherComponent = /*#__PURE__*/function () {
      function MapSwitcherComponent(store, settings) {
        var _this4 = this;

        _classCallCheck(this, MapSwitcherComponent);

        this.store = store;
        this.settings = settings;
        this.mapList = _store_settings_map_mapList__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
          return _store_settings__WEBPACK_IMPORTED_MODULE_3__["selectors"].getSelectedMap(state);
        })).subscribe(function (el) {
          return _this4.selectedMap = el;
        });
      }

      _createClass(MapSwitcherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMapChange",
        value: function onMapChange(map) {
          this.settings.selectMap(map);
        }
      }]);

      return MapSwitcherComponent;
    }();

    MapSwitcherComponent.ɵfac = function MapSwitcherComponent_Factory(t) {
      return new (t || MapSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]));
    };

    MapSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapSwitcherComponent,
      selectors: [["app-map-switcher"]],
      decls: 2,
      vars: 2,
      consts: [[3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function MapSwitcherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapSwitcherComponent_Template_select_change_0_listener($event) {
            return ctx.onMapChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapSwitcherComponent_option_1_Template, 2, 2, "option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jb21wb25lbnQvbWFwLXN3aXRjaGVyL21hcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-switcher',
          templateUrl: './map-switcher.component.html',
          styleUrls: ['./map-switcher.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../map-component/map-switcher/map-switcher.component */
    "./src/app/map-component/map-switcher/map-switcher.component.ts");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 8,
      vars: 0,
      consts: [[1, "navigation"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-map-switcher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Load");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_1__["MapSwitcherComponent"]],
      styles: [".navigation[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  padding: 5px 20px;\n}\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXE9ib25pbnNlZ25hXFxEZXNrdG9wXFxPbWFyXFxSZXNvdXJjZXNcXFByb2plY3RzXFxBbmd1bGFyXFxTdHJhdG9yYW50L3NyY1xcYXBwXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB1bCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59IiwiLm5hdmlnYXRpb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbi5uYXZpZ2F0aW9uIHVsIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/agents/actions.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/agents/actions.ts ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreAgentsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/agents/types.ts");

    var loadAgents = function loadAgents(payload) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].LOAD_AGENTS,
        payload: payload
      };
    };

    var resetAgents = function resetAgents(payload) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_AGENTS_SETTINGS,
        payload: payload
      };
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      loadAgents: loadAgents,
      resetAgents: resetAgents
    };
    /***/
  },

  /***/
  "./src/app/store/agents/agent.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/agents/agent.service.ts ***!
    \***********************************************/

  /*! exports provided: AgentService */

  /***/
  function srcAppStoreAgentsAgentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentService", function () {
      return AgentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/store/agents/actions.ts");
    /* harmony import */


    var _agentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./agentsList */
    "./src/app/store/agents/agentsList.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var AgentService = /*#__PURE__*/function () {
      function AgentService(store) {
        _classCallCheck(this, AgentService);

        this.store = store;
      }

      _createClass(AgentService, [{
        key: "loadAgents",
        value: function loadAgents() {
          this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].loadAgents(_agentsList__WEBPACK_IMPORTED_MODULE_2__["default"]));
        }
      }, {
        key: "resetAgents",
        value: function resetAgents() {
          var newDTO = [];
          var counter = 0;

          for (var i = 0; i < _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length * 2; i++) {
            newDTO = [].concat(_toConsumableArray(newDTO), [{
              name: _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"][counter].name,
              isOffense: i >= _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length,
              positionReset: true,
              offsetX: 0,
              offsetY: 0
            }]);
            counter < _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length - 1 ? counter++ : counter = 0;
          }

          this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].resetAgents(newDTO));
        }
      }]);

      return AgentService;
    }();

    AgentService.ɵfac = function AgentService_Factory(t) {
      return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    AgentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AgentService,
      factory: AgentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/agents/agentsList.ts":
  /*!********************************************!*\
    !*** ./src/app/store/agents/agentsList.ts ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreAgentsAgentsListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = [{
      name: "breach"
    }, {
      name: "brimstone"
    }, {
      name: "cypher"
    }, {
      name: "jett"
    }, {
      name: "killjoy"
    }, {
      name: "omen"
    }, {
      name: "phoenix"
    }, {
      name: "raze"
    }, {
      name: "reyna"
    }, {
      name: "sage"
    }, {
      name: "skye"
    }, {
      name: "sova"
    }, {
      name: "viper"
    }];
    /***/
  },

  /***/
  "./src/app/store/agents/index.ts":
  /*!***************************************!*\
    !*** ./src/app/store/agents/index.ts ***!
    \***************************************/

  /*! exports provided: selectors, actions, agentsReducer, types */

  /***/
  function srcAppStoreAgentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/store/agents/selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectors", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/store/agents/actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reducer */
    "./src/app/store/agents/reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "agentsReducer", function () {
      return _reducer__WEBPACK_IMPORTED_MODULE_2__["agentsReducer"];
    });
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/agents/types.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "types", function () {
      return _types__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /***/

  },

  /***/
  "./src/app/store/agents/reducer.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/agents/reducer.ts ***!
    \*****************************************/

  /*! exports provided: agentsReducer */

  /***/
  function srcAppStoreAgentsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "agentsReducer", function () {
      return agentsReducer;
    });
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/agents/types.ts");

    var initialState = {
      agentsList: [],
      agentsSettings: []
    };

    function agentsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].LOAD_AGENTS:
          return Object.assign(Object.assign({}, state), {
            agentsList: action.payload
          });

        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_AGENTS_SETTINGS:
          return Object.assign(Object.assign({}, state), {
            agentsSettings: action.payload
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/store/agents/selectors.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/agents/selectors.ts ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreAgentsSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var getAgents = function getAgents(state) {
      return state.agents;
    };

    var getAgentSettings = function getAgentSettings(state) {
      return getAgents(state).agentsSettings || [];
    };

    var getAgentsList = function getAgentsList(state) {
      return getAgents(state).agentsList;
    };

    var getAgentNameByIndex = function getAgentNameByIndex(state, index) {
      return getAgentsList(state)[index].name || {};
    };

    var getAgentSettingsBySideAndIndex = function getAgentSettingsBySideAndIndex(state, isOffense, index) {
      return getAgentSettings(state).find(function (el) {
        return el.name === getAgentNameByIndex(state, index) && el.isOffense == isOffense;
      });
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      getAgentsList: getAgentsList,
      getAgentNameByIndex: getAgentNameByIndex,
      getAgentSettingsBySideAndIndex: getAgentSettingsBySideAndIndex
    };
    /***/
  },

  /***/
  "./src/app/store/agents/types.ts":
  /*!***************************************!*\
    !*** ./src/app/store/agents/types.ts ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreAgentsTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      LOAD_AGENTS: "LOAD_AGENTS",
      RESET_AGENTS_SETTINGS: "RESET_AGENTS_SETTINGS"
    };
    /***/
  },

  /***/
  "./src/app/store/reducers.ts":
  /*!***********************************!*\
    !*** ./src/app/store/reducers.ts ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _agents_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./agents/reducer */
    "./src/app/store/agents/reducer.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./settings */
    "./src/app/store/settings/index.ts");
    /* harmony default export */


    __webpack_exports__["default"] = {
      agents: _agents_reducer__WEBPACK_IMPORTED_MODULE_0__["agentsReducer"],
      settings: _settings__WEBPACK_IMPORTED_MODULE_1__["settingsReducer"]
    };
    /***/
  },

  /***/
  "./src/app/store/settings/actions.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/settings/actions.ts ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreSettingsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/settings/types.ts");

    var setSelectedMap = function setSelectedMap(payload) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SELECTED_MAP,
        payload: payload
      };
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      setSelectedMap: setSelectedMap
    };
    /***/
  },

  /***/
  "./src/app/store/settings/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/settings/index.ts ***!
    \*****************************************/

  /*! exports provided: selectors, actions, settingsReducer, types */

  /***/
  function srcAppStoreSettingsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/store/settings/selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectors", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/store/settings/actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/store/settings/reducers.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "settingsReducer", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_2__["settingsReducer"];
    });
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/settings/types.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "types", function () {
      return _types__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /***/

  },

  /***/
  "./src/app/store/settings/map/mapList.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/settings/map/mapList.ts ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreSettingsMapMapListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ['ascent', 'bind', 'haven', 'split', 'icebox'];
    /***/
  },

  /***/
  "./src/app/store/settings/reducers.ts":
  /*!********************************************!*\
    !*** ./src/app/store/settings/reducers.ts ***!
    \********************************************/

  /*! exports provided: settingsReducer */

  /***/
  function srcAppStoreSettingsReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "settingsReducer", function () {
      return settingsReducer;
    });
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./types */
    "./src/app/store/settings/types.ts");

    var initialState = {
      selectedMap: "bind"
    };

    function settingsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SELECTED_MAP:
          return Object.assign(Object.assign({}, state), {
            selectedMap: action.payload
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/store/settings/selectors.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/settings/selectors.ts ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreSettingsSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var getSettings = function getSettings(state) {
      return state.settings;
    };

    var getSelectedMap = function getSelectedMap(state) {
      return getSettings(state).selectedMap;
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      getSelectedMap: getSelectedMap
    };
    /***/
  },

  /***/
  "./src/app/store/settings/settings.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/settings/settings.service.ts ***!
    \****************************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppStoreSettingsSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/store/settings/actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

    var SettingsService = /*#__PURE__*/function () {
      function SettingsService(store) {
        _classCallCheck(this, SettingsService);

        this.store = store;
      }

      _createClass(SettingsService, [{
        key: "selectMap",
        value: function selectMap(map) {
          this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].setSelectedMap(map));
        }
      }]);

      return SettingsService;
    }();

    SettingsService.ɵfac = function SettingsService_Factory(t) {
      return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/settings/types.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/settings/types.ts ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreSettingsTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      SET_SELECTED_MAP: "SET_SELECTED_MAP"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Oboninsegna\Desktop\Omar\Resources\Projects\Angular\Stratorant\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map