// const juan1 ={
//     name: "JuanDC",
//     username: "juandc",
//     points: 100,
//     socialmedia: {
//         twitter: "fjuandc",
//         facebook: "fjuandc",
//         instagram: undefined,
//     },
//     approvechedCourses:[
//         "Curso de HTML",
//         "Curso de CSS",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses:[
//                 "Curso de HTML",
//                 "Curso de CSS",
//                 "Curso de Responsive Design",
//             ]
//         },
//         {
//             name:"Escuela de Videojuegos",
//             courses:[
//                 "Curso de Unreal Engine",
//                 "Curso de Unity",
//             ]
//         }
//     ]
// };


// const miguelito ={
//     name: "Miguelito",
//     username: "miguelitofeliz",
//     points: 100,
//     socialmedia: {
//         twitter: "miguelitofeliz",
//         facebook: "miguelitofeliz",
//         instagram: undefined,
//     },
//     approvechedCourses:[
//         "Curso de DATAVIZ",
//         "Curso de PYTHON",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses:[
//                 "Curso de HTML",
//                 "Curso de CSS",
//                 "Curso de Responsive Design",
//             ]
//         },
//         {
//             name:"Escuela de DataScience",
//             courses:[
//                 "Curso de DATAVIZ",
//                 "Curso de PYTHON",
//                 "Curso de Tableau",
//             ]
//         }
//     ]
// };


function videoPlay(id){
    const url_secreta = 'https://platziultrasecreto.com/'+id;
    console.log("Se esta reproduciendo desdela url" + url_secreta);
}

function videoStop(id){
    const url_secreta = 'https://platziultrasecreto.com/'+id;
    console.log("Pausamos la url: " + url_secreta);
}



class Platziclass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;

    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialmedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}


class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos gratis.");
        }

    }

}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos en español.");
        }

    }

}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

}

class Course{
    constructor({
        name,
        clases = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if (nuevoNombrecito === "Curso Malito de Programacion Basica"){
            console.error('Wey no hagas eso xd')
        }else{
            this._name = nuevoNombrecito;
        }
    }
}
class LearningPath{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
};

const cursoProgBasica = new Course({
    name:"Curso de Programacion Basica",
    clases:[],
    isFree:true,
})

cursoProgBasica.name


const cursoDATAVIZ = new Course({
    name:"Curso de DATAVIZ",
    clases:[]
})

const cursoHTML = new Course({
    name:"Curso de HTML",
    clases:[],
    lang:"english",
})

const cursoCSS = new Course({
    name:"Curso de CSS",
    clases:[]
})


const escuelaWeb = new LearningPath({
    name:"Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoHTML,
        cursoCSS,
    ]
});



const escuelaDS = new LearningPath({
    name:"Escuela de DS",
    courses: [
        cursoProgBasica,
        cursoDATAVIZ,
        "Curso de Power BI",
    ]
});

const escuelaVideojuegos = new LearningPath({
    name:"Escuela de Desarrollo Web",
    courses: [
        "Curso de Programacion Basica",
        "Curso de Unity",
        "Curso de Unreal",
    ]
});


const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email:"juan@gmail.com",
    learningPaths : [
        escuelaDS,
        escuelaVideojuegos,
    ]

})

const miguelito = new BasicStudent({
    name: "Miguel",
    username: "migueldc",
    email:"juan@gmail.com",
    instagram:"miguelito_feliz",
    learningPaths : [
        escuelaWeb,
        escuelaVideojuegos,
    ]


})