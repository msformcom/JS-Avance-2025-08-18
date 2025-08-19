// npm i gulp --save-dev
const gulp=require("gulp");
// npm i gulp-uglify --save-dev
const uglify=require("gulp-uglify");

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

