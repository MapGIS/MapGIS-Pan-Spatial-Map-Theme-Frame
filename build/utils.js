const fs = require("fs");

// 项目当前打包模式
const mode = process.env.VUE_APP_MODE;

// 打包生成的文件夹名称
const distDir = "dist-libs";
// 打包后css、js文件的名称
const packageName = "theme";
// 打包前的资源目录
const directoryPath = "./themes";

function getThemesArr() {
  return new Promise((resolve) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error("读取文件夹出错:", err);
        return;
      }
      const targetFilePathArr = [];

      files.forEach((file) => {
        targetFilePathArr.push(file);
      });
      resolve(targetFilePathArr);
    });
  });
}

function copyFile(sourceFile, targetFile, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (fs.existsSync(sourceFile)) {
    fs.copyFile(sourceFile, targetFile, (err) => {
      if (err) throw err;
    });
  }
}

async function generateConfig() {
  const themeArr = [];
  const themesFolder = await getThemesArr();
  if (themesFolder && themesFolder.length > 0) {
    const firstThemePath = themesFolder[0];
    themeArr.push({
      from: `${distDir}/${packageName}${
        mode === "prod" ? ".umd.min.js" : ".umd.js"
      }`,
      to: `${distDir}/${firstThemePath}/theme.js`,
      destDir: `${distDir}/${firstThemePath}`,
    });
    themeArr.push({
      from: `${distDir}/${packageName}.css`,
      to: `${distDir}/${firstThemePath}/theme.css`,
      destDir: `${distDir}/${firstThemePath}`,
    });
  }
  themeArr.forEach((item) => {
    const { from, to, destDir } = item;
    copyFile(from, to, destDir);
  });
}

exports.generateConfig = generateConfig;
exports.distDir = distDir;
