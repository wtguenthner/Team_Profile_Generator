import Engineer from '../lib/engineer.js'

const empTest = new Engineer("Taylor", 8, "wtguenthner@gmail.com", "wtguenthner")

test('checks the Engineer class for the correct input', () => {
    expect(empTest.getName()).toBe("Taylor")
    expect(empTest.getId()).toBe(8)
    expect(empTest.getEmail()).toBe("wtguenthner@gmail.com")
    expect(empTest.getRole()).toBe('Engineer')
    expect(empTest.getGitHub()).toBe('wtguenthner')
  });