import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 从HTML加载一些数据
if (document.getElementById("editorInitialValue")) {
  Vue.prototype.editorInitialValue = document.getElementById("editorInitialValue").value;
  // 删除这个节点
  document.getElementById("editorInitialValue").outerHTML = "";
} else {
  Vue.prototype.editorInitialValue = "";
}
Vue.prototype.editorOptions =
  (window.appConfig && window.appConfig.editorOptions) || {};

new Vue({
  render: h => h(App),
}).$mount('#ace-editor-app')
