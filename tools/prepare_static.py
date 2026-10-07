"""Bundle shared presentation into each HTML to prevent mixed CSS deployments."""
from pathlib import Path
import hashlib
import re

ROOT = Path(__file__).resolve().parents[1]
css = (ROOT / 'assets/css/styles.css').read_text(encoding='utf-8').strip()
js = (ROOT / 'assets/js/site.js').read_bytes()
version = hashlib.sha256(js).hexdigest()[:12]
style = '<style id="secoyt-site-styles">' + css + '</style>'
assert '</style' not in css.lower()
for page in sorted(ROOT.glob('*.html')):
    source = page.read_text(encoding='utf-8')
    source = re.sub(r'<link\b(?=[^>]*rel="stylesheet")(?=[^>]*href="/assets/css/styles\.css(?:\?[^"]*)?")[^>]*>', '', source)
    source = re.sub(r'<style id="secoyt-site-styles">.*?</style>', '', source, flags=re.S)
    source = source.replace('</head>', style + '</head>', 1)
    source = re.sub(r'(/assets/js/site\.js)(?:\?[^"]*)?(?=")', r'\1?v=' + version, source)
    page.write_text(source, encoding='utf-8')
print('Prepared', len(list(ROOT.glob('*.html'))), 'pages; JS version:', version)
