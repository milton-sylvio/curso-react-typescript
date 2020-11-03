const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

export default months;

// const months = (format: 'long' | 'short' = 'long'): string[] => {
//   const year = new Date().getFullYear(); // 2020
//   const monthList = [...Array(12).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//   const formatter = new Intl.DateTimeFormat('pt-BR', {
//     month: format
//   });

//   const monthName = (monthIndex: number) =>
//     formatter.format(new Date(year, monthIndex));

//   return monthList.map(monthName);
// }

// export default months;