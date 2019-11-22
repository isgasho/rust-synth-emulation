(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/wasm_synth_player.js":
/*!**********************************!*\
  !*** ./pkg/wasm_synth_player.js ***!
  \**********************************/
/*! exports provided: WasmVgmPlay, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WasmVgmPlay\", function() { return WasmVgmPlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_synth_player_bg */ \"./pkg/wasm_synth_player_bg.wasm\");\n\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            arg = arg.slice(offset);\n            ptr = _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + arg.length * 3);\n            const view = getUint8Memory().subarray(ptr + offset, ptr + size);\n            const ret = cachedTextEncoder.encodeInto(arg, view);\n\n            offset += ret.written;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            const buf = cachedTextEncoder.encode(arg.slice(offset));\n            ptr = _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + buf.length);\n            getUint8Memory().set(buf, ptr + offset);\n            offset += buf.length;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nclass WasmVgmPlay {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_wasmvgmplay_free\"](ptr);\n    }\n    /**\n    *\n    * constructor\n    * @returns {}\n    */\n    constructor() {\n        this.ptr = _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"wasmvgmplay_from\"]();\n    }\n    /**\n    *\n    * Return vgmdata buffer referance.\n    * @returns {number}\n    */\n    get_vgmdata_ref() {\n        return _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"wasmvgmplay_get_vgmdata_ref\"](this.ptr);\n    }\n    /**\n    *\n    * Return sampling buffer referance.\n    * @returns {number}\n    */\n    get_sampling_ref() {\n        return _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"wasmvgmplay_get_sampling_ref\"](this.ptr);\n    }\n    /**\n    *\n    * Initialize sound driver.\n    *\n    * # Arguments\n    * sample_rate - WebAudio sampling rate\n    * @param {number} sample_rate\n    * @returns {void}\n    */\n    init(sample_rate) {\n        return _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"wasmvgmplay_init\"](this.ptr, sample_rate);\n    }\n    /**\n    *\n    * play\n    * @returns {number}\n    */\n    play() {\n        return _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"wasmvgmplay_play\"](this.ptr);\n    }\n}\n\nconst __wbg_new_59cb74e423758ede = function() {\n    return addHeapObject(new Error());\n};\n\nconst __wbg_stack_558ba5917b466edd = function(ret, arg0) {\n\n    const retptr = passStringToWasm(getObject(arg0).stack);\n    const retlen = WASM_VECTOR_LEN;\n    const mem = getUint32Memory();\n    mem[ret / 4] = retptr;\n    mem[ret / 4 + 1] = retlen;\n\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n\n    varg0 = varg0.slice();\n    _wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1 * 1);\n\n    console.error(varg0);\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    throw new Error(varg0);\n};\n\n\n\n//# sourceURL=webpack:///./pkg/wasm_synth_player.js?");

/***/ }),

/***/ "./pkg/wasm_synth_player_bg.wasm":
/*!***************************************!*\
  !*** ./pkg/wasm_synth_player_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, __wbg_wasmvgmplay_free, wasmvgmplay_from, wasmvgmplay_get_vgmdata_ref, wasmvgmplay_get_sampling_ref, wasmvgmplay_init, wasmvgmplay_play, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_synth_player.js */ \"./pkg/wasm_synth_player.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/wasm_synth_player_bg.wasm?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_synth_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-synth-player */ \"./pkg/wasm_synth_player.js\");\n/* harmony import */ var wasm_synth_player_wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-synth-player/wasm_synth_player_bg */ \"./pkg/wasm_synth_player_bg.wasm\");\n\n\n\n// vgm setting\nconst MAX_SAMPLING_BUFFER = 4096;\nconst SAMPLING_RATE = 44100;\n// canvas settings\nconst CANVAS_WIDTH = 768;\nconst CANVAS_HEIGHT = 576;\n\n// vgm member\nlet vgmplay = new wasm_synth_player__WEBPACK_IMPORTED_MODULE_0__[\"WasmVgmPlay\"]();\nlet vgmdata;\nlet sampling_buffer;\n\n/**\n * audio context\n */\nlet audio_context;\nlet audio_node;\n\nlet audio_analyser;\nlet audio_analyser_buffer;\nlet audio_analyser_buffer_length;\n\n// canvas member\nlet canvas;\nlet canvas_context;\n\n// canvas setting\ncanvas = document.getElementById('screen');\ncanvas.setAttribute('width', CANVAS_WIDTH);\ncanvas.setAttribute('height', CANVAS_HEIGHT);\nlet pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;\nif(pixelRatio > 1 && window.screen.width < CANVAS_WIDTH) {\n    canvas.style.width = 320 + \"px\";\n    canvas.style.heigth = 240 + \"px\";\n}\ncanvas_context = canvas.getContext('2d');\ncanvas_context.font = \"48px serif\";\ncanvas_context.fillStyle = \"#fff\";\ncanvas_context.fillText(\"Click Here\", 260, 300);\n\n/**\n * load vgm data\n */\nfetch('./vgm/vgmsample.vgm')\n    .then(response => response.arrayBuffer())\n    .then(bytes => {\n        // create buffer from wasm\n        vgmdata = new Uint8Array(wasm_synth_player_wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, vgmplay.get_vgmdata_ref(), bytes.byteLength);\n        vgmdata.set(new Uint8Array(bytes))\n        sampling_buffer = new Float32Array(wasm_synth_player_wasm_synth_player_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, vgmplay.get_sampling_ref(), MAX_SAMPLING_BUFFER);\n        // init player\n        vgmplay.init(SAMPLING_RATE);\n    })\n    .then(results => {\n        canvas.addEventListener('click', play, false);\n    });\n\n/**\n * play\n */\nlet play = function() {\n    // init audio\n    audio_context = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: SAMPLING_RATE });\n    audio_node = audio_context.createScriptProcessor(MAX_SAMPLING_BUFFER, 1, 1);\n    audio_node.onaudioprocess = function(ev) {\n        let sample = vgmplay.play();\n        ev.outputBuffer.getChannelData(0).set(sampling_buffer);\n        if(sample < MAX_SAMPLING_BUFFER) {\n            audio_node.disconnect();\n        }\n    };\n    // connect fft\n    audio_analyser = audio_context.createAnalyser();\n    audio_analyser_buffer_length = audio_analyser.frequencyBinCount;\n    audio_analyser_buffer = new Uint8Array(audio_analyser_buffer_length);\n    audio_analyser.getByteTimeDomainData(audio_analyser_buffer);\n    audio_node.connect(audio_analyser);\n    audio_analyser.connect(audio_context.destination);\n    draw();\n};\n\nlet draw = function() {\n    requestAnimationFrame(draw);\n\n    audio_analyser.getByteFrequencyData(audio_analyser_buffer);\n\n    canvas_context.fillStyle = 'rgb(0, 0, 0)';\n    canvas_context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n\n    canvas_context.lineWidth = 1;\n    canvas_context.beginPath();\n    canvas_context.strokeStyle = 'rgb(0, 0, 255)';\n\n    var width = CANVAS_WIDTH * 1.0 / audio_analyser_buffer_length;\n    var x = 0;\n\n    for(var i = 0; i < audio_analyser_buffer_length; i++) {\n        var v = audio_analyser_buffer[i] / 255;\n        var y = v * CANVAS_HEIGHT / 2;\n        canvas_context.rect(width * i, CANVAS_HEIGHT, width, -y * 1.5);\n    }\n    canvas_context.stroke();\n}\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

}]);