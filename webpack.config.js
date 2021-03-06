var path = require('path');
 
module.exports = {
    entry: "./src/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "app.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "style-loader!css-loader"   // определяем загрузчик
                
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "img-loader"   // определяем загрузчик
                
            }
        ]
    }
}