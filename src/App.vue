<template>
  <vue-ace-editor
    id="editor"
    @input="editorChange"
    :value="editorInitialValue"
    :options="editorOptions"
  />
</template>

<script>
	import VueAceEditor from './components/VueAceEditor.vue';

	export default {
		name: "App",
		components: {VueAceEditor},
		methods: {
			editorChange: window.appConfig && window.appConfig.editorCallback
		}
	}
</script>
