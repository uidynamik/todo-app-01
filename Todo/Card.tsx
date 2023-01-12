import * as React from 'react';
import { Form } from '../Todo/Form';
import { Task } from '../Todo/Task';
import './todo.css';

export const Card = () => {
  return (
    <div className="card">
      <h1>Todos Today</h1>
      <Form />
      <Task text="Create video for Youtube" />
      <Task text="Join team meeting @ 10am" />
      <Task text="Finish FMT media website" />
      <Task text="Post content on twitter" />
      <Task text="Write a Blog Post" />
      <footer>
        <small>You have 5 pending tasks</small>
        <button> Clear All</button>
      </footer>
    </div>
  );
};
