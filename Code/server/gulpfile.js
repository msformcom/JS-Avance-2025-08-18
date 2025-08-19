// npm i gulp --save-dev
const gulp=require("gulp");
// npm i gulp-uglify --save-dev
const uglify=require("gulp-uglify");
// npm i gulp-typescript typescript --save-dev
const ts = require('gulp-typescript');

// definition d'une tache copie des html
gulp.task("html",()=>{
    // Aller chercher les fichiers html dans le dossier src
    return  gulp.src("./src/**/*.html")
    
    // les copier dans le dossier wwwwroot
    .pipe(gulp.dest("./wwwroot"));
});

gulp.task("js",()=>{
    // Source : les fichiers js
    return  gulp.src("./src/**/*.js")
    // minification + obfuscation
    .pipe(uglify())
    // écriture dans la destination
     .pipe(gulp.dest("./wwwroot"));
});

// Création d'un fichier tsconfig 
// npx tsc --init à la racine du projet => tsconfig.json


const tsProject=ts.createProject("tsconfig.json");
gulp.task("ts",()=>{
    // Source : les fichiers js
    
    return  gulp.src("./src/**/*.ts")
    // minification + obfuscation
    .pipe(tsProject())
    .pipe(uglify())
    // écriture dans la destination
     .pipe(gulp.dest("./wwwroot"));
});


gulp.task("default", gulp.parallel(["html","js","ts"]));
