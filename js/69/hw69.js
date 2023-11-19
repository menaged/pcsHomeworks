// 'use strict';

function makeCompany(company, address, number) {
    return {
        _company: company,
        _address: address,
        _number: number,
        _employee: [],

        addEmployee: function (name, address, department) {
            this._employee.push(makeEmployee(name, address, department));
        },
        print: function () {
            console.log(`Company Name: ${this.company}\nEmployee:`);
            this._employee.forEach(e => e.print());
        }
    };
}
function makeEmployee(employee, department) {
    return {
        _employee: employee,
        _department: department,

        print: function () {
            console.log(`Employee Name: ${this._employee} Department: ${this._department}`);
        }
    };
}

const toyota = makeCompany('Toyota', '6565 Headquarters Drive Plano, TX 75024', '800-331-4331');
const honda = makeCompany('Honda', '1919 Torrance Boulevard, California', '800 999-1009');

toyota.addEmployee('Andy', '123 Brooklyn', 'Sales');
toyota.addEmployee('Constatine', '789 Philadelphia', 'Security');
console.log(toyota);
toyota.print();

honda.addEmployee('Boby', '456 Lakewood', 'Director');
console.log(honda);
honda.print();
