<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>
 
<script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
require("script-loader!jsonlint");
export default {
	name: "JsonEditor",
	/* eslint-disable vue/require-prop-types */
	props: {
		value: {
			type: Object,
			default() {
				return {};
			},
		},
		// 是否只读，默认否
		readOnly: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			jsonEditor: null,
		};
	},
	watch: {
		value(value) {
			const editorValue = this.jsonEditor.getValue();
			if (value !== editorValue) {
				this.jsonEditor.setValue(JSON.stringify(this.value, null, 8));
			}
		},
 
	},
	mounted() {
		this.initJsonEditor();
		this.jsonEditor.setOption("readOnly", this.readOnly);
	},
	methods: {
		// 初始化jsonEditor
		initJsonEditor() {
			this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
				lineNumbers: true,
				mode: "application/json",
				gutters: ["CodeMirror-lint-markers"],
				// theme: "rubyblue",
				lint: true,
			});
			this.jsonEditor.setValue(JSON.stringify(this.value, null, 8));
			this.jsonEditor.on("change", cm => {
				this.$emit("changed", cm.getValue());
				this.$emit("input", cm.getValue());
			});
		},
		// 获取json
		getValue() {
			return this.jsonEditor.getValue();
		},
	},
};
</script>
 
<style lang="scss">
.json-editor {
  height: 300px;
  overflow-y: auto;
  position: relative;
  font-size: 14px;
  width: 800px;
  border: 1px solid #ddd;
  .CodeMirror {
    height: auto;
    min-height: 300px;
    .CodeMirror-line {
      line-height: 1.5;
    }
  }
  .CodeMirror-scroll {
    min-height: 300px;
  }
  .CodeMirror-linenumber {
    color: #2b91af;
    height: 21px;
    line-height: 21px;
  }
  .CodeMirror-gutters {
    background-color: #fff;
    border-right: 0;
  }
  span.cm-string {
    color: #f08047;
  }
}
</style>