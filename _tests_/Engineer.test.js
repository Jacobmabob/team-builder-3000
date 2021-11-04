const Engineer = require('../lib/Engineer');

describe('Check if Engineer has name, id, email, github profile', () => {
    it('Should be an Engineer', () => {
        const engineer = new Engineer('Matt','1','matt@gmail.com','pizza');
      expect(engineer.name).toBe('Matt');
      expect(engineer.id).toBe('1');
      expect(engineer.email).toBe('matt@gmail.com');
      expect(engineer.getRole()).toBe('Engineer');
      expect(engineer.github).toBe('pizza');
    });

})