const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

const { app, ipcMain } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new TimerTray(iconPath, mainWindow);

});

// ipcMain.on('update-timer', (event, timeLeft) => {
//   const iconName = process.platform === 'win32' ? 'windows-icon@2x.png' : 'iconTemplate.png';
//   const iconPath = path.join(__dirname, './src/assets/' + iconName);
//   if(process.platform === 'darwin'){
//     tray.setTitle(timeLeft);
//   } else {
//     tray.displayBalloon({
//       icon: iconPath,
//       title: '',
//       content: timeLeft
//     })
//   }
// });