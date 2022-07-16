import Manager from '../lib/manager.js'

const empTest = new Manager("Taylor", 8, "wtguenthner@gmail.com", 12)

test('checks the Manager class for the correct input', () => {
    expect(empTest.getName()).toBe("Taylor")
    expect(empTest.getId()).toBe(8)
    expect(empTest.getEmail()).toBe("wtguenthner@gmail.com")
    expect(empTest.getRole()).toBe('Manager')
    expect(empTest.getOfficeNumber()).toBe(12)
  });