(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["element-form-dy"] = factory();
	else
		root["element-form-dy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);




var getPrefix = function getPrefix(tag) {
  var elementMap = {
    'form': 'el-form',
    'form-item': 'el-form-item',
    'input': 'el-input',
    'select': 'el-select',
    'option': 'el-option',
    'checkbox': 'el-checkbox',
    'checkbox-group': 'el-checkbox-group',
    'date-picker': 'el-date-picker',
    'time-picker': 'el-time-picker',
    'radio': 'el-radio',
    'radio-group': 'el-radio-group',
    'switch': 'el-switch',
    'slider': 'el-slider',
    'button': 'el-button',
    'row': 'el-row',
    'col': 'el-col',
    'input-number': 'el-input-number',
    'cascader': 'el-cascader'
  };

  return elementMap[tag];
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'element-form-dy',
  props: {
    // 是否启用 grid 布局
    grid: {
      type: [Array, Number]
    },
    // grid 间距
    gutter: {
      type: Number
    },
    // formItem 项
    formList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否显示整个控制按钮
    notCtrl: {
      type: Boolean,
      default: false
    },
    // 是否开启 input 标签默认
    enterSubmit: {
      type: Boolean,
      default: false
    },
    // 默认标签宽度
    'label-width': {
      type: Number,
      default: 100
    },
    // 默认内容宽度
    'content-width': {
      type: [Number, String],
      default: 240
    },
    // submit 按钮文本
    submitText: {
      type: String,
      default: '提交'
    },
    // 重置按钮文本
    resetText: {
      type: String,
      default: '重置'
    },
    // 是否拥有 提交 按钮
    hasSubmitBtn: {
      type: Boolean,
      default: true
    },
    // 是否拥有 重置 按钮
    hasResetBtn: {
      type: Boolean,
      default: true
    },
    // 原生 form 标签上的 props
    options: {
      type: Object
    },
    // 开启全局 clearable
    clearable: {
      type: Boolean,
      default: true
    },
    // 文本框默认字符个数
    maxlength: {
      type: [Number, String],
      default: 20
    },
    // 多行文本框默认字符个数
    textareaMaxlength: {
      type: Number,
      default: 256
    },
    // 是否全局 disabled
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      form: this.initForm()
    };
  },
  render: function render(h) {
    return h(getPrefix('form'), {
      props: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        model: this.form,
        rules: this.rules,
        'label-width': this['labelWidth'] + 'px'
      }, this.options),
      ref: 'form',
      nativeOn: {
        submit: function submit(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, [this.$slots.prepend, this.renderFormList(h), !this.notCtrl && this.renderSubmit(h), this.$slots.default]);
  },

  watch: {
    form: {
      handler: function handler(v) {
        this.$emit('updateForm', v, this.getRefs());
      },

      deep: true
    }
  },
  computed: {
    rules: function rules() {
      var rules = {};
      this.formList.forEach(function (item) {
        if (item.rule !== undefined) {
          rules[item.key] = item.rule;
        }
      });
      return rules;
    },
    gridNum: function gridNum() {
      return this.grid;
    }
  },
  methods: {
    // 默认值
    initForm: function initForm(isExclude) {
      var _this2 = this;

      var form = {};
      var map = {
        'input': '',
        'select': null,
        'checkbox': false,
        'checkbox-group': [],
        'date': '',
        'dates': '',
        'week': '',
        'month': '',
        'year': '',
        'monthrange': [],
        'datetime': '',
        'daterange': [],
        'datetimerange': [],
        'time': '',
        'radio': false,
        'radio-group': '',
        'slider': 0,
        'switch': false,
        'input-number': 0,
        'cascader': []
      };
      this.formList.forEach(function (item) {
        var defaultValue = '';
        defaultValue = item.defaultValue !== undefined ? item.defaultValue : map[item.type];
        if (item.type === 'select' && item.props && item.props.multiple) {
          defaultValue = [];
        }
        if (item.key) {
          var disabled = true;
          if (typeof item.disabled == 'function') {
            disabled = item.disabled(_this2.form, item);
          } else {
            disabled = item.disabled;
          }
          form[item.key] = isExclude && disabled ? form[item.key] : defaultValue;
        }
        if (item.connect && Array.isArray(item.connect)) {
          for (var i = 0; i < item.connect.length; i++) {
            var it = item.connect[i];
            form[it.key] = it.value;
          }
        }
      });
      return form;
    },
    getHypeScript: function getHypeScript() {
      return this.$parent.$createElement;
    },
    renderFormList: function renderFormList(h) {
      var list = [];
      var grid = this.grid;
      // 处理 grid 为不同值时
      if (typeof grid === 'number') {
        list = this.getFormListByNumber(h);
      } else if (Array.isArray(grid)) {
        if (grid.every(function (item) {
          return !Array.isArray(item);
        })) {
          list = this.getFormListByArray(h);
        } else {
          list = this.getFormListByGrid(h);
        }
      } else {
        list = this.getFormList(h);
      }
      return list;
    },
    getFormList: function getFormList(h) {
      var _this3 = this;

      return this.formList.map(function (item) {
        return _this3.getFormItem(h, item, _this3.getContent(h, item));
      });
    },

    // 当 grid 为数字时
    getFormListByNumber: function getFormListByNumber(h) {
      var list = [];
      // 过滤 grid
      var grid = ~~Math.abs(this.grid);
      if (grid < 1) grid = 1;
      var _this = this;

      var formList = this.formList.filter(function (children) {
        var isShow = true;
        var hasRow = true;
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children);
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true;
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children);
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true;
        }
        return !(!isShow && !hasRow);
      });
      for (var i = 0; i < formList.length; i += grid) {
        var childrenList = [];
        // 获取当前分成几列 grid 为 number 时
        for (var j = 0; j < grid && i + j < formList.length; j++) {
          var children = formList[i + j];
          if (!children) break;
          var childrenItem = this.getFormItem(h, children, this.getContent(h, children));
          var childrenParts = h(getPrefix('col'), {
            props: {
              span: 24 / grid
            }
          }, [childrenItem]);
          childrenList.push(childrenParts);
        }
        var row = this.getRow(h, childrenList);
        list.push(row);
      }
      return list;
    },

    // 当 grid 为一维数组时
    getFormListByArray: function getFormListByArray(h) {
      var list = [];
      var gridIndex = 0;
      var _this = this;
      var formList = this.formList.filter(function (children) {
        var isShow = true;
        var hasRow = true;
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children);
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true;
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children);
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true;
        }
        return !(!isShow && !hasRow);
      });
      for (var i = 0; i < formList.length;) {
        var childrenList = [];
        var grid = this.grid[gridIndex];
        for (var j = 0; j < grid; j++) {
          var children = formList[i + j];
          if (!children) break;
          var childrenItem = this.getFormItem(h, children, this.getContent(h, children));
          var childrenParts = h(getPrefix('col'), {
            props: {
              span: 24 / grid
            }
          }, [childrenItem]);
          childrenList.push(childrenParts);
        }
        var row = this.getRow(h, childrenList);
        list.push(row);
        gridIndex += 1;
        i += grid;
      }
      return list;
    },

    // 当 grid 为二维数组
    getFormListByGrid: function getFormListByGrid(h) {
      var list = [];
      var gridIndex = 0;
      var _this = this;
      var formList = this.formList.filter(function (children) {
        var isShow = true;
        var hasRow = true;
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children);
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true;
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children);
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true;
        }
        return !(!isShow && !hasRow);
      });
      for (var i = 0; i < formList.length;) {
        var childrenList = [];
        var grid = this.grid[gridIndex];
        if (!grid) grid = [1];
        for (var j = 0; j < grid.length; j++) {
          var children = formList[i + j];
          if (!children) break;
          var childrenItem = this.getFormItem(h, children, this.getContent(h, children));
          var childrenParts = h(getPrefix('col'), {
            props: {
              span: grid[j]
            }
          }, [childrenItem]);
          childrenList.push(childrenParts);
        }
        var row = this.getRow(h, childrenList);
        list.push(row);
        gridIndex += 1;
        i += grid.length;
      }
      return list;
    },
    getRow: function getRow(h, childrenList) {
      return h(getPrefix('row'), {
        props: {
          gutter: this.gutter
        }
      }, childrenList);
    },
    getContent: function getContent(h, item) {
      var content = void 0;
      switch (item.type) {
        case 'input':
          content = this.renderInput(h, item);
          break;
        case 'select':
          content = this.renderSelect(h, item);
          break;
        case 'checkbox':
          content = this.renderCheckbox(h, item);
          break;
        case 'checkbox-group':
          content = this.renderCheckboxGroup(h, item);
          break;
        case 'date':
        case 'dates':
        case 'week':
        case 'month':
        case 'year':
        case 'datetime':
        case 'daterange':
        case 'datetimerange':
        case 'monthrange':
          content = this.renderDatePicker(h, item);
          break;
        case 'time':
          content = this.renderTimePicker(h, item);
          break;
        case 'radio':
          content = this.renderRadio(h, item);
          break;
        case 'radio-group':
          content = this.renderRadioGroup(h, item);
          break;
        case 'switch':
          content = this.renderSwitch(h, item);
          break;
        case 'slider':
          content = this.renderSlider(h, item);
          break;
        case 'input-number':
          content = this.renderInputNumber(h, item);
          break;
        case 'cascader':
          content = this.renderCascader(h, item);
          break;
        default:
          if (typeof item.renderContent === 'function') {
            content = item.renderContent(this.getHypeScript(), item, this.form);
          }
          break;
      }
      return content;
    },
    getFormItem: function getFormItem(h, item, content) {
      if (item.isShow === false) return;else if (typeof item.isShow === 'function') {
        if (item.isShow(this.form, item) === false) {
          return;
        }
      }
      if (typeof item.render === 'function') {
        return item.render(this.getHypeScript(), item, this.form);
      } else {
        var settings = {
          props: {
            prop: item.key
          }
        };
        return h(getPrefix('form-item'), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(settings, item.settings), [this.renderTitle(h, item, this.form), content]);
      }
    },

    // 渲染 title
    renderTitle: function renderTitle(h, item) {
      if (item.title) {
        return h(
          'span',
          { slot: 'label' },
          [item.required === true ? h(
            'span',
            { style: 'color: font' },
            ['*']
          ) : '', typeof item.renderTitle === 'function' ? h('span', [item.renderTitle(h, item, this.form)]) : h('span', [item.title])]
        );
      } else {
        return '';
      }
    },

    // 渲染提交 按钮
    renderSubmit: function renderSubmit(h) {
      var btns = [];
      if (this.hasSubmitBtn) {
        btns.push(h(getPrefix('button'), {
          props: {
            type: 'primary'
          },
          on: {
            click: this.submit
          }
        }, this.submitText));
      }
      if (this.hasResetBtn) {
        btns.push(h(getPrefix('button'), {
          style: {
            'margin-left': '10px'
          },
          on: {
            click: this.reset
          }
        }, this.resetText));
      }

      return h(getPrefix('form-item'), btns);
    },

    // 渲染 input
    renderInput: function renderInput(h, item) {
      var _this4 = this;

      var props = item.props || {};
      var attrs = item.attrs || {};
      // 让 element-ui 在 props 里也可以设置 placeholder
      if (props.placeholder) {
        attrs.placeholder = props.placeholder;
      }

      // 让 element-ui 在 props 里也可以设置 maxlength
      if (props.type !== 'textarea') {
        attrs.maxlength = +props.maxlength || +this.maxlength;
      } else {
        // textarea 长度
        attrs.maxlength = +props.maxlength || +this.textareaMaxlength;
      }

      item.attrs = attrs;

      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('input'),
        props: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          clearable: this.clearable
        }, props),
        nativeOn: {
          keydown: function keydown(e) {
            if (e.keyCode === 13 && _this4.enterSubmit && props.type !== 'textarea') {
              _this4.submit();
            }
          }
        }
      };
      return this.generateTag(tag);
    },

    // 渲染 select
    renderSelect: function renderSelect(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('select'),
        props: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          clearable: this.clearable
        }, item.props || {}),
        children: item.options.map(function (option) {
          return h(getPrefix('option'), {
            props: {
              label: option.text,
              value: option.value,
              disabled: option.disabled
            }
          }, [typeof item.renderOption === 'function' ? item.renderOption(h, option, item) : item.text]);
        })
      };
      return this.generateTag(tag);
    },

    // 渲染 单个checkbox
    renderCheckbox: function renderCheckbox(h, item) {
      var props = item.props || {};
      if (item.border) {
        props.border = true;
      }
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('checkbox'),
        props: props,
        children: item.text
      };
      return this.generateTag(tag);
    },

    // 渲染 checkbox group
    renderCheckboxGroup: function renderCheckboxGroup(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('checkbox-group'),
        props: item.props || {},
        children: item.options.map(function (option) {
          return h(getPrefix('checkbox'), {
            props: {
              border: item.border,
              label: option.value,
              disabled: option.disabled
            }
          }, option.text);
        })
      };
      return this.generateTag(tag);
    },

    // 渲染 datepicker
    renderDatePicker: function renderDatePicker(h, item) {
      // 处理 datetimerange 可能宽度不够的问题
      if (item.type.indexOf('range') !== -1) {
        item.width = item.width || 360;
      }
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('date-picker'),
        props: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          clearable: this.clearable,
          type: item.type
        }, item.props || {})
      };
      return this.generateTag(tag);
    },
    renderTimePicker: function renderTimePicker(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('time-picker'),
        props: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          clearable: this.clearable,
          type: item.type
        }, item.props || {})
      };
      return this.generateTag(tag);
    },

    // 渲染 radio
    renderRadio: function renderRadio(h, item) {
      var props = item.props || {};
      if (item.border) {
        props.border = true;
      }
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('radio'),
        props: props,
        children: item.text
      };
      return this.generateTag(tag);
    },

    // 渲染 radio group
    renderRadioGroup: function renderRadioGroup(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('radio-group'),
        props: item.props || {},
        children: item.options.map(function (option) {
          return h(getPrefix('radio'), {
            props: {
              border: item.border,
              label: option.value,
              disabled: option.disabled
            }
          }, option.text);
        })
      };
      return this.generateTag(tag);
    },

    // 渲染 switch
    renderSwitch: function renderSwitch(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('switch'),
        props: item.props || {}
      };
      return this.generateTag(tag);
    },

    // 渲染 slider
    renderSlider: function renderSlider(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('slider'),
        props: item.props || {}
      };
      return this.generateTag(tag);
    },

    // 渲染 slider
    renderInputNumber: function renderInputNumber(h, item) {
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('input-number'),
        props: item.props || {}
      };
      return this.generateTag(tag);
    },

    // 渲染 cascader
    renderCascader: function renderCascader(h, item) {
      var props = item.props || {};
      var tag = {
        h: h,
        item: item,
        tagName: getPrefix('cascader')
      };
      props.options = this.getCascaderOptions(item.options);
      tag.props = props;
      return this.generateTag(tag);
    },

    // 转换 cascader options
    getCascaderOptions: function getCascaderOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var list = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(options);
      list = list.replace(/"text":/g, '"label":');
      return JSON.parse(list);
    },

    // 生产 tag
    generateTag: function generateTag(_ref) {
      var _this5 = this;

      var h = _ref.h,
          item = _ref.item,
          tagName = _ref.tagName,
          props = _ref.props,
          children = _ref.children,
          _ref$on = _ref.on,
          on = _ref$on === undefined ? {} : _ref$on,
          _ref$nativeOn = _ref.nativeOn,
          nativeOn = _ref$nativeOn === undefined ? {} : _ref$nativeOn;

      var _this = this;
      var disabled = true;
      if (typeof item.disabled == 'function') {
        disabled = item.disabled(_this.form, children);
      } else {
        disabled = item.disabled;
      }
      var currProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        value: this.form[item.key],
        min: 0,
        max: 9999999
      }, props, {
        disabled: this.disabled || disabled
      });
      var attrs = item.attrs || {};
      var width = null;

      var itemOn = item.on || {};
      var itemNativeOn = item.nativeOn || {};

      // 忽略这些标签的宽度设置
      var ignoreMap = {
        'switch': true,
        'checkbox': true,
        'checkbox-group': true,
        'radio': true,
        'radio-group': true,
        'input-number': true
      };

      if (!ignoreMap[item.type]) {
        var w = item.width || this['contentWidth'];
        if (typeof w === 'string' && (w.indexOf('%') >= 0 || w === 'auto')) {
          width = w;
        } else {
          width = w + 'px';
        }
      }

      var obj = {
        props: currProps,
        attrs: attrs,
        key: item.key,
        style: {
          width: width
        },
        on: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, itemOn, {
          input: function input(value) {
            value = _this5.formatDateValue(value, item);
            var refObj = {};
            if (item.ref) {
              refObj[item.ref] = _this.$refs[item.ref];
            }
            _this5.form[item.key] = value;
            _this5.emitInput(value, item, refObj, _this.$refs);
          }
        }, on),
        nativeOn: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, itemNativeOn, nativeOn)
      };
      if (item.hasOwnProperty('ref')) {
        obj.ref = item.ref;
      }
      return h(tagName, obj, children);
    },

    // 格式化日期返回，避免 null 的出现
    formatDateValue: function formatDateValue(value, item) {
      switch (item.type) {
        case 'date':
        case 'datetime':
          if (!value) {
            value = '';
          }
          break;
        case 'daterange':
        case 'datetimerange':
          if (!value) {
            value = ['', ''];
          }
          break;
      }
      return value;
    },

    // 触发 item onInput 事件
    emitInput: function emitInput(value, item, refObj, allRef) {
      if (typeof item.onInput === 'function') {
        item.onInput(value, item, this.form, refObj, allRef);
      }
    },

    // 提交事件
    submit: function submit() {
      var _this6 = this;

      this.$refs.form.validate(function (valid) {
        _this6.$emit('submit', _this6.getForm(), valid, _this6.$refs);
      });
    },

    // 清空 form 表单
    reset: function reset(isExclude) {
      this.clear();
      this.form = this.initForm(isExclude);
      this.$refs.form.resetFields();
    },

    // 清空验证
    clear: function clear(props) {
      if (props) {
        this.$refs.form.clearValidate && this.$refs.form.clearValidate(props);
      } else {
        this.$refs.form.clearValidate && this.$refs.form.clearValidate();
      }
    },
    // 根据 key 获取 value
    getFormBykey: function getFormBykey(key) {
      return this.form[key];
    },

    // 获取整个 form
    getForm: function getForm() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, this.form);
    },

    // 设值
    setForm: function setForm(form) {
      for (var key in form) {
        this.form[key] = form[key];
      }
    },
    validateField: function validateField(props, callback) {
      this.$refs.form.validateField(props, callback);
    },
    getRefs: function getRefs() {
      return this.$refs;
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(9);
var defined = __webpack_require__(10);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_element_form_dy__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__packages_element_form_dy__["a" /* default */]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_form_dy__ = __webpack_require__(14);


const install = (Vue) => {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__element_form_dy__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__element_form_dy__["a" /* default */])
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__element_form_dy__["a" /* default */]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_element_form_dy_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
var disposed = false
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_element_form_dy_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages/element-form-dy/element-form-dy.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-491f16b7", Component.options)
  } else {
    hotAPI.reload("data-v-491f16b7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(30) });


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(23);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(26);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(1);
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(43);
var toObject = __webpack_require__(44);
var IObject = __webpack_require__(9);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(34)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(36);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(11);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(11);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(40);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(39) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ })
/******/ ]);
});