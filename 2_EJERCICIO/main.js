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

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email:"juan@gmail.com",

})

const miguelito = new Student({
    name: "Miguel",
    username: "migueldc",
    email:"juan@gmail.com",
    instagram:"miguelito_feliz",

})