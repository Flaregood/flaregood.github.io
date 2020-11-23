(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/agent-component/agent-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/agent-component/agent-component.component.ts ***!
  \**************************************************************/
/*! exports provided: AgentComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponentComponent", function() { return AgentComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/agents/agent.service */ "./src/app/store/agents/agent.service.ts");
/* harmony import */ var _store_agents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/agents */ "./src/app/store/agents/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class AgentComponentComponent {
    constructor(store, agentService) {
        this.store = store;
        this.agentService = agentService;
        this.isOffense = false;
        this.isMovable = false;
        this.headerOffset = 50;
        this.isProduction = true;
        this.agentImagePath = this.isProduction ? 'portfolio/stratorant/assets/images/' : '../../assets/images/';
        this.startingPositionOffsetY = 0;
        this.startingPositionOffsetX = 0;
        this.styleMap = {};
    }
    onMouseMove(e) {
        if (this.isMovable) {
            this.dragHandler(e);
        }
    }
    function() {
        if (this.isMovable) {
            const agentCoordinates = {
                X: this.agentPositionOffsetX,
                Y: this.agentPositionOffsetY
            };
            this.agentService.setAgentPosition(this.agent, agentCoordinates);
        }
        this.isMovable = false;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(state => _store_agents__WEBPACK_IMPORTED_MODULE_2__["selectors"].getAgentSettingsBySideAndIndex(state, this.isOffense, this.index)))
            .subscribe(el => {
            this.agent = el;
            this.updatePosition();
        });
        this.updatePosition();
    }
    updatePosition() {
        this.startingPositionOffsetY = this.agent.offsetY || this.index * 50 + this.headerOffset;
        this.startingPositionOffsetX = this.agent.offsetX || 0;
        this.styleMap = {
            top: this.startingPositionOffsetY + "px",
            left: this.isOffense && !this.startingPositionOffsetX ? window.innerWidth - 60 + "px" : this.startingPositionOffsetX + "px"
        };
    }
    dragStart(e) {
        e.preventDefault();
        this.isMovable = true;
        this.target = e.target;
    }
    dragHandler(e) {
        e.preventDefault();
        this.agentPositionOffsetY = e.clientY - 35 - this.headerOffset;
        this.agentPositionOffsetX = e.clientX - 26;
        this.target.style.top = this.agentPositionOffsetY + "px";
        this.target.style.left = this.agentPositionOffsetX + "px";
    }
}
AgentComponentComponent.ɵfac = function AgentComponentComponent_Factory(t) { return new (t || AgentComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"])); };
AgentComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentComponentComponent, selectors: [["app-agent-component"]], hostBindings: function AgentComponentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AgentComponentComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function AgentComponentComponent_mouseup_HostBindingHandler($event) { return ctx.function($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { agent: "agent", isOffense: "isOffense", index: "index" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]])], decls: 2, vars: 5, consts: [[3, "ngStyle", "mousedown"], [3, "src"]], template: function AgentComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function AgentComponentComponent_Template_div_mousedown_0_listener($event) { return ctx.dragStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("agent-thumbnail agent-thumbnail--", ctx.agent.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.agentImagePath + ctx.agent.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".agent-thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  padding: 2px;\n  width: 30px;\n  border-radius: 50%;\n  margin: 10px;\n  pointer-events: auto;\n}\n.agent-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: auto;\n  background: #131c2e;\n  border-radius: 50%;\n  border: 2px solid #202b43;\n  pointer-events: none;\n}\n.agent-thumbnail--breach[_ngcontent-%COMP%] {\n  background: #9E644B;\n}\n.agent-thumbnail--brimstone[_ngcontent-%COMP%] {\n  background: #468EB7;\n}\n.agent-thumbnail--cypher[_ngcontent-%COMP%] {\n  background: #A9AD96;\n}\n.agent-thumbnail--jett[_ngcontent-%COMP%] {\n  background: #55D1E0;\n}\n.agent-thumbnail--killjoy[_ngcontent-%COMP%] {\n  background: #308D60;\n}\n.agent-thumbnail--omen[_ngcontent-%COMP%] {\n  background: #543EFF;\n}\n.agent-thumbnail--phoenix[_ngcontent-%COMP%] {\n  background: #F0753A;\n}\n.agent-thumbnail--raze[_ngcontent-%COMP%] {\n  background: #F6AD40;\n}\n.agent-thumbnail--reyna[_ngcontent-%COMP%] {\n  background: #AF31EB;\n}\n.agent-thumbnail--sage[_ngcontent-%COMP%] {\n  background: #21CEAF;\n}\n.agent-thumbnail--skye[_ngcontent-%COMP%] {\n  background: #8CD453;\n}\n.agent-thumbnail--sova[_ngcontent-%COMP%] {\n  background: #325FFF;\n}\n.agent-thumbnail--viper[_ngcontent-%COMP%] {\n  background: #2AC849;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvYWdlbnQtY29tcG9uZW50L2FnZW50LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWdlbnQtY29tcG9uZW50L2FnZW50LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvbWFpbi5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7QURHRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsbUJFdkJXO0FEcUJmO0FES0U7RUFDRSxtQkUxQmM7QUR1QmxCO0FETUU7RUFDRSxtQkU3Qlc7QUR5QmY7QURPRTtFQUNFLG1CRWhDUztBRDJCYjtBRFFFO0VBQ0UsbUJFbkNZO0FENkJoQjtBRFNFO0VBQ0UsbUJFdENTO0FEK0JiO0FEVUU7RUFDRSxtQkV6Q1k7QURpQ2hCO0FEV0U7RUFDRSxtQkU1Q1M7QURtQ2I7QURZRTtFQUNFLG1CRS9DVTtBRHFDZDtBRGFFO0VBQ0UsbUJFbERTO0FEdUNiO0FEY0U7RUFDRSxtQkVyRFM7QUR5Q2I7QURlRTtFQUNFLG1CRXhEUztBRDJDYjtBRGdCRTtFQUNFLG1CRTNEVTtBRDZDZCIsImZpbGUiOiJzcmMvYXBwL2FnZW50LWNvbXBvbmVudC9hZ2VudC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vbWFpbi5zdHlsZXMuc2Nzc1wiO1xuXG4uYWdlbnQtdGh1bWJuYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICBpbWcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMjgsIDQ2KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDMyLCA0MywgNjcpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgJi0tYnJlYWNoIHtcbiAgICBiYWNrZ3JvdW5kOiAkYnJlYWNoLWNvbG9yO1xuICB9XG5cbiAgJi0tYnJpbXN0b25lIHtcbiAgICBiYWNrZ3JvdW5kOiAkYnJpbXN0b25lLWNvbG9yO1xuICB9XG5cbiAgJi0tY3lwaGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkY3lwaGVyLWNvbG9yO1xuICB9XG5cbiAgJi0tamV0dCB7XG4gICAgYmFja2dyb3VuZDogJGpldHQtY29sb3I7XG4gIH1cblxuICAmLS1raWxsam95IHtcbiAgICBiYWNrZ3JvdW5kOiAka2lsbGpveS1jb2xvcjtcbiAgfVxuXG4gICYtLW9tZW4ge1xuICAgIGJhY2tncm91bmQ6ICRvbWVuLWNvbG9yO1xuICB9XG5cbiAgJi0tcGhvZW5peCB7XG4gICAgYmFja2dyb3VuZDogJHBob2VuaXgtY29sb3I7XG4gIH1cblxuICAmLS1yYXplIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmF6ZS1jb2xvcjtcbiAgfVxuXG4gICYtLXJleW5hIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmV5bmEtY29sb3I7XG4gIH1cblxuICAmLS1zYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAkc2FnZS1jb2xvcjtcbiAgfVxuXG4gICYtLXNreWUge1xuICAgIGJhY2tncm91bmQ6ICRza3llLWNvbG9yO1xuICB9XG5cbiAgJi0tc292YSB7XG4gICAgYmFja2dyb3VuZDogJHNvdmEtY29sb3I7XG4gIH1cblxuICAmLS12aXBlciB7XG4gICAgYmFja2dyb3VuZDogJHZpcGVyLWNvbG9yO1xuICB9XG59IiwiLmFnZW50LXRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLmFnZW50LXRodW1ibmFpbCBpbWcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogIzEzMWMyZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjAyYjQzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5hZ2VudC10aHVtYm5haWwtLWJyZWFjaCB7XG4gIGJhY2tncm91bmQ6ICM5RTY0NEI7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1icmltc3RvbmUge1xuICBiYWNrZ3JvdW5kOiAjNDY4RUI3O1xufVxuLmFnZW50LXRodW1ibmFpbC0tY3lwaGVyIHtcbiAgYmFja2dyb3VuZDogI0E5QUQ5Njtcbn1cbi5hZ2VudC10aHVtYm5haWwtLWpldHQge1xuICBiYWNrZ3JvdW5kOiAjNTVEMUUwO1xufVxuLmFnZW50LXRodW1ibmFpbC0ta2lsbGpveSB7XG4gIGJhY2tncm91bmQ6ICMzMDhENjA7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1vbWVuIHtcbiAgYmFja2dyb3VuZDogIzU0M0VGRjtcbn1cbi5hZ2VudC10aHVtYm5haWwtLXBob2VuaXgge1xuICBiYWNrZ3JvdW5kOiAjRjA3NTNBO1xufVxuLmFnZW50LXRodW1ibmFpbC0tcmF6ZSB7XG4gIGJhY2tncm91bmQ6ICNGNkFENDA7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1yZXluYSB7XG4gIGJhY2tncm91bmQ6ICNBRjMxRUI7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS1zYWdlIHtcbiAgYmFja2dyb3VuZDogIzIxQ0VBRjtcbn1cbi5hZ2VudC10aHVtYm5haWwtLXNreWUge1xuICBiYWNrZ3JvdW5kOiAjOENENDUzO1xufVxuLmFnZW50LXRodW1ibmFpbC0tc292YSB7XG4gIGJhY2tncm91bmQ6ICMzMjVGRkY7XG59XG4uYWdlbnQtdGh1bWJuYWlsLS12aXBlciB7XG4gIGJhY2tncm91bmQ6ICMyQUM4NDk7XG59IiwiJGJyZWFjaC1jb2xvcjogIzlFNjQ0QjtcbiRicmltc3RvbmUtY29sb3I6ICM0NjhFQjc7XG4kY3lwaGVyLWNvbG9yOiAjQTlBRDk2O1xuJGpldHQtY29sb3I6ICM1NUQxRTA7XG4ka2lsbGpveS1jb2xvcjogIzMwOEQ2MDtcbiRvbWVuLWNvbG9yOiAjNTQzRUZGO1xuJHBob2VuaXgtY29sb3I6ICNGMDc1M0E7XG4kcmF6ZS1jb2xvcjogI0Y2QUQ0MDtcbiRyZXluYS1jb2xvcjogI0FGMzFFQjtcbiRzYWdlLWNvbG9yOiAjMjFDRUFGO1xuJHNreWUtY29sb3I6ICM4Q0Q0NTM7XG4kc292YS1jb2xvcjogIzMyNUZGRjtcbiR2aXBlci1jb2xvcjogIzJBQzg0OTtcblxuJGJhY2tncm91bmQ6ICMxMzFjMmUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-component',
                templateUrl: './agent-component.component.html',
                styleUrls: ['./agent-component.component.scss'],
                providers: [_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"] }]; }, { agent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOffense: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], function: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/agents-handler/agents-handler.component.ts":
/*!************************************************************!*\
  !*** ./src/app/agents-handler/agents-handler.component.ts ***!
  \************************************************************/
/*! exports provided: AgentsHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsHandlerComponent", function() { return AgentsHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/agents/agent.service */ "./src/app/store/agents/agent.service.ts");
/* harmony import */ var _store_agents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/agents */ "./src/app/store/agents/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../agent-component/agent-component.component */ "./src/app/agent-component/agent-component.component.ts");









function AgentsHandlerComponent_app_agent_component_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-agent-component", 6);
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r3);
} }
function AgentsHandlerComponent_app_agent_component_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-agent-component", 7);
} if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOffense", true)("index", i_r5);
} }
class AgentsHandlerComponent {
    constructor(agentService, store) {
        this.agentService = agentService;
        this.store = store;
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(state => _store_agents__WEBPACK_IMPORTED_MODULE_2__["selectors"].getAgentsList(state)))
            .subscribe(el => {
            this.agentListDefend = el;
            this.agentListOffense = el;
        });
    }
    ngOnInit() {
        this.agentService.loadAgents();
        this.agentService.resetAgents();
    }
}
AgentsHandlerComponent.ɵfac = function AgentsHandlerComponent_Factory(t) { return new (t || AgentsHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AgentsHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentsHandlerComponent, selectors: [["app-agents-handler"]], outputs: { reset: "reset" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]])], decls: 9, vars: 2, consts: [[1, "agents-container"], [1, "defense-side"], [1, "side-name"], [3, "index", 4, "ngFor", "ngForOf"], [1, "offense-side"], [3, "isOffense", "index", 4, "ngFor", "ngForOf"], [3, "index"], [3, "isOffense", "index"]], template: function AgentsHandlerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.agentListDefend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.agentListOffense);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_5__["AgentComponentComponent"]], styles: [".agents-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  pointer-events: none;\n  position: relative;\n}\n\n.side-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvYWdlbnRzLWhhbmRsZXIvYWdlbnRzLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FnZW50cy1oYW5kbGVyL2FnZW50cy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZ2VudHMtaGFuZGxlci9hZ2VudHMtaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ2VudHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZS1uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG5cbn0iLCIuYWdlbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGUtbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentsHandlerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agents-handler',
                templateUrl: './agents-handler.component.html',
                styleUrls: ['./agents-handler.component.scss'],
                providers: [_store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]]
            }]
    }], function () { return [{ type: _store_agents_agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { reset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: "**", redirectTo: "/" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agents-handler/agents-handler.component */ "./src/app/agents-handler/agents-handler.component.ts");
/* harmony import */ var _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-component/map-component.component */ "./src/app/map-component/map-component.component.ts");






class AppComponent {
    constructor() {
        this.title = 'Stratorant';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-agents-handler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_3__["AgentsHandlerComponent"], _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #131c2e;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmxhcmUvT21hci9Qcm9qZWN0cy9Bbmd1bGFyL3N0cmF0b3JhbnQvc3JjL2FwcC9tYWluLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ0dXO0VERlgsV0FBQTtBRURGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9tYWluLnN0eWxlcy5zY3NzJztcblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIHotaW5kZXg6IC0xO1xufSIsIiRicmVhY2gtY29sb3I6ICM5RTY0NEI7XG4kYnJpbXN0b25lLWNvbG9yOiAjNDY4RUI3O1xuJGN5cGhlci1jb2xvcjogI0E5QUQ5NjtcbiRqZXR0LWNvbG9yOiAjNTVEMUUwO1xuJGtpbGxqb3ktY29sb3I6ICMzMDhENjA7XG4kb21lbi1jb2xvcjogIzU0M0VGRjtcbiRwaG9lbml4LWNvbG9yOiAjRjA3NTNBO1xuJHJhemUtY29sb3I6ICNGNkFENDA7XG4kcmV5bmEtY29sb3I6ICNBRjMxRUI7XG4kc2FnZS1jb2xvcjogIzIxQ0VBRjtcbiRza3llLWNvbG9yOiAjOENENDUzO1xuJHNvdmEtY29sb3I6ICMzMjVGRkY7XG4kdmlwZXItY29sb3I6ICMyQUM4NDk7XG5cbiRiYWNrZ3JvdW5kOiAjMTMxYzJlIiwiLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWMyZTtcbiAgei1pbmRleDogLTE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-component/map-component.component */ "./src/app/map-component/map-component.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agent-component/agent-component.component */ "./src/app/agent-component/agent-component.component.ts");
/* harmony import */ var _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./agents-handler/agents-handler.component */ "./src/app/agents-handler/agents-handler.component.ts");
/* harmony import */ var _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-component/map-switcher/map-switcher.component */ "./src/app/map-component/map-switcher/map-switcher.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/settings/settings.service */ "./src/app/store/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(Object.assign({}, _store_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]), {}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"],
        _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponentComponent"],
        _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__["AgentsHandlerComponent"],
        _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__["MapSwitcherComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _map_component_map_component_component__WEBPACK_IMPORTED_MODULE_4__["MapComponentComponent"],
                    _agent_component_agent_component_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponentComponent"],
                    _agents_handler_agents_handler_component__WEBPACK_IMPORTED_MODULE_10__["AgentsHandlerComponent"],
                    _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_11__["MapSwitcherComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(Object.assign({}, _store_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]), {}),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
                ],
                providers: [_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/map-component/map-component.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/map-component/map-component.component.ts ***!
  \**********************************************************/
/*! exports provided: MapComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponentComponent", function() { return MapComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/settings */ "./src/app/store/settings/index.ts");





class MapComponentComponent {
    constructor(store) {
        this.store = store;
        this.isProduction = true;
        this.mapsImagesPath = this.isProduction ? 'portfolio/stratorant/assets/images/maps' : '../../assets/images/maps';
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(state => _store_settings__WEBPACK_IMPORTED_MODULE_2__["selectors"].getSelectedMap(state)))
            .subscribe(el => this.selectedMap = el);
    }
    ngOnInit() {
    }
}
MapComponentComponent.ɵfac = function MapComponentComponent_Factory(t) { return new (t || MapComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
MapComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponentComponent, selectors: [["app-map-component"]], decls: 2, vars: 1, consts: [[1, "map"], [3, "src"]], template: function MapComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.mapsImagesPath + ctx.selectedMap, "-layout.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".map[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 680px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvbWFwLWNvbXBvbmVudC9tYXAtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAtY29tcG9uZW50L21hcC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXAtY29tcG9uZW50L21hcC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcblxuICBpbWcge1xuICAgIGhlaWdodDogNjgwcHg7XG4gIH1cbn0iLCIubWFwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5tYXAgaW1nIHtcbiAgaGVpZ2h0OiA2ODBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-component',
                templateUrl: './map-component.component.html',
                styleUrls: ['./map-component.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map-component/map-switcher/map-switcher.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/map-component/map-switcher/map-switcher.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSwitcherComponent", function() { return MapSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_settings_map_mapList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/settings/map/mapList */ "./src/app/store/settings/map/mapList.ts");
/* harmony import */ var _store_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/settings */ "./src/app/store/settings/index.ts");
/* harmony import */ var src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/settings/settings.service */ "./src/app/store/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function MapSwitcherComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapName_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mapName_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mapName_r1, " ");
} }
class MapSwitcherComponent {
    constructor(store, settings) {
        this.store = store;
        this.settings = settings;
        this.mapList = _store_settings_map_mapList__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(state => _store_settings__WEBPACK_IMPORTED_MODULE_3__["selectors"].getSelectedMap(state)))
            .subscribe(el => this.selectedMap = el);
    }
    ngOnInit() {
    }
    onMapChange(map) {
        this.settings.selectMap(map);
    }
}
MapSwitcherComponent.ɵfac = function MapSwitcherComponent_Factory(t) { return new (t || MapSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"])); };
MapSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapSwitcherComponent, selectors: [["app-map-switcher"]], decls: 2, vars: 2, consts: [[3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function MapSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MapSwitcherComponent_Template_select_change_0_listener($event) { return ctx.onMapChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapSwitcherComponent_option_1_Template, 2, 2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mapList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jb21wb25lbnQvbWFwLXN3aXRjaGVyL21hcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-switcher',
                templateUrl: './map-switcher.component.html',
                styleUrls: ['./map-switcher.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: src_app_store_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-component/map-switcher/map-switcher.component */ "./src/app/map-component/map-switcher/map-switcher.component.ts");



class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 8, vars: 0, consts: [[1, "navigation"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_map_component_map_switcher_map_switcher_component__WEBPACK_IMPORTED_MODULE_1__["MapSwitcherComponent"]], styles: [".navigation[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  padding: 5px 20px;\n}\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZsYXJlL09tYXIvUHJvamVjdHMvQW5ndWxhci9zdHJhdG9yYW50L3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG5cbiAgdWwge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn0iLCIubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLm5hdmlnYXRpb24gdWwge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store/agents/actions.ts":
/*!*****************************************!*\
  !*** ./src/app/store/agents/actions.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/store/agents/types.ts");

const loadAgents = (payload) => { return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].LOAD_AGENTS, payload }; };
const resetAgents = (payload) => { return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_AGENTS_SETTINGS, payload }; };
const setAgentPosition = (payload) => { return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_AGENT_POSITION, payload }; };
/* harmony default export */ __webpack_exports__["default"] = ({
    loadAgents,
    resetAgents,
    setAgentPosition
});


/***/ }),

/***/ "./src/app/store/agents/agent.service.ts":
/*!***********************************************!*\
  !*** ./src/app/store/agents/agent.service.ts ***!
  \***********************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/agents/actions.ts");
/* harmony import */ var _agentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agentsList */ "./src/app/store/agents/agentsList.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");





class AgentService {
    constructor(store) {
        this.store = store;
    }
    loadAgents() {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].loadAgents(_agentsList__WEBPACK_IMPORTED_MODULE_2__["default"]));
    }
    resetAgents() {
        let newDTO = [];
        let counter = 0;
        for (let i = 0; i < _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length * 2; i++) {
            newDTO = [
                ...newDTO,
                {
                    name: _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"][counter].name,
                    isOffense: i >= _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length,
                    positionReset: true,
                    offsetX: 0,
                    offsetY: 0
                }
            ];
            counter < _agentsList__WEBPACK_IMPORTED_MODULE_2__["default"].length - 1 ? counter++ : counter = 0;
        }
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].resetAgents(newDTO));
    }
    setAgentPosition(agent, coordinates) {
        const newAgent = Object.assign(Object.assign({}, agent), { offsetX: coordinates.X, offsetY: coordinates.Y });
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].setAgentPosition(newAgent));
    }
}
AgentService.ɵfac = function AgentService_Factory(t) { return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AgentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AgentService, factory: AgentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/agents/agentsList.ts":
/*!********************************************!*\
  !*** ./src/app/store/agents/agentsList.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: "breach"
    },
    {
        name: "brimstone"
    },
    {
        name: "cypher"
    },
    {
        name: "jett"
    },
    {
        name: "killjoy"
    },
    {
        name: "omen"
    },
    {
        name: "phoenix"
    },
    {
        name: "raze"
    },
    {
        name: "reyna"
    },
    {
        name: "sage"
    },
    {
        name: "skye"
    },
    {
        name: "sova"
    },
    {
        name: "viper"
    },
]);


/***/ }),

/***/ "./src/app/store/agents/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/agents/index.ts ***!
  \***************************************/
/*! exports provided: selectors, actions, agentsReducer, types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/app/store/agents/selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/agents/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/app/store/agents/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "agentsReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["agentsReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/app/store/agents/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "types", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./src/app/store/agents/reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/store/agents/reducer.ts ***!
  \*****************************************/
/*! exports provided: agentsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentsReducer", function() { return agentsReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/store/agents/types.ts");

const initialState = {
    agentsList: [],
    agentsSettings: []
};
function agentsReducer(state = initialState, action) {
    switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].LOAD_AGENTS:
            return Object.assign(Object.assign({}, state), { agentsList: action.payload });
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_AGENTS_SETTINGS:
            return Object.assign(Object.assign({}, state), { agentsSettings: action.payload });
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_AGENT_POSITION:
            return Object.assign(Object.assign({}, state), { agentsSettings: state.agentsSettings.map(el => {
                    if (el.name === action.payload.name && el.isOffense === action.payload.isOffense) {
                        return action.payload;
                    }
                    else {
                        return el;
                    }
                }) });
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/store/agents/selectors.ts":
/*!*******************************************!*\
  !*** ./src/app/store/agents/selectors.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getAgents = state => state.agents;
const getAgentSettings = state => getAgents(state).agentsSettings || [];
const getAgentsList = state => getAgents(state).agentsList;
const getAgentNameByIndex = (state, index) => getAgentsList(state)[index].name || {};
const getAgentSettingsBySideAndIndex = (state, isOffense, index) => getAgentSettings(state)
    .find(el => el.name === getAgentNameByIndex(state, index) && el.isOffense == isOffense);
/* harmony default export */ __webpack_exports__["default"] = ({
    getAgentsList,
    getAgentNameByIndex,
    getAgentSettingsBySideAndIndex
});


/***/ }),

