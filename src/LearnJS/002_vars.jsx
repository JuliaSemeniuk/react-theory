import React from 'react'

let admin, name;
name = 'Jhonn';
admin = name;

function showAdminsName() {
    console.log(`Hello, ${admin}`); // Чому в консолі результат виклику функції відоражається два рази?
};

export default class Vars extends React.Component {
    render() {
        let adminsName = showAdminsName();
        return(
            <div>
                {adminsName}
            </div>
        );
    };
};