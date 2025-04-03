(function () {

    (function () {
        document.getElementById('temperature').addEventListener('input', function () {
            const celsius = parseFloat(this.value);
            if (!isNaN(celsius)) {
                const fahrenheit = Math.round(celsius * (9 / 5) + 32);
                document.getElementById('name').value = fahrenheit;
            } else {
                document.getElementById('name').value = '';
            }
        });

        document.getElementById('name').addEventListener('input', function () {
            const fahrenheit = parseFloat(this.value);
            if (!isNaN(fahrenheit)) {
                const celsius = Math.round((fahrenheit - 32) * (5 / 9));
                document.getElementById('temperature').value = celsius;
            } else {
                document.getElementById('temperature').value = '';
            }
        });
    }());

    // const celsius = 25;
    // const fahrenheit = celsius * (9 / 5) + 32;

    class Person {
        constructor(first, last) {
            this.first = first;
            this.last = last;
        }
        print(){
            console.log(`${this.first} ${this.last}`);
        }
    }

    // console.log(fahrenheit);
    const p = new Person('Joe Biden');
    p.print();



}());