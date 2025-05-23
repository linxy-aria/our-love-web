
// count.js
const fs = require('fs');
const path = require('path');

const modules = [
  { key: 'letters', dir: 'letters', ext: '.html' },
  { key: 'diary', dir: 'diary', ext: '.html' },
  { key: 'secrets', dir: 'secrets', ext: '.html' },
  { key: 'handbooks', dir: 'handbooks', ext: '.png' }
];

const result = {};

modules.forEach(({ key, dir, ext }) => {
  try {
    const files = fs.readdirSync(path.join(__dirname, dir));
    const count = files.filter(f => f.endsWith(ext)).length;
    result[key] = count;
  } catch (err) {
    console.error(`读取 ${dir} 失败：`, err);
    result[key] = 0;
  }
});

// 生成 dashboard-data.js
const output = `window.dashboardData = ${JSON.stringify(result, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'dashboard-data.js'), output, 'utf8');

console.log('统计完成，已生成 dashboard-data.js');
