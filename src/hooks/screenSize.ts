import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(Dimensions.get('window'));

  const handleScreenSizeChange = () => {
    setScreenSize(Dimensions.get('window'));
  };

  useEffect(() => {
    const event = Dimensions.addEventListener('change', handleScreenSizeChange);

    return () => {
      event.remove()
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
