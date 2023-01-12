import * as React from 'react';
import { Trash } from '../Icons';

interface TaskProps {
  text: string;
}
export const Task = ({ text }: TaskProps) => (
  <div className="task">
    <div className="text">{text}</div>
    <button>
      <Trash />
    </button>
  </div>
);