/***/ "./src/app/store/agents/types.ts":
/*!***************************************!*\
  !*** ./src/app/store/agents/types.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    LOAD_AGENTS: "LOAD_AGENTS",
    RESET_AGENTS_SETTINGS: "RESET_AGENTS_SETTINGS",
    SET_AGENT_POSITION: "SET_AGENT_POSITION"
});


/***/ }),

/***/ "./src/app/store/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agents_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agents/reducer */ "./src/app/store/agents/reducer.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/app/store/settings/index.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    agents: _agents_reducer__WEBPACK_IMPORTED_MODULE_0__["agentsReducer"],
    settings: _settings__WEBPACK_IMPORTED_MODULE_1__["settingsReducer"]
});


/***/ }),

/***/ "./src/app/store/settings/actions.ts":
/*!*******************************************!*\
  !*** ./src/app/store/settings/actions.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/store/settings/types.ts");

const setSelectedMap = (payload) => { return { type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SELECTED_MAP, payload }; };
/* harmony default export */ __webpack_exports__["default"] = ({
    setSelectedMap
});


/***/ }),

/***/ "./src/app/store/settings/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/settings/index.ts ***!
  \*****************************************/
/*! exports provided: selectors, actions, settingsReducer, types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/app/store/settings/selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/settings/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/settings/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["settingsReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/app/store/settings/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "types", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./src/app/store/settings/map/mapList.ts":
/*!***********************************************!*\
  !*** ./src/app/store/settings/map/mapList.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    'ascent',
    'bind',
    'haven',
    'split',
    'icebox'
]);


/***/ }),

/***/ "./src/app/store/settings/reducers.ts":
/*!********************************************!*\
  !*** ./src/app/store/settings/reducers.ts ***!
  \********************************************/
/*! exports provided: settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/store/settings/types.ts");

const initialState = {
    selectedMap: "bind"
};
function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SELECTED_MAP:
            return Object.assign(Object.assign({}, state), { selectedMap: action.payload });
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/store/settings/selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/store/settings/selectors.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getSettings = state => state.settings;
const getSelectedMap = state => getSettings(state).selectedMap;
/* harmony default export */ __webpack_exports__["default"] = ({
    getSelectedMap
});


/***/ }),

/***/ "./src/app/store/settings/settings.service.ts":
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.service.ts ***!
  \****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/settings/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");




class SettingsService {
    constructor(store) {
        this.store = store;
    }
    selectMap(map) {
        this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].setSelectedMap(map));
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/settings/types.ts":
/*!*****************************************!*\
  !*** ./src/app/store/settings/types.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    SET_SELECTED_MAP: "SET_SELECTED_MAP",
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/flare/Omar/Projects/Angular/stratorant/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map