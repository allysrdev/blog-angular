export interface IMockData {
  id: string;
  photoCover: string;
  title: string;
  description: string;
}

export const mockData: IMockData[] = [
  {
    id: '1',
    photoCover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Cientistas descobrem café que nunca esfria',
    description:
      'Pesquisadores de uma universidade fictícia desenvolveram uma xícara capaz de manter o café sempre quente, usando nanotecnologia e energia solar.',
  },
  {
    id: '2',
    photoCover:
      'https://www.thinkmovemake.com/wp-content/uploads/2018/02/20180201-zapata-ezfly-testing-sky-segway-4-e1517489599127.jpg',
    title: 'Nova moda: patinetes voadores começam a ser vendidos',
    description:
      'Uma startup de tecnologia anunciou o lançamento do primeiro patinete capaz de levitar até 2 metros de altura, prometendo revolucionar o transporte urbano.',
  },
  {
    id: '3',
    photoCover:
      'https://cdn.awsli.com.br/2485/2485118/arquivos/cores-de-gatos-scaled.jpeg',
    title: 'Gatos agora podem traduzir seus miados em frases',
    description:
      "Um aplicativo experimental afirma conseguir converter miados de gatos em mensagens compreensíveis, permitindo que donos 'conversem' com seus pets.",
  },
  {
    id: '4',
    photoCover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Ilha misteriosa surge do nada no meio do oceano',
    description:
      'Pescadores relataram o aparecimento de uma ilha não mapeada. Geólogos acreditam que se trata de um fenômeno raro de movimentação tectônica.',
  },
];
