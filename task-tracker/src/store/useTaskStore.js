import {create} from 'zustand';
import useMessageStore from './useMessageStore';

const useTaskStore = create ((set) => ({
  tasks: [],
  addTask: (task) => {
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      return { tasks: sortTasks(updatedTasks) };
    });
    useMessageStore.getState().setMessage('Task added successfully', 'success');
  },
  removeTask: (id) => {
    set((state) => ({
        tasks: sortTasks(state.tasks.filter(task => task.id !== id)),
      }));
      useMessageStore.getState().setMessage('Task removed successfully', 'success');
  },
  toggleTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      return { tasks: sortTasks(updatedTasks) };
    });
    useMessageStore.getState().setMessage('Task status updated', 'success');
  },
  fetchTasks: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      set({ tasks: sortTasks(data.slice(0, 5)) });
      useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
    } catch (error) {
      console.error('Error fetching tasks:', error);
      useMessageStore.getState().setMessage('Error fetching tasks', 'error');
    }
  },
}));

const sortTasks = (tasks) => {
    return tasks.sort((a, b) => a.completed - b.completed);
  };
  
export default useTaskStore;