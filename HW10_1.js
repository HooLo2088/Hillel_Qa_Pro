var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function validEmail(email) {
    var regex = /^[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*@(gmail.com|yahoo.com)$/;
    return regex.test(email);
}

var trustedEmails = arr.map(user => user.email).filter(email => validEmail(email));

console.log(trustedEmails);
