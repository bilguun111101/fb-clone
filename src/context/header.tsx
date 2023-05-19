import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Animated } from "react-native";

const HeaderContext = createContext<any>(null);

interface Value {
  Change: () => void;
  remove: boolean;
  Height: (pos: any) => any;
  AnimatedHeaderValue: any;
}

export const HeaderProvider = ({ children }: PropsWithChildren) => {
  const [remove, setRemove] = useState<boolean>(false);
  const AnimatedHeaderValue = useRef(new Animated.Value(0)).current;
  const Change = useCallback(() => {
    setRemove(!remove);
  }, [remove]);
  const Height = useCallback(() => {
    return AnimatedHeaderValue.interpolate({
      inputRange: [0, 50],
      outputRange: [50, 0],
      extrapolate: "clamp",
    });
  }, [AnimatedHeaderValue]);
  const value: Value = { Change, remove, AnimatedHeaderValue, Height };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
