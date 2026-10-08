import fs from 'node:fs';
import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// True when running `npm run dev` (rollup -w)
const isDev = !!process.env.ROLLUP_WATCH;

// Copies src/index.html into dist/ alongside the bundle
const copyHtml = () => ({
    name: 'copy-html',
    buildStart() {
        // Rebuild when index.html changes in dev mode
        this.addWatchFile('src/index.html');

        // The LWC plugin doesn't register component CSS with the watcher,
        // so CSS-only edits would never trigger a rebuild. Watch them explicitly.
        for (const file of fs.readdirSync('src/modules', { recursive: true })) {
            if (String(file).endsWith('.css')) {
                this.addWatchFile(`src/modules/${file}`);
            }
        }
    },
    generateBundle() {
        this.emitFile({
            type: 'asset',
            fileName: 'index.html',
            source: fs.readFileSync('src/index.html', 'utf8')
        });
    }
});

export default {
    input: 'src/main.js',
    output: {
        dir: 'dist',
        entryFileNames: 'main.js',
        format: 'esm'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
            preventAssignment: true
        }),
        // dir is relative to rootDir (src/)
        lwc({ rootDir: 'src', modules: [{ dir: 'modules' }] }),
        copyHtml(),
        // Dev only: local server + auto browser refresh on save
        isDev && serve({ contentBase: 'dist', port: 3000, open: true }),
        isDev && livereload({ watch: 'dist' })
    ]
};
