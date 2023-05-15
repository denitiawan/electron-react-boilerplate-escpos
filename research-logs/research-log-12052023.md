[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md)

# 12-mei-2023
##  librarry NODE-ESCPOS  3.0.0-alpha.6
- name : NODE-ESCPOS 
- versi terakhir : 3.0.0-alpha.6
- last update/publish : 3 years ago
- link repo : https://github.com/song940/node-escpos#readme
- link issue : https://github.com/song940/node-escpos/issues

### kendala NODE-ESCPOS  :
- NODE-ESCPOS yang biasa digunakan pada electron lama, sudah 3 tahun tidak diupdate oleh pemiliknya/contributornya, kemungkinan lib sudah tidak cocok atau masih belum ketemu cara pakainya pada react-boilerplate ini.
- function yang ada pada librarry NODE-ESCPOS oleh main.ts / ipcMain gagal di panggil dan tidak ditemukan atau gagal di execute

### implementasi NODE-ESCPOS  :
- pada class main.ts buat function ipcMain.on('ipc-escpos')  , yang dimana nantinya class dan fungsi ini akan menjalankan perintah printhermal
- pada render class buat fungsi yang akan menuliskan kode , window.electron.ipcRenderer.sendMessage('ipc-escpos'); , dimana render class ini akan memerintahkan ipcMain untuk menjalankan fungsinya   

### spec project electron :
- node.js versi 16.4.2
- npm versi 8.5.2
- electron-react-boilerplate latest (mei 2023) https://github.com/electron-react-boilerplate/electron-react-boilerplate


