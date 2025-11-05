import { BG } from 'bgutils-js';
import type { BgConfig } from 'bgutils-js';
import { JSDOM } from 'jsdom';
// Bun:
// import { Innertube, UniversalCache } from 'youtubei.js/web';
import { Innertube, UniversalCache } from 'youtubei.js';

const requestKey = 'O43z0dpjhgX20SCx4KAo';
if ( process.argv.length < 3 ) {
	throw new Error('Need one argument: identifier (can be video_id or visitorData)')
	}
const identifier = process.argv[2]

const dom = new JSDOM();

Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document
});

const bgConfig: BgConfig = {
  fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => fetch(input, init), 
  globalObj: globalThis,
  identifier: identifier,
  requestKey
};

const bgChallenge = await BG.Challenge.create(bgConfig);

if (!bgChallenge)
  throw new Error('Could not get challenge');

const interpreterJavascript = bgChallenge.interpreterJavascript.privateDoNotAccessOrElseSafeScriptWrappedValue;

if (interpreterJavascript) {
  new Function(interpreterJavascript)();
} else throw new Error('Could not load VM');

const poTokenResult = await BG.PoToken.generate({
  program: bgChallenge.program,
  globalName: bgChallenge.globalName,
  bgConfig
});

const placeholderPoToken = BG.PoToken.generatePlaceholder(identifier);

var session_info = {
  identifier,
  placeholderPoToken,
  poToken: poTokenResult.poToken,
  integrityTokenData: poTokenResult.integrityTokenData
};

console.log(JSON.stringify(session_info));
