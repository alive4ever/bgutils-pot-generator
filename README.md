# A Simple po-token-generator based on bgutils

## Description

This is just an example from [BgUtils](https://github.com/LuanRt/BgUtils), ripped from `examples/node` directory slightly modified to generate json formatted `visitorData+poToken`.

## Usage

Supported runtimes: `['node', 'bun', 'deno']`

### New session pot

#### bun

```sh
bun install
bun generate-po-token.ts > po_token_cache.txt
# optional, will output a bundled single js file generate-po-token.js in the outdir
bun build --target node --outdir ./build
```

#### node >= 22.18.0

```sh
npm install
node generate-po-token.ts > po_token_cache.txt
```

#### node <22.18.0

```sh
npm install
npx --yes tsx generate-po-token.ts > po_token_cache.txt
# or using npm
npm exec --yes tsx generate-po-token.ts > po_token_cache.txt
```

#### deno

```sh
deno install
deno run --allow-net --allow-env --allow-read generate-po-token.ts > po_token_cache.txt
```

The resulting `po_token_cache.txt` can be used to get `visitorData` and `poToken` pair to be used with [youtube-local](https://github.com/user234683/youtube-local/pull/219) or another YT related tools (such as `yt-dlp`).

### pot bound to `videoId` or a known `visitorData`

To generate one-shot `poToken` for `videoId`, use `generate-po-token-identifier.ts` script.

The script takes one argument: `identifier`, which can be either `videoId` or `visitorData`.

```sh
video_id="abcdefghijkl"
node generate-po-token-identifier.ts $video_id
```

An integration is on the way for my [youtube-local](https://github.com/alive4ever/youtube-local) repository.

## Acknowledgements

Thanks to `@LuanRt` for `bgutils-js` package and all the research performed.
