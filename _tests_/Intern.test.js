const Intern = require('../lib/Intern');

describe('Check if Intern has name, id, email, school', () => {
    it('Should be an Intern', () => {
        const intern = new Intern('Matt','1','matt@gmail.com','GSU');
      expect(intern.name).toBe('Matt');
      expect(intern.id).toBe('1');
      expect(intern.email).toBe('matt@gmail.com');
      expect(intern.getRole()).toBe('Intern');
      expect(intern.school).toBe('GSU');
    });

})