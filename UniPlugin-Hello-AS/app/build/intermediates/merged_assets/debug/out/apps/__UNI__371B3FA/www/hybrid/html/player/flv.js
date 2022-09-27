webpackJsonpcyberplayer([1], [, , , , , function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(17),
		o = n(s),
		a = function() {
			function e() {
				r(this, e)
			}
			return e.e = function(t, i) {
				t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
				var n = "[" + t + "] > " + i;
				e.ENABLE_CALLBACK && e.emitter.emit("log", "error", n), e.ENABLE_ERROR && (console
					.error ? console.error(n) : console.warn ? console.warn(n) : console.log(n))
			}, e.i = function(t, i) {
				t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
				var n = "[" + t + "] > " + i;
				e.ENABLE_CALLBACK && e.emitter.emit("log", "info", n), e.ENABLE_INFO && (console.info ?
					console.info(n) : console.log(n))
			}, e.w = function(t, i) {
				t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
				var n = "[" + t + "] > " + i;
				e.ENABLE_CALLBACK && e.emitter.emit("log", "warn", n), e.ENABLE_WARN && (console.warn ?
					console.warn(n) : console.log(n))
			}, e.d = function(t, i) {
				t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
				var n = "[" + t + "] > " + i;
				e.ENABLE_CALLBACK && e.emitter.emit("log", "debug", n), e.ENABLE_DEBUG && (console
					.debug ? console.debug(n) : console.log(n))
			}, e.v = function(t, i) {
				t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
				var n = "[" + t + "] > " + i;
				e.ENABLE_CALLBACK && e.emitter.emit("log", "verbose", n), e.ENABLE_VERBOSE && console
					.log(n)
			}, e
		}();
	a.GLOBAL_TAG = "flv.js", a.FORCE_GLOBAL_TAG = !1, a.ENABLE_ERROR = !1, a.ENABLE_INFO = !1, a
		.ENABLE_WARN = !1, a.ENABLE_DEBUG = !1, a.ENABLE_VERBOSE = !1, a.ENABLE_CALLBACK = !1, a.emitter =
		new o["default"], t["default"] = a, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function n(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		o = t.RuntimeException = function() {
			function e(t) {
				r(this, e), this._message = t
			}
			return e.prototype.toString = function() {
				return this.name + ": " + this.message
			}, s(e, [{
				key: "name",
				get: function() {
					return "RuntimeException"
				}
			}, {
				key: "message",
				get: function() {
					return this._message
				}
			}]), e
		}();
	t.IllegalStateException = function(e) {
		function t(n) {
			return r(this, t), i(this, e.call(this, n))
		}
		return n(t, e), s(t, [{
			key: "name",
			get: function() {
				return "IllegalStateException"
			}
		}]), t
	}(o), t.InvalidArgumentException = function(e) {
		function t(n) {
			return r(this, t), i(this, e.call(this, n))
		}
		return n(t, e), s(t, [{
			key: "name",
			get: function() {
				return "InvalidArgumentException"
			}
		}]), t
	}(o), t.NotImplementedException = function(e) {
		function t(n) {
			return r(this, t), i(this, e.call(this, n))
		}
		return n(t, e), s(t, [{
			key: "name",
			get: function() {
				return "NotImplementedException"
			}
		}]), t
	}(o)
}, , , , , , function(e, t, i) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0, t.BaseLoader = t.LoaderErrors = t.LoaderStatus = void 0;
	var r = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		s = i(6),
		o = t.LoaderStatus = {
			kIdle: 0,
			kConnecting: 1,
			kBuffering: 2,
			kError: 3,
			kComplete: 4
		};
	t.LoaderErrors = {
		OK: "OK",
		EXCEPTION: "Exception",
		HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
		CONNECTING_TIMEOUT: "ConnectingTimeout",
		EARLY_EOF: "EarlyEof",
		UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
	}, t.BaseLoader = function() {
		function e(t) {
			n(this, e), this._type = t || "undefined", this._status = o.kIdle, this._needStash = !1,
				this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival =
				null, this._onError = null, this._onComplete = null
		}
		return e.prototype.destroy = function() {
			this._status = o.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null,
				this._onDataArrival = null, this._onError = null, this._onComplete = null
		}, e.prototype.isWorking = function() {
			return this._status === o.kConnecting || this._status === o.kBuffering
		}, e.prototype.open = function(e, t) {
			throw new s.NotImplementedException("Unimplemented abstract function!")
		}, e.prototype.abort = function() {
			throw new s.NotImplementedException("Unimplemented abstract function!")
		}, r(e, [{
			key: "type",
			get: function() {
				return this._type
			}
		}, {
			key: "status",
			get: function() {
				return this._status
			}
		}, {
			key: "needStashBuffer",
			get: function() {
				return this._needStash
			}
		}, {
			key: "onContentLengthKnown",
			get: function() {
				return this._onContentLengthKnown
			},
			set: function(e) {
				this._onContentLengthKnown = e
			}
		}, {
			key: "onURLRedirect",
			get: function() {
				return this._onURLRedirect
			},
			set: function(e) {
				this._onURLRedirect = e
			}
		}, {
			key: "onDataArrival",
			get: function() {
				return this._onDataArrival
			},
			set: function(e) {
				this._onDataArrival = e
			}
		}, {
			key: "onError",
			get: function() {
				return this._onError
			},
			set: function(e) {
				this._onError = e
			}
		}, {
			key: "onComplete",
			get: function() {
				return this._onComplete
			},
			set: function(e) {
				this._onComplete = e
			}
		}]), e
	}()
}, , , , , function(e, t) {
	function i() {
		this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
	}

	function n(e) {
		return "function" == typeof e
	}

	function r(e) {
		return "number" == typeof e
	}

	function s(e) {
		return "object" == typeof e && null !== e
	}

	function o(e) {
		return void 0 === e
	}
	e.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i
		.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
			if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
			return this._maxListeners = e, this
		}, i.prototype.emit = function(e) {
			var t, i, r, a, u, d;
			if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events
					.error) && !this._events.error.length)) {
				if (t = arguments[1], t instanceof Error) throw t;
				throw TypeError('Uncaught, unspecified "error" event.')
			}
			if (i = this._events[e], o(i)) return !1;
			if (n(i)) switch (arguments.length) {
				case 1:
					i.call(this);
					break;
				case 2:
					i.call(this, arguments[1]);
					break;
				case 3:
					i.call(this, arguments[1], arguments[2]);
					break;
				default:
					a = Array.prototype.slice.call(arguments, 1), i.apply(this, a)
			} else if (s(i))
				for (a = Array.prototype.slice.call(arguments, 1), d = i.slice(), r = d.length, u =
					0; u < r; u++) d[u].apply(this, a);
			return !0
		}, i.prototype.addListener = function(e, t) {
			var r;
			if (!n(t)) throw TypeError("listener must be a function");
			return this._events || (this._events = {}), this._events.newListener && this.emit("newListener",
					e, n(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[
					e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this
					._events[e]) && !this._events[e].warned && (r = o(this._maxListeners) ? i
					.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (
						this._events[e].warned = !0, console.error(
							"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
							this._events[e].length), "function" == typeof console.trace && console.trace())
					), this
		}, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
			function i() {
				this.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
			}
			if (!n(t)) throw TypeError("listener must be a function");
			var r = !1;
			return i.listener = t, this.on(e, i), this
		}, i.prototype.removeListener = function(e, t) {
			var i, r, o, a;
			if (!n(t)) throw TypeError("listener must be a function");
			if (!this._events || !this._events[e]) return this;
			if (i = this._events[e], o = i.length, r = -1, i === t || n(i.listener) && i.listener === t)
				delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
			else if (s(i)) {
				for (a = o; a-- > 0;)
					if (i[a] === t || i[a].listener && i[a].listener === t) {
						r = a;
						break
					} if (r < 0) return this;
				1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(r, 1), this._events
					.removeListener && this.emit("removeListener", e, t)
			}
			return this
		}, i.prototype.removeAllListeners = function(e) {
			var t, i;
			if (!this._events) return this;
			if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this
				._events[e] && delete this._events[e], this;
			if (0 === arguments.length) {
				for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
				return this.removeAllListeners("removeListener"), this._events = {}, this
			}
			if (i = this._events[e], n(i)) this.removeListener(e, i);
			else if (i)
				for (; i.length;) this.removeListener(e, i[i.length - 1]);
			return delete this._events[e], this
		}, i.prototype.listeners = function(e) {
			var t;
			return t = this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this
				._events[e].slice() : []
		}, i.prototype.listenerCount = function(e) {
			if (this._events) {
				var t = this._events[e];
				if (n(t)) return 1;
				if (t) return t.length
			}
			return 0
		}, i.listenerCount = function(e, t) {
			return e.listenerCount(t)
		}
}, function(e, t) {
	"use strict";

	function i() {
		var e = self.navigator.userAgent.toLowerCase(),
			t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(
			e) || /(iemobile)[\/]([\w.]+)/.exec(e) ||
			/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
			/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
			/(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
			/(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e
			.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || [],
			i = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) ||
			/(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/
			.exec(e) || /(cros)/.exec(e) || [],
			r = {
				browser: t[5] || t[3] || t[1] || "",
				version: t[2] || t[4] || "0",
				majorVersion: t[4] || t[2] || "0",
				platform: i[0] || ""
			},
			s = {};
		if (r.browser) {
			s[r.browser] = !0;
			var o = r.majorVersion.split(".");
			s.version = {
				major: parseInt(r.majorVersion, 10),
				string: r.version
			}, o.length > 1 && (s.version.minor = parseInt(o[1], 10)), o.length > 2 && (s.version
				.build = parseInt(o[2], 10))
		}
		if (r.platform && (s[r.platform] = !0), (s.chrome || s.opr || s.safari) && (s.webkit = !0), s.rv ||
			s.iemobile) {
			s.rv && delete s.rv;
			var a = "msie";
			r.browser = a, s[a] = !0
		}
		if (s.edge) {
			delete s.edge;
			var u = "msedge";
			r.browser = u, s[u] = !0
		}
		if (s.opr) {
			var d = "opera";
			r.browser = d, s[d] = !0
		}
		if (s.safari && s.android) {
			var h = "android";
			r.browser = h, s[h] = !0
		}
		s.name = r.browser, s.platform = r.platform;
		for (var l in n) n.hasOwnProperty(l) && delete n[l];
		Object.assign(n, s)
	}
	t.__esModule = !0;
	var n = {};
	i(), t["default"] = n, e.exports = t["default"]
}, , , , , , function(e, t) {
	"use strict";
	t.__esModule = !0;
	var i = {
		IO_ERROR: "io_error",
		DEMUX_ERROR: "demux_error",
		INIT_SEGMENT: "init_segment",
		MEDIA_SEGMENT: "media_segment",
		LOADING_COMPLETE: "loading_complete",
		RECOVERED_EARLY_EOF: "recovered_early_eof",
		MEDIA_INFO: "media_info",
		METADATA_ARRIVED: "metadata_arrived",
		STATISTICS_INFO: "statistics_info",
		RECOMMEND_SEEKPOINT: "recommend_seekpoint"
	};
	t["default"] = i, e.exports = t["default"]
}, , , , , , function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e() {
			i(this, e), this.mimeType = null, this.duration = null, this.hasAudio = null, this
				.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate =
				null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount =
				null, this.width = null, this.height = null, this.fps = null, this.profile = null, this
				.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this
				.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null,
				this.hasKeyframesIndex = null, this.keyframesIndex = null
		}
		return e.prototype.isComplete = function() {
			var e = this.hasAudio === !1 || this.hasAudio === !0 && null != this.audioCodec &&
				null != this.audioSampleRate && null != this.audioChannelCount,
				t = this.hasVideo === !1 || this.hasVideo === !0 && null != this.videoCodec &&
				null != this.width && null != this.height && null != this.fps && null != this
				.profile && null != this.level && null != this.refFrames && null != this
				.chromaFormat && null != this.sarNum && null != this.sarDen;
			return null != this.mimeType && null != this.duration && null != this.metadata &&
				null != this.hasKeyframesIndex && e && t
		}, e.prototype.isSeekable = function() {
			return this.hasKeyframesIndex === !0
		}, e.prototype.getNearestKeyframe = function(e) {
			if (null == this.keyframesIndex) return null;
			var t = this.keyframesIndex,
				i = this._search(t.times, e);
			return {
				index: i,
				milliseconds: t.times[i],
				fileposition: t.filepositions[i]
			}
		}, e.prototype._search = function(e, t) {
			var i = 0,
				n = e.length - 1,
				r = 0,
				s = 0,
				o = n;
			for (t < e[0] && (i = 0, s = o + 1); s <= o;) {
				if (r = s + Math.floor((o - s) / 2), r === n || t >= e[r] && t < e[r + 1]) {
					i = r;
					break
				}
				e[r] < t ? s = r + 1 : o = r - 1
			}
			return i
		}, e
	}();
	t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";
	t.__esModule = !0;
	var i = {
		OK: "OK",
		FORMAT_ERROR: "FormatError",
		FORMAT_UNSUPPORTED: "FormatUnsupported",
		CODEC_UNSUPPORTED: "CodecUnsupported"
	};
	t["default"] = i, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		o = i(17),
		a = n(o),
		u = i(5),
		d = n(u),
		h = function() {
			function e() {
				r(this, e)
			}
			return e.getConfig = function() {
				return {
					globalTag: d["default"].GLOBAL_TAG,
					forceGlobalTag: d["default"].FORCE_GLOBAL_TAG,
					enableVerbose: d["default"].ENABLE_VERBOSE,
					enableDebug: d["default"].ENABLE_DEBUG,
					enableInfo: d["default"].ENABLE_INFO,
					enableWarn: d["default"].ENABLE_WARN,
					enableError: d["default"].ENABLE_ERROR,
					enableCallback: d["default"].ENABLE_CALLBACK
				}
			}, e.applyConfig = function(e) {
				d["default"].GLOBAL_TAG = e.globalTag, d["default"].FORCE_GLOBAL_TAG = e.forceGlobalTag,
					d["default"].ENABLE_VERBOSE = e.enableVerbose, d["default"].ENABLE_DEBUG = e
					.enableDebug, d["default"].ENABLE_INFO = e.enableInfo, d["default"].ENABLE_WARN = e
					.enableWarn, d["default"].ENABLE_ERROR = e.enableError, d["default"]
					.ENABLE_CALLBACK = e.enableCallback
			}, e._notifyChange = function() {
				var t = e.emitter;
				if (t.listenerCount("change") > 0) {
					var i = e.getConfig();
					t.emit("change", i)
				}
			}, e.registerListener = function(t) {
				e.emitter.addListener("change", t)
			}, e.removeListener = function(t) {
				e.emitter.removeListener("change", t)
			}, e.addLogListener = function(t) {
				d["default"].emitter.addListener("log", t), d["default"].emitter.listenerCount("log") >
					0 && (d["default"].ENABLE_CALLBACK = !0, e._notifyChange())
			}, e.removeLogListener = function(t) {
				d["default"].emitter.removeListener("log", t), 0 === d["default"].emitter.listenerCount(
					"log") && (d["default"].ENABLE_CALLBACK = !1, e._notifyChange())
			}, s(e, null, [{
				key: "forceGlobalTag",
				get: function() {
					return d["default"].FORCE_GLOBAL_TAG
				},
				set: function(t) {
					d["default"].FORCE_GLOBAL_TAG = t, e._notifyChange()
				}
			}, {
				key: "globalTag",
				get: function() {
					return d["default"].GLOBAL_TAG
				},
				set: function(t) {
					d["default"].GLOBAL_TAG = t, e._notifyChange()
				}
			}, {
				key: "enableAll",
				get: function() {
					return d["default"].ENABLE_VERBOSE && d["default"].ENABLE_DEBUG && d[
						"default"].ENABLE_INFO && d["default"].ENABLE_WARN && d[
						"default"].ENABLE_ERROR
				},
				set: function(t) {
					d["default"].ENABLE_VERBOSE = t, d["default"].ENABLE_DEBUG = t, d[
						"default"].ENABLE_INFO = t, d["default"].ENABLE_WARN = t, d[
						"default"].ENABLE_ERROR = t, e._notifyChange()
				}
			}, {
				key: "enableDebug",
				get: function() {
					return d["default"].ENABLE_DEBUG
				},
				set: function(t) {
					d["default"].ENABLE_DEBUG = t, e._notifyChange()
				}
			}, {
				key: "enableVerbose",
				get: function() {
					return d["default"].ENABLE_VERBOSE
				},
				set: function(t) {
					d["default"].ENABLE_VERBOSE = t, e._notifyChange()
				}
			}, {
				key: "enableInfo",
				get: function() {
					return d["default"].ENABLE_INFO
				},
				set: function(t) {
					d["default"].ENABLE_INFO = t, e._notifyChange()
				}
			}, {
				key: "enableWarn",
				get: function() {
					return d["default"].ENABLE_WARN
				},
				set: function(t) {
					d["default"].ENABLE_WARN = t, e._notifyChange()
				}
			}, {
				key: "enableError",
				get: function() {
					return d["default"].ENABLE_ERROR
				},
				set: function(t) {
					d["default"].ENABLE_ERROR = t, e._notifyChange()
				}
			}]), e
		}();
	h.emitter = new a["default"], t["default"] = h, e.exports = t["default"]
}, , , , , , , , , , , , , , function(e, t) {
	"use strict";

	function i() {
		return Object.assign({}, n)
	}
	t.__esModule = !0, t.createDefaultConfig = i;
	var n = t.defaultConfig = {
		enableWorker: !1,
		enableStashBuffer: !0,
		stashInitialSize: void 0,
		isLive: !1,
		lazyLoad: !0,
		lazyLoadMaxDuration: 180,
		lazyLoadRecoverDuration: 30,
		deferLoadAfterSourceOpen: !0,
		autoCleanupMaxBackwardDuration: 180,
		autoCleanupMinBackwardDuration: 120,
		statisticsInfoReportInterval: 600,
		fixAudioTimestampGap: !0,
		accurateSeek: !1,
		seekType: "range",
		seekParamStart: "bstart",
		seekParamEnd: "bend",
		rangeLoadZeroStart: !1,
		customSeekHandler: void 0,
		reuseRedirectedURL: !1,
		customLoader: void 0
	}
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e(e, t) {
			for (var i = 0; i < t.length; i++) {
				var n = t[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
					0), Object.defineProperty(e, n.key, n)
			}
		}
		return function(t, i, n) {
			return i && e(t.prototype, i), n && e(t, n), t
		}
	}();
	t.SampleInfo = function r(e, t, n, s, o) {
		i(this, r), this.dts = e, this.pts = t, this.duration = n, this.originalDts = s, this
			.isSyncPoint = o, this.fileposition = null
	}, t.MediaSegmentInfo = function() {
		function e() {
			i(this, e), this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this
				.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample =
				null, this.lastSample = null
		}
		return e.prototype.appendSyncPoint = function(e) {
			e.isSyncPoint = !0, this.syncPoints.push(e)
		}, e
	}(), t.IDRSampleList = function() {
		function e() {
			i(this, e), this._list = []
		}
		return e.prototype.clear = function() {
			this._list = []
		}, e.prototype.appendArray = function(e) {
			var t = this._list;
			0 !== e.length && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts &&
				this.clear(), Array.prototype.push.apply(t, e))
		}, e.prototype.getLastSyncPointBeforeDts = function(e) {
			if (0 == this._list.length) return null;
			var t = this._list,
				i = 0,
				n = t.length - 1,
				r = 0,
				s = 0,
				o = n;
			for (e < t[0].dts && (i = 0, s = o + 1); s <= o;) {
				if (r = s + Math.floor((o - s) / 2), r === n || e >= t[r].dts && e < t[r + 1].dts) {
					i = r;
					break
				}
				t[r].dts < e ? s = r + 1 : o = r - 1
			}
			return this._list[i]
		}, e
	}(), t.MediaSegmentInfoList = function() {
		function e(t) {
			i(this, e), this._type = t, this._list = [], this._lastAppendLocation = -1
		}
		return e.prototype.isEmpty = function() {
			return 0 === this._list.length
		}, e.prototype.clear = function() {
			this._list = [], this._lastAppendLocation = -1
		}, e.prototype._searchNearestSegmentBefore = function(e) {
			var t = this._list;
			if (0 === t.length) return -2;
			var i = t.length - 1,
				n = 0,
				r = 0,
				s = i,
				o = 0;
			if (e < t[0].originalBeginDts) return o = -1;
			for (; r <= s;) {
				if (n = r + Math.floor((s - r) / 2), n === i || e > t[n].lastSample.originalDts &&
					e < t[n + 1].originalBeginDts) {
					o = n;
					break
				}
				t[n].originalBeginDts < e ? r = n + 1 : s = n - 1
			}
			return o
		}, e.prototype._searchNearestSegmentAfter = function(e) {
			return this._searchNearestSegmentBefore(e) + 1
		}, e.prototype.append = function(e) {
			var t = this._list,
				i = e,
				n = this._lastAppendLocation,
				r = 0;
			n !== -1 && n < t.length && i.originalBeginDts >= t[n].lastSample.originalDts && (n ===
					t.length - 1 || n < t.length - 1 && i.originalBeginDts < t[n + 1]
					.originalBeginDts) ? r = n + 1 : t.length > 0 && (r = this
					._searchNearestSegmentBefore(i.originalBeginDts) + 1), this
				._lastAppendLocation = r, this._list.splice(r, 0, i)
		}, e.prototype.getLastSegmentBefore = function(e) {
			var t = this._searchNearestSegmentBefore(e);
			return t >= 0 ? this._list[t] : null
		}, e.prototype.getLastSampleBefore = function(e) {
			var t = this.getLastSegmentBefore(e);
			return null != t ? t.lastSample : null
		}, e.prototype.getLastSyncPointBefore = function(e) {
			for (var t = this._searchNearestSegmentBefore(e), i = this._list[t].syncPoints; 0 === i
				.length && t > 0;) t--, i = this._list[t].syncPoints;
			return i.length > 0 ? i[i.length - 1] : null
		}, n(e, [{
			key: "type",
			get: function() {
				return this._type
			}
		}, {
			key: "length",
			get: function() {
				return this._list.length
			}
		}]), e
	}()
}, function(e, t) {
	"use strict";
	t.__esModule = !0;
	var i = {
		ERROR: "error",
		SOURCE_OPEN: "source_open",
		UPDATE_END: "update_end",
		BUFFER_FULL: "buffer_full"
	};
	t["default"] = i, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(17),
		o = n(s),
		a = i(5),
		u = n(a),
		d = i(18),
		h = n(d),
		l = i(30),
		f = n(l),
		c = i(93),
		_ = n(c),
		p = i(106),
		m = n(p),
		g = i(31),
		v = n(g),
		y = i(51),
		E = n(y),
		S = i(24),
		b = n(S),
		L = (i(12), function() {
			function e(t, i) {
				r(this, e), this.TAG = "TransmuxingController", this._emitter = new o["default"], this
					._config = i, t.segments || (t.segments = [{
						duration: t.duration,
						filesize: t.filesize,
						url: t.url
					}]), "boolean" != typeof t.cors && (t.cors = !0), "boolean" != typeof t
					.withCredentials && (t.withCredentials = !1), this._mediaDataSource = t, this
					._currentSegmentIndex = 0;
				var n = 0;
				this._mediaDataSource.segments.forEach(function(e) {
						e.timestampBase = n, n += e.duration, e.cors = t.cors, e.withCredentials = t
							.withCredentials, i.referrerPolicy && (e.referrerPolicy = i
								.referrerPolicy)
					}), isNaN(n) || this._mediaDataSource.duration === n || (this._mediaDataSource
						.duration = n), this._mediaInfo = null, this._demuxer = null, this._remuxer =
					null, this._ioctl = null, this._pendingSeekTime = null, this
					._pendingResolveSeekPoint = null, this._statisticsReporter = null
			}
			return e.prototype.destroy = function() {
				this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter &&
					this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this
						._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer =
						null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null),
					this._emitter.removeAllListeners(), this._emitter = null
			}, e.prototype.on = function(e, t) {
				this._emitter.addListener(e, t)
			}, e.prototype.off = function(e, t) {
				this._emitter.removeListener(e, t)
			}, e.prototype.start = function() {
				this._loadSegment(0), this._enableStatisticsReporter()
			}, e.prototype._loadSegment = function(e, t) {
				this._currentSegmentIndex = e;
				var i = this._mediaDataSource.segments[e],
					n = this._ioctl = new E["default"](i, this._config, e);
				n.onError = this._onIOException.bind(this), n.onSeeked = this._onIOSeeked.bind(
					this), n.onComplete = this._onIOComplete.bind(this), n.onRedirect = this
					._onIORedirect.bind(this), n.onRecoveredEarlyEof = this._onIORecoveredEarlyEof
					.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : n.onDataArrival =
					this._onInitChunkArrival.bind(this), n.open(t)
			}, e.prototype.stop = function() {
				this._internalAbort(), this._disableStatisticsReporter()
			}, e.prototype._internalAbort = function() {
				this._ioctl && (this._ioctl.destroy(), this._ioctl = null)
			}, e.prototype.pause = function() {
				this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this
					._disableStatisticsReporter())
			}, e.prototype.resume = function() {
				this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this
					._enableStatisticsReporter())
			}, e.prototype.seek = function(e) {
				if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
					var t = this._searchSegmentIndexContains(e);
					if (t === this._currentSegmentIndex) {
						var i = this._mediaInfo.segments[t];
						if (void 0 == i) this._pendingSeekTime = e;
						else {
							var n = i.getNearestKeyframe(e);
							this._remuxer.seek(n.milliseconds), this._ioctl.seek(n.fileposition),
								this._pendingResolveSeekPoint = n.milliseconds
						}
					} else {
						var r = this._mediaInfo.segments[t];
						if (void 0 == r) this._pendingSeekTime = e, this._internalAbort(), this
							._remuxer.seek(), this._remuxer.insertDiscontinuity(), this
							._loadSegment(t);
						else {
							var s = r.getNearestKeyframe(e);
							this._internalAbort(), this._remuxer.seek(e), this._remuxer
								.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this
								._demuxer.timestampBase = this._mediaDataSource.segments[t]
								.timestampBase, this._loadSegment(t, s.fileposition), this
								._pendingResolveSeekPoint = s.milliseconds, this
								._reportSegmentMediaInfo(t)
						}
					}
					this._enableStatisticsReporter()
				}
			}, e.prototype._searchSegmentIndexContains = function(e) {
				for (var t = this._mediaDataSource.segments, i = t.length - 1, n = 0; n < t
					.length; n++)
					if (e < t[n].timestampBase) {
						i = n - 1;
						break
					} return i
			}, e.prototype._onInitChunkArrival = function(e, t) {
				var i = this,
					n = null,
					r = 0;
				if (t > 0) this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase =
					this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, r =
					this._demuxer.parseChunks(e, t);
				else if ((n = _["default"].probe(e)).match) {
					this._demuxer = new _["default"](n, this._config), this._remuxer || (this
						._remuxer = new m["default"](this._config));
					var s = this._mediaDataSource;
					void 0 == s.duration || isNaN(s.duration) || (this._demuxer.overridedDuration =
							s.duration), "boolean" == typeof s.hasAudio && (this._demuxer
							.overridedHasAudio = s.hasAudio), "boolean" == typeof s.hasVideo && (
							this._demuxer.overridedHasVideo = s.hasVideo), this._demuxer
						.timestampBase = s.segments[this._currentSegmentIndex].timestampBase, this
						._demuxer.onError = this._onDemuxException.bind(this), this._demuxer
						.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer
						.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._remuxer
						.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer
						.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer
						.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), r = this
						._demuxer.parseChunks(e, t)
				} else n = null, u["default"].e(this.TAG, "Non-FLV, Unsupported media type!"),
					Promise.resolve().then(function() {
						i._internalAbort()
					}), this._emitter.emit(b["default"].DEMUX_ERROR, v["default"]
						.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), r = 0;
				return r
			}, e.prototype._onMediaInfo = function(e) {
				var t = this;
				null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo
					.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo
					.segmentCount = this._mediaDataSource.segments.length, Object
					.setPrototypeOf(this._mediaInfo, f["default"].prototype));
				var i = Object.assign({}, e);
				Object.setPrototypeOf(i, f["default"].prototype), this._mediaInfo.segments[this
						._currentSegmentIndex] = i, this._reportSegmentMediaInfo(this
						._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve()
					.then(function() {
						var e = t._pendingSeekTime;
						t._pendingSeekTime = null, t.seek(e)
					})
			}, e.prototype._onMetaDataArrived = function(e) {
				this._emitter.emit(b["default"].METADATA_ARRIVED, e)
			}, e.prototype._onIOSeeked = function() {
				this._remuxer.insertDiscontinuity()
			}, e.prototype._onIOComplete = function(e) {
				var t = e,
					i = t + 1;
				i < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer
					.flushStashedSamples(), this._loadSegment(i)) : (this._remuxer
					.flushStashedSamples(), this._emitter.emit(b["default"].LOADING_COMPLETE),
					this._disableStatisticsReporter())
			}, e.prototype._onIORedirect = function(e) {
				var t = this._ioctl.extraData;
				this._mediaDataSource.segments[t].redirectedURL = e
			}, e.prototype._onIORecoveredEarlyEof = function() {
				this._emitter.emit(b["default"].RECOVERED_EARLY_EOF)
			}, e.prototype._onIOException = function(e, t) {
				u["default"].e(this.TAG, "IOException: type = " + e + ", code = " + t.code +
						", msg = " + t.msg), this._emitter.emit(b["default"].IO_ERROR, e, t), this
					._disableStatisticsReporter()
			}, e.prototype._onDemuxException = function(e, t) {
				u["default"].e(this.TAG, "DemuxException: type = " + e + ", info = " + t), this
					._emitter.emit(b["default"].DEMUX_ERROR, e, t)
			}, e.prototype._onRemuxerInitSegmentArrival = function(e, t) {
				this._emitter.emit(b["default"].INIT_SEGMENT, e, t)
			}, e.prototype._onRemuxerMediaSegmentArrival = function(e, t) {
				if (null == this._pendingSeekTime && (this._emitter.emit(b["default"].MEDIA_SEGMENT,
						e, t), null != this._pendingResolveSeekPoint && "video" === e)) {
					var i = t.info.syncPoints,
						n = this._pendingResolveSeekPoint;
					this._pendingResolveSeekPoint = null, h["default"].safari && i.length > 0 && i[
						0].originalDts === n && (n = i[0].pts), this._emitter.emit(b["default"]
						.RECOMMEND_SEEKPOINT, n)
				}
			}, e.prototype._enableStatisticsReporter = function() {
				null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(
					this._reportStatisticsInfo.bind(this), this._config
					.statisticsInfoReportInterval))
			}, e.prototype._disableStatisticsReporter = function() {
				this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this
					._statisticsReporter = null)
			}, e.prototype._reportSegmentMediaInfo = function(e) {
				var t = this._mediaInfo.segments[e],
					i = Object.assign({}, t);
				i.duration = this._mediaInfo.duration, i.segmentCount = this._mediaInfo
					.segmentCount, delete i.segments, delete i.keyframesIndex, this._emitter.emit(b[
						"default"].MEDIA_INFO, i)
			}, e.prototype._reportStatisticsInfo = function() {
				var e = {};
				e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e
					.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed =
					this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e
					.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this
					._mediaDataSource.segments.length, this._emitter.emit(b["default"]
						.STATISTICS_INFO, e)
			}, e
		}());
	t["default"] = L, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";
	e.exports = i(95)["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		o = i(5),
		a = n(o),
		u = i(52),
		d = n(u),
		h = i(12),
		l = i(96),
		f = n(l),
		c = i(100),
		_ = n(c),
		p = i(101),
		m = (n(p), i(102)),
		g = n(m),
		v = i(99),
		y = n(v),
		E = i(98),
		S = n(E),
		b = i(97),
		L = n(b),
		R = i(6),
		A = function() {
			function e(t, i, n) {
				r(this, e), this.TAG = "IOController", this._config = i, this._extraData = n, this
					._stashInitialSize = 393216, void 0 != i.stashInitialSize && i.stashInitialSize > 0 && (
						this._stashInitialSize = i.stashInitialSize), this._stashUsed = 0, this._stashSize =
					this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(
						this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, i
					.enableStashBuffer === !1 && (this._enableStash = !1), this._loader = null, this
					._loaderClass = null, this._seekHandler = null, this._dataSource = t, this
					._isWebSocketURL = /wss?:\/\/(.+?)/.test(t.url), this._refTotalLength = t.filesize ? t
					.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1,
					this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this
					._speedSampler = new d["default"], this._speedNormalizeList = [64, 128, 256, 384, 512,
						768, 1024, 1536, 2048, 3072, 4096
					], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this
					._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete =
					null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this
					._selectSeekHandler(), this._selectLoader(), this._createLoader()
			}
			return e.prototype.destroy = function() {
				this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader =
					null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null,
					this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0,
					this._currentRange = null, this._speedSampler = null, this
					._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null,
					this._onError = null, this._onComplete = null, this._onRedirect = null, this
					._onRecoveredEarlyEof = null, this._extraData = null
			}, e.prototype.isWorking = function() {
				return this._loader && this._loader.isWorking() && !this._paused
			}, e.prototype.isPaused = function() {
				return this._paused
			}, e.prototype._selectSeekHandler = function() {
				var e = this._config;
				if ("range" === e.seekType) this._seekHandler = new S["default"](this._config
					.rangeLoadZeroStart);
				else if ("param" === e.seekType) {
					var t = e.seekParamStart || "bstart",
						i = e.seekParamEnd || "bend";
					this._seekHandler = new L["default"](t, i)
				} else {
					if ("custom" !== e.seekType) throw new R.InvalidArgumentException(
						"Invalid seekType in config: " + e.seekType);
					if ("function" != typeof e.customSeekHandler) throw new R.InvalidArgumentException(
						"Custom seekType specified in config but invalid customSeekHandler!");
					this._seekHandler = new e.customSeekHandler
				}
			}, e.prototype._selectLoader = function() {
				if (null != this._config.customLoader) this._loaderClass = this._config.customLoader;
				else if (this._isWebSocketURL) this._loaderClass = y["default"];
				else if (f["default"].isSupported()) this._loaderClass = f["default"];
				else if (_["default"].isSupported()) this._loaderClass = _["default"];
				else {
					if (!g["default"].isSupported()) throw new R.RuntimeException(
						"Your browser doesn't support xhr with arraybuffer responseType!");
					this._loaderClass = g["default"]
				}
			}, e.prototype._createLoader = function() {
				this._loader = new this._loaderClass(this._seekHandler, this._config), this._loader
					.needStashBuffer === !1 && (this._enableStash = !1), this._loader
					.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader
					.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this
					._onLoaderChunkArrival.bind(this),
					this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError =
					this._onLoaderError.bind(this)
			}, e.prototype.open = function(e) {
				this._currentRange = {
					from: 0,
					to: -1
				}, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this
					._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({},
					this._currentRange))
			}, e.prototype.abort = function() {
				this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0)
			}, e.prototype.pause = function() {
				this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom =
						this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) :
					this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this
					._stashByteStart = 0, this._paused = !0)
			}, e.prototype.resume = function() {
				if (this._paused) {
					this._paused = !1;
					var e = this._resumeFrom;
					this._resumeFrom = 0, this._internalSeek(e, !0)
				}
			}, e.prototype.seek = function(e) {
				this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e,
					!0)
			}, e.prototype._internalSeek = function(e, t) {
				this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this
					._loader.destroy(), this._loader = null;
				var i = {
					from: e,
					to: -1
				};
				this._currentRange = {
						from: i.from,
						to: -1
					}, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this
					._createLoader(), this._loader.open(this._dataSource, i), this._onSeeked && this
					._onSeeked()
			}, e.prototype.updateUrl = function(e) {
				if (!e || "string" != typeof e || 0 === e.length) throw new R.InvalidArgumentException(
					"Url must be a non-empty string!");
				this._dataSource.url = e
			}, e.prototype._expandBuffer = function(e) {
				for (var t = this._stashSize; t + 1048576 < e;) t *= 2;
				if (t += 1048576, t !== this._bufferSize) {
					var i = new ArrayBuffer(t);
					if (this._stashUsed > 0) {
						var n = new Uint8Array(this._stashBuffer, 0, this._stashUsed),
							r = new Uint8Array(i, 0, t);
						r.set(n, 0)
					}
					this._stashBuffer = i, this._bufferSize = t
				}
			}, e.prototype._normalizeSpeed = function(e) {
				var t = this._speedNormalizeList,
					i = t.length - 1,
					n = 0,
					r = 0,
					s = i;
				if (e < t[0]) return t[0];
				for (; r <= s;) {
					if (n = r + Math.floor((s - r) / 2), n === i || e >= t[n] && e < t[n + 1]) return t[
						n];
					t[n] < e ? r = n + 1 : s = n - 1
				}
			}, e.prototype._adjustStashSize = function(e) {
				var t = 0;
				t = this._config.isLive ? e : e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 *
					e) : 2 * e, t > 8192 && (t = 8192);
				var i = 1024 * t + 1048576;
				this._bufferSize < i && this._expandBuffer(i), this._stashSize = 1024 * t
			}, e.prototype._dispatchChunks = function(e, t) {
				return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t)
			}, e.prototype._onURLRedirect = function(e) {
				this._redirectedURL = e, this._onRedirect && this._onRedirect(e)
			}, e.prototype._onContentLengthKnown = function(e) {
				e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1)
			}, e.prototype._onLoaderChunkArrival = function(e, t, i) {
				if (!this._onDataArrival) throw new R.IllegalStateException(
					"IOController: No existing consumer (onDataArrival) callback!");
				if (!this._paused) {
					this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this
							._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler
						.addBytes(e.byteLength);
					var n = this._speedSampler.lastSecondKBps;
					if (0 !== n) {
						var r = this._normalizeSpeed(n);
						this._speedNormalized !== r && (this._speedNormalized = r, this
							._adjustStashSize(r))
					}
					if (this._enableStash)
						if (0 === this._stashUsed && 0 === this._stashByteStart && (this
								._stashByteStart = t), this._stashUsed + e.byteLength <= this
							._stashSize) {
							var s = new Uint8Array(this._stashBuffer, 0, this._stashSize);
							s.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
						} else {
							var o = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
							if (this._stashUsed > 0) {
								var a = this._stashBuffer.slice(0, this._stashUsed),
									u = this._dispatchChunks(a, this._stashByteStart);
								if (u < a.byteLength) {
									if (u > 0) {
										var d = new Uint8Array(a, u);
										o.set(d, 0), this._stashUsed = d.byteLength, this
											._stashByteStart += u
									}
								} else this._stashUsed = 0, this._stashByteStart += u;
								this._stashUsed + e.byteLength > this._bufferSize && (this
										._expandBuffer(this._stashUsed + e.byteLength), o =
										new Uint8Array(this._stashBuffer, 0, this._bufferSize)), o.set(
										new Uint8Array(e), this._stashUsed), this._stashUsed += e
									.byteLength
							} else {
								var h = this._dispatchChunks(e, t);
								if (h < e.byteLength) {
									var l = e.byteLength - h;
									l > this._bufferSize && (this._expandBuffer(l), o = new Uint8Array(
											this._stashBuffer, 0, this._bufferSize)), o.set(
											new Uint8Array(e, h), 0), this._stashUsed += l, this
										._stashByteStart = t + h
								}
							}
						}
					else if (0 === this._stashUsed) {
						var f = this._dispatchChunks(e, t);
						if (f < e.byteLength) {
							var c = e.byteLength - f;
							c > this._bufferSize && this._expandBuffer(c);
							var _ = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
							_.set(new Uint8Array(e, f), 0), this._stashUsed += c, this._stashByteStart =
								t + f
						}
					} else {
						this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this
							._stashUsed + e.byteLength);
						var p = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
						p.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
						var m = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this
							._stashByteStart);
						if (m < this._stashUsed && m > 0) {
							var g = new Uint8Array(this._stashBuffer, m);
							p.set(g, 0)
						}
						this._stashUsed -= m, this._stashByteStart += m
					}
				}
			}, e.prototype._flushStashBuffer = function(e) {
				if (this._stashUsed > 0) {
					var t = this._stashBuffer.slice(0, this._stashUsed),
						i = this._dispatchChunks(t, this._stashByteStart),
						n = t.byteLength - i;
					if (i < t.byteLength) {
						if (!e) {
							if (i > 0) {
								var r = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
									s = new Uint8Array(t, i);
								r.set(s, 0), this._stashUsed = s.byteLength, this._stashByteStart += i
							}
							return 0
						}
						a["default"].w(this.TAG, n +
							" bytes unconsumed data remain when flush buffer, dropped")
					}
					return this._stashUsed = 0, this._stashByteStart = 0, n
				}
				return 0
			}, e.prototype._onLoaderComplete = function(e, t) {
				this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData)
			}, e.prototype._onLoaderError = function(e, t) {
				switch (a["default"].e(this.TAG, "Loader error, code = " + t.code + ", msg = " + t.msg),
					this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this
						._isEarlyEofReconnecting = !1, e = h.LoaderErrors.UNRECOVERABLE_EARLY_EOF), e) {
					case h.LoaderErrors.EARLY_EOF:
						if (!this._config.isLive && this._totalLength) {
							var i = this._currentRange.to + 1;
							return void(i < this._totalLength && (a["default"].w(this.TAG,
									"Connection lost, trying reconnect..."), this
								._isEarlyEofReconnecting = !0, this._internalSeek(i, !1)))
						}
						e = h.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
						break;
					case h.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
					case h.LoaderErrors.CONNECTING_TIMEOUT:
					case h.LoaderErrors.HTTP_STATUS_CODE_INVALID:
					case h.LoaderErrors.EXCEPTION:
				}
				if (!this._onError) throw new R.RuntimeException("IOException: " + t.msg);
				this._onError(e, t)
			}, s(e, [{
				key: "status",
				get: function() {
					return this._loader.status
				}
			}, {
				key: "extraData",
				get: function() {
					return this._extraData
				},
				set: function(e) {
					this._extraData = e
				}
			}, {
				key: "onDataArrival",
				get: function() {
					return this._onDataArrival
				},
				set: function(e) {
					this._onDataArrival = e
				}
			}, {
				key: "onSeeked",
				get: function() {
					return this._onSeeked
				},
				set: function(e) {
					this._onSeeked = e
				}
			}, {
				key: "onError",
				get: function() {
					return this._onError
				},
				set: function(e) {
					this._onError = e
				}
			}, {
				key: "onComplete",
				get: function() {
					return this._onComplete
				},
				set: function(e) {
					this._onComplete = e
				}
			}, {
				key: "onRedirect",
				get: function() {
					return this._onRedirect
				},
				set: function(e) {
					this._onRedirect = e
				}
			}, {
				key: "onRecoveredEarlyEof",
				get: function() {
					return this._onRecoveredEarlyEof
				},
				set: function(e) {
					this._onRecoveredEarlyEof = e
				}
			}, {
				key: "currentURL",
				get: function() {
					return this._dataSource.url
				}
			}, {
				key: "hasRedirect",
				get: function() {
					return null != this._redirectedURL || void 0 != this._dataSource
						.redirectedURL
				}
			}, {
				key: "currentRedirectedURL",
				get: function() {
					return this._redirectedURL || this._dataSource.redirectedURL
				}
			}, {
				key: "currentSpeed",
				get: function() {
					return this._loaderClass === g["default"] ? this._loader.currentSpeed :
						this._speedSampler.lastSecondKBps
				}
			}, {
				key: "loaderType",
				get: function() {
					return this._loader.type
				}
			}]), e
		}();
	t["default"] = A, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		r = function() {
			function e() {
				i(this, e), this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0,
					this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance
					.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now
			}
			return e.prototype.reset = function() {
				this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this
					._intervalBytes = 0, this._lastSecondBytes = 0
			}, e.prototype.addBytes = function(e) {
				0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this
					._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this
					._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this
					._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this
					._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this
					._lastCheckpoint = this._now())
			}, n(e, [{
				key: "currentKBps",
				get: function() {
					this.addBytes(0);
					var e = (this._now() - this._lastCheckpoint) / 1e3;
					return 0 == e && (e = 1), this._intervalBytes / e / 1024
				}
			}, {
				key: "lastSecondKBps",
				get: function() {
					return this.addBytes(0), 0 !== this._lastSecondBytes ? this
						._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >=
						500 ? this.currentKBps : 0
				}
			}, {
				key: "averageKBps",
				get: function() {
					var e = (this._now() - this._firstCheckpoint) / 1e3;
					return this._totalBytes / e / 1024
				}
			}]), e
		}();
	t["default"] = r, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}
	t.__esModule = !0, t.ErrorDetails = t.ErrorTypes = void 0;
	var r = i(12),
		s = i(31),
		o = n(s);
	t.ErrorTypes = {
		NETWORK_ERROR: "NetworkError",
		MEDIA_ERROR: "MediaError",
		OTHER_ERROR: "OtherError"
	}, t.ErrorDetails = {
		NETWORK_EXCEPTION: r.LoaderErrors.EXCEPTION,
		NETWORK_STATUS_CODE_INVALID: r.LoaderErrors.HTTP_STATUS_CODE_INVALID,
		NETWORK_TIMEOUT: r.LoaderErrors.CONNECTING_TIMEOUT,
		NETWORK_UNRECOVERABLE_EARLY_EOF: r.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
		MEDIA_MSE_ERROR: "MediaMSEError",
		MEDIA_FORMAT_ERROR: o["default"].FORMAT_ERROR,
		MEDIA_FORMAT_UNSUPPORTED: o["default"].FORMAT_UNSUPPORTED,
		MEDIA_CODEC_UNSUPPORTED: o["default"].CODEC_UNSUPPORTED
	}
}, function(e, t) {
	"use strict";
	t.__esModule = !0;
	var i = {
		ERROR: "error",
		LOADING_COMPLETE: "loading_complete",
		RECOVERED_EARLY_EOF: "recovered_early_eof",
		MEDIA_INFO: "media_info",
		METADATA_ARRIVED: "metadata_arrived",
		STATISTICS_INFO: "statistics_info"
	};
	t["default"] = i, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var r = function() {
		function e() {
			n(this, e)
		}
		return e.install = function() {
			Object.setPrototypeOf = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			}, Object.assign = Object.assign || function(e) {
				if (void 0 === e || null === e) throw new TypeError(
					"Cannot convert undefined or null to object");
				for (var t = Object(e), i = 1; i < arguments.length; i++) {
					var n = arguments[i];
					if (void 0 !== n && null !== n)
						for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
				}
				return t
			}, "function" != typeof self.Promise && i(148).polyfill()
		}, e
	}();
	r.install(), t["default"] = r, e.exports = t["default"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(51),
		o = n(s),
		a = i(46),
		u = function() {
			function e() {
				r(this, e)
			}
			return e.supportMSEH264Playback = function() {
				return window.MediaSource && window.MediaSource.isTypeSupported(
					'video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
			}, e.supportNetworkStreamIO = function() {
				var e = new o["default"]({}, (0, a.createDefaultConfig)()),
					t = e.loaderType;
				return e.destroy(), "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t
			}, e.getNetworkLoaderTypeName = function() {
				var e = new o["default"]({}, (0, a.createDefaultConfig)()),
					t = e.loaderType;
				return e.destroy(), t
			}, e.supportNativeMediaPlayback = function(t) {
				void 0 == e.videoElement && (e.videoElement = window.document.createElement("video"));
				var i = e.videoElement.canPlayType(t);
				return "probably" === i || "maybe" == i
			}, e.getFeatureList = function() {
				var t = {
					mseFlvPlayback: !1,
					mseLiveFlvPlayback: !1,
					networkStreamIO: !1,
					networkLoaderName: "",
					nativeMP4H264Playback: !1,
					nativeWebmVP8Playback: !1,
					nativeWebmVP9Playback: !1
				};
				return t.mseFlvPlayback = e.supportMSEH264Playback(), t.networkStreamIO = e
					.supportNetworkStreamIO(), t.networkLoaderName = e.getNetworkLoaderTypeName(), t
					.mseLiveFlvPlayback = t.mseFlvPlayback && t.networkStreamIO, t
					.nativeMP4H264Playback = e.supportNativeMediaPlayback(
						'video/mp4; codecs="avc1.42001E, mp4a.40.2"'), t.nativeWebmVP8Playback = e
					.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), t
					.nativeWebmVP9Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp9"'), t
			}, e
		}();
	t["default"] = u, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(17),
		o = n(s),
		a = i(5),
		u = n(a),
		d = i(18),
		h = n(d),
		l = i(48),
		f = n(l),
		c = i(47),
		_ = i(6),
		p = function() {
			function e(t) {
				r(this, e), this.TAG = "MSEController", this._config = t, this._emitter = new o["default"],
					this._config.isLive && void 0 == this._config.autoCleanupSourceBuffer && (this._config
						.autoCleanupSourceBuffer = !0), this.e = {
						onSourceOpen: this._onSourceOpen.bind(this),
						onSourceEnded: this._onSourceEnded.bind(this),
						onSourceClose: this._onSourceClose.bind(this),
						onSourceBufferError: this._onSourceBufferError.bind(this),
						onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
					}, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement =
					null, this._isBufferFull = !1, this._hasPendingEos = !1, this
					._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this
					._pendingSourceBufferInit = [], this._mimeTypes = {
						video: null,
						audio: null
					}, this._sourceBuffers = {
						video: null,
						audio: null
					}, this._lastInitSegments = {
						video: null,
						audio: null
					}, this._pendingSegments = {
						video: [],
						audio: []
					}, this._pendingRemoveRanges = {
						video: [],
						audio: []
					}, this._idrList = new c.IDRSampleList
			}
			return e.prototype.destroy = function() {
				(this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null,
					this._emitter.removeAllListeners(), this._emitter = null
			}, e.prototype.on = function(e, t) {
				this._emitter.addListener(e, t)
			}, e.prototype.off = function(e, t) {
				this._emitter.removeListener(e, t)
			}, e.prototype.attachMediaElement = function(e) {
				if (this._mediaSource) throw new _.IllegalStateException(
					"MediaSource has been attached to an HTMLMediaElement!");
				var t = this._mediaSource = new window.MediaSource;
				t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended",
						this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose),
					this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this
						._mediaSource), e.src = this._mediaSourceObjectURL
			}, e.prototype.detachMediaElement = function() {
				if (this._mediaSource) {
					var e = this._mediaSource;
					for (var t in this._sourceBuffers) {
						var i = this._pendingSegments[t];
						i.splice(0, i.length), this._pendingSegments[t] = null, this
							._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;
						var n = this._sourceBuffers[t];
						n && ("closed" !== e.readyState && (e.removeSourceBuffer(n), n
								.removeEventListener("error", this.e.onSourceBufferError), n
								.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd)),
							this._mimeTypes[t] = null, this._sourceBuffers[t] = null)
					}
					if ("open" === e.readyState) try {
						e.endOfStream()
					} catch (r) {
						u["default"].e(this.TAG, r.message)
					}
					e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener(
							"sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose",
							this.e.onSourceClose), this._pendingSourceBufferInit = [], this
						._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null
				}
				this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute(
					"src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL
					.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null)
			}, e.prototype.appendInitSegment = function(e, t) {
				if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this
					._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
				var i = e,
					n = "" + i.container;
				i.codec && i.codec.length > 0 && (n += ";codecs=" + i.codec);
				var r = !1;
				if (u["default"].v(this.TAG, "Received Initialization Segment, mimeType: " + n), this
					._lastInitSegments[i.type] = i, n !== this._mimeTypes[i.type]) {
					if (this._mimeTypes[i.type]) u["default"].v(this.TAG, "Notice: " + i.type +
						" mimeType changed, origin: " + this._mimeTypes[i.type] + ", target: " + n);
					else {
						r = !0;
						try {
							var s = this._sourceBuffers[i.type] = this._mediaSource.addSourceBuffer(n);
							s.addEventListener("error", this.e.onSourceBufferError), s.addEventListener(
								"updateend", this.e.onSourceBufferUpdateEnd)
						} catch (o) {
							return u["default"].e(this.TAG, o.message), void this._emitter.emit(f[
								"default"].ERROR, {
								code: o.code,
								msg: o.message
							})
						}
					}
					this._mimeTypes[i.type] = n
				}
				t || this._pendingSegments[i.type].push(i), r || this._sourceBuffers[i.type] && !this
					._sourceBuffers[i.type].updating && this._doAppendSegments(), h["default"].safari &&
					"audio/mpeg" === i.container && i.mediaDuration > 0 && (this
						._requireSetMediaDuration = !0, this._pendingMediaDuration = i.mediaDuration /
						1e3, this._updateMediaSourceDuration())
			}, e.prototype.appendMediaSegment = function(e) {
				var t = e;
				this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this
					._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
				var i = this._sourceBuffers[t.type];
				!i || i.updating || this._hasPendingRemoveRanges() || this._doAppendSegments()
			}, e.prototype.seek = function(e) {
				for (var t in this._sourceBuffers)
					if (this._sourceBuffers[t]) {
						var i = this._sourceBuffers[t];
						if ("open" === this._mediaSource.readyState) try {
							i.abort()
						} catch (n) {
							u["default"].e(this.TAG, n.message)
						}
						this._idrList.clear();
						var r = this._pendingSegments[t];
						if (r.splice(0, r.length), "closed" !== this._mediaSource.readyState) {
							for (var s = 0; s < i.buffered.length; s++) {
								var o = i.buffered.start(s),
									a = i.buffered.end(s);
								this._pendingRemoveRanges[t].push({
									start: o,
									end: a
								})
							}
							if (i.updating || this._doRemoveRanges(), h["default"].safari) {
								var d = this._lastInitSegments[t];
								d && (this._pendingSegments[t].push(d), i.updating || this
									._doAppendSegments())
							}
						}
					}
			}, e.prototype.endOfStream = function() {
				var e = this._mediaSource,
					t = this._sourceBuffers;
				return e && "open" === e.readyState ? void(t.video && t.video.updating || t.audio && t
					.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e
						.endOfStream())) : void(e && "closed" === e.readyState && this
					._hasPendingSegments() && (this._hasPendingEos = !0))
			}, e.prototype.getNearestKeyframe = function(e) {
				return this._idrList.getLastSyncPointBeforeDts(e)
			}, e.prototype._needCleanupSourceBuffer = function() {
				if (!this._config.autoCleanupSourceBuffer) return !1;
				var e = this._mediaElement.currentTime;
				for (var t in this._sourceBuffers) {
					var i = this._sourceBuffers[t];
					if (i) {
						var n = i.buffered;
						if (n.length >= 1 && e - n.start(0) >= this._config
							.autoCleanupMaxBackwardDuration) return !0
					}
				}
				return !1
			}, e.prototype._doCleanupSourceBuffer = function() {
				var e = this._mediaElement.currentTime;
				for (var t in this._sourceBuffers) {
					var i = this._sourceBuffers[t];
					if (i) {
						for (var n = i.buffered, r = !1, s = 0; s < n.length; s++) {
							var o = n.start(s),
								a = n.end(s);
							if (o <= e && e < a + 3) {
								if (e - o >= this._config.autoCleanupMaxBackwardDuration) {
									r = !0;
									var u = e - this._config.autoCleanupMinBackwardDuration;
									this._pendingRemoveRanges[t].push({
										start: o,
										end: u
									})
								}
							} else a < e && (r = !0, this._pendingRemoveRanges[t].push({
								start: o,
								end: a
							}))
						}
						r && !i.updating && this._doRemoveRanges()
					}
				}
			}, e.prototype._updateMediaSourceDuration = function() {
				var e = this._sourceBuffers;
				if (0 !== this._mediaElement.readyState && "open" === this._mediaSource.readyState && !(
						e.video && e.video.updating || e.audio && e.audio.updating)) {
					var t = this._mediaSource.duration,
						i = this._pendingMediaDuration;
					i > 0 && (isNaN(t) || i > t) && (u["default"].v(this.TAG,
								"Update MediaSource duration from " + t + " to " + i), this._mediaSource
							.duration = i), this._requireSetMediaDuration = !1, this
						._pendingMediaDuration = 0
				}
			}, e.prototype._doRemoveRanges = function() {
				for (var e in this._pendingRemoveRanges)
					if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating)
						for (var t = this._sourceBuffers[e], i = this._pendingRemoveRanges[e]; i
							.length && !t.updating;) {
							var n = i.shift();
							t.remove(n.start, n.end)
						}
			}, e.prototype._doAppendSegments = function() {
				var e = this._pendingSegments;
				for (var t in e)
					if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
						var i = e[t].shift();
						if (i.timestampOffset) {
							var n = this._sourceBuffers[t].timestampOffset,
								r = i.timestampOffset / 1e3,
								s = Math.abs(n - r);
							s > .1 && (u["default"].v(this.TAG,
										"Update MPEG audio timestampOffset from " + n + " to " + r),
									this._sourceBuffers[t].timestampOffset = r), delete i
								.timestampOffset
						}
						if (!i.data || 0 === i.data.byteLength) continue;
						try {
							this._sourceBuffers[t].appendBuffer(i.data), this._isBufferFull = !1,
								"video" === t && i.hasOwnProperty("info") && this._idrList.appendArray(i
									.info.syncPoints)
						} catch (o) {
							this._pendingSegments[t].unshift(i), 22 === o.code ? (this._isBufferFull ||
								this._emitter.emit(f["default"].BUFFER_FULL), this._isBufferFull = !
								0) : (u["default"].e(this.TAG, o.message), this._emitter.emit(f[
								"default"].ERROR, {
								code: o.code,
								msg: o.message
							}))
						}
					}
			}, e.prototype._onSourceOpen = function() {
				if (u["default"].v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource
					.removeEventListener("sourceopen", this.e.onSourceOpen), this
					._pendingSourceBufferInit.length > 0)
					for (var e = this._pendingSourceBufferInit; e.length;) {
						var t = e.shift();
						this.appendInitSegment(t, !0)
					}
				this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(f["default"]
					.SOURCE_OPEN)
			}, e.prototype._onSourceEnded = function() {
				u["default"].v(this.TAG, "MediaSource onSourceEnded")
			}, e.prototype._onSourceClose = function() {
				u["default"].v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this
					.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen),
						this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this
						._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose))
			}, e.prototype._hasPendingSegments = function() {
				var e = this._pendingSegments;
				return e.video.length > 0 || e.audio.length > 0
			}, e.prototype._hasPendingRemoveRanges = function() {
				var e = this._pendingRemoveRanges;
				return e.video.length > 0 || e.audio.length > 0
			}, e.prototype._onSourceBufferUpdateEnd = function() {
				this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this
					._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ?
					this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter
					.emit(f["default"].UPDATE_END)
			}, e.prototype._onSourceBufferError = function(e) {
				u["default"].e(this.TAG, "SourceBuffer Error: " + e)
			}, e
		}();
	t["default"] = p, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(17),
		o = n(s),
		a = i(5),
		u = n(a),
		d = i(32),
		h = n(d),
		l = i(49),
		f = n(l),
		c = i(24),
		_ = n(c),
		p = i(90),
		m = n(p),
		g = i(30),
		v = n(g),
		y = function() {
			function e(t, n) {
				if (r(this, e), this.TAG = "Transmuxer", this._emitter = new o["default"], n.enableWorker &&
					"undefined" != typeof Worker) try {
					var s = i(165);
					this._worker = s(m["default"]), this._workerDestroying = !1, this._worker
						.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker
						.postMessage({
							cmd: "init",
							param: [t, n]
						}), this.e = {
							onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
						}, h["default"].registerListener(this.e.onLoggingConfigChanged), this._worker
						.postMessage({
							cmd: "logging_config",
							param: h["default"].getConfig()
						})
				} catch (a) {
					u["default"].e(this.TAG,
							"Error while initialize transmuxing worker, fallback to inline transmuxing"
							), this._worker = null, this._controller = new f["default"](t, n)
				} else this._controller = new f["default"](t, n);
				if (this._controller) {
					var d = this._controller;
					d.on(_["default"].IO_ERROR, this._onIOError.bind(this)), d.on(_["default"].DEMUX_ERROR,
						this._onDemuxError.bind(this)), d.on(_["default"].INIT_SEGMENT, this
						._onInitSegment.bind(this)), d.on(_["default"].MEDIA_SEGMENT, this
						._onMediaSegment.bind(this)), d.on(_["default"].LOADING_COMPLETE, this
						._onLoadingComplete.bind(this)), d.on(_["default"].RECOVERED_EARLY_EOF, this
						._onRecoveredEarlyEof.bind(this)), d.on(_["default"].MEDIA_INFO, this
						._onMediaInfo.bind(this)), d.on(_["default"].METADATA_ARRIVED, this
						._onMetaDataArrived.bind(this)), d.on(_["default"].STATISTICS_INFO, this
						._onStatisticsInfo.bind(this)), d.on(_["default"].RECOMMEND_SEEKPOINT, this
						._onRecommendSeekpoint.bind(this))
				}
			}
			return e.prototype.destroy = function() {
				this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker
						.postMessage({
							cmd: "destroy"
						}), h["default"].removeListener(this.e.onLoggingConfigChanged), this.e = null) :
					(this._controller.destroy(), this._controller = null), this._emitter
					.removeAllListeners(), this._emitter = null
			}, e.prototype.on = function(e, t) {
				this._emitter.addListener(e, t)
			}, e.prototype.off = function(e, t) {
				this._emitter.removeListener(e, t)
			}, e.prototype.hasWorker = function() {
				return null != this._worker
			}, e.prototype.open = function() {
				this._worker ? this._worker.postMessage({
					cmd: "start"
				}) : this._controller.start()
			}, e.prototype.close = function() {
				this._worker ? this._worker.postMessage({
					cmd: "stop"
				}) : this._controller.stop()
			}, e.prototype.seek = function(e) {
				this._worker ? this._worker.postMessage({
					cmd: "seek",
					param: e
				}) : this._controller.seek(e)
			}, e.prototype.pause = function() {
				this._worker ? this._worker.postMessage({
					cmd: "pause"
				}) : this._controller.pause()
			}, e.prototype.resume = function() {
				this._worker ? this._worker.postMessage({
					cmd: "resume"
				}) : this._controller.resume()
			}, e.prototype._onInitSegment = function(e, t) {
				var i = this;
				Promise.resolve().then(function() {
					i._emitter.emit(_["default"].INIT_SEGMENT, e, t)
				})
			}, e.prototype._onMediaSegment = function(e, t) {
				var i = this;
				Promise.resolve().then(function() {
					i._emitter.emit(_["default"].MEDIA_SEGMENT, e, t)
				})
			}, e.prototype._onLoadingComplete = function() {
				var e = this;
				Promise.resolve().then(function() {
					e._emitter.emit(_["default"].LOADING_COMPLETE)
				})
			}, e.prototype._onRecoveredEarlyEof = function() {
				var e = this;
				Promise.resolve().then(function() {
					e._emitter.emit(_["default"].RECOVERED_EARLY_EOF)
				})
			}, e.prototype._onMediaInfo = function(e) {
				var t = this;
				Promise.resolve().then(function() {
					t._emitter.emit(_["default"].MEDIA_INFO, e)
				})
			}, e.prototype._onMetaDataArrived = function(e) {
				var t = this;
				Promise.resolve().then(function() {
					t._emitter.emit(_["default"].METADATA_ARRIVED, e)
				})
			}, e.prototype._onStatisticsInfo = function(e) {
				var t = this;
				Promise.resolve().then(function() {
					t._emitter.emit(_["default"].STATISTICS_INFO, e)
				})
			}, e.prototype._onIOError = function(e, t) {
				var i = this;
				Promise.resolve().then(function() {
					i._emitter.emit(_["default"].IO_ERROR, e, t)
				})
			}, e.prototype._onDemuxError = function(e, t) {
				var i = this;
				Promise.resolve().then(function() {
					i._emitter.emit(_["default"].DEMUX_ERROR, e, t)
				})
			}, e.prototype._onRecommendSeekpoint = function(e) {
				var t = this;
				Promise.resolve().then(function() {
					t._emitter.emit(_["default"].RECOMMEND_SEEKPOINT, e)
				})
			}, e.prototype._onLoggingConfigChanged = function(e) {
				this._worker && this._worker.postMessage({
					cmd: "logging_config",
					param: e
				})
			}, e.prototype._onWorkerMessage = function(e) {
				var t = e.data,
					i = t.data;
				if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1,
					this._worker.terminate(), void(this._worker = null);
				switch (t.msg) {
					case _["default"].INIT_SEGMENT:
					case _["default"].MEDIA_SEGMENT:
						this._emitter.emit(t.msg, i.type, i.data);
						break;
					case _["default"].LOADING_COMPLETE:
					case _["default"].RECOVERED_EARLY_EOF:
						this._emitter.emit(t.msg);
						break;
					case _["default"].MEDIA_INFO:
						Object.setPrototypeOf(i, v["default"].prototype), this._emitter.emit(t.msg, i);
						break;
					case _["default"].METADATA_ARRIVED:
					case _["default"].STATISTICS_INFO:
						this._emitter.emit(t.msg, i);
						break;
					case _["default"].IO_ERROR:
					case _["default"].DEMUX_ERROR:
						this._emitter.emit(t.msg, i.type, i.info);
						break;
					case _["default"].RECOMMEND_SEEKPOINT:
						this._emitter.emit(t.msg, i);
						break;
					case "logcat_callback":
						u["default"].emitter.emit("log", i.type, i.logcat)
				}
			}, e
		}();
	t["default"] = y, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}
	t.__esModule = !0;
	var r = i(5),
		s = (n(r), i(32)),
		o = n(s),
		a = i(55),
		u = n(a),
		d = i(49),
		h = n(d),
		l = i(24),
		f = n(l),
		c = function(e) {
			function t(t, i) {
				var n = {
					msg: f["default"].INIT_SEGMENT,
					data: {
						type: t,
						data: i
					}
				};
				e.postMessage(n, [i.data])
			}

			function i(t, i) {
				var n = {
					msg: f["default"].MEDIA_SEGMENT,
					data: {
						type: t,
						data: i
					}
				};
				e.postMessage(n, [i.data])
			}

			function n() {
				var t = {
					msg: f["default"].LOADING_COMPLETE
				};
				e.postMessage(t)
			}

			function r() {
				var t = {
					msg: f["default"].RECOVERED_EARLY_EOF
				};
				e.postMessage(t)
			}

			function s(t) {
				var i = {
					msg: f["default"].MEDIA_INFO,
					data: t
				};
				e.postMessage(i)
			}

			function a(t) {
				var i = {
					msg: f["default"].METADATA_ARRIVED,
					data: t
				};
				e.postMessage(i)
			}

			function d(t) {
				var i = {
					msg: f["default"].STATISTICS_INFO,
					data: t
				};
				e.postMessage(i)
			}

			function l(t, i) {
				e.postMessage({
					msg: f["default"].IO_ERROR,
					data: {
						type: t,
						info: i
					}
				})
			}

			function c(t, i) {
				e.postMessage({
					msg: f["default"].DEMUX_ERROR,
					data: {
						type: t,
						info: i
					}
				})
			}

			function _(t) {
				e.postMessage({
					msg: f["default"].RECOMMEND_SEEKPOINT,
					data: t
				})
			}

			function p(t, i) {
				e.postMessage({
					msg: "logcat_callback",
					data: {
						type: t,
						logcat: i
					}
				})
			}
			var m = null,
				g = p.bind(this);
			u["default"].install(), e.addEventListener("message", function(u) {
				switch (u.data.cmd) {
					case "init":
						m = new h["default"](u.data.param[0], u.data.param[1]), m.on(f["default"]
								.IO_ERROR, l.bind(this)), m.on(f["default"].DEMUX_ERROR, c.bind(
								this)), m.on(f["default"].INIT_SEGMENT, t.bind(this)), m.on(f[
								"default"].MEDIA_SEGMENT, i.bind(this)), m.on(f["default"]
								.LOADING_COMPLETE, n.bind(this)), m.on(f["default"]
								.RECOVERED_EARLY_EOF, r.bind(this)), m.on(f["default"].MEDIA_INFO, s
								.bind(this)), m.on(f["default"].METADATA_ARRIVED, a.bind(this)), m
							.on(f["default"].STATISTICS_INFO, d.bind(this)), m.on(f["default"]
								.RECOMMEND_SEEKPOINT, _.bind(this));
						break;
					case "destroy":
						m && (m.destroy(), m = null), e.postMessage({
							msg: "destroyed"
						});
						break;
					case "start":
						m.start();
						break;
					case "stop":
						m.stop();
						break;
					case "seek":
						m.seek(u.data.param);
						break;
					case "pause":
						m.pause();
						break;
					case "resume":
						m.resume();
						break;
					case "logging_config":
						var p = u.data.param;
						o["default"].applyConfig(p), p.enableCallback === !0 ? o["default"]
							.addLogListener(g) : o["default"].removeLogListener(g)
				}
			})
		};
	t["default"] = c, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(5),
		o = n(s),
		a = i(107),
		u = n(a),
		d = i(6),
		h = function() {
			var e = new ArrayBuffer(2);
			return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
		}(),
		l = function() {
			function e() {
				r(this, e)
			}
			return e.parseScriptData = function(t, i, n) {
				var r = {};
				try {
					var s = e.parseValue(t, i, n),
						a = e.parseValue(t, i + s.size, n - s.size);
					r[s.data] = a.data
				} catch (u) {
					o["default"].e("AMF", u.toString())
				}
				return r
			}, e.parseObject = function(t, i, n) {
				if (n < 3) throw new d.IllegalStateException(
					"Data not enough when parse ScriptDataObject");
				var r = e.parseString(t, i, n),
					s = e.parseValue(t, i + r.size, n - r.size),
					o = s.objectEnd;
				return {
					data: {
						name: r.data,
						value: s.data
					},
					size: r.size + s.size,
					objectEnd: o
				}
			}, e.parseVariable = function(t, i, n) {
				return e.parseObject(t, i, n)
			}, e.parseString = function(e, t, i) {
				if (i < 2) throw new d.IllegalStateException("Data not enough when parse String");
				var n = new DataView(e, t, i),
					r = n.getUint16(0, !h),
					s = void 0;
				return s = r > 0 ? (0, u["default"])(new Uint8Array(e, t + 2, r)) : "", {
					data: s,
					size: 2 + r
				}
			}, e.parseLongString = function(e, t, i) {
				if (i < 4) throw new d.IllegalStateException("Data not enough when parse LongString");
				var n = new DataView(e, t, i),
					r = n.getUint32(0, !h),
					s = void 0;
				return s = r > 0 ? (0, u["default"])(new Uint8Array(e, t + 4, r)) : "", {
					data: s,
					size: 4 + r
				}
			}, e.parseDate = function(e, t, i) {
				if (i < 10) throw new d.IllegalStateException("Data size invalid when parse Date");
				var n = new DataView(e, t, i),
					r = n.getFloat64(0, !h),
					s = n.getInt16(8, !h);
				return r += 60 * s * 1e3, {
					data: new Date(r),
					size: 10
				}
			}, e.parseValue = function(t, i, n) {
				if (n < 1) throw new d.IllegalStateException("Data not enough when parse Value");
				var r = new DataView(t, i, n),
					s = 1,
					a = r.getUint8(0),
					u = void 0,
					l = !1;
				try {
					switch (a) {
						case 0:
							u = r.getFloat64(1, !h), s += 8;
							break;
						case 1:
							var f = r.getUint8(1);
							u = !!f, s += 1;
							break;
						case 2:
							var c = e.parseString(t, i + 1, n - 1);
							u = c.data, s += c.size;
							break;
						case 3:
							u = {};
							var _ = 0;
							for (9 === (16777215 & r.getUint32(n - 4, !h)) && (_ = 3); s < n - 4;) {
								var p = e.parseObject(t, i + s, n - s - _);
								if (p.objectEnd) break;
								u[p.data.name] = p.data.value, s += p.size
							}
							if (s <= n - 3) {
								var m = 16777215 & r.getUint32(s - 1, !h);
								9 === m && (s += 3)
							}
							break;
						case 8:
							u = {}, s += 4;
							var g = 0;
							for (9 === (16777215 & r.getUint32(n - 4, !h)) && (g = 3); s < n - 8;) {
								var v = e.parseVariable(t, i + s, n - s - g);
								if (v.objectEnd) break;
								u[v.data.name] = v.data.value, s += v.size
							}
							if (s <= n - 3) {
								var y = 16777215 & r.getUint32(s - 1, !h);
								9 === y && (s += 3)
							}
							break;
						case 9:
							u = void 0, s = 1, l = !0;
							break;
						case 10:
							u = [];
							var E = r.getUint32(1, !h);
							s += 4;
							for (var S = 0; S < E; S++) {
								var b = e.parseValue(t, i + s, n - s);
								u.push(b.data), s += b.size
							}
							break;
						case 11:
							var L = e.parseDate(t, i + 1, n - 1);
							u = L.data, s += L.size;
							break;
						case 12:
							var R = e.parseString(t, i + 1, n - 1);
							u = R.data, s += R.size;
							break;
						default:
							s = n, o["default"].w("AMF", "Unsupported AMF value type " + a)
					}
				} catch (A) {
					o["default"].e("AMF", A.toString())
				}
				return {
					data: u,
					size: s,
					objectEnd: l
				}
			}, e
		}();
	t["default"] = l, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var r = i(6),
		s = function() {
			function e(t) {
				n(this, e), this.TAG = "ExpGolomb", this._buffer = t, this._buffer_index = 0, this
					._total_bytes = t.byteLength, this._total_bits = 8 * t.byteLength, this._current_word =
					0, this._current_word_bits_left = 0
			}
			return e.prototype.destroy = function() {
				this._buffer = null
			}, e.prototype._fillCurrentWord = function() {
				var e = this._total_bytes - this._buffer_index;
				if (e <= 0) throw new r.IllegalStateException(
					"ExpGolomb: _fillCurrentWord() but no bytes available");
				var t = Math.min(4, e),
					i = new Uint8Array(4);
				i.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this
					._current_word = new DataView(i.buffer).getUint32(0, !1), this._buffer_index += t,
					this._current_word_bits_left = 8 * t
			}, e.prototype.readBits = function(e) {
				if (e > 32) throw new r.InvalidArgumentException(
					"ExpGolomb: readBits() bits exceeded max 32bits!");
				if (e <= this._current_word_bits_left) {
					var t = this._current_word >>> 32 - e;
					return this._current_word <<= e, this._current_word_bits_left -= e, t
				}
				var i = this._current_word_bits_left ? this._current_word : 0;
				i >>>= 32 - this._current_word_bits_left;
				var n = e - this._current_word_bits_left;
				this._fillCurrentWord();
				var s = Math.min(n, this._current_word_bits_left),
					o = this._current_word >>> 32 - s;
				return this._current_word <<= s, this._current_word_bits_left -= s, i = i << s | o
			}, e.prototype.readBool = function() {
				return 1 === this.readBits(1)
			}, e.prototype.readByte = function() {
				return this.readBits(8)
			}, e.prototype._skipLeadingZero = function() {
				var e = void 0;
				for (e = 0; e < this._current_word_bits_left; e++)
					if (0 !== (this._current_word & 2147483648 >>> e)) return this._current_word <<= e,
						this._current_word_bits_left -= e, e;
				return this._fillCurrentWord(), e + this._skipLeadingZero()
			}, e.prototype.readUEG = function() {
				var e = this._skipLeadingZero();
				return this.readBits(e + 1) - 1
			}, e.prototype.readSEG = function() {
				var e = this.readUEG();
				return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
			}, e
		}();
	t["default"] = s, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
	}
	t.__esModule = !0;
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		a = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		u = i(5),
		d = n(u),
		h = i(91),
		l = n(h),
		f = i(94),
		c = n(f),
		_ = i(31),
		p = n(_),
		m = i(30),
		g = n(m),
		v = i(6),
		y = function() {
			function e(t, i) {
				r(this, e), this.TAG = "FLVDemuxer", this._config = i, this._onError = null, this
					._onMediaInfo = null, this._onMetaDataArrived = null, this._onTrackMetadata = null, this
					._onDataAvailable = null, this._dataOffset = t.dataOffset, this._firstParse = !0, this
					._dispatch = !1, this._hasAudio = t.hasAudioTrack, this._hasVideo = t.hasVideoTrack,
					this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this
					._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this
					._mediaInfo = new g["default"], this._mediaInfo.hasAudio = this._hasAudio, this
					._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata =
					null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0,
					this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this
					._referenceFrameRate = {
						fixed: !0,
						fps: 23.976,
						fps_num: 23976,
						fps_den: 1e3
					}, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this
					._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
						11025, 8e3, 7350
					], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this
					._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this
					._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [
						0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1
					], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224,
						256, 320, 384, -1
					], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192,
						224, 256, 320, -1
					], this._videoTrack = {
						type: "video",
						id: 1,
						sequenceNumber: 0,
						samples: [],
						length: 0
					}, this._audioTrack = {
						type: "audio",
						id: 2,
						sequenceNumber: 0,
						samples: [],
						length: 0
					}, this._littleEndian = function() {
						var e = new ArrayBuffer(2);
						return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
					}()
			}
			return e.prototype.destroy = function() {
				this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this
					._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this
					._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this
					._onTrackMetadata = null, this._onDataAvailable = null
			}, e.probe = function(e) {
				var t = new Uint8Array(e),
					i = {
						match: !1
					};
				if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return i;
				var n = (4 & t[4]) >>> 2 !== 0,
					r = 0 !== (1 & t[4]),
					o = s(t, 5);
				return o < 9 ? i : {
					match: !0,
					consumed: o,
					dataOffset: o,
					hasAudioTrack: n,
					hasVideoTrack: r
				}
			}, e.prototype.bindDataSource = function(e) {
				return e.onDataArrival = this.parseChunks.bind(this), this
			}, e.prototype.resetMediaInfo = function() {
				this._mediaInfo = new g["default"]
			}, e.prototype._isInitialMetadataDispatched = function() {
				return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this
					._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this
					._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this
					._videoInitialMetadataDispatched
			}, e.prototype.parseChunks = function(t, i) {
				if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this
						._onDataAvailable)) throw new v.IllegalStateException(
					"Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified"
					);
				var n = 0,
					r = this._littleEndian;
				if (0 === i) {
					if (!(t.byteLength > 13)) return 0;
					var s = e.probe(t);
					n = s.dataOffset
				}
				if (this._firstParse) {
					this._firstParse = !1, i + n !== this._dataOffset && d["default"].w(this.TAG,
						"First time parsing but chunk byteStart invalid!");
					var o = new DataView(t, n),
						a = o.getUint32(0, !r);
					0 !== a && d["default"].w(this.TAG, "PrevTagSize0 !== 0 !!!"), n += 4
				}
				for (; n < t.byteLength;) {
					this._dispatch = !0;
					var u = new DataView(t, n);
					if (n + 11 + 4 > t.byteLength) break;
					var h = u.getUint8(0),
						l = 16777215 & u.getUint32(0, !r);
					if (n + 11 + l + 4 > t.byteLength) break;
					if (8 === h || 9 === h || 18 === h) {
						var f = u.getUint8(4),
							c = u.getUint8(5),
							_ = u.getUint8(6),
							p = u.getUint8(7),
							m = _ | c << 8 | f << 16 | p << 24,
							g = 16777215 & u.getUint32(7, !r);
						0 !== g && d["default"].w(this.TAG, "Meet tag which has StreamID != 0!");
						var y = n + 11;
						switch (h) {
							case 8:
								this._parseAudioData(t, y, l, m);
								break;
							case 9:
								this._parseVideoData(t, y, l, m, i + n);
								break;
							case 18:
								this._parseScriptData(t, y, l)
						}
						var E = u.getUint32(11 + l, !r);
						E !== 11 + l && d["default"].w(this.TAG, "Invalid PrevTagSize " + E), n += 11 +
							l + 4
					} else d["default"].w(this.TAG, "Unsupported tag type " + h + ", skipped"), n +=
						11 + l + 4
				}
				return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack
					.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack,
					this._videoTrack), n
			}, e.prototype._parseScriptData = function(e, t, i) {
				var n = l["default"].parseScriptData(e, t, i);
				if (n.hasOwnProperty("onMetaData")) {
					if (null == n.onMetaData || "object" !== o(n.onMetaData)) return void d["default"]
						.w(this.TAG, "Invalid onMetaData structure!");
					this._metadata && d["default"].w(this.TAG, "Found another onMetaData tag!"), this
						._metadata = n;
					var r = this._metadata.onMetaData;
					if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, r)),
						"boolean" == typeof r.hasAudio && this._hasAudioFlagOverrided === !1 && (this
							._hasAudio = r.hasAudio, this._mediaInfo.hasAudio = this._hasAudio),
						"boolean" == typeof r.hasVideo && this._hasVideoFlagOverrided === !1 && (this
							._hasVideo = r.hasVideo, this._mediaInfo.hasVideo = this._hasVideo),
						"number" == typeof r.audiodatarate && (this._mediaInfo.audioDataRate = r
							.audiodatarate), "number" == typeof r.videodatarate && (this._mediaInfo
							.videoDataRate = r.videodatarate), "number" == typeof r.width && (this
							._mediaInfo.width = r.width), "number" == typeof r.height && (this
							._mediaInfo.height = r.height), "number" == typeof r.duration) {
						if (!this._durationOverrided) {
							var s = Math.floor(r.duration * this._timescale);
							this._duration = s, this._mediaInfo.duration = s
						}
					} else this._mediaInfo.duration = 0;
					if ("number" == typeof r.framerate) {
						var a = Math.floor(1e3 * r.framerate);
						if (a > 0) {
							var u = a / 1e3;
							this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = u, this
								._referenceFrameRate.fps_num = a, this._referenceFrameRate.fps_den =
								1e3, this._mediaInfo.fps = u
						}
					}
					if ("object" === o(r.keyframes)) {
						this._mediaInfo.hasKeyframesIndex = !0;
						var h = r.keyframes;
						this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(h), r.keyframes =
							null
					} else this._mediaInfo.hasKeyframesIndex = !1;
					this._dispatch = !1, this._mediaInfo.metadata = r, d["default"].v(this.TAG,
						"Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this
						._mediaInfo)
				}
			}, e.prototype._parseKeyframesIndex = function(e) {
				for (var t = [], i = [], n = 1; n < e.times.length; n++) {
					var r = this._timestampBase + Math.floor(1e3 * e.times[n]);
					t.push(r), i.push(e.filepositions[n])
				}
				return {
					times: t,
					filepositions: i
				}
			}, e.prototype._parseAudioData = function(e, t, i, n) {
				if (i <= 1) return void d["default"].w(this.TAG,
					"Flv: Invalid audio packet, missing SoundData payload!");
				if (this._hasAudioFlagOverrided !== !0 || this._hasAudio !== !1) {
					var r = (this._littleEndian, new DataView(e, t, i)),
						s = r.getUint8(0),
						o = s >>> 4;
					if (2 !== o && 10 !== o) return void this._onError(p["default"].CODEC_UNSUPPORTED,
						"Flv: Unsupported audio codec idx: " + o);
					var a = 0,
						u = (12 & s) >>> 2;
					if (!(u >= 0 && u <= 4)) return void this._onError(p["default"].FORMAT_ERROR,
						"Flv: Invalid audio sample rate idx: " + u);
					a = this._flvSoundRateTable[u];
					var h = 1 & s,
						l = this._audioMetadata,
						f = this._audioTrack;
					if (l || (this._hasAudio === !1 && this._hasAudioFlagOverrided === !1 && (this
								._hasAudio = !0, this._mediaInfo.hasAudio = !0), l = this
							._audioMetadata = {}, l.type = "audio", l.id = f.id, l.timescale = this
							._timescale, l.duration = this._duration, l.audioSampleRate = a, l
							.channelCount = 0 === h ? 1 : 2), 10 === o) {
						var c = this._parseAACAudioData(e, t + 1, i - 1);
						if (void 0 == c) return;
						if (0 === c.packetType) {
							l.config && d["default"].w(this.TAG, "Found another AudioSpecificConfig!");
							var _ = c.data;
							l.audioSampleRate = _.samplingRate, l.channelCount = _.channelCount, l
								.codec = _.codec, l.originalCodec = _.originalCodec, l.config = _
								.config, l.refSampleDuration = 1024 / l.audioSampleRate * l.timescale,
								d["default"].v(this.TAG, "Parsed AudioSpecificConfig"), this
								._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack
									.length || this._videoTrack.length) && this._onDataAvailable(this
									._audioTrack, this._videoTrack) : this
								._audioInitialMetadataDispatched = !0, this._dispatch = !1, this
								._onTrackMetadata("audio", l);
							var m = this._mediaInfo;
							m.audioCodec = l.originalCodec, m.audioSampleRate = l.audioSampleRate, m
								.audioChannelCount = l.channelCount, m.hasVideo ? null != m
								.videoCodec && (m.mimeType = 'video/x-flv; codecs="' + m.videoCodec +
									"," + m.audioCodec + '"') : m.mimeType = 'video/x-flv; codecs="' + m
								.audioCodec + '"', m.isComplete() && this._onMediaInfo(m)
						} else if (1 === c.packetType) {
							var g = this._timestampBase + n,
								v = {
									unit: c.data,
									length: c.data.byteLength,
									dts: g,
									pts: g
								};
							f.samples.push(v), f.length += c.data.length
						} else d["default"].e(this.TAG, "Flv: Unsupported AAC data type " + c
							.packetType)
					} else if (2 === o) {
						if (!l.codec) {
							var y = this._parseMP3AudioData(e, t + 1, i - 1, !0);
							if (void 0 == y) return;
							l.audioSampleRate = y.samplingRate, l.channelCount = y.channelCount, l
								.codec = y.codec, l.originalCodec = y.originalCodec, l
								.refSampleDuration = 1152 / l.audioSampleRate * l.timescale, d[
									"default"].v(this.TAG, "Parsed MPEG Audio Frame Header"), this
								._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio",
								l);
							var E = this._mediaInfo;
							E.audioCodec = l.codec, E.audioSampleRate = l.audioSampleRate, E
								.audioChannelCount = l.channelCount, E.audioDataRate = y.bitRate, E
								.hasVideo ? null != E.videoCodec && (E.mimeType =
									'video/x-flv; codecs="' + E.videoCodec + "," + E.audioCodec + '"') :
								E.mimeType = 'video/x-flv; codecs="' + E.audioCodec + '"', E
								.isComplete() && this._onMediaInfo(E)
						}
						var S = this._parseMP3AudioData(e, t + 1, i - 1, !1);
						if (void 0 == S) return;
						var b = this._timestampBase + n,
							L = {
								unit: S,
								length: S.byteLength,
								dts: b,
								pts: b
							};
						f.samples.push(L), f.length += S.length
					}
				}
			}, e.prototype._parseAACAudioData = function(e, t, i) {
				if (i <= 1) return void d["default"].w(this.TAG,
					"Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
				var n = {},
					r = new Uint8Array(e, t, i);
				return n.packetType = r[0], 0 === r[0] ? n.data = this._parseAACAudioSpecificConfig(e,
					t + 1, i - 1) : n.data = r.subarray(1), n
			}, e.prototype._parseAACAudioSpecificConfig = function(e, t, i) {
				var n = new Uint8Array(e, t, i),
					r = null,
					s = 0,
					o = 0,
					a = null,
					u = 0,
					d = null;
				if (s = o = n[0] >>> 3, u = (7 & n[0]) << 1 | n[1] >>> 7, u < 0 || u >= this
					._mpegSamplingRates.length) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: AAC invalid sampling frequency index!");
				var h = this._mpegSamplingRates[u],
					l = (120 & n[1]) >>> 3;
				if (l < 0 || l >= 8) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: AAC invalid channel configuration");
				5 === s && (d = (7 & n[1]) << 1 | n[2] >>> 7, a = (124 & n[2]) >>> 2);
				var f = self.navigator.userAgent.toLowerCase();
				return f.indexOf("firefox") !== -1 ? u >= 6 ? (s = 5, r = new Array(4), d = u - 3) : (
						s = 2, r = new Array(2), d = u) : f.indexOf("android") !== -1 ? (s = 2, r =
						new Array(2), d = u) : (s = 5, d = u, r = new Array(4), u >= 6 ? d = u - 3 :
						1 === l && (s = 2, r = new Array(2), d = u)), r[0] = s << 3, r[0] |= (15 &
					u) >>> 1, r[1] = (15 & u) << 7, r[1] |= (15 & l) << 3, 5 === s && (r[1] |= (15 &
						d) >>> 1, r[2] = (1 & d) << 7, r[2] |= 8, r[3] = 0), {
						config: r,
						samplingRate: h,
						channelCount: l,
						codec: "mp4a.40." + s,
						originalCodec: "mp4a.40." + o
					}
			}, e.prototype._parseMP3AudioData = function(e, t, i, n) {
				if (i < 4) return void d["default"].w(this.TAG,
					"Flv: Invalid MP3 packet, header missing!");
				var r = (this._littleEndian, new Uint8Array(e, t, i)),
					s = null;
				if (n) {
					if (255 !== r[0]) return;
					var o = r[1] >>> 3 & 3,
						a = (6 & r[1]) >> 1,
						u = (240 & r[2]) >>> 4,
						h = (12 & r[2]) >>> 2,
						l = r[3] >>> 6 & 3,
						f = 3 !== l ? 2 : 1,
						c = 0,
						_ = 0,
						p = 34,
						m = "mp3";
					switch (o) {
						case 0:
							c = this._mpegAudioV25SampleRateTable[h];
							break;
						case 2:
							c = this._mpegAudioV20SampleRateTable[h];
							break;
						case 3:
							c = this._mpegAudioV10SampleRateTable[h]
					}
					switch (a) {
						case 1:
							p = 34, u < this._mpegAudioL3BitRateTable.length && (_ = this
								._mpegAudioL3BitRateTable[u]);
							break;
						case 2:
							p = 33, u < this._mpegAudioL2BitRateTable.length && (_ = this
								._mpegAudioL2BitRateTable[u]);
							break;
						case 3:
							p = 32, u < this._mpegAudioL1BitRateTable.length && (_ = this
								._mpegAudioL1BitRateTable[u])
					}
					s = {
						bitRate: _,
						samplingRate: c,
						channelCount: f,
						codec: m,
						originalCodec: m
					}
				} else s = r;
				return s
			}, e.prototype._parseVideoData = function(e, t, i, n, r) {
				if (i <= 1) return void d["default"].w(this.TAG,
					"Flv: Invalid video packet, missing VideoData payload!");
				if (this._hasVideoFlagOverrided !== !0 || this._hasVideo !== !1) {
					var s = new Uint8Array(e, t, i)[0],
						o = (240 & s) >>> 4,
						a = 15 & s;
					return 7 !== a ? void this._onError(p["default"].CODEC_UNSUPPORTED,
							"Flv: Unsupported codec in video frame: " + a) : void this
						._parseAVCVideoPacket(e, t + 1, i - 1, n, r, o)
				}
			}, e.prototype._parseAVCVideoPacket = function(e, t, i, n, r, s) {
				if (i < 4) return void d["default"].w(this.TAG,
					"Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
				var o = this._littleEndian,
					a = new DataView(e, t, i),
					u = a.getUint8(0),
					h = 16777215 & a.getUint32(0, !o),
					l = h << 8 >> 8;
				if (0 === u) this._parseAVCDecoderConfigurationRecord(e, t + 4, i - 4);
				else if (1 === u) this._parseAVCVideoData(e, t + 4, i - 4, n, r, s, l);
				else if (2 !== u) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: Invalid video packet type " + u)
			}, e.prototype._parseAVCDecoderConfigurationRecord = function(e, t, i) {
				if (i < 7) return void d["default"].w(this.TAG,
					"Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
				var n = this._videoMetadata,
					r = this._videoTrack,
					s = this._littleEndian,
					o = new DataView(e, t, i);
				n ? "undefined" != typeof n.avcc && d["default"].w(this.TAG,
					"Found another AVCDecoderConfigurationRecord!") : (this._hasVideo === !1 && this
					._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo
						.hasVideo = !0), n = this._videoMetadata = {}, n.type = "video", n.id = r
					.id, n.timescale = this._timescale, n.duration = this._duration);
				var a = o.getUint8(0),
					u = o.getUint8(1);
				o.getUint8(2), o.getUint8(3);
				if (1 !== a || 0 === u) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: Invalid AVCDecoderConfigurationRecord");
				if (this._naluLengthSize = (3 & o.getUint8(4)) + 1, 3 !== this._naluLengthSize && 4 !==
					this._naluLengthSize) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
				var h = 31 & o.getUint8(5);
				if (0 === h) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
				h > 1 && d["default"].w(this.TAG,
					"Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + h);
				for (var l = 6, f = 0; f < h; f++) {
					var _ = o.getUint16(l, !s);
					if (l += 2, 0 !== _) {
						var m = new Uint8Array(e, t + l, _);
						l += _;
						var g = c["default"].parseSPS(m);
						if (0 === f) {
							n.codecWidth = g.codec_size.width, n.codecHeight = g.codec_size.height, n
								.presentWidth = g.present_size.width, n.presentHeight = g.present_size
								.height, n.profile = g.profile_string, n.level = g.level_string, n
								.bitDepth = g.bit_depth, n.chromaFormat = g.chroma_format, n.sarRatio =
								g.sar_ratio, n.frameRate = g.frame_rate, g.frame_rate.fixed !== !1 &&
								0 !== g.frame_rate.fps_num && 0 !== g.frame_rate.fps_den || (n
									.frameRate = this._referenceFrameRate);
							var v = n.frameRate.fps_den,
								y = n.frameRate.fps_num;
							n.refSampleDuration = n.timescale * (v / y);
							for (var E = m.subarray(1, 4), S = "avc1.", b = 0; b < 3; b++) {
								var L = E[b].toString(16);
								L.length < 2 && (L = "0" + L), S += L
							}
							n.codec = S;
							var R = this._mediaInfo;
							R.width = n.codecWidth, R.height = n.codecHeight, R.fps = n.frameRate.fps, R
								.profile = n.profile, R.level = n.level, R.refFrames = g.ref_frames, R
								.chromaFormat = g.chroma_format_string, R.sarNum = n.sarRatio.width, R
								.sarDen = n.sarRatio.height, R.videoCodec = S, R.hasAudio ? null != R
								.audioCodec && (R.mimeType = 'video/x-flv; codecs="' + R.videoCodec +
									"," + R.audioCodec + '"') : R.mimeType = 'video/x-flv; codecs="' + R
								.videoCodec + '"', R.isComplete() && this._onMediaInfo(R)
						}
					}
				}
				var A = o.getUint8(l);
				if (0 === A) return void this._onError(p["default"].FORMAT_ERROR,
					"Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
				A > 1 && d["default"].w(this.TAG,
					"Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + A), l++;
				for (var w = 0; w < A; w++) {
					var k = o.getUint16(l, !s);
					l += 2, 0 !== k && (l += k)
				}
				n.avcc = new Uint8Array(i), n.avcc.set(new Uint8Array(e, t, i), 0), d["default"].v(this
						.TAG, "Parsed AVCDecoderConfigurationRecord"), this
					._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this
						._videoTrack.length) && this._onDataAvailable(this._audioTrack, this
						._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1,
					this._onTrackMetadata("video", n)
			}, e.prototype._parseAVCVideoData = function(e, t, i, n, r, s, o) {
				for (var a = this._littleEndian, u = new DataView(e, t, i), h = [], l = 0, f = 0, c =
						this._naluLengthSize, _ = this._timestampBase + n, p = 1 === s; f < i;) {
					if (f + 4 >= i) {
						d["default"].w(this.TAG, "Malformed Nalu near timestamp " + _ + ", offset = " +
							f + ", dataSize = " + i);
						break
					}
					var m = u.getUint32(f, !a);
					if (3 === c && (m >>>= 8), m > i - c) return void d["default"].w(this.TAG,
						"Malformed Nalus near timestamp " + _ + ", NaluSize > DataSize!");
					var g = 31 & u.getUint8(f + c);
					5 === g && (p = !0);
					var v = new Uint8Array(e, t + f, c + m),
						y = {
							type: g,
							data: v
						};
					h.push(y), l += v.byteLength, f += c + m
				}
				if (h.length) {
					var E = this._videoTrack,
						S = {
							units: h,
							length: l,
							isKeyframe: p,
							dts: _,
							cts: o,
							pts: _ + o
						};
					p && (S.fileposition = r), E.samples.push(S), E.length += l
				}
			}, a(e, [{
				key: "onTrackMetadata",
				get: function() {
					return this._onTrackMetadata
				},
				set: function(e) {
					this._onTrackMetadata = e
				}
			}, {
				key: "onMediaInfo",
				get: function() {
					return this._onMediaInfo
				},
				set: function(e) {
					this._onMediaInfo = e
				}
			}, {
				key: "onMetaDataArrived",
				get: function() {
					return this._onMetaDataArrived
				},
				set: function(e) {
					this._onMetaDataArrived = e
				}
			}, {
				key: "onError",
				get: function() {
					return this._onError
				},
				set: function(e) {
					this._onError = e
				}
			}, {
				key: "onDataAvailable",
				get: function() {
					return this._onDataAvailable
				},
				set: function(e) {
					this._onDataAvailable = e
				}
			}, {
				key: "timestampBase",
				get: function() {
					return this._timestampBase
				},
				set: function(e) {
					this._timestampBase = e
				}
			}, {
				key: "overridedDuration",
				get: function() {
					return this._duration
				},
				set: function(e) {
					this._durationOverrided = !0, this._duration = e, this._mediaInfo
						.duration = e
				}
			}, {
				key: "overridedHasAudio",
				set: function(e) {
					this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo
						.hasAudio = e
				}
			}, {
				key: "overridedHasVideo",
				set: function(e) {
					this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo
						.hasVideo = e
				}
			}]), e
		}();
	t["default"] = y, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = i(92),
		o = n(s),
		a = function() {
			function e() {
				r(this, e)
			}
			return e._ebsp2rbsp = function(e) {
				for (var t = e, i = t.byteLength, n = new Uint8Array(i), r = 0, s = 0; s < i; s++) s >=
					2 && 3 === t[s] && 0 === t[s - 1] && 0 === t[s - 2] || (n[r] = t[s], r++);
				return new Uint8Array(n.buffer, 0, r)
			}, e.parseSPS = function(t) {
				var i = e._ebsp2rbsp(t),
					n = new o["default"](i);
				n.readByte();
				var r = n.readByte();
				n.readByte();
				var s = n.readByte();
				n.readUEG();
				var a = e.getProfileString(r),
					u = e.getLevelString(s),
					d = 1,
					h = 420,
					l = [0, 420, 422, 444],
					f = 8;
				if ((100 === r || 110 === r || 122 === r || 244 === r || 44 === r || 83 === r || 86 ===
						r || 118 === r || 128 === r || 138 === r || 144 === r) && (d = n.readUEG(),
						3 === d && n.readBits(1), d <= 3 && (h = l[d]), f = n.readUEG() + 8, n
					.readUEG(), n.readBits(1), n.readBool()))
					for (var c = 3 !== d ? 8 : 12, _ = 0; _ < c; _++) n.readBool() && (_ < 6 ? e
						._skipScalingList(n, 16) : e._skipScalingList(n, 64));
				n.readUEG();
				var p = n.readUEG();
				if (0 === p) n.readUEG();
				else if (1 === p) {
					n.readBits(1), n.readSEG(), n.readSEG();
					for (var m = n.readUEG(), g = 0; g < m; g++) n.readSEG()
				}
				var v = n.readUEG();
				n.readBits(1);
				var y = n.readUEG(),
					E = n.readUEG(),
					S = n.readBits(1);
				0 === S && n.readBits(1), n.readBits(1);
				var b = 0,
					L = 0,
					R = 0,
					A = 0,
					w = n.readBool();
				w && (b = n.readUEG(), L = n.readUEG(), R = n.readUEG(), A = n.readUEG());
				var k = 1,
					T = 1,
					C = 0,
					O = !0,
					I = 0,
					M = 0,
					D = n.readBool();
				if (D) {
					if (n.readBool()) {
						var x = n.readByte(),
							B = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
							U = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
						x > 0 && x < 16 ? (k = B[x - 1], T = U[x - 1]) : 255 === x && (k = n
						.readByte() << 8 | n.readByte(), T = n.readByte() << 8 | n.readByte())
					}
					if (n.readBool() && n.readBool(), n.readBool() && (n.readBits(4), n.readBool() && n
							.readBits(24)), n.readBool() && (n.readUEG(), n.readUEG()), n.readBool()) {
						var N = n.readBits(32),
							P = n.readBits(32);
						O = n.readBool(), I = P, M = 2 * N, C = I / M
					}
				}
				var F = 1;
				1 === k && 1 === T || (F = k / T);
				var G = 0,
					V = 0;
				if (0 === d) G = 1, V = 2 - S;
				else {
					var z = 3 === d ? 1 : 2,
						j = 1 === d ? 2 : 1;
					G = z, V = j * (2 - S)
				}
				var K = 16 * (y + 1),
					H = (2 - S) * (16 * (E + 1));
				K -= (b + L) * G, H -= (R + A) * V;
				var q = Math.ceil(K * F);
				return n.destroy(), n = null, {
					profile_string: a,
					level_string: u,
					bit_depth: f,
					ref_frames: v,
					chroma_format: h,
					chroma_format_string: e.getChromaFormatString(h),
					frame_rate: {
						fixed: O,
						fps: C,
						fps_den: M,
						fps_num: I
					},
					sar_ratio: {
						width: k,
						height: T
					},
					codec_size: {
						width: K,
						height: H
					},
					present_size: {
						width: q,
						height: H
					}
				}
			}, e._skipScalingList = function(e, t) {
				for (var i = 8, n = 8, r = 0, s = 0; s < t; s++) 0 !== n && (r = e.readSEG(), n = (i +
					r + 256) % 256), i = 0 === n ? i : n
			}, e.getProfileString = function(e) {
				switch (e) {
					case 66:
						return "Baseline";
					case 77:
						return "Main";
					case 88:
						return "Extended";
					case 100:
						return "High";
					case 110:
						return "High10";
					case 122:
						return "High422";
					case 244:
						return "High444";
					default:
						return "Unknown"
				}
			}, e.getLevelString = function(e) {
				return (e / 10).toFixed(1)
			}, e.getChromaFormatString = function(e) {
				switch (e) {
					case 420:
						return "4:2:0";
					case 422:
						return "4:2:2";
					case 444:
						return "4:4:4";
					default:
						return "Unknown"
				}
			}, e
		}();
	t["default"] = a, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		var i = e;
		if (null == i || "object" !== ("undefined" == typeof i ? "undefined" : a(i))) throw new E
			.InvalidArgumentException("MediaDataSource must be an javascript object!");
		if (!i.hasOwnProperty("type")) throw new E.InvalidArgumentException(
			"MediaDataSource must has type field to indicate video file type!");
		switch (i.type) {
			case "flv":
				return new _["default"](i, t);
			default:
				return new NativePlayer(i, t)
		}
	}

	function s() {
		return l["default"].supportMSEH264Playback()
	}

	function o() {
		return l["default"].getFeatureList()
	}
	t.__esModule = !0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		u = i(55),
		d = n(u),
		h = i(87),
		l = n(h),
		f = i(12),
		c = i(103),
		_ = n(c),
		p = i(54),
		m = n(p),
		g = i(53),
		v = i(32),
		y = n(v),
		E = i(6);
	d["default"].install();
	var S = {};
	S.createPlayer = r, S.isSupported = s, S.getFeatureList = o, S.BaseLoader = f.BaseLoader, S
		.LoaderStatus = f.LoaderStatus, S.LoaderErrors = f.LoaderErrors, S.Events = m["default"], S
		.ErrorTypes = g.ErrorTypes, S.ErrorDetails = g.ErrorDetails, S.FlvPlayer = _["default"], S
		.LoggingControl = y["default"], window.flvjs || (window.flvjs = S), t["default"] = S, e.exports = t[
			"default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.__esModule = !0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		u = i(5),
		d = (n(u), i(18)),
		h = n(d),
		l = i(12),
		f = i(6),
		c = function(e) {
			function t(i, n) {
				r(this, t);
				var o = s(this, e.call(this, "fetch-stream-loader"));
				return o.TAG = "FetchStreamLoader", o._seekHandler = i, o._config = n, o._needStash = !0, o
					._requestAbort = !1, o._contentLength = null, o._receivedLength = 0, o
			}
			return o(t, e), t.isSupported = function() {
				try {
					var e = h["default"].msedge && h["default"].version.minor >= 15048,
						t = !h["default"].msedge || e;
					return self.fetch && self.ReadableStream && t
				} catch (i) {
					return !1
				}
			}, t.prototype.destroy = function() {
				this.isWorking() && this.abort(), e.prototype.destroy.call(this)
			}, t.prototype.open = function(e, t) {
				var i = this;
				this._dataSource = e, this._range = t;
				var n = e.url;
				this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (n = e.redirectedURL);
				var r = this._seekHandler.getConfig(n, t),
					s = new self.Headers;
				if ("object" === a(r.headers)) {
					var o = r.headers;
					for (var u in o) o.hasOwnProperty(u) && s.append(u, o[u])
				}
				var d = {
					method: "GET",
					headers: s,
					mode: "cors",
					cache: "default",
					referrerPolicy: "no-referrer-when-downgrade"
				};
				e.cors === !1 && (d.mode = "same-origin"), e.withCredentials && (d.credentials =
						"include"), e.referrerPolicy && (d.referrerPolicy = e.referrerPolicy), this
					._status = l.LoaderStatus.kConnecting, self.fetch(r.url, d).then(function(e) {
						if (i._requestAbort) return i._requestAbort = !1, void(i._status = l
							.LoaderStatus.kIdle);
						if (e.ok && e.status >= 200 && e.status <= 299) {
							if (e.url !== r.url && i._onURLRedirect) {
								var t = i._seekHandler.removeURLParameters(e.url);
								i._onURLRedirect(t)
							}
							var n = e.headers.get("Content-Length");
							return null != n && (i._contentLength = parseInt(n), 0 !== i
								._contentLength && i._onContentLengthKnown && i
								._onContentLengthKnown(i._contentLength)), i._pump.call(i, e
								.body.getReader())
						}
						if (i._status = l.LoaderStatus.kError, !i._onError) throw new f
							.RuntimeException("FetchStreamLoader: Http code invalid, " + e
								.status + " " + e.statusText);
						i._onError(l.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
							code: e.status,
							msg: e.statusText
						})
					})["catch"](function(e) {
						if (i._status = l.LoaderStatus.kError, !i._onError) throw e;
						i._onError(l.LoaderErrors.EXCEPTION, {
							code: -1,
							msg: e.message
						})
					})
			}, t.prototype.abort = function() {
				this._requestAbort = !0
			}, t.prototype._pump = function(e) {
				var t = this;
				return e.read().then(function(i) {
					if (i.done)
						if (null !== t._contentLength && t._receivedLength < t._contentLength) {
							t._status = l.LoaderStatus.kError;
							var n = l.LoaderErrors.EARLY_EOF,
								r = {
									code: -1,
									msg: "Fetch stream meet Early-EOF"
								};
							if (!t._onError) throw new f.RuntimeException(r.msg);
							t._onError(n, r)
						} else t._status = l.LoaderStatus.kComplete, t._onComplete && t
							._onComplete(t._range.from, t._range.from + t._receivedLength - 1);
					else {
						if (t._requestAbort === !0) return t._requestAbort = !1, t._status = l
							.LoaderStatus.kComplete, e.cancel();
						t._status = l.LoaderStatus.kBuffering;
						var s = i.value.buffer,
							o = t._range.from + t._receivedLength;
						t._receivedLength += s.byteLength, t._onDataArrival && t._onDataArrival(
							s, o, t._receivedLength), t._pump(e)
					}
				})["catch"](function(e) {
					if (11 !== e.code || !h["default"].msedge) {
						t._status = l.LoaderStatus.kError;
						var i = 0,
							n = null;
						if (19 !== e.code && "network error" !== e.message || !(null === t
								._contentLength || null !== t._contentLength && t
								._receivedLength < t._contentLength) ? (i = l.LoaderErrors
								.EXCEPTION, n = {
									code: e.code,
									msg: e.message
								}) : (i = l.LoaderErrors.EARLY_EOF, n = {
								code: e.code,
								msg: "Fetch stream meet Early-EOF"
							}), !t._onError) throw new f.RuntimeException(n.msg);
						t._onError(i, n)
					}
				})
			}, t
		}(l.BaseLoader);
	t["default"] = c, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e(t, n) {
			i(this, e), this._startName = t, this._endName = n
		}
		return e.prototype.getConfig = function(e, t) {
			var i = e;
			if (0 !== t.from || t.to !== -1) {
				var n = !0;
				i.indexOf("?") === -1 && (i += "?", n = !1), n && (i += "&"), i += this._startName +
					"=" + t.from.toString(), t.to !== -1 && (i += "&" + this._endName + "=" + t.to
						.toString())
			}
			return {
				url: i,
				headers: {}
			}
		}, e.prototype.removeURLParameters = function(e) {
			var t = e.split("?")[0],
				i = void 0,
				n = e.indexOf("?");
			n !== -1 && (i = e.substring(n + 1));
			var r = "";
			if (void 0 != i && i.length > 0)
				for (var s = i.split("&"), o = 0; o < s.length; o++) {
					var a = s[o].split("="),
						u = o > 0;
					a[0] !== this._startName && a[0] !== this._endName && (u && (r += "&"), r += s[
						o])
				}
			return 0 === r.length ? t : t + "?" + r
		}, e
	}();
	t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e(t) {
			i(this, e), this._zeroStart = t || !1
		}
		return e.prototype.getConfig = function(e, t) {
			var i = {};
			if (0 !== t.from || t.to !== -1) {
				var n = void 0;
				n = t.to !== -1 ? "bytes=" + t.from.toString() + "-" + t.to.toString() : "bytes=" +
					t.from.toString() + "-", i.Range = n
			} else this._zeroStart && (i.Range = "bytes=0-");
			return {
				url: e,
				headers: i
			}
		}, e.prototype.removeURLParameters = function(e) {
			return e
		}, e
	}();
	t["default"] = n, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.__esModule = !0;
	var a = i(5),
		u = (n(a), i(12)),
		d = i(6),
		h = function(e) {
			function t() {
				r(this, t);
				var i = s(this, e.call(this, "websocket-loader"));
				return i.TAG = "WebSocketLoader", i._needStash = !0, i._ws = null, i._requestAbort = !1, i
					._receivedLength = 0, i
			}
			return o(t, e), t.isSupported = function() {
				try {
					return "undefined" != typeof self.WebSocket
				} catch (e) {
					return !1
				}
			}, t.prototype.destroy = function() {
				this._ws && this.abort(), e.prototype.destroy.call(this)
			}, t.prototype.open = function(e) {
				try {
					var t = this._ws = new self.WebSocket(e.url);
					t.binaryType = "arraybuffer", t.onopen = this._onWebSocketOpen.bind(this), t
						.onclose = this._onWebSocketClose.bind(this), t.onmessage = this
						._onWebSocketMessage.bind(this), t.onerror = this._onWebSocketError.bind(this),
						this._status = u.LoaderStatus.kConnecting
				} catch (i) {
					this._status = u.LoaderStatus.kError;
					var n = {
						code: i.code,
						msg: i.message
					};
					if (!this._onError) throw new d.RuntimeException(n.msg);
					this._onError(u.LoaderErrors.EXCEPTION, n)
				}
			}, t.prototype.abort = function() {
				var e = this._ws;
				!e || 0 !== e.readyState && 1 !== e.readyState || (this._requestAbort = !0, e.close()),
					this._ws = null, this._status = u.LoaderStatus.kComplete
			}, t.prototype._onWebSocketOpen = function(e) {
				this._status = u.LoaderStatus.kBuffering
			}, t.prototype._onWebSocketClose = function(e) {
				return this._requestAbort === !0 ? void(this._requestAbort = !1) : (this._status = u
					.LoaderStatus.kComplete, void(this._onComplete && this._onComplete(0, this
						._receivedLength - 1)))
			}, t.prototype._onWebSocketMessage = function(e) {
				var t = this;
				if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
				else if (e.data instanceof Blob) {
					var i = new FileReader;
					i.onload = function() {
						t._dispatchArrayBuffer(i.result)
					}, i.readAsArrayBuffer(e.data)
				} else {
					this._status = u.LoaderStatus.kError;
					var n = {
						code: -1,
						msg: "Unsupported WebSocket message type: " + e.data.constructor.name
					};
					if (!this._onError) throw new d.RuntimeException(n.msg);
					this._onError(u.LoaderErrors.EXCEPTION, n)
				}
			}, t.prototype._dispatchArrayBuffer = function(e) {
				var t = e,
					i = this._receivedLength;
				this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, i,
					this._receivedLength)
			}, t.prototype._onWebSocketError = function(e) {
				this._status = u.LoaderStatus.kError;
				var t = {
					code: e.code,
					msg: e.message
				};
				if (!this._onError) throw new d.RuntimeException(t.msg);
				this._onError(u.LoaderErrors.EXCEPTION, t)
			}, t
		}(u.BaseLoader);
	t["default"] = h, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.__esModule = !0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		u = i(5),
		d = n(u),
		h = i(12),
		l = i(6),
		f = function(e) {
			function t(i, n) {
				r(this, t);
				var o = s(this, e.call(this, "xhr-moz-chunked-loader"));
				return o.TAG = "MozChunkedLoader", o._seekHandler = i, o._config = n, o._needStash = !0, o
					._xhr = null, o._requestAbort = !1, o._contentLength = null, o._receivedLength = 0, o
			}
			return o(t, e), t.isSupported = function() {
				try {
					var e = new XMLHttpRequest;
					return e.open("GET", "https://example.com", !0), e.responseType =
						"moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType
				} catch (t) {
					return d["default"].w("MozChunkedLoader", t.message), !1
				}
			}, t.prototype.destroy = function() {
				this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null,
					this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror =
					null, this._xhr = null), e.prototype.destroy.call(this)
			}, t.prototype.open = function(e, t) {
				this._dataSource = e, this._range = t;
				var i = e.url;
				this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (i = e.redirectedURL);
				var n = this._seekHandler.getConfig(i, t);
				this._requestURL = n.url;
				var r = this._xhr = new XMLHttpRequest;
				if (r.open("GET", n.url, !0), r.responseType = "moz-chunked-arraybuffer", r
					.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this
					._onProgress.bind(this), r.onloadend = this._onLoadEnd.bind(this), r.onerror = this
					._onXhrError.bind(this), e.withCredentials && (r.withCredentials = !0), "object" ===
					a(n.headers)) {
					var s = n.headers;
					for (var o in s) s.hasOwnProperty(o) && r.setRequestHeader(o, s[o])
				}
				this._status = h.LoaderStatus.kConnecting, r.send()
			}, t.prototype.abort = function() {
				this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = h.LoaderStatus
					.kComplete
			}, t.prototype._onReadyStateChange = function(e) {
				var t = e.target;
				if (2 === t.readyState) {
					if (void 0 != t.responseURL && t.responseURL !== this._requestURL && this
						._onURLRedirect) {
						var i = this._seekHandler.removeURLParameters(t.responseURL);
						this._onURLRedirect(i)
					}
					if (0 !== t.status && (t.status < 200 || t.status > 299)) {
						if (this._status = h.LoaderStatus.kError, !this._onError) throw new l
							.RuntimeException("MozChunkedLoader: Http code invalid, " + t.status +
								" " + t.statusText);
						this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
							code: t.status,
							msg: t.statusText
						})
					} else this._status = h.LoaderStatus.kBuffering
				}
			}, t.prototype._onProgress = function(e) {
				if (this._status !== h.LoaderStatus.kError) {
					null === this._contentLength && null !== e.total && 0 !== e.total && (this
						._contentLength = e.total, this._onContentLengthKnown && this
						._onContentLengthKnown(this._contentLength));
					var t = e.target.response,
						i = this._range.from + this._receivedLength;
					this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t,
						i, this._receivedLength)
				}
			}, t.prototype._onLoadEnd = function(e) {
				return this._requestAbort === !0 ? void(this._requestAbort = !1) : void(this._status !==
					h.LoaderStatus.kError && (this._status = h.LoaderStatus.kComplete, this
						._onComplete && this._onComplete(this._range.from, this._range.from + this
							._receivedLength - 1)))
			}, t.prototype._onXhrError = function(e) {
				this._status = h.LoaderStatus.kError;
				var t = 0,
					i = null;
				if (this._contentLength && e.loaded < this._contentLength ? (t = h.LoaderErrors
						.EARLY_EOF, i = {
							code: -1,
							msg: "Moz-Chunked stream meet Early-Eof"
						}) : (t = h.LoaderErrors.EXCEPTION, i = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					}), !this._onError) throw new l.RuntimeException(i.msg);
				this._onError(t, i)
			}, t
		}(h.BaseLoader);
	t["default"] = f, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.__esModule = !0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		u = i(5),
		d = n(u),
		h = i(12),
		l = i(6),
		f = function(e) {
			function t(i, n) {
				r(this, t);
				var o = s(this, e.call(this, "xhr-msstream-loader"));
				return o.TAG = "MSStreamLoader", o._seekHandler = i, o._config = n, o._needStash = !0, o
					._xhr = null, o._reader = null, o._totalRange = null, o._currentRange = null, o
					._currentRequestURL = null, o._currentRedirectedURL = null, o._contentLength = null, o
					._receivedLength = 0, o._bufferLimit = 16777216, o._lastTimeBufferSize = 0, o
					._isReconnecting = !1, o
			}
			return o(t, e), t.isSupported = function() {
				try {
					if ("undefined" == typeof self.MSStream || "undefined" == typeof self
						.MSStreamReader) return !1;
					var e = new XMLHttpRequest;
					return e.open("GET", "https://example.com", !0), e.responseType = "ms-stream",
						"ms-stream" === e.responseType
				} catch (t) {
					return d["default"].w("MSStreamLoader", t.message), !1
				}
			}, t.prototype.destroy = function() {
				this.isWorking() && this.abort(), this._reader && (this._reader.onprogress = null, this
						._reader.onload = null, this._reader.onerror = null, this._reader = null), this
					._xhr && (this._xhr.onreadystatechange = null, this._xhr = null), e.prototype
					.destroy.call(this)
			}, t.prototype.open = function(e, t) {
				this._internalOpen(e, t, !1)
			}, t.prototype._internalOpen = function(e, t, i) {
				this._dataSource = e, i ? this._currentRange = t : this._totalRange = t;
				var n = e.url;
				this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? n = this
					._currentRedirectedURL : void 0 != e.redirectedURL && (n = e.redirectedURL));
				var r = this._seekHandler.getConfig(n, t);
				this._currentRequestURL = r.url;
				var s = this._reader = new self.MSStreamReader;
				s.onprogress = this._msrOnProgress.bind(this), s.onload = this._msrOnLoad.bind(this), s
					.onerror = this._msrOnError.bind(this);
				var o = this._xhr = new XMLHttpRequest;
				if (o.open("GET", r.url, !0), o.responseType = "ms-stream", o.onreadystatechange = this
					._xhrOnReadyStateChange.bind(this), o.onerror = this._xhrOnError.bind(this), e
					.withCredentials && (o.withCredentials = !0), "object" === a(r.headers)) {
					var u = r.headers;
					for (var d in u) u.hasOwnProperty(d) && o.setRequestHeader(d, u[d])
				}
				this._isReconnecting ? this._isReconnecting = !1 : this._status = h.LoaderStatus
					.kConnecting, o.send()
			}, t.prototype.abort = function() {
				this._internalAbort(), this._status = h.LoaderStatus.kComplete
			}, t.prototype._internalAbort = function() {
				this._reader && (1 === this._reader.readyState && this._reader.abort(), this._reader
					.onprogress = null, this._reader.onload = null, this._reader.onerror = null,
					this._reader = null), this._xhr && (this._xhr.abort(), this._xhr
					.onreadystatechange = null, this._xhr = null)
			}, t.prototype._xhrOnReadyStateChange = function(e) {
				var t = e.target;
				if (2 === t.readyState)
					if (t.status >= 200 && t.status <= 299) {
						if (this._status = h.LoaderStatus.kBuffering, void 0 != t.responseURL) {
							var i = this._seekHandler.removeURLParameters(t.responseURL);
							t.responseURL !== this._currentRequestURL && i !== this
								._currentRedirectedURL && (this._currentRedirectedURL = i, this
									._onURLRedirect && this._onURLRedirect(i))
						}
						var n = t.getResponseHeader("Content-Length");
						if (null != n && null == this._contentLength) {
							var r = parseInt(n);
							r > 0 && (this._contentLength = r, this._onContentLengthKnown && this
								._onContentLengthKnown(this._contentLength))
						}
					} else {
						if (this._status = h.LoaderStatus.kError, !this._onError) throw new l
							.RuntimeException("MSStreamLoader: Http code invalid, " + t.status +
								" " + t.statusText);
						this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
							code: t.status,
							msg: t.statusText
						})
					}
				else if (3 === t.readyState && t.status >= 200 && t.status <= 299) {
					this._status = h.LoaderStatus.kBuffering;
					var s = t.response;
					this._reader.readAsArrayBuffer(s)
				}
			}, t.prototype._xhrOnError = function(e) {
				this._status = h.LoaderStatus.kError;
				var t = h.LoaderErrors.EXCEPTION,
					i = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					};
				if (!this._onError) throw new l.RuntimeException(i.msg);
				this._onError(t, i)
			}, t.prototype._msrOnProgress = function(e) {
				var t = e.target,
					i = t.result;
				if (null == i) return void this._doReconnectIfNeeded();
				var n = i.slice(this._lastTimeBufferSize);
				this._lastTimeBufferSize = i.byteLength;
				var r = this._totalRange.from + this._receivedLength;
				this._receivedLength += n.byteLength, this._onDataArrival && this._onDataArrival(n, r,
					this._receivedLength), i.byteLength >= this._bufferLimit && (d["default"].v(this
					.TAG, "MSStream buffer exceeded max size near " + (r + n.byteLength) +
					", reconnecting..."), this._doReconnectIfNeeded())
			}, t.prototype._doReconnectIfNeeded = function() {
				if (null == this._contentLength || this._receivedLength < this._contentLength) {
					this._isReconnecting = !0, this._lastTimeBufferSize = 0, this._internalAbort();
					var e = {
						from: this._totalRange.from + this._receivedLength,
						to: -1
					};
					this._internalOpen(this._dataSource, e, !0)
				}
			}, t.prototype._msrOnLoad = function(e) {
				this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this
					._totalRange.from, this._totalRange.from + this._receivedLength - 1)
			}, t.prototype._msrOnError = function(e) {
				this._status = h.LoaderStatus.kError;
				var t = 0,
					i = null;
				if (this._contentLength && this._receivedLength < this._contentLength ? (t = h
						.LoaderErrors.EARLY_EOF, i = {
							code: -1,
							msg: "MSStream meet Early-Eof"
						}) : (t = h.LoaderErrors.EARLY_EOF, i = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					}), !this._onError) throw new l.RuntimeException(i.msg);
				this._onError(t, i)
			}, t
		}(h.BaseLoader);
	t["default"] = f, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.__esModule = !0;
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		u = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		d = i(5),
		h = n(d),
		l = i(52),
		f = n(l),
		c = i(12),
		_ = i(6),
		p = function(e) {
			function t(i, n) {
				r(this, t);
				var o = s(this, e.call(this, "xhr-range-loader"));
				return o.TAG = "RangeLoader", o._seekHandler = i, o._config = n, o._needStash = !1, o
					._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144,
						7168, 8192
					], o._currentChunkSizeKB = 384, o._currentSpeedNormalized = 0, o._zeroSpeedChunkCount =
					0, o._xhr = null, o._speedSampler = new f["default"], o._requestAbort = !1, o
					._waitForTotalLength = !1, o._totalLengthReceived = !1, o._currentRequestURL = null, o
					._currentRedirectedURL = null, o._currentRequestRange = null, o._totalLength = null, o
					._contentLength = null, o._receivedLength = 0, o._lastTimeLoaded = 0, o
			}
			return o(t, e), t.isSupported = function() {
				try {
					var e = new XMLHttpRequest;
					return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer",
						"arraybuffer" === e.responseType
				} catch (t) {
					return h["default"].w("RangeLoader", t.message), !1
				}
			}, t.prototype.destroy = function() {
				this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null,
					this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null,
					this._xhr = null), e.prototype.destroy.call(this)
			}, t.prototype.open = function(e, t) {
				this._dataSource = e, this._range = t, this._status = c.LoaderStatus.kConnecting;
				var i = !1;
				void 0 != this._dataSource.filesize && 0 !== this._dataSource.filesize && (i = !0, this
						._totalLength = this._dataSource.filesize), this._totalLengthReceived || i ?
					this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this
						._dataSource, {
							from: 0,
							to: -1
						}))
			}, t.prototype._openSubRange = function() {
				var e = 1024 * this._currentChunkSizeKB,
					t = this._range.from + this._receivedLength,
					i = t + e;
				null != this._contentLength && i - this._range.from >= this._contentLength && (i = this
					._range.from + this._contentLength - 1), this._currentRequestRange = {
					from: t,
					to: i
				}, this._internalOpen(this._dataSource, this._currentRequestRange)
			}, t.prototype._internalOpen = function(e, t) {
				this._lastTimeLoaded = 0;
				var i = e.url;
				this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? i = this
					._currentRedirectedURL : void 0 != e.redirectedURL && (i = e.redirectedURL));
				var n = this._seekHandler.getConfig(i, t);
				this._currentRequestURL = n.url;
				var r = this._xhr = new XMLHttpRequest;
				if (r.open("GET", n.url, !0), r.responseType = "arraybuffer", r.onreadystatechange =
					this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r
					.onload = this._onLoad.bind(this), r.onerror = this._onXhrError.bind(this), e
					.withCredentials && (r.withCredentials = !0), "object" === a(n.headers)) {
					var s = n.headers;
					for (var o in s) s.hasOwnProperty(o) && r.setRequestHeader(o, s[o])
				}
				r.send()
			}, t.prototype.abort = function() {
				this._requestAbort = !0, this._internalAbort(), this._status = c.LoaderStatus.kComplete
			}, t.prototype._internalAbort = function() {
				this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this
					._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr =
					null)
			}, t.prototype._onReadyStateChange = function(e) {
				var t = e.target;
				if (2 === t.readyState) {
					if (void 0 != t.responseURL) {
						var i = this._seekHandler.removeURLParameters(t.responseURL);
						t.responseURL !== this._currentRequestURL && i !== this._currentRedirectedURL &&
							(this._currentRedirectedURL = i, this._onURLRedirect && this._onURLRedirect(
								i))
					}
					if (t.status >= 200 && t.status <= 299) {
						if (this._waitForTotalLength) return;
						this._status = c.LoaderStatus.kBuffering
					} else {
						if (this._status = c.LoaderStatus.kError, !this._onError) throw new _
							.RuntimeException("RangeLoader: Http code invalid, " + t.status + " " +
								t.statusText);
						this._onError(c.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
							code: t.status,
							msg: t.statusText
						})
					}
				}
			}, t.prototype._onProgress = function(e) {
				if (this._status !== c.LoaderStatus.kError) {
					if (null === this._contentLength) {
						var t = !1;
						if (this._waitForTotalLength) {
							this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
							var i = e.total;
							this._internalAbort(), null != i & 0 !== i && (this._totalLength = i)
						}
						if (this._range.to === -1 ? this._contentLength = this._totalLength - this
							._range.from : this._contentLength = this._range.to - this._range.from + 1,
							t) return void this._openSubRange();
						this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)
					}
					var n = e.loaded - this._lastTimeLoaded;
					this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(n)
				}
			}, t.prototype._normalizeSpeed = function(e) {
				var t = this._chunkSizeKBList,
					i = t.length - 1,
					n = 0,
					r = 0,
					s = i;
				if (e < t[0]) return t[0];
				for (; r <= s;) {
					if (n = r + Math.floor((s - r) / 2), n === i || e >= t[n] && e < t[n + 1]) return t[
						n];
					t[n] < e ? r = n + 1 : s = n - 1
				}
			}, t.prototype._onLoad = function(e) {
				if (this._status !== c.LoaderStatus.kError) {
					if (this._waitForTotalLength) return void(this._waitForTotalLength = !1);
					this._lastTimeLoaded = 0;
					var t = this._speedSampler.lastSecondKBps;
					if (0 === t && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t =
							this._speedSampler.currentKBps)), 0 !== t) {
						var i = this._normalizeSpeed(t);
						this._currentSpeedNormalized !== i && (this._currentSpeedNormalized = i, this
							._currentChunkSizeKB = i)
					}
					var n = e.target.response,
						r = this._range.from + this._receivedLength;
					this._receivedLength += n.byteLength;
					var s = !1;
					null != this._contentLength && this._receivedLength < this._contentLength ? this
						._openSubRange() : s = !0, this._onDataArrival && this._onDataArrival(n, r, this
							._receivedLength), s && (this._status = c.LoaderStatus.kComplete, this
							._onComplete && this._onComplete(this._range.from, this._range.from + this
								._receivedLength - 1))
				}
			}, t.prototype._onXhrError = function(e) {
				this._status = c.LoaderStatus.kError;
				var t = 0,
					i = null;
				if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this
					._contentLength ? (t = c.LoaderErrors.EARLY_EOF, i = {
						code: -1,
						msg: "RangeLoader meet Early-Eof"
					}) : (t = c.LoaderErrors.EXCEPTION, i = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					}), !this._onError) throw new _.RuntimeException(i.msg);
				this._onError(t, i)
			}, u(t, [{
				key: "currentSpeed",
				get: function() {
					return this._speedSampler.lastSecondKBps
				}
			}]), t
		}(c.BaseLoader);
	t["default"] = p, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		},
		o = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		a = i(17),
		u = n(a),
		d = i(5),
		h = n(d),
		l = i(18),
		f = n(l),
		c = i(54),
		_ = n(c),
		p = i(89),
		m = n(p),
		g = i(24),
		v = n(g),
		y = i(88),
		E = n(y),
		S = i(48),
		b = n(S),
		L = i(53),
		R = i(46),
		A = i(6),
		w = function() {
			function e(t, i) {
				if (r(this, e), this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new u[
						"default"], this._config = (0, R.createDefaultConfig)(), "object" === (
						"undefined" == typeof i ? "undefined" : s(i)) && Object.assign(this._config, i),
					"flv" !== t.type.toLowerCase()) throw new A.InvalidArgumentException(
					"FlvPlayer requires an flv MediaDataSource input!");
				t.isLive === !0 && (this._config.isLive = !0), this.e = {
						onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
						onvSeeking: this._onvSeeking.bind(this),
						onvCanPlay: this._onvCanPlay.bind(this),
						onvStalled: this._onvStalled.bind(this),
						onvProgress: this._onvProgress.bind(this)
					}, self.performance && self.performance.now ? this._now = self.performance.now.bind(self
						.performance) : this._now = Date.now, this._pendingSeekTime = null, this
					._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this
					._mediaDataSource = t, this._mediaElement = null, this._msectl = null, this
					._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this
					._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
				var n = f["default"].chrome && (f["default"].version.major < 50 || 50 === f["default"]
					.version.major && f["default"].version.build < 2661);
				this._alwaysSeekKeyframe = !!(n || f["default"].msedge || f["default"].msie), this
					._alwaysSeekKeyframe && (this._config.accurateSeek = !1)
			}
			return e.prototype.destroy = function() {
				null != this._progressChecker && (window.clearInterval(this._progressChecker), this
						._progressChecker = null), this._transmuxer && this.unload(), this
					._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource =
					null, this._emitter.removeAllListeners(), this._emitter = null
			}, e.prototype.on = function(e, t) {
				var i = this;
				e === _["default"].MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then(
						function() {
							i._emitter.emit(_["default"].MEDIA_INFO, i.mediaInfo)
						}) : e === _["default"].STATISTICS_INFO && null != this._statisticsInfo &&
					Promise.resolve().then(function() {
						i._emitter.emit(_["default"].STATISTICS_INFO, i.statisticsInfo)
					}), this._emitter.addListener(e, t)
			}, e.prototype.off = function(e, t) {
				this._emitter.removeListener(e, t)
			}, e.prototype.attachMediaElement = function(e) {
				var t = this;
				if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e
						.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e
					.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this
						.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this
					._msectl = new E["default"](this._config), this._msectl.on(b["default"].UPDATE_END,
						this._onmseUpdateEnd.bind(this)), this._msectl.on(b["default"].BUFFER_FULL, this
						._onmseBufferFull.bind(this)), this._msectl.on(b["default"].SOURCE_OPEN,
						function() {
							t._mseSourceOpened = !0, t._hasPendingLoad && (t._hasPendingLoad = !1, t
								.load())
						}), this._msectl.on(b["default"].ERROR, function(e) {
						t._emitter.emit(_["default"].ERROR, L.ErrorTypes.MEDIA_ERROR, L.ErrorDetails
							.MEDIA_MSE_ERROR, e)
					}), this._msectl.attachMediaElement(e), null != this._pendingSeekTime) try {
					e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
				} catch (i) {}
			}, e.prototype.detachMediaElement = function() {
				this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement
					.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this
					._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this
					._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this
					._mediaElement.removeEventListener("stalled", this.e.onvStalled), this
					._mediaElement.removeEventListener("progress", this.e.onvProgress), this
					._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl =
					null)
			}, e.prototype.load = function() {
				var e = this;
				if (!this._mediaElement) throw new A.IllegalStateException(
					"HTMLMediaElement must be attached before load()!");
				if (this._transmuxer) throw new A.IllegalStateException(
					"FlvPlayer.load() has been called, please call unload() first!");
				if (!this._hasPendingLoad) {
					if (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === !1)
					return void(this._hasPendingLoad = !0);
					this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement
						.currentTime = 0), this._transmuxer = new m["default"](this
						._mediaDataSource, this._config), this._transmuxer.on(v["default"]
						.INIT_SEGMENT,
						function(t, i) {
							e._msectl.appendInitSegment(i)
						}), this._transmuxer.on(v["default"].MEDIA_SEGMENT, function(t, i) {
						if (e._msectl.appendMediaSegment(i), e._config.lazyLoad && !e._config
							.isLive) {
							var n = e._mediaElement.currentTime;
							i.info.endDts >= 1e3 * (n + e._config.lazyLoadMaxDuration) &&
								null == e._progressChecker && (h["default"].v(e.TAG,
									"Maximum buffering duration exceeded, suspend transmuxing task"
									), e._suspendTransmuxer())
						}
					}), this._transmuxer.on(v["default"].LOADING_COMPLETE, function() {
						e._msectl.endOfStream(), e._emitter.emit(_["default"].LOADING_COMPLETE)
					}), this._transmuxer.on(v["default"].RECOVERED_EARLY_EOF, function() {
						e._emitter.emit(_["default"].RECOVERED_EARLY_EOF)
					}), this._transmuxer.on(v["default"].IO_ERROR, function(t, i) {
						e._emitter.emit(_["default"].ERROR, L.ErrorTypes.NETWORK_ERROR, t, i)
					}), this._transmuxer.on(v["default"].DEMUX_ERROR, function(t, i) {
						e._emitter.emit(_["default"].ERROR, L.ErrorTypes.MEDIA_ERROR, t, {
							code: -1,
							msg: i
						})
					}), this._transmuxer.on(v["default"].MEDIA_INFO, function(t) {
						e._mediaInfo = t, e._emitter.emit(_["default"].MEDIA_INFO, Object
							.assign({}, t))
					}), this._transmuxer.on(v["default"].METADATA_ARRIVED, function(t) {
						e._emitter.emit(_["default"].METADATA_ARRIVED, t)
					}), this._transmuxer.on(v["default"].STATISTICS_INFO, function(t) {
						e._statisticsInfo = e._fillStatisticsInfo(t), e._config.isLive && e
							._statisticsInfo && (0 === e._statisticsInfo.speed ? e._emitter
								.emit("noLiveStream") : e._emitter.emit("alive")), e._emitter
							.emit(_["default"].STATISTICS_INFO, Object.assign({}, e
								._statisticsInfo))
					}), this._transmuxer.on(v["default"].RECOMMEND_SEEKPOINT, function(t) {
						e._mediaElement && !e._config.accurateSeek && (e._requestSetTime = !0, e
							._mediaElement.currentTime = t / 1e3)
					}), this._transmuxer.open()
				}
			}, e.prototype.unload = function() {
				this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0),
					this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this
						._transmuxer = null)
			}, e.prototype.play = function() {
				return this._mediaElement.play()
			}, e.prototype.pause = function() {
				this._mediaElement.pause()
			}, e.prototype._fillStatisticsInfo = function(e) {
				if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
				return e;
				var t = !0,
					i = 0,
					n = 0;
				if (this._mediaElement.getVideoPlaybackQuality) {
					var r = this._mediaElement.getVideoPlaybackQuality();
					i = r.totalVideoFrames, n = r.droppedVideoFrames
				} else void 0 != this._mediaElement.webkitDecodedFrameCount ? (i = this._mediaElement
						.webkitDecodedFrameCount, n = this._mediaElement.webkitDroppedFrameCount) :
					t = !1;
				return t && (e.decodedFrames = i, e.droppedFrames = n), e
			}, e.prototype._onmseUpdateEnd = function() {
				if (this._config.lazyLoad && !this._config.isLive) {
					for (var e = this._mediaElement.buffered, t = this._mediaElement.currentTime, i = 0,
							n = 0, r = 0; r < e.length; r++) {
						var s = e.start(r),
							o = e.end(r);
						if (s <= t && t < o) {
							i = s, n = o;
							break
						}
					}
					n >= t + this._config.lazyLoadMaxDuration && null == this._progressChecker && (h[
							"default"].v(this.TAG,
							"Maximum buffering duration exceeded, suspend transmuxing task"), this
						._suspendTransmuxer())
				}
			}, e.prototype._onmseBufferFull = function() {
				h["default"].v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null ==
					this._progressChecker && this._suspendTransmuxer()
			}, e.prototype._suspendTransmuxer = function() {
				this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this
					._progressChecker = window.setInterval(this._checkProgressAndResume.bind(
						this), 1e3)))
			}, e.prototype._checkProgressAndResume = function() {
				for (var e = this._mediaElement.currentTime, t = this._mediaElement.buffered, i = !1,
						n = 0; n < t.length; n++) {
					var r = t.start(n),
						s = t.end(n);
					if (e >= r && e < s) {
						e >= s - this._config.lazyLoadRecoverDuration && (i = !0);
						break
					}
				}
				i && (window.clearInterval(this._progressChecker), this._progressChecker = null, i && (
					h["default"].v(this.TAG, "Continue loading from paused position"), this
					._transmuxer.resume()))
			}, e.prototype._isTimepointBuffered = function(e) {
				for (var t = this._mediaElement.buffered, i = 0; i < t.length; i++) {
					var n = t.start(i),
						r = t.end(i);
					if (e >= n && e < r) return !0
				}
				return !1
			}, e.prototype._internalSeek = function(e) {
				var t = this._isTimepointBuffered(e),
					i = !1,
					n = 0;
				if (e < 1 && this._mediaElement.buffered.length > 0) {
					var r = this._mediaElement.buffered.start(0);
					(r < 1 && e < r || f["default"].safari) && (i = !0, n = f["default"].safari ? .1 :
						r)
				}
				if (i) this._requestSetTime = !0, this._mediaElement.currentTime = n;
				else if (t) {
					if (this._alwaysSeekKeyframe) {
						var s = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
						this._requestSetTime = !0, null != s ? this._mediaElement.currentTime = s.dts /
							1e3 : this._mediaElement.currentTime = e
					} else this._requestSetTime = !0, this._mediaElement.currentTime = e;
					null != this._progressChecker && this._checkProgressAndResume()
				} else null != this._progressChecker && (window.clearInterval(this._progressChecker),
					this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math
					.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this
					._mediaElement.currentTime = e)
			}, e.prototype._checkAndApplyUnbufferedSeekpoint = function() {
				if (this._seekpointRecord)
					if (this._seekpointRecord.recordTime <= this._now() - 100) {
						var e = this._mediaElement.currentTime;
						this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this
							._progressChecker && (window.clearTimeout(this._progressChecker), this
								._progressChecker = null), this._msectl.seek(e), this._transmuxer
							.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this
								._requestSetTime = !0, this._mediaElement.currentTime = e))
					} else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
			}, e.prototype._checkAndResumeStuckPlayback = function(e) {
				var t = this._mediaElement;
				if (e || !this._receivedCanPlay || t.readyState < 2) {
					var i = t.buffered;
					i.length > 0 && t.currentTime < i.start(0) && (h["default"].w(this.TAG,
							"Playback seems stuck at " + t.currentTime + ", seek to " + i.start(0)),
						this._requestSetTime = !0, this._mediaElement.currentTime = i.start(0), this
						._mediaElement.removeEventListener("progress", this.e.onvProgress))
				} else this._mediaElement.removeEventListener("progress", this.e.onvProgress)
			}, e.prototype._onvLoadedMetadata = function(e) {
				null != this._pendingSeekTime && (this._mediaElement.currentTime = this
					._pendingSeekTime, this._pendingSeekTime = null)
			}, e.prototype._onvSeeking = function(e) {
				var t = this._mediaElement.currentTime,
					i = this._mediaElement.buffered;
				if (this._requestSetTime) return void(this._requestSetTime = !1);
				if (t < 1 && i.length > 0) {
					var n = i.start(0);
					if (n < 1 && t < n || f["default"].safari) return this._requestSetTime = !0, void(
						this._mediaElement.currentTime = f["default"].safari ? .1 : n)
				}
				if (this._isTimepointBuffered(t)) {
					if (this._alwaysSeekKeyframe) {
						var r = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));
						null != r && (this._requestSetTime = !0, this._mediaElement.currentTime = r
							.dts / 1e3)
					}
					return void(null != this._progressChecker && this._checkProgressAndResume())
				}
				this._seekpointRecord = {
					seekPoint: t,
					recordTime: this._now()
				}, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
			}, e.prototype._onvCanPlay = function(e) {
				this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e
					.onvCanPlay)
			}, e.prototype._onvStalled = function(e) {
				this._checkAndResumeStuckPlayback(!0)
			}, e.prototype._onvProgress = function(e) {
				this._checkAndResumeStuckPlayback()
			}, o(e, [{
				key: "type",
				get: function() {
					return this._type
				}
			}, {
				key: "buffered",
				get: function() {
					return this._mediaElement.buffered
				}
			}, {
				key: "duration",
				get: function() {
					return this._mediaElement.duration
				}
			}, {
				key: "volume",
				get: function() {
					return this._mediaElement.volume
				},
				set: function(e) {
					this._mediaElement.volume = e
				}
			}, {
				key: "muted",
				get: function() {
					return this._mediaElement.muted
				},
				set: function(e) {
					this._mediaElement.muted = e
				}
			}, {
				key: "currentTime",
				get: function() {
					return this._mediaElement ? this._mediaElement.currentTime : 0
				},
				set: function(e) {
					this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e
				}
			}, {
				key: "mediaInfo",
				get: function() {
					return Object.assign({}, this._mediaInfo)
				}
			}, {
				key: "statisticsInfo",
				get: function() {
					return null == this._statisticsInfo && (this._statisticsInfo = {}), this
						._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo),
						Object.assign({}, this._statisticsInfo)
				}
			}]), e
		}();
	t["default"] = w, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e() {
			i(this, e)
		}
		return e.getSilentFrame = function(e, t) {
			if ("mp4a.40.2" === e) {
				if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
				if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
				if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
					142
				]);
				if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
					128, 44, 128, 8, 2, 56
				]);
				if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
					130, 48, 4, 153, 0, 33, 144, 2, 56
				]);
				if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
					130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224
				])
			} else {
				if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0,
					0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
				]);
				if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0,
					0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
				]);
				if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0,
					0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
					90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94
				])
			}
			return null
		}, e
	}();
	t["default"] = n, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var n = function() {
		function e() {
			i(this, e)
		}
		return e.init = function() {
			e.types = {
				avc1: [],
				avcC: [],
				btrt: [],
				dinf: [],
				dref: [],
				esds: [],
				ftyp: [],
				hdlr: [],
				mdat: [],
				mdhd: [],
				mdia: [],
				mfhd: [],
				minf: [],
				moof: [],
				moov: [],
				mp4a: [],
				mvex: [],
				mvhd: [],
				sdtp: [],
				stbl: [],
				stco: [],
				stsc: [],
				stsd: [],
				stsz: [],
				stts: [],
				tfdt: [],
				tfhd: [],
				traf: [],
				trak: [],
				trun: [],
				trex: [],
				tkhd: [],
				vmhd: [],
				smhd: [],
				".mp3": []
			};
			for (var t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t
				.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)
			]);
			var i = e.constants = {};
			i.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118,
					99, 49
				]), i.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), i.STTS =
				new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i.STSC = i.STCO = i.STTS, i.STSZ =
				new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), i.HDLR_VIDEO = new Uint8Array(
					[0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0
					]), i.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110,
					100, 108, 101, 114, 0
				]), i.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32,
					0, 0, 0, 1
				]), i.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i.VMHD = new Uint8Array([0,
					0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0
				])
		}, e.box = function(e) {
			for (var t = 8, i = null, n = Array.prototype.slice.call(arguments, 1), r = n.length,
					s = 0; s < r; s++) t += n[s].byteLength;
			i = new Uint8Array(t), i[0] = t >>> 24 & 255, i[1] = t >>> 16 & 255, i[2] = t >>> 8 &
				255, i[3] = 255 & t, i.set(e, 4);
			for (var o = 8, a = 0; a < r; a++) i.set(n[a], o), o += n[a].byteLength;
			return i
		}, e.generateInitSegment = function(t) {
			var i = e.box(e.types.ftyp, e.constants.FTYP),
				n = e.moov(t),
				r = new Uint8Array(i.byteLength + n.byteLength);
			return r.set(i, 0), r.set(n, i.byteLength), r
		}, e.moov = function(t) {
			var i = e.mvhd(t.timescale, t.duration),
				n = e.trak(t),
				r = e.mvex(t);
			return e.box(e.types.moov, i, n, r)
		}, e.mvhd = function(t, i) {
			return e.box(e.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>>
				24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>>
				16 & 255, i >>> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255
			]))
		}, e.trak = function(t) {
			return e.box(e.types.trak, e.tkhd(t), e.mdia(t))
		}, e.tkhd = function(t) {
			var i = t.id,
				n = t.duration,
				r = t.presentWidth,
				s = t.presentHeight;
			return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, i >>>
				24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, n >>> 24 &
				255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255,
				255 & r, 0, 0, s >>> 8 & 255, 255 & s, 0, 0
			]))
		}, e.mdia = function(t) {
			return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t))
		}, e.mdhd = function(t) {
			var i = t.timescale,
				n = t.duration;
			return e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>>
				24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, n >>> 24 & 255, n >>>
				16 & 255, n >>> 8 & 255, 255 & n, 85, 196, 0, 0
			]))
		}, e.hdlr = function(t) {
			var i = null;
			return i = "audio" === t.type ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO, e.box(e
				.types.hdlr, i)
		}, e.minf = function(t) {
			var i = null;
			return i = "audio" === t.type ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types
				.vmhd, e.constants.VMHD), e.box(e.types.minf, i, e.dinf(), e.stbl(t))
		}, e.dinf = function() {
			var t = e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
			return t
		}, e.stbl = function(t) {
			var i = e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.constants.STTS), e.box(e
					.types.stsc, e.constants.STSC), e.box(e.types.stsz, e.constants.STSZ), e
				.box(e.types.stco, e.constants.STCO));
			return i
		}, e.stsd = function(t) {
			return "audio" === t.type ? "mp3" === t.codec ? e.box(e.types.stsd, e.constants
				.STSD_PREFIX, e.mp3(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(
				t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t))
		}, e.mp3 = function(t) {
			var i = t.channelCount,
				n = t.audioSampleRate,
				r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0,
					0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0
				]);
			return e.box(e.types[".mp3"], r)
		}, e.mp4a = function(t) {
			var i = t.channelCount,
				n = t.audioSampleRate,
				r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0,
					0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0
				]);
			return e.box(e.types.mp4a, r, e.esds(t))
		}, e.esds = function(t) {
			var i = t.config || [],
				n = i.length,
				r = new Uint8Array([0, 0, 0, 0, 3, 23 + n, 0, 1, 0, 4, 15 + n, 64, 21, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 5
				].concat([n]).concat(i).concat([6, 1, 2]));
			return e.box(e.types.esds, r)
		}, e.avc1 = function(t) {
			var i = t.avcc,
				n = t.codecWidth,
				r = t.codecHeight,
				s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, n >>> 8 & 255, 255 & n, r >>> 8 & 255, 255 & r, 0, 72, 0, 0, 0, 72,
					0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255,
					255
				]);
			return e.box(e.types.avc1, s, e.box(e.types.avcC, i))
		}, e.mvex = function(t) {
			return e.box(e.types.mvex, e.trex(t))
		}, e.trex = function(t) {
			var i = t.id,
				n = new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 &
					i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1
				]);
			return e.box(e.types.trex, n)
		}, e.moof = function(t, i) {
			return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, i))
		}, e.mfhd = function(t) {
			var i = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 &
				t
			]);
			return e.box(e.types.mfhd, i)
		}, e.traf = function(t, i) {
			var n = t.id,
				r = e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255,
					n >>> 8 & 255, 255 & n
				])),
				s = e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255,
					i >>> 8 & 255, 255 & i
				])),
				o = e.sdtp(t),
				a = e.trun(t, o.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
			return e.box(e.types.traf, r, s, a, o)
		}, e.sdtp = function(t) {
			for (var i = t.samples || [], n = i.length, r = new Uint8Array(4 + n), s = 0; s <
				n; s++) {
				var o = i[s].flags;
				r[s + 4] = o.isLeading << 6 | o.dependsOn << 4 | o.isDependedOn << 2 | o
					.hasRedundancy
			}
			return e.box(e.types.sdtp, r)
		}, e.trun = function(t, i) {
			var n = t.samples || [],
				r = n.length,
				s = 12 + 16 * r,
				o = new Uint8Array(s);
			i += 8 + s, o.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r,
				i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i
			], 0);
			for (var a = 0; a < r; a++) {
				var u = n[a].duration,
					d = n[a].size,
					h = n[a].flags,
					l = n[a].cts;
				o.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, d >>> 24 & 255, d >>>
					16 & 255, d >>> 8 & 255, 255 & d, h.isLeading << 2 | h.dependsOn, h
					.isDependedOn << 6 | h.hasRedundancy << 4 | h.isNonSync, 0, 0, l >>>
					24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l
				], 12 + 16 * a)
			}
			return e.box(e.types.trun, o)
		}, e.mdat = function(t) {
			return e.box(e.types.mdat, t)
		}, e
	}();
	n.init(), t["default"] = n, e.exports = t["default"]
}, function(e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			"default": e
		}
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	t.__esModule = !0;
	var s = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !
						0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, i, n) {
				return i && e(t.prototype, i), n && e(t, n), t
			}
		}(),
		o = i(5),
		a = n(o),
		u = i(105),
		d = n(u),
		h = i(104),
		l = n(h),
		f = i(18),
		c = n(f),
		_ = i(47),
		p = i(6),
		m = function() {
			function e(t) {
				r(this, e), this.TAG = "MP4Remuxer", this._config = t, this._isLive = t.isLive === !0, this
					._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this
					._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this
					._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta =
					null, this._videoMeta = null, this._audioSegmentInfoList = new _.MediaSegmentInfoList(
						"audio"), this._videoSegmentInfoList = new _.MediaSegmentInfoList("video"), this
					._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!c[
						"default"].chrome || !(c["default"].version.major < 50 || 50 === c["default"]
						.version.major && c["default"].version.build < 2661)), this._fillSilentAfterSeek =
					c["default"].msedge || c["default"].msie, this._mp3UseMpegAudio = !c["default"].firefox,
					this._fillAudioTimestampGap = this._config.fixAudioTimestampGap
			}
			return e.prototype.destroy = function() {
				this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta =
					null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this
					._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this
					._onInitSegment = null, this._onMediaSegment = null
			}, e.prototype.bindDataSource = function(e) {
				return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this
					._onTrackMetadataReceived.bind(this), this
			}, e.prototype.insertDiscontinuity = function() {
				this._audioNextDts = this._videoNextDts = void 0
			}, e.prototype.seek = function(e) {
				this._audioStashedLastSample = null, this._videoStashedLastSample = null, this
					._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear()
			}, e.prototype.remux = function(e, t) {
				if (!this._onMediaSegment) throw new p.IllegalStateException(
					"MP4Remuxer: onMediaSegment callback must be specificed!");
				this._dtsBaseInited || this._calculateDtsBase(e, t), this._remuxVideo(t), this
					._remuxAudio(e)
			}, e.prototype._onTrackMetadataReceived = function(e, t) {
				var i = null,
					n = "mp4",
					r = t.codec;
				if ("audio" === e) this._audioMeta = t, "mp3" === t.codec && this._mp3UseMpegAudio ? (
					n = "mpeg", r = "", i = new Uint8Array) : i = d["default"].generateInitSegment(
					t);
				else {
					if ("video" !== e) return;
					this._videoMeta = t, i = d["default"].generateInitSegment(t)
				}
				if (!this._onInitSegment) throw new p.IllegalStateException(
					"MP4Remuxer: onInitSegment callback must be specified!");
				this._onInitSegment(e, {
					type: e,
					data: i.buffer,
					codec: r,
					container: e + "/" + n,
					mediaDuration: t.duration
				})
			}, e.prototype._calculateDtsBase = function(e, t) {
				this._dtsBaseInited || (e.samples && e.samples.length && (this._audioDtsBase = e
					.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t
					.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this
					._videoDtsBase), this._dtsBaseInited = !0)
			}, e.prototype.flushStashedSamples = function() {
				var e = this._videoStashedLastSample,
					t = this._audioStashedLastSample,
					i = {
						type: "video",
						id: 1,
						sequenceNumber: 0,
						samples: [],
						length: 0
					};
				null != e && (i.samples.push(e), i.length = e.length);
				var n = {
					type: "audio",
					id: 2,
					sequenceNumber: 0,
					samples: [],
					length: 0
				};
				null != t && (n.samples.push(t), n.length = t.length), this._videoStashedLastSample =
					null, this._audioStashedLastSample = null, this._remuxVideo(i, !0), this
					._remuxAudio(n, !0)
			}, e.prototype._remuxAudio = function(e, t) {
				if (null != this._audioMeta) {
					var i = e,
						n = i.samples,
						r = void 0,
						s = -1,
						o = -1,
						u = this._audioMeta.refSampleDuration,
						h = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
						f = this._dtsBaseInited && void 0 === this._audioNextDts,
						p = !1;
					if (n && 0 !== n.length && (1 !== n.length || t)) {
						var m = 0,
							g = null,
							v = 0;
						h ? (m = 0, v = i.length) : (m = 8, v = 8 + i.length);
						var y = null;
						if (n.length > 1 && (y = n.pop(), v -= y.length), null != this
							._audioStashedLastSample) {
							var E = this._audioStashedLastSample;
							this._audioStashedLastSample = null, n.unshift(E), v += E.length
						}
						null != y && (this._audioStashedLastSample = y);
						var S = n[0].dts - this._dtsBase;
						if (this._audioNextDts) r = S - this._audioNextDts;
						else if (this._audioSegmentInfoList.isEmpty()) r = 0, this
							._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !==
							this._audioMeta.originalCodec && (p = !0);
						else {
							var b = this._audioSegmentInfoList.getLastSampleBefore(S);
							if (null != b) {
								var L = S - (b.originalDts + b.duration);
								L <= 3 && (L = 0);
								var R = b.dts + b.duration + L;
								r = S - R
							} else r = 0
						}
						if (p) {
							var A = S - r,
								w = this._videoSegmentInfoList.getLastSegmentBefore(S);
							if (null != w && w.beginDts < A) {
								var k = l["default"].getSilentFrame(this._audioMeta.originalCodec, this
									._audioMeta.channelCount);
								if (k) {
									var T = w.beginDts,
										C = A - w.beginDts;
									a["default"].v(this.TAG, "InsertPrefixSilentAudio: dts: " + T +
										", duration: " + C), n.unshift({
										unit: k,
										dts: T,
										pts: T
									}), v += k.byteLength
								}
							} else p = !1
						}
						for (var O = [], I = 0; I < n.length; I++) {
							var M = n[I],
								D = M.unit,
								x = M.dts - this._dtsBase,
								B = x - r;
							s === -1 && (s = B);
							var U = 0;
							if (I !== n.length - 1) {
								var N = n[I + 1].dts - this._dtsBase - r;
								U = N - B
							} else if (null != y) {
								var P = y.dts - this._dtsBase - r;
								U = P - B
							} else U = O.length >= 1 ? O[O.length - 1].duration : Math.floor(u);
							var F = !1,
								G = null;
							if (U > 1.5 * u && "mp3" !== this._audioMeta.codec && this
								._fillAudioTimestampGap && !c["default"].safari) {
								F = !0;
								var V = Math.abs(U - u),
									z = Math.ceil(V / u),
									j = B + u;
								a["default"].w(this.TAG,
									"Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\n" +
									("dts: " + (B + U) + " ms, expected: " + (B + Math.round(u)) +
										" ms, ") + ("delta: " + Math.round(V) + " ms, generate: " +
										z + " frames"));
								var K = l["default"].getSilentFrame(this._audioMeta.originalCodec, this
									._audioMeta.channelCount);
								null == K && (a["default"].w(this.TAG,
										"Unable to generate silent frame for " + (this._audioMeta
											.originalCodec + " with " + this._audioMeta
											.channelCount + " channels, repeat last frame")), K = D),
									G = [];
								for (var H = 0; H < z; H++) {
									var q = Math.round(j);
									if (G.length > 0) {
										var W = G[G.length - 1];
										W.duration = q - W.dts
									}
									var X = {
										dts: q,
										pts: q,
										cts: 0,
										unit: K,
										size: K.byteLength,
										duration: 0,
										originalDts: x,
										flags: {
											isLeading: 0,
											dependsOn: 1,
											isDependedOn: 0,
											hasRedundancy: 0
										}
									};
									G.push(X), v += D.byteLength, j += u
								}
								var Y = G[G.length - 1];
								Y.duration = B + U - Y.dts, U = Math.round(u)
							}
							O.push({
								dts: B,
								pts: B,
								cts: 0,
								unit: M.unit,
								size: M.unit.byteLength,
								duration: U,
								originalDts: x,
								flags: {
									isLeading: 0,
									dependsOn: 1,
									isDependedOn: 0,
									hasRedundancy: 0
								}
							}), F && O.push.apply(O, G)
						}
						h ? g = new Uint8Array(v) : (g = new Uint8Array(v), g[0] = v >>> 24 & 255, g[
							1] = v >>> 16 & 255, g[2] = v >>> 8 & 255, g[3] = 255 & v, g.set(d[
								"default"].types.mdat, 4));
						for (var Z = 0; Z < O.length; Z++) {
							var J = O[Z].unit;
							g.set(J, m), m += J.byteLength
						}
						var Q = O[O.length - 1];
						o = Q.dts + Q.duration, this._audioNextDts = o;
						var $ = new _.MediaSegmentInfo;
						$.beginDts = s, $.endDts = o, $.beginPts = s, $.endPts = o, $.originalBeginDts =
							O[0].originalDts, $.originalEndDts = Q.originalDts + Q.duration, $
							.firstSample = new _.SampleInfo(O[0].dts, O[0].pts, O[0].duration, O[0]
								.originalDts, (!1)), $.lastSample = new _.SampleInfo(Q.dts, Q.pts, Q
								.duration, Q.originalDts, (!1)), this._isLive || this
							._audioSegmentInfoList.append($), i.samples = O, i.sequenceNumber++;
						var ee = null;
						ee = h ? new Uint8Array : d["default"].moof(i, s), i.samples = [], i.length = 0;
						var te = {
							type: "audio",
							data: this._mergeBoxes(ee, g).buffer,
							sampleCount: O.length,
							info: $
						};
						h && f && (te.timestampOffset = s), this._onMediaSegment("audio", te)
					}
				}
			}, e.prototype._remuxVideo = function(e, t) {
				if (null != this._videoMeta) {
					var i = e,
						n = i.samples,
						r = void 0,
						s = -1,
						o = -1,
						a = -1,
						u = -1;
					if (n && 0 !== n.length && (1 !== n.length || t)) {
						var h = 8,
							l = null,
							f = 8 + e.length,
							c = null;
						if (n.length > 1 && (c = n.pop(), f -= c.length), null != this
							._videoStashedLastSample) {
							var p = this._videoStashedLastSample;
							this._videoStashedLastSample = null, n.unshift(p), f += p.length
						}
						null != c && (this._videoStashedLastSample = c);
						var m = n[0].dts - this._dtsBase;
						if (this._videoNextDts) r = m - this._videoNextDts;
						else if (this._videoSegmentInfoList.isEmpty()) r = 0;
						else {
							var g = this._videoSegmentInfoList.getLastSampleBefore(m);
							if (null != g) {
								var v = m - (g.originalDts + g.duration);
								v <= 3 && (v = 0);
								var y = g.dts + g.duration + v;
								r = m - y
							} else r = 0
						}
						for (var E = new _.MediaSegmentInfo, S = [], b = 0; b < n.length; b++) {
							var L = n[b],
								R = L.dts - this._dtsBase,
								A = L.isKeyframe,
								w = R - r,
								k = L.cts,
								T = w + k;
							s === -1 && (s = w, a = T);
							var C = 0;
							if (b !== n.length - 1) {
								var O = n[b + 1].dts - this._dtsBase - r;
								C = O - w
							} else if (null != c) {
								var I = c.dts - this._dtsBase - r;
								C = I - w
							} else C = S.length >= 1 ? S[S.length - 1].duration : Math.floor(this
								._videoMeta.refSampleDuration);
							if (A) {
								var M = new _.SampleInfo(w, T, C, L.dts, (!0));
								M.fileposition = L.fileposition, E.appendSyncPoint(M)
							}
							S.push({
								dts: w,
								pts: T,
								cts: k,
								units: L.units,
								size: L.length,
								isKeyframe: A,
								duration: C,
								originalDts: R,
								flags: {
									isLeading: 0,
									dependsOn: A ? 2 : 1,
									isDependedOn: A ? 1 : 0,
									hasRedundancy: 0,
									isNonSync: A ? 0 : 1
								}
							})
						}
						l = new Uint8Array(f), l[0] = f >>> 24 & 255, l[1] = f >>> 16 & 255, l[2] =
							f >>> 8 & 255, l[3] = 255 & f, l.set(d["default"].types.mdat, 4);
						for (var D = 0; D < S.length; D++)
							for (var x = S[D].units; x.length;) {
								var B = x.shift(),
									U = B.data;
								l.set(U, h), h += U.byteLength
							}
						var N = S[S.length - 1];
						if (o = N.dts + N.duration, u = N.pts + N.duration, this._videoNextDts = o, E
							.beginDts = s, E.endDts = o, E.beginPts = a, E.endPts = u, E
							.originalBeginDts = S[0].originalDts, E.originalEndDts = N.originalDts + N
							.duration, E.firstSample = new _.SampleInfo(S[0].dts, S[0].pts, S[0]
								.duration, S[0].originalDts, S[0].isKeyframe), E.lastSample = new _
							.SampleInfo(N.dts, N.pts, N.duration, N.originalDts, N.isKeyframe), this
							._isLive || this._videoSegmentInfoList.append(E), i.samples = S, i
							.sequenceNumber++, this._forceFirstIDR) {
							var P = S[0].flags;
							P.dependsOn = 2, P.isNonSync = 0
						}
						var F = d["default"].moof(i, s);
						i.samples = [], i.length = 0, this._onMediaSegment("video", {
							type: "video",
							data: this._mergeBoxes(F, l).buffer,
							sampleCount: S.length,
							info: E
						})
					}
				}
			}, e.prototype._mergeBoxes = function(e, t) {
				var i = new Uint8Array(e.byteLength + t.byteLength);
				return i.set(e, 0), i.set(t, e.byteLength), i
			}, s(e, [{
				key: "onInitSegment",
				get: function() {
					return this._onInitSegment
				},
				set: function(e) {
					this._onInitSegment = e
				}
			}, {
				key: "onMediaSegment",
				get: function() {
					return this._onMediaSegment
				},
				set: function(e) {
					this._onMediaSegment = e
				}
			}]), e
		}();
	t["default"] = m, e.exports = t["default"]
}, function(e, t) {
	"use strict";

	function i(e, t, i) {
		var n = e;
		if (t + i < n.length) {
			for (; i--;)
				if (128 !== (192 & n[++t])) return !1;
			return !0
		}
		return !1
	}

	function n(e) {
		for (var t = [], n = e, r = 0, s = e.length; r < s;)
			if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;
			else {
				if (n[r] < 192);
				else if (n[r] < 224) {
					if (i(n, r, 1)) {
						var o = (31 & n[r]) << 6 | 63 & n[r + 1];
						if (o >= 128) {
							t.push(String.fromCharCode(65535 & o)), r += 2;
							continue
						}
					}
				} else if (n[r] < 240) {
					if (i(n, r, 2)) {
						var a = (15 & n[r]) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2];
						if (a >= 2048 && 55296 !== (63488 & a)) {
							t.push(String.fromCharCode(65535 & a)), r += 3;
							continue
						}
					}
				} else if (n[r] < 248 && i(n, r, 3)) {
					var u = (7 & n[r]) << 18 | (63 & n[r + 1]) << 12 | (63 & n[r + 2]) << 6 | 63 & n[r + 3];
					if (u > 65536 && u < 1114112) {
						u -= 65536, t.push(String.fromCharCode(u >>> 10 | 55296)), t.push(String
							.fromCharCode(1023 & u | 56320)), r += 4;
						continue
					}
				}
				t.push(String.fromCharCode(65533)), ++r
			} return t.join("")
	}
	t.__esModule = !0, t["default"] = n, e.exports = t["default"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
	(function(t, n) {
		/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.1.0
		 */
		! function(t, i) {
			e.exports = i()
		}(this, function() {
			"use strict";

			function e(e) {
				return "function" == typeof e || "object" == typeof e && null !== e
			}

			function r(e) {
				return "function" == typeof e
			}

			function s(e) {
				Y = e
			}

			function o(e) {
				Z = e
			}

			function a() {
				return function() {
					return t.nextTick(f)
				}
			}

			function u() {
				return "undefined" != typeof X ? function() {
					X(f)
				} : l()
			}

			function d() {
				var e = 0,
					t = new $(f),
					i = document.createTextNode("");
				return t.observe(i, {
						characterData: !0
					}),
					function() {
						i.data = e = ++e % 2
					}
			}

			function h() {
				var e = new MessageChannel;
				return e.port1.onmessage = f,
					function() {
						return e.port2.postMessage(0)
					}
			}

			function l() {
				var e = setTimeout;
				return function() {
					return e(f, 1)
				}
			}

			function f() {
				for (var e = 0; e < W; e += 2) {
					var t = ie[e],
						i = ie[e + 1];
					t(i), ie[e] = void 0, ie[e + 1] = void 0
				}
				W = 0
			}

			function c() {
				try {
					var e = i(180);
					return X = e.runOnLoop || e.runOnContext, u()
				} catch (t) {
					return l()
				}
			}

			function _(e, t) {
				var i = arguments,
					n = this,
					r = new this.constructor(m);
				void 0 === r[re] && B(r);
				var s = n._state;
				return s ? ! function() {
					var e = i[s - 1];
					Z(function() {
						return M(s, r, e, n._result)
					})
				}() : T(n, r, e, t), r
			}

			function p(e) {
				var t = this;
				if (e && "object" == typeof e && e.constructor === t) return e;
				var i = new t(m);
				return R(i, e), i
			}

			function m() {}

			function g() {
				return new TypeError("You cannot resolve a promise with itself")
			}

			function v() {
				return new TypeError("A promises callback cannot return that same promise.")
			}

			function y(e) {
				try {
					return e.then
				} catch (t) {
					return ue.error = t, ue
				}
			}

			function E(e, t, i, n) {
				try {
					e.call(t, i, n)
				} catch (r) {
					return r
				}
			}

			function S(e, t, i) {
				Z(function(e) {
					var n = !1,
						r = E(i, t, function(i) {
							n || (n = !0, t !== i ? R(e, i) : w(e, i))
						}, function(t) {
							n || (n = !0, k(e, t))
						}, "Settle: " + (e._label || " unknown promise"));
					!n && r && (n = !0, k(e, r))
				}, e)
			}

			function b(e, t) {
				t._state === oe ? w(e, t._result) : t._state === ae ? k(e, t._result) : T(t, void 0,
					function(t) {
						return R(e, t)
					},
					function(t) {
						return k(e, t)
					})
			}

			function L(e, t, i) {
				t.constructor === e.constructor && i === _ && t.constructor.resolve === p ? b(e,
					t) : i === ue ? (k(e, ue.error), ue.error = null) : void 0 === i ? w(e, t) : r(
						i) ? S(e, t, i) : w(e, t)
			}

			function R(t, i) {
				t === i ? k(t, g()) : e(i) ? L(t, i, y(i)) : w(t, i)
			}

			function A(e) {
				e._onerror && e._onerror(e._result), C(e)
			}

			function w(e, t) {
				e._state === se && (e._result = t, e._state = oe, 0 !== e._subscribers.length && Z(
					C, e))
			}

			function k(e, t) {
				e._state === se && (e._state = ae, e._result = t, Z(A, e))
			}

			function T(e, t, i, n) {
				var r = e._subscribers,
					s = r.length;
				e._onerror = null, r[s] = t, r[s + oe] = i, r[s + ae] = n, 0 === s && e._state && Z(
					C, e)
			}

			function C(e) {
				var t = e._subscribers,
					i = e._state;
				if (0 !== t.length) {
					for (var n = void 0, r = void 0, s = e._result, o = 0; o < t.length; o += 3) n =
						t[o], r = t[o + i], n ? M(i, n, r, s) : r(s);
					e._subscribers.length = 0
				}
			}

			function O() {
				this.error = null
			}

			function I(e, t) {
				try {
					return e(t)
				} catch (i) {
					return de.error = i, de
				}
			}

			function M(e, t, i, n) {
				var s = r(i),
					o = void 0,
					a = void 0,
					u = void 0,
					d = void 0;
				if (s) {
					if (o = I(i, n), o === de ? (d = !0, a = o.error, o.error = null) : u = !0,
						t === o) return void k(t, v())
				} else o = n, u = !0;
				t._state !== se || (s && u ? R(t, o) : d ? k(t, a) : e === oe ? w(t, o) : e ===
					ae && k(t, o))
			}

			function D(e, t) {
				try {
					t(function(t) {
						R(e, t)
					}, function(t) {
						k(e, t)
					})
				} catch (i) {
					k(e, i)
				}
			}

			function x() {
				return he++
			}

			function B(e) {
				e[re] = he++, e._state = void 0, e._result = void 0, e._subscribers = []
			}

			function U(e, t) {
				this._instanceConstructor = e, this.promise = new e(m), this.promise[re] || B(this
					.promise), q(t) ? (this._input = t, this.length = t.length, this
					._remaining = t.length, this._result = new Array(this.length), 0 === this
					.length ? w(this.promise, this._result) : (this.length = this.length || 0,
						this._enumerate(), 0 === this._remaining && w(this.promise, this
							._result))) : k(this.promise, N())
			}

			function N() {
				return new Error("Array Methods must be provided an Array")
			}

			function P(e) {
				return new U(this, e).promise
			}

			function F(e) {
				var t = this;
				return new t(q(e) ? function(i, n) {
					for (var r = e.length, s = 0; s < r; s++) t.resolve(e[s]).then(i, n)
				} : function(e, t) {
					return t(new TypeError("You must pass an array to race."))
				})
			}

			function G(e) {
				var t = this,
					i = new t(m);
				return k(i, e), i
			}

			function V() {
				throw new TypeError(
					"You must pass a resolver function as the first argument to the promise constructor"
					)
			}

			function z() {
				throw new TypeError(
					"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
					)
			}

			function j(e) {
				this[re] = x(), this._result = this._state = void 0, this._subscribers = [], m !==
					e && ("function" != typeof e && V(), this instanceof j ? D(this, e) : z())
			}

			function K() {
				var e = void 0;
				if ("undefined" != typeof n) e = n;
				else if ("undefined" != typeof self) e = self;
				else try {
					e = Function("return this")()
				} catch (t) {
					throw new Error(
						"polyfill failed because global object is unavailable in this environment"
						)
				}
				var i = e.Promise;
				if (i) {
					var r = null;
					try {
						r = Object.prototype.toString.call(i.resolve())
					} catch (t) {}
					if ("[object Promise]" === r && !i.cast) return
				}
				e.Promise = j
			}
			var H = void 0;
			H = Array.isArray ? Array.isArray : function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};
			var q = H,
				W = 0,
				X = void 0,
				Y = void 0,
				Z = function(e, t) {
					ie[W] = e, ie[W + 1] = t, W += 2, 2 === W && (Y ? Y(f) : ne())
				},
				J = "undefined" != typeof window ? window : void 0,
				Q = J || {},
				$ = Q.MutationObserver || Q.WebKitMutationObserver,
				ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" ===
				{}.toString.call(t),
				te = "undefined" != typeof Uint8ClampedArray && "undefined" !=
				typeof importScripts && "undefined" != typeof MessageChannel,
				ie = new Array(1e3),
				ne = void 0;
			ne = ee ? a() : $ ? d() : te ? h() : void 0 === J ? c() : l();
			var re = Math.random().toString(36).substring(16),
				se = void 0,
				oe = 1,
				ae = 2,
				ue = new O,
				de = new O,
				he = 0;
			return U.prototype._enumerate = function() {
					for (var e = this.length, t = this._input, i = 0; this._state === se && i <
						e; i++) this._eachEntry(t[i], i)
				}, U.prototype._eachEntry = function(e, t) {
					var i = this._instanceConstructor,
						n = i.resolve;
					if (n === p) {
						var r = y(e);
						if (r === _ && e._state !== se) this._settledAt(e._state, t, e._result);
						else if ("function" != typeof r) this._remaining--, this._result[t] = e;
						else if (i === j) {
							var s = new i(m);
							L(s, e, r), this._willSettleAt(s, t)
						} else this._willSettleAt(new i(function(t) {
							return t(e)
						}), t)
					} else this._willSettleAt(n(e), t)
				}, U.prototype._settledAt = function(e, t, i) {
					var n = this.promise;
					n._state === se && (this._remaining--, e === ae ? k(n, i) : this._result[t] =
						i), 0 === this._remaining && w(n, this._result)
				}, U.prototype._willSettleAt = function(e, t) {
					var i = this;
					T(e, void 0, function(e) {
						return i._settledAt(oe, t, e)
					}, function(e) {
						return i._settledAt(ae, t, e)
					})
				}, j.all = P, j.race = F, j.resolve = p, j.reject = G, j._setScheduler = s, j
				._setAsap = o, j._asap = Z, j.prototype = {
					constructor: j,
					then: _,
					"catch": function(e) {
						return this.then(null, e)
					}
				}, j.polyfill = K, j.Promise = j, j
		})
	}).call(t, i(164), function() {
		return this
	}())
}, , , , , , , , , , , , , , , , function(e, t) {
	function i() {
		l && d && (l = !1, d.length ? h = d.concat(h) : f = -1, h.length && n())
	}

	function n() {
		if (!l) {
			var e = o(i);
			l = !0;
			for (var t = h.length; t;) {
				for (d = h, h = []; ++f < t;) d && d[f].run();
				f = -1, t = h.length
			}
			d = null, l = !1, a(e)
		}
	}

	function r(e, t) {
		this.fun = e, this.array = t
	}

	function s() {}
	var o, a, u = e.exports = {};
	! function() {
		try {
			o = setTimeout
		} catch (e) {
			o = function() {
				throw new Error("setTimeout is not defined")
			}
		}
		try {
			a = clearTimeout
		} catch (e) {
			a = function() {
				throw new Error("clearTimeout is not defined")
			}
		}
	}();
	var d, h = [],
		l = !1,
		f = -1;
	u.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
			h.push(new r(e, t)), 1 !== h.length || l || o(n, 0)
		}, r.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u
		.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u
		.emit = s, u.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, u.cwd = function() {
			return "/"
		}, u.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, u.umask = function() {
			return 0
		}
}, function(e, t) {
	var i = arguments[3],
		n = arguments[4],
		r = arguments[5],
		s = JSON.stringify;
	e.exports = function(e, t) {
		function o(e) {
			m[e] = !0;
			for (var t in n[e][1]) {
				var i = n[e][1][t];
				m[i] || o(i)
			}
		}
		for (var a, u = Object.keys(r), d = 0, h = u.length; d < h; d++) {
			var l = u[d],
				f = r[l].exports;
			if (f === e || f && f["default"] === e) {
				a = l;
				break
			}
		}
		if (!a) {
			a = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
			for (var c = {}, d = 0, h = u.length; d < h; d++) {
				var l = u[d];
				c[l] = l
			}
			n[a] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), c]
		}
		var _ = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
			p = {};
		p[a] = a, n[_] = [Function(["require"], "var f = require(" + s(a) +
			");(f.default ? f.default : f)(self);"), p];
		var m = {};
		o(_);
		var g = "(" + i + ")({" + Object.keys(m).map(function(e) {
				return s(e) + ":[" + n[e][0] + "," + s(n[e][1]) + "]"
			}).join(",") + "},{},[" + s(_) + "])",
			v = window.URL || window.webkitURL || window.mozURL || window.msURL,
			y = new Blob([g], {
				type: "text/javascript"
			});
		if (t && t.bare) return y;
		var E = v.createObjectURL(y),
			S = new Worker(E);
		return S.objectURL = E, S
	}
}, , , , , , , , , , , , , , , function(e, t) {}]);
//# sourceMappingURL=flv.js.map
