import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type MoodListContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleMoodSelect: (mood: MoodOptionType) => void;
};

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const dataKey = 'data-key';

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    const processedData = JSON.stringify(appData);
    await AsyncStorage.setItem(dataKey, processedData);
  } catch (error) {
    console.error(error);
  }
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

const MoodListContext = createContext<MoodListContextType>({
  moodList: [],
  handleMoodSelect: () => {},
});

export const MoodListProvider: React.FC = ({
  children,
}: React.EmbedHTMLAttributes<any>) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const handleMoodSelect = useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, { mood, timestamp: Date.now() }];
      setAppData({ moodList: newValue });
      return newValue;
    });
  }, []);

  const getDataFromStorage = async () => {
    const data = await getAppData();

    if (data) {
      setMoodList(data.moodList);
    }
  };

  return (
    <MoodListContext.Provider value={{ moodList, handleMoodSelect }}>
      {children}
    </MoodListContext.Provider>
  );
};

export const useMoodListContext = () => useContext(MoodListContext);
