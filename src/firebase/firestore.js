import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig'; // Firestore из конфига
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '../../FireBaseConfig';
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

/**
 * Функция для сохранения фотографии пользователя в Firebase Storage и обновления её URL в Firestore.
* @param {string} uid - Уникальный идентификатор пользователя.
 * @param {string} uri - URI выбранной фотографии.
 */
export const saveUserPhoto = async (uid, uri) => {
  try {
    // Конвертируем URI в Blob
    const response = await fetch(uri);
    const blob = await response.blob();
    // Создаём ссылку на место хранения фотографии в Firebase Storage
    const storageRef = ref(storage, `users/${uid}/photo.jpg`);
    // Загружаем файл в Firebase Storage
    await uploadBytes(storageRef, blob);
    // Получаем URL загруженной фотографии
    const photoURL = await getDownloadURL(storageRef);
    // Обновляем документ пользователя в Firestore с новым photoURL
    await setDoc(
      doc(db, "users", uid),
      { photoURL },
      { merge: true } // Используем merge, чтобы не перезаписывать остальные поля
    );
    console.log("Фотография успешно сохранена:", photoURL);
  } catch (error) {
    console.error("Ошибка при сохранении фото пользователя:", error);
  }
};


// Загрузка данных пользователя
export const loadUserPhoto = async (userId) => {
  try {
    const userDoc = doc(db, 'users', userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data().photoURL;
    } else {
      console.log('Фото пользователя не найдено');
      return null;
    }
  } catch (error) {
    console.error('Ошибка при загрузке фото пользователя:', error);
    return null;
  }
};



