const Employee = require('../lib/Employee');

describe('Check if Employee has name, id, email', () => {
    it('Should be an Employee', () => {
        const employee = new Employee('Matt','1','matt@gmail.com');
      expect(employee.name).toBe('Matt');
      expect(employee.id).toBe('1');
      expect(employee.email).toBe('matt@gmail.com');
      expect(employee.getRole()).toBe('Employee');
    });

})