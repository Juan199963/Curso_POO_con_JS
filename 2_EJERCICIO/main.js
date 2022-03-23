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


class Course{
    constructor({
        name,
        clases = []
    }){
        this.name = name;
        this.clases = clases;
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
    clases:[]
})

const cursoDATAVIZ = new Course({
    name:"Curso de DATAVIZ",
    clases:[]
})

const cursoHTML = new Course({
    name:"Curso de HTML",
    clases:[]
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


const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email:"juan@gmail.com",
    learningPaths : [
        escuelaDS,
        escuelaVideojuegos,
    ]

})

const miguelito = new Student({
    name: "Miguel",
    username: "migueldc",
    email:"juan@gmail.com",
    instagram:"miguelito_feliz",
    learningPaths : [
        escuelaWeb,
        escuelaVideojuegos,
    ]


})