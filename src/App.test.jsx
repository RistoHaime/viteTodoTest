import App from "./App";
import TodoTable from "./TodoTable";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("renders App component", () => {
  render(<App />);
  const header = screen.getByText(/My Todolist/i);
  expect(header).toBeInTheDocument();
});

test("renders todotable", () => {
    const row = [
        {desc: 'Go to coffee', date: '24.01.2023'}
    ]
    render(<TodoTable todos={row} />);
    const table =screen.getByRole('table');
    expect(table).toHaveTextContent(/Go to coffee/i);
});

test("addtodo", ()=>{
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, {target: {value: "Go to coffee"}});
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date,{target:{value:"29.01.2023"}});
    const button = screen.getByText("Add");
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent(/Go to coffee/i);
});

test("cleartodo", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, {target: {value: "Go to coffee"}});
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date,{target:{value:"29.01.2023"}});
    const button = screen.getByText("Add");
    fireEvent.click(button);
    fireEvent.change(desc, {target: {value: "Running"}});
    fireEvent.change(date,{target:{value:"13.02.2024"}});
    fireEvent.click(button);
    fireEvent.click(screen.getByText("Clear"));
   
    const table = screen.getByRole('table');
    expect(table).toHaveTextContent("")
})