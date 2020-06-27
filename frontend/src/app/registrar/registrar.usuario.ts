export class Usuario{
    constructor(
        public cedula: number,
        public nombre: string,
        public apellido: string,
        public fehcaNacimiento: Date,
        public edad: number,
        public sexo: string,
        public telefono: string,
        public email: string,
        public contrasena: string,
        public repetirContrasena: string
    ) { }
}