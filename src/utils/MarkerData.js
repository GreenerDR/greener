export default function dataMarker() {
  //aqui deberia haber un codigo que retorna los valores de la base de datos.
  //array e objetos placeholders
  const marker = [
    {
      latitude: 18.490622,
      longitude: -69.958738,
      title: 'Jardin Botanico Nacional',
      description: 'Es un lugar muy bonito',
      IDTipo: 1,
    },

    {
      latitude: 18.487855,
      longitude: -69.962289,
      title: 'INTEC',
      description: 'Es un lugar muy estudioso',
      IDTipo: 2,
    },
    {
      latitude: 18.490069,
      longitude: -69.960718,
      title: 'Higuamo',
      description: 'Es un lugar muy redondo',
      IDTipo: 3,
    },
  ];
  return Promise.resolve(marker);
}
