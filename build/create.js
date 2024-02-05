const inquirer = require('inquirer')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const prefix = './src/themes/'

function main() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'packageName',
        message:
          '请输入主题创建目录(多个单词组成建议使用中划线连接，如classic-theme)：',
        validate: async function (input) {
          if (!input) {
            return '主题目录是必填的。'
          }

          const packagePath = prefix + input
          if (fs.existsSync(packagePath)) {
            return '主题目录已存在。'
          }

          const packageArr = input.split('/')
          if (packageArr.length > 1) {
            return '目录格式不支持多级，请输入正确的主题目录格式。'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'themeName',
        message: '请输入主题名(建议使用驼峰命名规范，如ClassicTheme)：',
        validate: async function (input) {
          if (!input) {
            return '主题名是必填的。'
          }
          return true
        },
      },
    ])
    .then((answers) => {
      generateTheme(answers)
    })
}

function getFileContent(path) {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

function writeFile(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) throw err
  })
}

function appendFile(path, data) {
  fs.appendFile(path, data, (err) => {
    if (err) throw err
  })
}

function generateTheme(answers) {
  const { packageName, themeName } = answers
  // 目录
  const packagePath = prefix + packageName
  // 创建文件夹目录
  if (!fs.existsSync(packagePath)) {
    fs.mkdirSync(packagePath, { recursive: true })
  }

  const themeTemplate = getFileContent('./template/themeTempalate.temp')
  const templateFile = handlebars.compile(themeTemplate)
  const templateTemplateData = templateFile({ themeName }).replace(/^`|`$/g, '')
  writeFile(`${packagePath}/${packageName}.vue`, templateTemplateData)

  const installFile = handlebars.compile(
    getFileContent('./template/componentInstallTemplate.temp')
  )
  const themeInstallData = installFile({
    themeName,
    fileName: packageName,
  }).replace(/^`|`$/g, '')
  const themeInstallFile = `${packagePath}/index.js`
  if (!fs.existsSync(themeInstallFile)) {
    writeFile(themeInstallFile, themeInstallData)
  } else {
    appendFile(themeInstallFile, themeInstallData)
  }

  const exportFile = handlebars.compile(
    getFileContent('./template/componentExportTemplate.temp')
  )
  const themeExportData = exportFile({
    themeName,
    fileName: packageName,
  }).replace(/^`|`$/g, '')
  const themeExportlFile = `${prefix}/index.js`
  if (!fs.existsSync(themeExportlFile)) {
    writeFile(themeExportlFile, themeExportData)
  } else {
    appendFile(themeExportlFile, themeExportData)
  }
}

main()
