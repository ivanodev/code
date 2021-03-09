interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
    //techs: string[]; quando o array for tipo unico
}

//export default function createUser(name: string, email: string, password: string) {
//export default function createUser({ name: string, email: string, password: string }) { // com desestruturaçao

export default function createUser({ name = '', email, password, techs } : CreateUserData) { // com desestruturaçao do objeto

    const user = {
        name,
        email,
        password,
        techs,
    }

    return user;

}