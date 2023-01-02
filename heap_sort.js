function heapify(numbers, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < n && numbers[left] > numbers[largest]) {
    largest = left;
  }
  
  if (right < n && numbers[right] > numbers[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    let temp = numbers[i];
    numbers[i] = numbers[largest];
    numbers[largest] = temp;
    heapify(numbers, n, largest);
  }
}

function heapSort(numbers) {
  for (let i = numbers.length / 2 - 1; i >= 0; i--) {
    heapify(numbers, numbers.length, i);
  }
  
  for (let i = numbers.length - 1; i > 0; i--) {
    let temp = numbers[0];
    numbers[0] = numbers[i];
    numbers[i] = temp;
    heapify(numbers, i, 0);
  }
  
  return numbers;
}
