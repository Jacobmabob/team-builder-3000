const Manager = require('../lib/Manager');

describe('Check if Manager has name, id, email, office number', () => {
    it('Should be a Manager', () => {
        const manager = new Manager('Matt','1','matt@gmail.com','123');
      expect(manager.name).toBe('Matt');
      expect(manager.id).toBe('1');
      expect(manager.email).toBe('matt@gmail.com');
      expect(manager.getRole()).toBe('Manager');
      expect(manager.officeNumber).toBe('123');
    });

})