<script>
export default { name: 'MonacoEdit' }
</script>
<script setup>
import {
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
  ref,
  getCurrentInstance,
  watch,
  nextTick,
} from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new tsWorker()
    }
    return new EditorWorker()
  },
}

let monacoEdit = null

const _props = defineProps({
  modelValue: String,
})

const _emit = defineEmits(['update:modelValue'])

watch(
  () => _props.modelValue,
  (value) => {
    // 防止改变编辑器内容时光标重定向
    if (value !== monacoEdit?.getValue()) {
      monacoEdit.setValue(value)
    }
  },
)

onMounted(() => {
  monacoEdit = monaco.editor.create(document.getElementById('editContainer'), {
    value: _props.modelValue,
    readOnly: false,
    language: 'javascript',
    theme: 'vs-dark',
    tabSize: 2,
    automaticLayout: true,
    selectOnLineNumbers: true,
    renderSideBySide: false,
  })
  nextTick(() => {
    monacoEdit.onDidChangeModelContent(() => {
      _emit('update:modelValue', monacoEdit?.getValue())
    })
  })
})
</script>

<template>
  <div class="code-editor" id="editContainer"></div>
</template>

<style scoped>
.code-editor {
  width: 100%;
  min-height: 200px;
}
</style>
