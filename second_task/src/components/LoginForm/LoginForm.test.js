import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import { validateEmail, validatePassword, validateForm } from '../../utils/validation';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test("checks email format", () =>{
  expect(validateEmail('user@example.com')).toBe(true);
})

test("check password format", () =>{
  expect(validatePassword("$$%Tgbshg_145")).toBe(true);
})