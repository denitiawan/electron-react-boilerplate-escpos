# What is this?
This repository have example of code for setup and implement ESCPOS lib on electron-react-boilerplate, for printing the receipt on Thermal Printer

# Overviews
- Layout
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/c3766059-55b3-40fe-ab6c-746a0732bf3a)

- Test Printing `Text` `Barcode` `QrCode` `Cut Papper`
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/366e1a2b-75ba-4367-9f10-ac891111f37f)

- Automatic open cash drawer 
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/assets/11941308/3d80eb77-30ec-465a-a0ab-95be98bc20bf)

# How to setup ESCPOS on your Electron project?
https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs/research-log-17052023-setupESCPOSonElectronReactBoilerplateWithThermalPrinter.md

# How to test this repo?
- `clone` this project
- cd into this repo > `npm install`
- install escpos lib
```
npm i escpos@3.0.0-alpha.6
npm i escpos-usb@3.0.0-alpha.4
npm i usb@1.9.2
```
- run app with `npm start`
- plug usb printer
- klik button test print
- printer will printout the receipt


# Research Logs
https://github.com/denitiawan/research-electron-react-boilerplate-printthermal/blob/main/research-logs.md






