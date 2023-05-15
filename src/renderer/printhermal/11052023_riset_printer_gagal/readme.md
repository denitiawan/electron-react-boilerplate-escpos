# -------------
# 12-05-2023 00:00 s/d 03:45
# -------------
# -- escpos ---------------
# escpos ^2.4.11 on nexpos 2019
- escpos last version di 3.0.0-alpha.6 
- url doc : https://www.npmjs.com/package/escpos
- url repo github : https://github.com/song940/node-escpos
- url issue escpos on github : https://github.com/song940/node-escpos/issues 
- how to install : npm i escpos --save
- try to create service for printing using printthermal (small)


# -- electron print ---------------
 npm install --save electron-print

 
# install lib
npm install --save stream-browserify
npm i path
npm i stream
npm i zlib


# resolver error
.eslintrc.js
   settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),

        // solving error when npm start   
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib'),  

       }  




# xml-escpos-helper -------------
https://medium.com/till-engineering/receipt-printing-with-esc-pos-a-javascript-cross-platform-library-7110d7f7a1db

 npm install @tillpos/xml-escpos-helper --save



 # electron-pos-printer --------
 https://github.com/Hubertformin/electron-pos-printer/blob/master/README.md

 npm install electron-pos-printer

 