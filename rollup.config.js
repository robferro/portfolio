import fs from 'node:fs';
import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';

// Copies src/index.html into dist/ alongside the bundle
const copyHtml = () => ({
    name: 'copy-html',
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
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        // dir is relative to rootDir (src/)
        lwc({ rootDir: 'src', modules: [{ dir: 'modules' }] }),
        copyHtml()
    ]
};
