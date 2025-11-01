# A Simple po-token-generator based on bgutils

## Description

This is just an example from [BgUtils](https://github.com/LuanRt/BgUtils), ripped from `examples/node` directory slightly modified to generate json formatted `visitorData+poToken`.

## Usage

Supported runtimes: `['node', 'bun', 'deno']`

### bun

```sh
bun install
bun generate-po-token.ts > po_token_cache.txt
# optional, will output a bundled single js file generate-po-token.js in the outdir
bun build --target node --outdir ./build
```

### node

```sh
npm install
node generate-po-token.ts > po_token_cache.txt
```

### deno

```sh
deno install
deno run --allow-net --allow-env --allow-read generate-po-token.ts
```

The resulting `po_token_cache.txt` can be used to get `visitorData` and `poToken` pair to be used with [youtube-local](https://github.com/user234683/youtube-local/pull/219) or another YT related tools (such as `yt-dlp`).

## Acknowledgements

Thanks to `@LuanRt` for `bgutils-js` package and all the research performed.
