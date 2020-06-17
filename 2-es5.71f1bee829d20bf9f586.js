function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./src/app/dictionary/dictionary.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/dictionary/dictionary.module.ts ***!
    \*************************************************/

  /*! exports provided: DictionaryModule */

  /***/
  function srcAppDictionaryDictionaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryModule", function () {
      return DictionaryModule;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_dictionary_sandbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/dictionary-sandbox.service */
    "./src/app/dictionary/store/dictionary-sandbox.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services */
    "./src/app/dictionary/services/index.ts");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/dictionary/store/reducers/index.ts");
    /* harmony import */


    var _store_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/effects */
    "./src/app/dictionary/store/effects/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DictionaryModule = /*@__PURE__*/function () {
      var DictionaryModule = function DictionaryModule() {
        _classCallCheck(this, DictionaryModule);
      };

      DictionaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DictionaryModule
      });
      DictionaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DictionaryModule_Factory(t) {
          return new (t || DictionaryModule)();
        },
        providers: [_services__WEBPACK_IMPORTED_MODULE_5__["DictionaryRepositoryService"], _store_dictionary_sandbox_service__WEBPACK_IMPORTED_MODULE_4__["DictionarySandboxService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('dictionary', _store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_7__["CountryEffects"]])]]
      });
      return DictionaryModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionaryModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dictionary/services/dictionary-repository.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/dictionary/services/dictionary-repository.service.ts ***!
    \**********************************************************************/

  /*! exports provided: DictionaryRepositoryService */

  /***/
  function srcAppDictionaryServicesDictionaryRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryRepositoryService", function () {
      return DictionaryRepositoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_app_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app-config/app-config.module */
    "./src/app/app-config/app-config.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DictionaryRepositoryService = /*@__PURE__*/function () {
      var DictionaryRepositoryService = /*#__PURE__*/function () {
        function DictionaryRepositoryService(http, config) {
          _classCallCheck(this, DictionaryRepositoryService);

          this.http = http;
          this.config = config;
        }

        _createClass(DictionaryRepositoryService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.http.get("".concat(this.apiPredecessor, "/countries"));
          }
        }, {
          key: "apiPredecessor",
          get: function get() {
            return "".concat(this.config.apiEndpoint);
          }
        }]);

        return DictionaryRepositoryService;
      }();

      DictionaryRepositoryService.ɵfac = function DictionaryRepositoryService_Factory(t) {
        return new (t || DictionaryRepositoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_app_config_module__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"]));
      };

      DictionaryRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DictionaryRepositoryService,
        factory: DictionaryRepositoryService.ɵfac
      });
      return DictionaryRepositoryService;
    }();
    /***/

  },

  /***/
  "./src/app/dictionary/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/dictionary/services/index.ts ***!
    \**********************************************/

  /*! exports provided: DictionaryRepositoryService */

  /***/
  function srcAppDictionaryServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dictionary_repository_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dictionary-repository.service */
    "./src/app/dictionary/services/dictionary-repository.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DictionaryRepositoryService", function () {
      return _dictionary_repository_service__WEBPACK_IMPORTED_MODULE_0__["DictionaryRepositoryService"];
    });
    /***/

  },

  /***/
  "./src/app/dictionary/store/actions/country.actions.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dictionary/store/actions/country.actions.ts ***!
    \*************************************************************/

  /*! exports provided: loadCountries, loadCountriesSuccess, loadCountriesError */

  /***/
  function srcAppDictionaryStoreActionsCountryActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadCountries", function () {
      return loadCountries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadCountriesSuccess", function () {
      return loadCountriesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadCountriesError", function () {
      return loadCountriesError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] Load Countries');
    var loadCountriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] Load Countries Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadCountriesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] Load Countries Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/dictionary/store/actions/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/dictionary/store/actions/index.ts ***!
    \***************************************************/

  /*! exports provided: loadCountries, loadCountriesSuccess, loadCountriesError */

  /***/
  function srcAppDictionaryStoreActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _country_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country.actions */
    "./src/app/dictionary/store/actions/country.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loadCountries", function () {
      return _country_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountries"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loadCountriesSuccess", function () {
      return _country_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountriesSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loadCountriesError", function () {
      return _country_actions__WEBPACK_IMPORTED_MODULE_0__["loadCountriesError"];
    });
    /***/

  },

  /***/
  "./src/app/dictionary/store/dictionary-sandbox.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/dictionary/store/dictionary-sandbox.service.ts ***!
    \****************************************************************/

  /*! exports provided: DictionarySandboxService */

  /***/
  function srcAppDictionaryStoreDictionarySandboxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionarySandboxService", function () {
      return DictionarySandboxService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/dictionary/store/selectors/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./actions */
    "./src/app/dictionary/store/actions/index.ts");

    var DictionarySandboxService = /*@__PURE__*/function () {
      var DictionarySandboxService = /*#__PURE__*/function () {
        function DictionarySandboxService(store) {
          _classCallCheck(this, DictionarySandboxService);

          this.store = store;
          this.loadCountriesError$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCountriesLoadError"]));
          this.loadCountriesInProgress$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCountriesLoadInProgress"]));
          this.loadCountriesSuccess$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCountriesLoaded"]));
          this.countries$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_2__["selectCountries"]));
        }

        _createClass(DictionarySandboxService, [{
          key: "getAllCountries",
          value: function getAllCountries() {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadCountries"])());
          }
        }]);

        return DictionarySandboxService;
      }();

      DictionarySandboxService.ɵfac = function DictionarySandboxService_Factory(t) {
        return new (t || DictionarySandboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      DictionarySandboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DictionarySandboxService,
        factory: DictionarySandboxService.ɵfac
      });
      return DictionarySandboxService;
    }();
    /***/

  },

  /***/
  "./src/app/dictionary/store/dictionary-state.dto.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dictionary/store/dictionary-state.dto.ts ***!
    \**********************************************************/

  /*! exports provided: initialCountriesState, initialState, selectDictionaryFeature */

  /***/
  function srcAppDictionaryStoreDictionaryStateDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialCountriesState", function () {
      return initialCountriesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDictionaryFeature", function () {
      return selectDictionaryFeature;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/dto */
    "./src/app/auth/dto/index.ts");

    var initialCountriesState = {
      countries: [],
      loading: _auth_dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].NotStarted,
      error: null
    };
    var initialState = {
      countries: initialCountriesState
    };
    var selectDictionaryFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('dictionary');
    /***/
  },

  /***/
  "./src/app/dictionary/store/effects/country.effects.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dictionary/store/effects/country.effects.ts ***!
    \*************************************************************/

  /*! exports provided: CountryEffects */

  /***/
  function srcAppDictionaryStoreEffectsCountryEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryEffects", function () {
      return CountryEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/dictionary/store/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/dictionary/services/index.ts");

    var CountryEffects = /*@__PURE__*/function () {
      var CountryEffects = function CountryEffects(actions$, dictionaryRepositoryService) {
        var _this = this;

        _classCallCheck(this, CountryEffects);

        this.actions$ = actions$;
        this.dictionaryRepositoryService = dictionaryRepositoryService;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountries"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return _this.dictionaryRepositoryService.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countries) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesSuccess"]({
                countries: countries
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadCountriesError"]({
                error: e.error.message
              }));
            }));
          }));
        });
      };

      CountryEffects.ɵfac = function CountryEffects_Factory(t) {
        return new (t || CountryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_5__["DictionaryRepositoryService"]));
      };

      CountryEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountryEffects,
        factory: CountryEffects.ɵfac
      });
      return CountryEffects;
    }();
    /***/

  },

  /***/
  "./src/app/dictionary/store/effects/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/dictionary/store/effects/index.ts ***!
    \***************************************************/

  /*! exports provided: CountryEffects */

  /***/
  function srcAppDictionaryStoreEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _country_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country.effects */
    "./src/app/dictionary/store/effects/country.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CountryEffects", function () {
      return _country_effects__WEBPACK_IMPORTED_MODULE_0__["CountryEffects"];
    });
    /***/

  },

  /***/
  "./src/app/dictionary/store/reducers/countries.reducer.ts":
  /*!****************************************************************!*\
    !*** ./src/app/dictionary/store/reducers/countries.reducer.ts ***!
    \****************************************************************/

  /*! exports provided: countriesReducer */

  /***/
  function srcAppDictionaryStoreReducersCountriesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countriesReducer", function () {
      return countriesReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/dictionary/store/actions/index.ts");
    /* harmony import */


    var _dictionary_state_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dictionary-state.dto */
    "./src/app/dictionary/store/dictionary-state.dto.ts");
    /* harmony import */


    var _shared_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/dto */
    "./src/app/shared/dto/index.ts");

    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_dictionary_state_dto__WEBPACK_IMPORTED_MODULE_2__["initialCountriesState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountries"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loading: _shared_dto__WEBPACK_IMPORTED_MODULE_3__["LoadingState"].Loading,
        error: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountriesError"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _shared_dto__WEBPACK_IMPORTED_MODULE_3__["LoadingState"].Failed,
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountriesSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _shared_dto__WEBPACK_IMPORTED_MODULE_3__["LoadingState"].Loaded,
        error: null,
        countries: action.countries
      });
    }));

    function countriesReducer(state, action) {
      return reducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/dictionary/store/reducers/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/dictionary/store/reducers/index.ts ***!
    \****************************************************/

  /*! exports provided: countriesReducer, reducers */

  /***/
  function srcAppDictionaryStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _countries_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./countries.reducer */
    "./src/app/dictionary/store/reducers/countries.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "countriesReducer", function () {
      return _countries_reducer__WEBPACK_IMPORTED_MODULE_0__["countriesReducer"];
    });

    var reducers = {
      countries: _countries_reducer__WEBPACK_IMPORTED_MODULE_0__["countriesReducer"]
    };
    /***/
  },

  /***/
  "./src/app/dictionary/store/selectors/countries.selector.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dictionary/store/selectors/countries.selector.ts ***!
    \******************************************************************/

  /*! exports provided: selectCountriesState, selectCountries, selectCountriesLoaded, selectCountriesLoadError, selectCountriesLoadInProgress */

  /***/
  function srcAppDictionaryStoreSelectorsCountriesSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesState", function () {
      return selectCountriesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountries", function () {
      return selectCountries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoaded", function () {
      return selectCountriesLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoadError", function () {
      return selectCountriesLoadError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoadInProgress", function () {
      return selectCountriesLoadInProgress;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dictionary_state_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dictionary-state.dto */
    "./src/app/dictionary/store/dictionary-state.dto.ts");
    /* harmony import */


    var _shared_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/dto */
    "./src/app/shared/dto/index.ts");

    var selectCountriesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_dictionary_state_dto__WEBPACK_IMPORTED_MODULE_1__["selectDictionaryFeature"], function (state) {
      return state.countries;
    });
    var selectCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCountriesState, function (state) {
      return state.countries;
    });
    var selectCountriesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCountriesState, function (state) {
      return state.loading === _shared_dto__WEBPACK_IMPORTED_MODULE_2__["LoadingState"].Loaded;
    });
    var selectCountriesLoadError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCountriesState, function (state) {
      return state.error;
    });
    var selectCountriesLoadInProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCountriesState, function (state) {
      return state.loading === _shared_dto__WEBPACK_IMPORTED_MODULE_2__["LoadingState"].Loading;
    });
    /***/
  },

  /***/
  "./src/app/dictionary/store/selectors/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/dictionary/store/selectors/index.ts ***!
    \*****************************************************/

  /*! exports provided: selectCountriesState, selectCountries, selectCountriesLoaded, selectCountriesLoadError, selectCountriesLoadInProgress */

  /***/
  function srcAppDictionaryStoreSelectorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _countries_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./countries.selector */
    "./src/app/dictionary/store/selectors/countries.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesState", function () {
      return _countries_selector__WEBPACK_IMPORTED_MODULE_0__["selectCountriesState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectCountries", function () {
      return _countries_selector__WEBPACK_IMPORTED_MODULE_0__["selectCountries"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoaded", function () {
      return _countries_selector__WEBPACK_IMPORTED_MODULE_0__["selectCountriesLoaded"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoadError", function () {
      return _countries_selector__WEBPACK_IMPORTED_MODULE_0__["selectCountriesLoadError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesLoadInProgress", function () {
      return _countries_selector__WEBPACK_IMPORTED_MODULE_0__["selectCountriesLoadInProgress"];
    });
    /***/

  },

  /***/
  "./src/app/profile/components/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/profile/components/index.ts ***!
    \*********************************************/

  /*! exports provided: ProfileStepperComponent */

  /***/
  function srcAppProfileComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profile_stepper_profile_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile-stepper/profile-stepper.component */
    "./src/app/profile/components/profile-stepper/profile-stepper.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileStepperComponent", function () {
      return _profile_stepper_profile_stepper_component__WEBPACK_IMPORTED_MODULE_0__["ProfileStepperComponent"];
    });
    /***/

  },

  /***/
  "./src/app/profile/components/profile-stepper/profile-stepper.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/profile/components/profile-stepper/profile-stepper.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProfileStepperComponent */

  /***/
  function srcAppProfileComponentsProfileStepperProfileStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStepperComponent", function () {
      return ProfileStepperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileStepperComponent_li_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.title);
      }
    }

    function ProfileStepperComponent_li_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "active": a0,
        "success": a1
      };
    };

    function ProfileStepperComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileStepperComponent_li_1_span_1_Template, 2, 1, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileStepperComponent_li_1_span_2_Template, 2, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.isStepActive(step_r1.id), ctx_r0.isStepSuccess(step_r1.id)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isStepSuccess(step_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isStepSuccess(step_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r1.subTitle);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "btn-disabled": a0
      };
    };

    var _c2 = ["*"];

    var ProfileStepperComponent = /*@__PURE__*/function () {
      var ProfileStepperComponent = /*#__PURE__*/function () {
        function ProfileStepperComponent() {
          _classCallCheck(this, ProfileStepperComponent);

          this.steps = [];
          this.successStepIds = [];
          this.isNextDisabled = false;
        }

        _createClass(ProfileStepperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isStepSuccess",
          value: function isStepSuccess(stepId) {
            return this.successStepIds.includes(stepId);
          }
        }, {
          key: "isStepActive",
          value: function isStepActive(stepId) {
            return this.activeStepId === stepId;
          }
        }]);

        return ProfileStepperComponent;
      }();

      ProfileStepperComponent.ɵfac = function ProfileStepperComponent_Factory(t) {
        return new (t || ProfileStepperComponent)();
      };

      ProfileStepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileStepperComponent,
        selectors: [["app-profile-stepper"]],
        inputs: {
          steps: "steps",
          activeStepId: "activeStepId",
          successStepIds: "successStepIds",
          isNextDisabled: "isNextDisabled"
        },
        ngContentSelectors: _c2,
        decls: 6,
        vars: 4,
        consts: [[1, "steps-list"], ["class", "step", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "stepper-navigation"], ["disabled", "isNextDisabled", "type", "button", 1, "btn", "btn-primary", 3, "ngClass"], [1, "step", 3, "ngClass"], ["class", "bubble text-l mb-x", 4, "ngIf"], ["class", "bubble valid-icon success-text text-l mb-x", 4, "ngIf"], [1, "sub-title", "text-m"], [1, "bubble", "text-l", "mb-x"], [1, "bubble", "valid-icon", "success-text", "text-l", "mb-x"]],
        template: function ProfileStepperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileStepperComponent_li_1_Template, 5, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.isNextDisabled));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%] {\n  padding: 0;\n  display: inline-flex;\n  justify-content: space-between;\n  list-style: none;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: flex;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e0e0e0;\n  color: #e0e0e0;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  color: #e0e0e0;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #69a9f2;\n  background: #69a9f2;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #69a9f2;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li.success[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #8fcd92;\n  background: #8fcd92;\n}\n[_nghost-%COMP%]   .steps-list[_ngcontent-%COMP%]   li.success[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  color: #323232;\n}\n[_nghost-%COMP%]   .stepper-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}"],
        changeDetection: 0
      });
      return ProfileStepperComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/contrainers/bio-details/bio-details.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/profile/contrainers/bio-details/bio-details.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BioDetailsComponent */

  /***/
  function srcAppProfileContrainersBioDetailsBioDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BioDetailsComponent", function () {
      return BioDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services */
    "./src/app/profile/services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BioDetailsComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_5_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3 Characters Long");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BioDetailsComponent_ul_5_li_1_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BioDetailsComponent_ul_5_li_2_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstNameControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstNameControl.hasError("minlength"));
      }
    }

    function BioDetailsComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_10_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_10_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3 Characters Long");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BioDetailsComponent_ul_10_li_1_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BioDetailsComponent_ul_10_li_2_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.lastNameControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.lastNameControl.hasError("minlength"));
      }
    }

    function BioDetailsComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_15_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_15_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "8 Characters Long");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BioDetailsComponent_ul_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BioDetailsComponent_ul_15_li_1_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BioDetailsComponent_ul_15_li_2_Template, 2, 0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.phoneNumberControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.phoneNumberControl.hasError("minlength"));
      }
    }

    var BioDetailsComponent = /*@__PURE__*/function () {
      var BioDetailsComponent = /*#__PURE__*/function () {
        function BioDetailsComponent(profileFormBuilderService) {
          _classCallCheck(this, BioDetailsComponent);

          this.profileFormBuilderService = profileFormBuilderService;
          this.controlNames = _services__WEBPACK_IMPORTED_MODULE_1__["UserBioDetailsControlNames"];
          this.bioDetailsGroup = this.profileFormBuilderService.getBioDetailsForm();
        }

        _createClass(BioDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "firstNameControl",
          get: function get() {
            return this.bioDetailsGroup.get(this.controlNames.FirstName);
          }
        }, {
          key: "lastNameControl",
          get: function get() {
            return this.bioDetailsGroup.get(this.controlNames.LastName);
          }
        }, {
          key: "phoneNumberControl",
          get: function get() {
            return this.bioDetailsGroup.get(this.controlNames.PhoneNumber);
          }
        }]);

        return BioDetailsComponent;
      }();

      BioDetailsComponent.ɵfac = function BioDetailsComponent_Factory(t) {
        return new (t || BioDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ProfileFormBuilderService"]));
      };

      BioDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BioDetailsComponent,
        selectors: [["app-bio-details"]],
        inputs: {
          bioDetails: "bioDetails"
        },
        decls: 19,
        vars: 11,
        consts: [[3, "formGroup"], [1, "col", "with-errors", "text-line"], [1, "control-wrap"], ["type", "text", "placeholder", "First Name", 3, "formControlName"], ["class", "valid-icon", 4, "ngIf"], ["class", "errors text-m", 4, "ngIf"], ["type", "text", "placeholder", "Last Name", 3, "formControlName"], ["type", "text", "placeholder", "Phone Number", 3, "formControlName"], ["type", "text", "placeholder", "Screen Name (Optional)", 3, "formControlName"], [1, "valid-icon"], [1, "errors", "text-m"], ["class", "error", 4, "ngIf"], [1, "error"]],
        template: function BioDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BioDetailsComponent_span_4_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BioDetailsComponent_ul_5_Template, 3, 2, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BioDetailsComponent_span_9_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BioDetailsComponent_ul_10_Template, 3, 2, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BioDetailsComponent_span_14_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BioDetailsComponent_ul_15_Template, 3, 2, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bioDetailsGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.FirstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstNameControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstNameControl.invalid && ctx.firstNameControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.LastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastNameControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastNameControl.invalid && ctx.lastNameControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.PhoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumberControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumberControl.invalid && ctx.phoneNumberControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.ScreenName);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [""],
        changeDetection: 0
      });
      return BioDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/contrainers/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/contrainers/index.ts ***!
    \**********************************************/

  /*! exports provided: SetupProfileComponent, BioDetailsComponent, ProfilePictureComponent, ProfileAddressComponent, ProfileSecurityComponent */

  /***/
  function srcAppProfileContrainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _setup_profile_setup_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./setup-profile/setup-profile.component */
    "./src/app/profile/contrainers/setup-profile/setup-profile.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SetupProfileComponent", function () {
      return _setup_profile_setup_profile_component__WEBPACK_IMPORTED_MODULE_0__["SetupProfileComponent"];
    });
    /* harmony import */


    var _bio_details_bio_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bio-details/bio-details.component */
    "./src/app/profile/contrainers/bio-details/bio-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BioDetailsComponent", function () {
      return _bio_details_bio_details_component__WEBPACK_IMPORTED_MODULE_1__["BioDetailsComponent"];
    });
    /* harmony import */


    var _profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-picture/profile-picture.component */
    "./src/app/profile/contrainers/profile-picture/profile-picture.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfilePictureComponent", function () {
      return _profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_2__["ProfilePictureComponent"];
    });
    /* harmony import */


    var _profile_address_profile_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-address/profile-address.component */
    "./src/app/profile/contrainers/profile-address/profile-address.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileAddressComponent", function () {
      return _profile_address_profile_address_component__WEBPACK_IMPORTED_MODULE_3__["ProfileAddressComponent"];
    });
    /* harmony import */


    var _profile_security_profile_security_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-security/profile-security.component */
    "./src/app/profile/contrainers/profile-security/profile-security.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileSecurityComponent", function () {
      return _profile_security_profile_security_component__WEBPACK_IMPORTED_MODULE_4__["ProfileSecurityComponent"];
    });
    /***/

  },

  /***/
  "./src/app/profile/contrainers/profile-address/profile-address.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/profile/contrainers/profile-address/profile-address.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfileAddressComponent */

  /***/
  function srcAppProfileContrainersProfileAddressProfileAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAddressComponent", function () {
      return ProfileAddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileAddressComponent = /*@__PURE__*/function () {
      var ProfileAddressComponent = /*#__PURE__*/function () {
        function ProfileAddressComponent() {
          _classCallCheck(this, ProfileAddressComponent);
        }

        _createClass(ProfileAddressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileAddressComponent;
      }();

      ProfileAddressComponent.ɵfac = function ProfileAddressComponent_Factory(t) {
        return new (t || ProfileAddressComponent)();
      };

      ProfileAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileAddressComponent,
        selectors: [["app-profile-address"]],
        decls: 2,
        vars: 0,
        template: function ProfileAddressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-address works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [""]
      });
      return ProfileAddressComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/contrainers/profile-picture/profile-picture.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/profile/contrainers/profile-picture/profile-picture.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfilePictureComponent */

  /***/
  function srcAppProfileContrainersProfilePictureProfilePictureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePictureComponent", function () {
      return ProfilePictureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfilePictureComponent = /*@__PURE__*/function () {
      var ProfilePictureComponent = /*#__PURE__*/function () {
        function ProfilePictureComponent() {
          _classCallCheck(this, ProfilePictureComponent);
        }

        _createClass(ProfilePictureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfilePictureComponent;
      }();

      ProfilePictureComponent.ɵfac = function ProfilePictureComponent_Factory(t) {
        return new (t || ProfilePictureComponent)();
      };

      ProfilePictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfilePictureComponent,
        selectors: [["app-profile-picture"]],
        decls: 2,
        vars: 0,
        template: function ProfilePictureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-picture works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [""]
      });
      return ProfilePictureComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/contrainers/profile-security/profile-security.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/profile/contrainers/profile-security/profile-security.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProfileSecurityComponent */

  /***/
  function srcAppProfileContrainersProfileSecurityProfileSecurityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSecurityComponent", function () {
      return ProfileSecurityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileSecurityComponent = /*@__PURE__*/function () {
      var ProfileSecurityComponent = /*#__PURE__*/function () {
        function ProfileSecurityComponent() {
          _classCallCheck(this, ProfileSecurityComponent);
        }

        _createClass(ProfileSecurityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileSecurityComponent;
      }();

      ProfileSecurityComponent.ɵfac = function ProfileSecurityComponent_Factory(t) {
        return new (t || ProfileSecurityComponent)();
      };

      ProfileSecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileSecurityComponent,
        selectors: [["app-profile-security"]],
        decls: 2,
        vars: 0,
        template: function ProfileSecurityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-security works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [""]
      });
      return ProfileSecurityComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/contrainers/setup-profile/setup-profile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/profile/contrainers/setup-profile/setup-profile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SetupProfileComponent */

  /***/
  function srcAppProfileContrainersSetupProfileSetupProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupProfileComponent", function () {
      return SetupProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services */
    "./src/app/profile/services/index.ts");
    /* harmony import */


    var _components_profile_stepper_profile_stepper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/profile-stepper/profile-stepper.component */
    "./src/app/profile/components/profile-stepper/profile-stepper.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SetupProfileComponent = /*@__PURE__*/function () {
      var SetupProfileComponent = /*#__PURE__*/function () {
        function SetupProfileComponent(profileFacadeService) {
          _classCallCheck(this, SetupProfileComponent);

          this.profileFacadeService = profileFacadeService;
          this.steps = this.profileFacadeService.getSteps();
          this.activeStepId = 1;
          this.successStepIds = [];
          this.isNextDisabled = true;
        }

        _createClass(SetupProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SetupProfileComponent;
      }();

      SetupProfileComponent.ɵfac = function SetupProfileComponent_Factory(t) {
        return new (t || SetupProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ProfileFacadeService"]));
      };

      SetupProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SetupProfileComponent,
        selectors: [["app-setup-profile"]],
        decls: 5,
        vars: 4,
        consts: [[1, "block-m", "auth"], [1, "text-xl", "text-center", "mb-l"], [3, "steps", "successStepIds", "activeStepId", "isNextDisabled"]],
        template: function SetupProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Set Up Your Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-profile-stepper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps)("successStepIds", ctx.successStepIds)("activeStepId", ctx.activeStepId)("isNextDisabled", ctx.isNextDisabled);
          }
        },
        directives: [_components_profile_stepper_profile_stepper_component__WEBPACK_IMPORTED_MODULE_2__["ProfileStepperComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}"]
      });
      return SetupProfileComponent;
    }();
    /***/

  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
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


    var _contrainers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contrainers */
    "./src/app/profile/contrainers/index.ts");

    var routes = [{
      path: '',
      component: _contrainers__WEBPACK_IMPORTED_MODULE_2__["SetupProfileComponent"],
      children: [{
        path: 'bioDetails',
        component: _contrainers__WEBPACK_IMPORTED_MODULE_2__["BioDetailsComponent"]
      }, {
        path: 'picture',
        component: _contrainers__WEBPACK_IMPORTED_MODULE_2__["ProfilePictureComponent"]
      }, {
        path: 'address',
        component: _contrainers__WEBPACK_IMPORTED_MODULE_2__["ProfileAddressComponent"]
      }, {
        path: 'security',
        component: _contrainers__WEBPACK_IMPORTED_MODULE_2__["ProfileSecurityComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bioDetails'
      }]
    }];

    var ProfileRoutingModule = /*@__PURE__*/function () {
      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileRoutingModule_Factory(t) {
          return new (t || ProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return ProfileRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _dictionary_dictionary_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dictionary/dictionary.module */
    "./src/app/dictionary/dictionary.module.ts");
    /* harmony import */


    var _contrainers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contrainers */
    "./src/app/profile/contrainers/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/app/profile/components/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services */
    "./src/app/profile/services/index.ts");

    var ProfileModule = /*@__PURE__*/function () {
      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        providers: [_services__WEBPACK_IMPORTED_MODULE_7__["ProfileFacadeService"], _services__WEBPACK_IMPORTED_MODULE_7__["ProfileFormBuilderService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], _dictionary_dictionary_module__WEBPACK_IMPORTED_MODULE_4__["DictionaryModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
      });
      return ProfileModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_contrainers__WEBPACK_IMPORTED_MODULE_5__["SetupProfileComponent"], _contrainers__WEBPACK_IMPORTED_MODULE_5__["BioDetailsComponent"], _contrainers__WEBPACK_IMPORTED_MODULE_5__["ProfilePictureComponent"], _contrainers__WEBPACK_IMPORTED_MODULE_5__["ProfileAddressComponent"], _contrainers__WEBPACK_IMPORTED_MODULE_5__["ProfileSecurityComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ProfileStepperComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], _dictionary_dictionary_module__WEBPACK_IMPORTED_MODULE_4__["DictionaryModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/services/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/services/index.ts ***!
    \*******************************************/

  /*! exports provided: ProfileFacadeService, ProfileFormBuilderService, UserBioDetailsControlNames */

  /***/
  function srcAppProfileServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _profile_facade_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile-facade.service */
    "./src/app/profile/services/profile-facade.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileFacadeService", function () {
      return _profile_facade_service__WEBPACK_IMPORTED_MODULE_0__["ProfileFacadeService"];
    });
    /* harmony import */


    var _profile_form_builder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-form-builder.service */
    "./src/app/profile/services/profile-form-builder.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileFormBuilderService", function () {
      return _profile_form_builder_service__WEBPACK_IMPORTED_MODULE_1__["ProfileFormBuilderService"];
    });
    /* harmony import */


    var _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-bio-details-control-names */
    "./src/app/profile/services/user-bio-details-control-names.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserBioDetailsControlNames", function () {
      return _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__["UserBioDetailsControlNames"];
    });
    /***/

  },

  /***/
  "./src/app/profile/services/profile-facade.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/services/profile-facade.service.ts ***!
    \************************************************************/

  /*! exports provided: ProfileFacadeService */

  /***/
  function srcAppProfileServicesProfileFacadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFacadeService", function () {
      return ProfileFacadeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileFacadeService = /*@__PURE__*/function () {
      var ProfileFacadeService = /*#__PURE__*/function () {
        function ProfileFacadeService() {
          _classCallCheck(this, ProfileFacadeService);
        }

        _createClass(ProfileFacadeService, [{
          key: "getSteps",
          value: function getSteps() {
            return [{
              id: 1,
              title: '1',
              subTitle: 'Bio Details'
            }, {
              id: 2,
              title: '2',
              subTitle: 'Profile Picture'
            }, {
              id: 3,
              title: '3',
              subTitle: 'Address'
            }, {
              id: 4,
              title: '4',
              subTitle: 'Security'
            }];
          }
        }]);

        return ProfileFacadeService;
      }();

      ProfileFacadeService.ɵfac = function ProfileFacadeService_Factory(t) {
        return new (t || ProfileFacadeService)();
      };

      ProfileFacadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileFacadeService,
        factory: ProfileFacadeService.ɵfac,
        providedIn: 'root'
      });
      return ProfileFacadeService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/services/profile-form-builder.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/profile/services/profile-form-builder.service.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileFormBuilderService */

  /***/
  function srcAppProfileServicesProfileFormBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFormBuilderService", function () {
      return ProfileFormBuilderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-bio-details-control-names */
    "./src/app/profile/services/user-bio-details-control-names.ts");

    var ProfileFormBuilderService = /*@__PURE__*/function () {
      var ProfileFormBuilderService = /*#__PURE__*/function () {
        function ProfileFormBuilderService(fb) {
          _classCallCheck(this, ProfileFormBuilderService);

          this.fb = fb;
        }

        _createClass(ProfileFormBuilderService, [{
          key: "getBioDetailsForm",
          value: function getBioDetailsForm() {
            var _this$fb$group;

            return this.fb.group((_this$fb$group = {}, _defineProperty(_this$fb$group, _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__["UserBioDetailsControlNames"].FirstName, ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])]), _defineProperty(_this$fb$group, _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__["UserBioDetailsControlNames"].LastName, ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])]), _defineProperty(_this$fb$group, _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__["UserBioDetailsControlNames"].PhoneNumber, ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])]), _defineProperty(_this$fb$group, _user_bio_details_control_names__WEBPACK_IMPORTED_MODULE_2__["UserBioDetailsControlNames"].ScreenName, ['']), _this$fb$group));
          }
        }]);

        return ProfileFormBuilderService;
      }();

      ProfileFormBuilderService.ɵfac = function ProfileFormBuilderService_Factory(t) {
        return new (t || ProfileFormBuilderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ProfileFormBuilderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileFormBuilderService,
        factory: ProfileFormBuilderService.ɵfac
      });
      return ProfileFormBuilderService;
    }();
    /***/

  },

  /***/
  "./src/app/profile/services/user-bio-details-control-names.ts":
  /*!********************************************************************!*\
    !*** ./src/app/profile/services/user-bio-details-control-names.ts ***!
    \********************************************************************/

  /*! exports provided: UserBioDetailsControlNames */

  /***/
  function srcAppProfileServicesUserBioDetailsControlNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBioDetailsControlNames", function () {
      return UserBioDetailsControlNames;
    });

    var UserBioDetailsControlNames = /*@__PURE__*/function (UserBioDetailsControlNames) {
      UserBioDetailsControlNames["FirstName"] = "firstName";
      UserBioDetailsControlNames["LastName"] = "lastName";
      UserBioDetailsControlNames["PhoneNumber"] = "phoneNumber";
      UserBioDetailsControlNames["ScreenName"] = "screenName";
      return UserBioDetailsControlNames;
    }({});
    /***/

  },

  /***/
  "./src/app/shared/dto/index.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/dto/index.ts ***!
    \*************************************/

  /*! exports provided: LoadingState */

  /***/
  function srcAppSharedDtoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _loading_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./loading-state.enum */
    "./src/app/shared/dto/loading-state.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadingState", function () {
      return _loading_state_enum__WEBPACK_IMPORTED_MODULE_0__["LoadingState"];
    });
    /***/

  }
}]);