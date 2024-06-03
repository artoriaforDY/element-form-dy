<script>
const getPrefix = (tag) => {
  let elementMap = {
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
  }

  return elementMap[tag]
}

export default {
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
      default: () => []
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
  data() {
    return {
      form: this.initForm()
    }
  },
  render(h) {
    return h(getPrefix('form'), {
      props: {
        model: this.form,
        rules: this.rules,
        'label-width': this['labelWidth'] + 'px',
        ...this.options
      },
      ref: 'form',
      nativeOn: {
        submit(e) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }, [
      this.$slots.prepend,
      this.renderFormList(h),
      !this.notCtrl && this.renderSubmit(h),
      this.$slots.default
    ])
  },
  computed: {
    rules() {
      let rules = {}
      this.formList.forEach(item => {
        if (item.rule !== undefined) {
          rules[item.key] = item.rule
        }
      })
      return rules
    },
    gridNum() {
      return this.grid
    }
  },
  methods: {
    // 默认值
    initForm() {
      let form = {}
      let map = {
        'input': '',
        'select': null,
        'checkbox': false,
        'checkbox-group': [],
        'date': new Date(),
        'datetime': new Date(),
        'daterange': [],
        'datetimerange': [],
        'time': '',
        'radio': false,
        'radio-group': '',
        'slider': 0,
        'switch': false,
        'input-number': 0,
        'cascader': []
      }
      this.formList.forEach(item => {
        let defaultValue = ''
        defaultValue = item.defaultValue !== undefined ? item.defaultValue : map[item.type]
        if (item.key) {
          form[item.key] = defaultValue
        }
      })
      return form
    },
    getHypeScript () {
      return this.$parent.$createElement
    },
    renderFormList(h) {
      let list = []
      let grid = this.grid
      // 处理 grid 为不同值时
      if (typeof grid === 'number') {
        list = this.getFormListByNumber(h)
      } else if (Array.isArray(grid)) {
        if (grid.every(item => !Array.isArray(item))) {
          list = this.getFormListByArray(h)
        } else {
          list = this.getFormListByGrid(h)
        }
      } else {
        list = this.getFormList(h)
      }
      return list
    },
    getFormList(h) {
      return this.formList.map(item => {
        return this.getFormItem(h, item, this.getContent(h, item))
      })
    },
    // 当 grid 为数字时
    getFormListByNumber(h) {
      let list = []
      // 过滤 grid
      let grid = ~~Math.abs(this.grid)
      if (grid < 1) grid = 1
      let _this = this

      let formList = this.formList.filter(children => {
        let isShow = true
        let hasRow = true
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children)
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children)
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true
        }
        return !(!isShow && !hasRow)
      })
      for (let i = 0; i < formList.length; i += grid) {
        let childrenList = []
        // 获取当前分成几列 grid 为 number 时
        for (let j = 0; j < grid && i + j < formList.length; j++) {
          let children = formList[i + j]
          if (!children) break
          let childrenItem = this.getFormItem(h, children, this.getContent(h, children))
          let childrenParts = h(getPrefix('col'), {
            props: {
              span: 24 / grid
            }
          }, [
            childrenItem
          ])
          childrenList.push(childrenParts)
        }
        let row = this.getRow(h, childrenList)
        list.push(row)
      }
      return list
    },
    // 当 grid 为一维数组时
    getFormListByArray(h) {
      let list = []
      let gridIndex = 0
      let _this = this
      let formList = this.formList.filter(children => {
        let isShow = true
        let hasRow = true
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children)
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children)
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true
        }
        return !(!isShow && !hasRow)
      })
      for (let i = 0; i < formList.length;) {
        let childrenList = []
        let grid = this.grid[gridIndex]
        for (let j = 0; j < grid; j++) {
          let children = formList[i + j]
          if (!children) break
          let childrenItem = this.getFormItem(h, children, this.getContent(h, children))
          let childrenParts = h(getPrefix('col'), {
            props: {
              span: 24 / grid
            }
          }, [
            childrenItem
          ])
          childrenList.push(childrenParts)
        }
        let row = this.getRow(h, childrenList)
        list.push(row)
        gridIndex += 1
        i += grid
      }
      return list
    },
    // 当 grid 为二维数组
    getFormListByGrid(h) {
      let list = []
      let gridIndex = 0
      let _this = this
      let formList = this.formList.filter(children => {
        let isShow = true
        let hasRow = true
        if (typeof children.isShow == 'function') {
          isShow = children.isShow(_this.form, children)
        } else {
          isShow = children.hasOwnProperty('isShow') ? !!children.isShow : true
        }
        if (typeof children.hasRow == 'function') {
          hasRow = children.hasRow(_this.form, children)
        } else {
          hasRow = children.hasOwnProperty('hasRow') ? !!children.hasRow : true
        }
        return !(!isShow && !hasRow)
      })
      for (let i = 0; i < formList.length;) {
        let childrenList = []
        let grid = this.grid[gridIndex]
        if (!grid) grid = [1]
        for (let j = 0; j < grid.length; j++) {
          let children = formList[i + j]
          if (!children) break
          let childrenItem = this.getFormItem(h, children, this.getContent(h, children))
          let childrenParts = h(getPrefix('col'), {
            props: {
              span: grid[j]
            }
          }, [
            childrenItem
          ])
          childrenList.push(childrenParts)
        }
        let row = this.getRow(h, childrenList)
        list.push(row)
        gridIndex += 1
        i += grid.length
      }
      return list
    },
    getRow (h, childrenList) {
      return h(getPrefix('row'), {
        props: {
          gutter: this.gutter
        }
      }, childrenList)
    },
    getContent(h, item) {
      let content
      switch (item.type) {
        case 'input':
          content = this.renderInput(h, item)
          break
        case 'select':
          content = this.renderSelect(h, item)
          break
        case 'checkbox':
          content = this.renderCheckbox(h, item)
          break
        case 'checkbox-group':
          content = this.renderCheckboxGroup(h, item)
          break
        case 'date':
          content = this.renderDatePicker(h, item)
          break
        case 'datetime':
          content = this.renderDatePicker(h, item)
          break
        case 'daterange':
          content = this.renderDateRange(h, item)
          break
        case 'datetimerange':
          content = this.renderDateRange(h, item)
          break
        case 'time':
          content = this.renderTimePicker(h, item)
          break
        case 'radio':
          content = this.renderRadio(h, item)
          break
        case 'radio-group':
          content = this.renderRadioGroup(h, item)
          break
        case 'switch':
          content = this.renderSwitch(h, item)
          break
        case 'slider':
          content = this.renderSlider(h, item)
          break
        case 'input-number':
          content = this.renderInputNumber(h, item)
          break
        case 'cascader':
          content = this.renderCascader(h, item)
          break
        default:
          if (typeof item.renderContent === 'function') {
            content = item.renderContent(this.getHypeScript(), item, this.form)
          }
          break
      }
      return content
    },
    getFormItem(h, item, content) {
      if (item.isShow === false) return
      else if (typeof item.isShow === 'function') {
        if (item.isShow(this.form, item) === false) {
          return
        }
      }
      if (typeof item.render === 'function') {
        return item.render(this.getHypeScript(), item, this.form)
      } else {
        let settings = {
          props: {
            prop: item.key
          }
        }
        return h(getPrefix('form-item'), Object.assign(settings, item.settings), [
          this.renderTitle(h, item, this.form),
          content
        ])
      }
    },
    // 渲染 title
    renderTitle(h, item) {
      if(item.title){
        return <span slot="label">
          {
            item.required === true
              ? <span style="color: font">*</span>
              : ''
          }
          {
            typeof item.renderTitle === 'function'
              ? <span>{item.renderTitle(h, item, this.form)}</span>
              : <span>{item.title}</span>
          }
        </span>
      } else {
        return ''
      }
    },
    // 渲染提交 按钮
    renderSubmit(h) {
      let btns = []
      if (this.hasSubmitBtn) {
        btns.push(h(getPrefix('button'), {
          props: {
            type: 'primary'
          },
          on: {
            click: this.submit
          }
        }, this.submitText))
      }
      if (this.hasResetBtn) {
        btns.push(h(getPrefix('button'), {
          style: {
            'margin-left': '10px'
          },
          on: {
            click: this.reset
          }
        }, this.resetText))
      }

      return h(getPrefix('form-item'), btns)
    },
    // 渲染 input
    renderInput(h, item) {
      let props = item.props || {}
      let attrs = item.attrs || {}
      // 让 element-ui 在 props 里也可以设置 placeholder
      if (props.placeholder) {
        attrs.placeholder = props.placeholder
      }

      // 让 element-ui 在 props 里也可以设置 maxlength
      if (props.type !== 'textarea') {
        attrs.maxlength = +props.maxlength || +this.maxlength
      } else {
        // textarea 长度
        attrs.maxlength = +props.maxlength || +this.textareaMaxlength
      }

      item.attrs = attrs

      let tag = {
        h,
        item,
        tagName: getPrefix('input'),
        props: {
          clearable: this.clearable,
          ...props
        },
        nativeOn: {
          keydown: (e) => {
            if (e.keyCode === 13 && this.enterSubmit && props.type !== 'textarea') {
              this.submit()
            }
          }
        }
      }
      return this.generateTag(tag)
    },
    // 渲染 select
    renderSelect(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('select'),
        props: {
          clearable: this.clearable,
          ...(item.props || {})
        },
        children: item.options.map(option => {
          return h(getPrefix('option'), {
            props: {
              label: option.text,
              value: option.value,
              disabled: option.disabled
            }
          }, [
            typeof item.renderOption === 'function'
              ? item.renderOption(h, option, item)
              : item.text
          ])
        })
      }
      return this.generateTag(tag)
    },
    // 渲染 单个checkbox
    renderCheckbox(h, item) {
      let props = item.props || {}
      if (item.border) {
        props.border = true
      }
      let tag = {
        h,
        item,
        tagName: getPrefix('checkbox'),
        props,
        children: item.text
      }
      return this.generateTag(tag)
    },
    // 渲染 checkbox group
    renderCheckboxGroup(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('checkbox-group'),
        props: item.props || {},
        children: item.options.map(option => {
          return h(getPrefix('checkbox'), {
            props: {
              border: item.border,
              label: option.value,
              disabled: option.disabled
            }
          }, option.text)
        })
      }
      return this.generateTag(tag)
    },
    // 渲染 datepicker
    renderDatePicker(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('date-picker'),
        props: {
          clearable: this.clearable,
          type: item.type,
          ...(item.props || {})
        }
      }
      return this.generateTag(tag)
    },
    // 渲染范围的 daterange
    renderDateRange(h, item) {
      // 处理 datetimerange 可能宽度不够的问题
      if (item.type === 'datetimerange') {
        item.width = item.width || 360
      }
      let tag = {
        h,
        item,
        tagName: getPrefix('date-picker'),
        props: {
          clearable: this.clearable,
          type: item.type,
          ...(item.props || {})
        }
      }
      return this.generateTag(tag)
    },
    renderTimePicker(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('time-picker'),
        props: {
          clearable: this.clearable,
          type: item.type,
          ...(item.props || {})
        }
      }
      return this.generateTag(tag)
    },
    // 渲染 radio
    renderRadio(h, item) {
      let props = item.props || {}
      if (item.border) {
        props.border = true
      }
      let tag = {
        h,
        item,
        tagName: getPrefix('radio'),
        props,
        children: item.text
      }
      return this.generateTag(tag)
    },
    // 渲染 radio group
    renderRadioGroup(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('radio-group'),
        props: item.props || {},
        children: item.options.map(option => {
          return h(getPrefix('radio'), {
            props: {
              border: item.border,
              label: option.value,
              disabled: option.disabled
            }
          }, option.text)
        })
      }
      return this.generateTag(tag)
    },
    // 渲染 switch
    renderSwitch(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('switch'),
        props: item.props || {}
      }
      return this.generateTag(tag)
    },
    // 渲染 slider
    renderSlider(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('slider'),
        props: item.props || {}
      }
      return this.generateTag(tag)
    },
    // 渲染 slider
    renderInputNumber(h, item) {
      let tag = {
        h,
        item,
        tagName: getPrefix('input-number'),
        props: item.props || {}
      }
      return this.generateTag(tag)
    },
    // 渲染 cascader
    renderCascader(h, item) {
      let props = item.props || {}
      let tag = {
        h,
        item,
        tagName: getPrefix('cascader')
      }
      props.options = this.getCascaderOptions(item.options)
      tag.props = props
      return this.generateTag(tag)
    },
    // 转换 cascader options
    getCascaderOptions(options = []) {
      let list = JSON.stringify(options)
      list = list.replace(/"text":/g, '"label":')
      return JSON.parse(list)
    },
    // 生产 tag
    generateTag({h, item, tagName, props, children, on = {}, nativeOn = {}}) {
      var _this = this;
      let disabled = true
      if (typeof item.disabled == 'function') {
        disabled = item.disabled()
      } else {
        disabled = item.disabled
      }
      let currProps = {
        value: this.form[item.key],
        min: 0,
        max: 9999999,
        ...props,
        disabled: this.disabled || disabled
      }
      let attrs = item.attrs || {}
      let width = null

      let itemOn = item.on || {}
      let itemNativeOn = item.nativeOn || {}

      // 忽略这些标签的宽度设置
      let ignoreMap = {
        'switch': true,
        'checkbox': true,
        'checkbox-group': true,
        'radio': true,
        'radio-group': true,
        'input-number': true
      }

      if (!ignoreMap[item.type]) {
        let w = item.width || this['contentWidth']
        if (typeof w === 'string' && (w.indexOf('%') >= 0 || w === 'auto')) {
          width = w
        } else {
          width = w + 'px'
        }
      }

      let obj = {
        props: currProps,
        attrs,
        key: item.key,
        style: {
          width
        },
        on: {
          ...itemOn,
          input: (value) => {
            value = this.formatDateValue(value, item)
            let refObj = {}
            if(item.ref){
              refObj[item.ref] = _this.$refs[item.ref]
            }
            this.form[item.key] = value
            this.emitInput(value, item, refObj, _this.$refs)
          },
          ...on
        },
        nativeOn: {
          ...itemNativeOn,
          ...nativeOn
        }
      }
      if(item.hasOwnProperty('ref')){
        obj.ref = item.ref
      }
      return h(tagName, obj, children)
    },
    // 格式化日期返回，避免 null 的出现
    formatDateValue(value, item) {
      switch (item.type) {
        case 'date':
        case 'datetitme':
          if (!value) {
            value = ''
          }
          break
        case 'daterange':
        case 'datetimerange':
          if (!value) {
            value = ['', '']
          }
          break
      }
      return value
    },
    // 触发 item onInput 事件
    emitInput(value, item, refObj, allRef) {
      if (typeof item.onInput === 'function') {
        item.onInput(value, item, this.form, refObj, allRef)
      }
    },
    // 提交事件
    submit() {
      this.$refs.form.validate(valid => {
        this.$emit('submit', this.getForm(), valid, this.$refs)
      })
    },
    // 清空 form 表单
    reset() {
      this.clear()
      this.form = this.initForm()
      this.$refs.form.resetFields()
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
    getFormBykey(key) {
      return this.form[key]
    },
    // 获取整个 form
    getForm() {
      return {
        ...this.form
      }
    },
    // 设值
    setForm(form) {
      for (let key in form) {
        this.form[key] = form[key]
      }
    },
    validateField (props, callback) {
      this.$refs.form.validateField(props, callback)
    }
  }
}
</script>