function bubbleSort(numbers) {
  let flag = true;
  
  while (flag) {
    flag = false;
    
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        flag = true;
      }
    }
  }
  
  return numbers;
}
