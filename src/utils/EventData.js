export default function dataEvent() {
    //aqui deberia haber un codigo que retorna los valores de la base de datos.
    //array e objetos placeholders
    const EventData = [
        {
            Siembra: [],
            Limpiezas: [
                {
                    IDEvento: "001",
                    NombreEvento: "Limpieza de costas Playa Guibia",
                    Hora: "10:00 A.M.",
                    Fecha: "2020-09-24",
                    Lugar: "Playa Guibia",
                    Descripcion: "Una recogida de basura en la Playa Guibia",
                    RutaImagen: "./assets/greenerlogo.jpg"
                },
                {
                    IDEvento: "002",
                    NombreEvento: "Limpieza de costas Juan Dolio",
                    Hora: "10:00 A.M.",
                    Fecha: "2020-11-10",
                    Lugar: "Playa Juan Dolio",
                    Descripcion: "Una recogida de basura en la Playa Juan Dolio",
                    RutaImagen: "./assets/greenerlogo.jpg"
                }
            ],
            Reciclaje: []
        }
    ];
    return Promise.resolve(EventData);
}
