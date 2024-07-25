// write code here
const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];

  const result = array.filter(item => {
    const month = new Date(item.birth).getMonth() + 1;
    return month === 6;
  });

  console.log(result);