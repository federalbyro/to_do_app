import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTaskText, onChangeTaskStatus, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onUpdateTaskText={onUpdateTaskText}
          onChangeTaskStatus={onChangeTaskStatus}
          onDeleteTask={onDeleteTask}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
