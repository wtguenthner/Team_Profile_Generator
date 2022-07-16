import Employee from '../lib/Employee.js'

const empTest = new Employee("Taylor", 8, "wtguenthner@gmail.com")

test('checks the Employee class for the correct input', () => {
    expect(empTest.getName()).toBe("Taylor")
    expect(empTest.getId()).toBe(8)
    expect(empTest.getEmail()).toBe("wtguenthner@gmail.com")
  });