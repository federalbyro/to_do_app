import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../FireBaseConfig'; // Firestore из конфига

// Функция для сохранения задач
export const saveTasks = async (taskWindows, user) => {
  if (user) {
    try {
      const docRef = doc(db, 'tasks', user.uid); // Документ по uid пользователя
      await setDoc(docRef, { taskWindows });
      console.log('Задачи успешно сохранены!');
    } catch (error) {
      console.error('Ошибка при сохранении задач:', error);
    }
  }
};

// Функция для загрузки задач
export const loadTasks = async (user) => {
  if (user) {
    try {
      const docRef = doc(db, 'tasks', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().taskWindows;
      } else {
        console.log('Задачи не найдены');
        return [];
      }
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
      return [];
    }
  }
};
