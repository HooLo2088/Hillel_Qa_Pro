function theory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {

        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток не парних до парних: ${oddPercentage.toFixed(2)}%`);

    if (Math.abs(evenPercentage - 50) < 5 || Math.abs(oddPercentage - 50) < 5) {
        console.log("Відсоткове співвідношення близьке до 50/50.");
    } else {
        console.log("Відсоткове співвідношення відхиляється від 50/50.");
    }
}

theory(10);
