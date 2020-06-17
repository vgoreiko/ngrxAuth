function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
  /***/
  "./src/app/info/containers/index.ts":
  /*!******************************************!*\
    !*** ./src/app/info/containers/index.ts ***!
    \******************************************/

  /*! exports provided: PrivacyPolicyComponent, TermsOfServicesComponent */

  /***/
  function srcAppInfoContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./privacy-policy/privacy-policy.component */
    "./src/app/info/containers/privacy-policy/privacy-policy.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__["PrivacyPolicyComponent"];
    });
    /* harmony import */


    var _terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./terms-of-services/terms-of-services.component */
    "./src/app/info/containers/terms-of-services/terms-of-services.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TermsOfServicesComponent", function () {
      return _terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_1__["TermsOfServicesComponent"];
    });
    /***/

  },

  /***/
  "./src/app/info/containers/privacy-policy/privacy-policy.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/info/containers/privacy-policy/privacy-policy.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppInfoContainersPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrivacyPolicyComponent = /*@__PURE__*/function () {
      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent() {
          _classCallCheck(this, PrivacyPolicyComponent);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || PrivacyPolicyComponent)();
      };

      PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 8,
        vars: 0,
        consts: [["routerLink", "/", 1, "btn"]],
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Privacy Policy\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum excepturi quidem reiciendis repellat.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur commodi corporis doloribus ex fugiat in itaque minima veritatis voluptatibus? Ad aspernatur culpa cum deserunt eaque hic illo soluta voluptatum.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [""],
        changeDetection: 0
      });
      return PrivacyPolicyComponent;
    }();
    /***/

  },

  /***/
  "./src/app/info/containers/terms-of-services/terms-of-services.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/info/containers/terms-of-services/terms-of-services.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TermsOfServicesComponent */

  /***/
  function srcAppInfoContainersTermsOfServicesTermsOfServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsOfServicesComponent", function () {
      return TermsOfServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TermsOfServicesComponent = /*@__PURE__*/function () {
      var TermsOfServicesComponent = /*#__PURE__*/function () {
        function TermsOfServicesComponent() {
          _classCallCheck(this, TermsOfServicesComponent);
        }

        _createClass(TermsOfServicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsOfServicesComponent;
      }();

      TermsOfServicesComponent.ɵfac = function TermsOfServicesComponent_Factory(t) {
        return new (t || TermsOfServicesComponent)();
      };

      TermsOfServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TermsOfServicesComponent,
        selectors: [["app-terms-of-services"]],
        decls: 11,
        vars: 0,
        consts: [["routerLink", "/", 1, "btn"]],
        template: function TermsOfServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terms of Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, aut consequatur corporis dignissimos distinctio doloribus ducimus ea, eaque eius eligendi excepturi explicabo harum impedit nam natus neque nesciunt nobis perferendis placeat quae quisquam repellat sequi similique sit sunt voluptatibus. Amet at atque autem cum dicta ducimus ea eaque earum eligendi et ex expedita facilis id iste laudantium, magnam maxime mollitia nostrum obcaecati quaerat qui quidem quo ratione tempore totam ut velit vero voluptatem voluptatibus voluptatum? Adipisci aliquam illo incidunt nisi odio pariatur, quam, qui reprehenderit sed similique temporibus, voluptatum. Deserunt earum illum incidunt, natus porro quasi voluptatibus? Libero, qui.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias beatae deserunt dolor dolores doloribus ea eligendi explicabo impedit inventore laudantium modi mollitia nihil nisi, non nulla numquam possimus quaerat recusandae reiciendis soluta velit voluptas! Ab accusantium adipisci alias aspernatur delectus expedita hic nemo neque nihil numquam quam ullam, vitae?\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam at deleniti deserunt dolore eaque eligendi explicabo id ipsam magnam magni placeat quae qui, quidem sit tempore voluptatem? Debitis, magnam?\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [""],
        changeDetection: 0
      });
      return TermsOfServicesComponent;
    }();
    /***/

  },

  /***/
  "./src/app/info/info-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/info/info-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: InfoRoutingModule */

  /***/
  function srcAppInfoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoRoutingModule", function () {
      return InfoRoutingModule;
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


    var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers */
    "./src/app/info/containers/index.ts");

    var routes = [{
      path: 'termsOfServices',
      component: _containers__WEBPACK_IMPORTED_MODULE_2__["TermsOfServicesComponent"]
    }, {
      path: 'privacyPolicy',
      component: _containers__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyComponent"]
    }, {
      path: '',
      redirectTo: 'termsOfServices',
      pathMatch: 'full'
    }];

    var InfoRoutingModule = /*@__PURE__*/function () {
      var InfoRoutingModule = function InfoRoutingModule() {
        _classCallCheck(this, InfoRoutingModule);
      };

      InfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InfoRoutingModule
      });
      InfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InfoRoutingModule_Factory(t) {
          return new (t || InfoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return InfoRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/info/info.module.ts":
  /*!*************************************!*\
    !*** ./src/app/info/info.module.ts ***!
    \*************************************/

  /*! exports provided: InfoModule */

  /***/
  function srcAppInfoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoModule", function () {
      return InfoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./info-routing.module */
    "./src/app/info/info-routing.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers */
    "./src/app/info/containers/index.ts");

    var InfoModule = /*@__PURE__*/function () {
      var InfoModule = function InfoModule() {
        _classCallCheck(this, InfoModule);
      };

      InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InfoModule
      });
      InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InfoModule_Factory(t) {
          return new (t || InfoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_2__["InfoRoutingModule"]]]
      });
      return InfoModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfoModule, {
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_3__["TermsOfServicesComponent"], _containers__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_2__["InfoRoutingModule"]]
      });
    })();
    /***/

  }
}]);