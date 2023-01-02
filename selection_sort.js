function selectionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  
  return numbers;
}
