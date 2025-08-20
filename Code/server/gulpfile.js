// npm i gulp --save-dev
const gulp=require("gulp");
// npm i gulp-uglify --save-dev
const uglify=require("gulp-uglify");
// npm i gulp-typescript typescript --save-dev
const ts = require('gulp-typescript');
// npm i gulp-imagemin --save-dev
//const imagemin =import("gulp-imagemin") ;

const dartSass =require( 'sass');
const newer =require( 'gulp-newer');
const gulpSass =require( 'gulp-sass');
const sharpResponsive =require( "gulp-sharp-responsive");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
// Va permettre d'ajouter des commentaires spéciaux aux fichiers js
// qui seront utilisés par l'interpreteur pour montrer le code source en debug
const sourcemaps=require("gulp-sourcemaps");

const destination="./wwwroot";
const source="./src";

const sass = gulpSass(dartSass);

// definition d'une tache copie des html
gulp.task("html",()=>{
    // Aller chercher les fichiers html dans le dossier src
    return  gulp.src(source+"/**/*.html")

    .pipe(newer(destination))
    //.pipe(replace(/src="(\w*).ts"/g,'src="$1.js"'))
    
    // les copier dans le dossier wwwwroot
    .pipe(gulp.dest(destination));
});

gulp.task("js",()=>{
    // Source : les fichiers js
    return  gulp.src(source+"/**/*.js")
        .pipe(newer(destination))
    // minification + obfuscation
    .pipe(uglify())
    
    // écriture dans la destination
     .pipe(gulp.dest(destination));
});

// Création d'un fichier tsconfig 
// npx tsc --init à la racine du projet => tsconfig.json


const tsProject=ts.createProject("tsconfig.json");
gulp.task("ts",()=>{
    // Source : les fichiers js
    
    return  gulp.src(source+"/**/*.ts")
        .pipe(newer(destination))
        // Ici je demande à sourcemaps de retenir le code source
        .pipe(sourcemaps.init())
    // minification + obfuscation
    .pipe(tsProject())
    .pipe(uglify())
     // Ici je demande à sourcemaps d'ecrire les commentaires mappant le code source au code généré
    .pipe(sourcemaps.write())
    // écriture dans la destination
     .pipe(gulp.dest(destination));
});


gulp.task("scss",()=>{
    // Source : les fichiers jpg
    
    return  gulp.src(source+"/**/*.scss")
        .pipe(newer(destination))
    // minification + obfuscation
     .pipe(sass().on('error', sass.logError))

    // écriture dans la destination
     .pipe(gulp.dest(destination));
});


gulp.task("images",()=>{
    // Source : les fichiers jpg
    
    return  gulp.src(source+"/**/*.jpg")
   
    // minification + obfuscation
     .pipe(sharpResponsive({
            formats: [
            { width: 640, rename: { suffix: "-sm" } },
            { width: 1024, rename: { suffix: "-lg" } },
            ]
        }))
        .on("error",console.log)

    // écriture dans la destination
     .pipe(gulp.dest(destination));
});

gulp.task("default", gulp.parallel(["html","js","ts","scss"]));

gulp.task("watch",()=>{
    return gulp.watch(source+"/**/*.*",
        gulp.parallel(["html","js","ts","scss"]));
    });

