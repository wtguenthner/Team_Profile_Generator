import Intern from '../lib/intern.js'

const empTest = new Intern("Taylor", 8, "wtguenthner@gmail.com", "Georgia Tech")

test('checks the Intern class for the correct input', () => {
    expect(empTest.getName()).toBe("Taylor")
    expect(empTest.getId()).toBe(8)
    expect(empTest.getEmail()).toBe("wtguenthner@gmail.com")
    expect(empTest.getRole()).toBe('Intern')
    expect(empTest.getSchool()).toBe('Georgia Tech')
  });