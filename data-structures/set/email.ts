 /* 

 Desarrolla una funcion que procese una lista de correos electronicos y elimine 
 cualquier duplicado para evitar que se envien mensajes mutiples a la misma direccion.

 La funcion debe devolver una lista de objeto, donde cada objeto contiene un correo 
 electronico unico y un mensaje personalizado dirigido al destinatario.

 Cada mensaje debe dirigirse al usuario segun la primera parte de su correo electronico 
 (la seccion antes del @)

 Por ejemplo si el correo es ana.smith@gmai.com el mensaje deberia comenzar con 'Hola Ana Smith'

 Esta funcionalidad es utili en aplicaciones donde es necesario envitar mensajes personalizados 
 a una lista de contactos, asegurando que cada persona reciba solo un mensaje sin duplicacion.

 Lista de correos electronicos:
 
 [
 'ana.smith@gmail.com
 'juan.perez@yahoo.com
 'maria.garcia@hotmail.com
 'ana.smith@gmail.com'
 'carlos.lopez@gmail.com'
 'maria.garcia@hotmail.com'
 ' laura.martinez@outlook.com' 
]
[
{email: ana.smith@hotmail.com, message : "Hello Ana Smith. Thank you for being part of our community"}
{email: juan.perez@yahoo.com, message : "Hello Juan Perez. Thank you for being part of our community"}
{email: maria.garcia@hotmail.comm, message : "Hello Maria Garcia. Thank you for being part of our community"}
{email: ana.smith@hotmail.com, message : "Hello Ana Smith. Thank you for being part of our community"}
{email: carlos.lopez@gmail.com, message : "Hello Carlos Lopez. Thank you for being part of our community"}
{email: maria.garcia@hotmail.com, message : "Hello Maria Garcia. Thank you for being part of our community"}
{email: laura.martinez@outlook.com, message : "Hello Laura Martinez. Thank you for being part of our community"}
]
*/



const getFormattedName = (username: string): string => {
    const names = username.split('.'); // Separa "juan.perez" → ["juan", "perez"]

    return names.reduce((text, word, i) => {
        const capitalizeFirstLetter = word[0].toUpperCase();
        const wordsAfterFirstLetter = word.slice(1);
        const name = capitalizeFirstLetter + wordsAfterFirstLetter;
        const space = i < names.length - 1 ? ' ' : '';
        return text + name + space;
    }, '');
};

const emails = [
    "ana.smith@gmail.com",
    "juan.perez@yahoo.com",
    "maria.garcia@hotmail.com",
    "ana.smith@gmail.com",
    "carlos.lopez@gmail.com",
    "maria.garcia@hotmail.com",
    "laura.martinez@outlook.com"
];

const sortedEmails = (emails: string[]) => {
    const uniqueEmails = [...new Set(emails)];

    return uniqueEmails.map(email => {
        const [username, domain] = email.split('@');
        const message = `Hello ${getFormattedName(username)}. Thank you for being part of our community.`;
        return {
            email,
            message
        };
    });
};

console.log(sortedEmails(emails));
